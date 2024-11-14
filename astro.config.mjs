import { defineConfig } from "astro/config";
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: "https://github.com/MezonTech",
  site: "http://localhost:4321",
  base: "/radiodent-website",
  integrations: [
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
    sitemap(),
    robotsTxt(),
  ],
});
