import Tribute from "webime";
import "webime/tribute.css";

import { VarnamOptions, VARNAM_API_URL } from "../common";

interface AbortControllerMap {
  [inputWord: string]: AbortController;
}

interface CommittedSuggestionsMap {
  [inputWord: string]: string[];
}

function embed(inputElem: Element, options: VarnamOptions) {
  let tribute,
    currentSugs: string[] = [];

  const committedSugs: CommittedSuggestionsMap = {};
  const fetchControllers: AbortControllerMap = {};

  function transliterate(inputWord: string) {
    return new Promise((resolve) => {
      let suggestions = [];
      const inputWordEncoded = encodeURIComponent(inputWord);

      fetchControllers[inputWordEncoded] = new AbortController();

      fetch(
        new URL(`/tl/${options.langCode}/${inputWordEncoded}`, VARNAM_API_URL),
        {
          signal: fetchControllers[inputWordEncoded].signal,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          suggestions = data.result;
          resolve(suggestions);

          delete fetchControllers[inputWordEncoded];
        });
    });
  }

  function init() {
    tribute = new Tribute({
      values: (text, cb) => {
        if (committedSugs[text]) {
          cb(committedSugs[text]);
        } else {
          transliterate(text).then((sugs) => {
            if (!sugs) return;
            currentSugs = [];
            for (let i = 0; i < sugs.length; i++) {
              const retval = {
                key: text,
                value: sugs[i].trim(),
              };
              currentSugs.push(retval);
            }
            cb(currentSugs);
          });
        }
      },

      menuItemTemplate: (item) => {
        return "<span>" + item.original.value + "</span>";
      },
    });

    tribute.attach(inputElem);

    inputElem.addEventListener("tribute-replaced", function (e) {
      committedSugs[e.detail.item.original.value] = currentSugs;
    });
  }

  init();
}

export default embed;
