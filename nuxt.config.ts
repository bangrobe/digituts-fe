// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@sfxcode/nuxt-primevue",'nuxt-icon', '@nuxtjs/apollo'],
  css: [
    "primevue/resources/themes/saga-orange/theme.css",
    "primevue/resources/primevue.css",
  ],
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: process.env.API_URL + '/graphql'
      }
    },
  },
  build: {
    transpile: ["primevue"],
  },
  primevue: {
    config: {
      ripple: true
    }
  },

  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    theme: {
      colors: {
        primary: "#f3c300",
      },
    },
    attributify: true, // enabled `@unocss/preset-attributify`
    preflight: false,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        "btn",
        "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
      ],
    ],
  },
  runtimeConfig: {
    public: {
        apiUrl: process.env.API_URL,
        siteUrl: process.env.SITE_URL,
        siteName: 'A awesome blog',
        siteDescription: 'A blog using Nuxt 3',
        language: 'en'
    }
}
});
