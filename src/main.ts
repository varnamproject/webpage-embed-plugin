import { createApp, App } from "vue";

import HelloWorld from "./components/HelloWorld.vue";

/**
 * Initializes the Vue app and mounts it in the proper place.
 *
 * @param el Either a string (CSS selector) or a DOM element instance to mount the app into
 *
 * @returns The Vue app which is initialized and mounted
 */
export function initialize(el: string | Element): App {
  // Sets the 'Example.vue' component as the root component
  const app = createApp(HelloWorld);

  // Mounts the root component into the given
  app.mount(el);

  return app;
}
