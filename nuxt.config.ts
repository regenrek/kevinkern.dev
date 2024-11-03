// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/plausible",
    "nuxt-og-image",
  ],

  fonts: {
    families: [
      {
        name: "IBM Plex Mono",
        provider: "google",
        weights: [400, 500, 600],
      },
    ],
  },

  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ["localhost"],
  },

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-05-14",

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap",
        },
      ],
    },
  },
});
