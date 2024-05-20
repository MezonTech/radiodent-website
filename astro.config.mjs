import { defineConfig } from 'astro/config';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  base: "/",
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
  ],
});
