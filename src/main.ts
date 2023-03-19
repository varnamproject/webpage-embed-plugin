import embed from "./plugin";

import { VarnamOptions } from "./common";

/**
 * Initializes the Vue app and mounts it in the proper place.
 *
 * @param elem DOM element instance to mount the plugin into
 */
function plugVarnam(elem: Element, options: VarnamOptions) {
  return embed(elem, options);
}

(window as any).plugVarnam = plugVarnam;
