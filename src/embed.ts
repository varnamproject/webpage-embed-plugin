import WebIME from "webime";

import "webime/dist/style.css";
import "./extra.css";

import { DEFAULT_OPTIONS, VarnamOptions } from "./common";

interface AbortControllerMap {
  [inputWord: string]: AbortController;
}

interface CommittedSuggestionsMap {
  [inputWord: string]: string[];
}

interface SuggestionEntry {
  key: string;
  value: string;
}

function embed(inputElem: Element, customOptions: VarnamOptions) {
  let webIME,
    currentSugs: SuggestionEntry[] = [];

  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  const committedSugs: CommittedSuggestionsMap = {};
  const fetchControllers: AbortControllerMap = {};

  function transliterate(inputWord: string) {
    return new Promise((resolve) => {
      let suggestions = [];
      const inputWordEncoded = encodeURIComponent(inputWord);

      fetchControllers[inputWordEncoded] = new AbortController();

      fetch(
        new URL(`/tl/${options.schemeID}/${inputWordEncoded}`, options.apiURL),
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
    webIME = new WebIME({
      values: (text, cb) => {
        if (committedSugs[text]) {
          cb(committedSugs[text]);
        } else {
          transliterate(text).then((sugs) => {
            if (!sugs) return;
            currentSugs = [];
            for (let i = 0; i < sugs.length; i++) {
              const suggestion: SuggestionEntry = {
                key: text,
                value: sugs[i].trim(),
              };
              currentSugs.push(suggestion);
            }
            cb(currentSugs);
          });
        }
      },

      menuItemTemplate: (item) => {
        return "<span>" + (item.original as SuggestionEntry).value + "</span>";
      },
    });

    webIME.attach(inputElem);

    inputElem.addEventListener("webIME-replaced", function (e) {
      committedSugs[e.detail.item.original.value] = currentSugs;
    });
  }

  function unplug() {
    webIME.detach(inputElem);
  }

  init();

  return {
    unplug,
  };
}

export default embed;
