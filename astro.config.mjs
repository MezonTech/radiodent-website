import { defineConfig } from "astro/config";
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // site: "https://mezontech.github.io",
  site: "http://localhost:4321",
  // base: "/radiodent-website/",
  base: "/",
  integrations: [
    robotsTxt(),
    sitemap(),
    swup({
      theme: "slide",
      animationClass: "transition-",
      containers: ["main"],
      cache: true,
      preload: true,
      accessibility: true,
      forms: false,
      morph: false,
      parallel: false,
      progress: false,
      routes: false,
      smoothScrolling: true,
      updateBodyClass: false,
      updateHead: true,
      reloadScripts: true,
      debug: false,
      loadOnIdle: true,
      globalInstance: false,
    }),
  ],
});
