// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {},

  app: {
    layoutTransition: false,
    pageTransition: false,
  },

  css: [
    'destyle.css',
    '~/assets/scss/common/index.scss',
  ],

  imports: {
    dirs: [
      'composables/**/index.{ts,js,mjs,mts}',
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
  ],

  nitro: {
    storage: {
      redis: {
        driver: 'redis',
      },
    },
  },

  runtimeConfig: {
    public: {
      web3Message: '',
      web3Password: '',
    },
  },

  srcDir: 'app/',

  typescript: {
    strict: true,
    typeCheck: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
@use "~/assets/scss/mixin/index.scss" as *;
@use "~/assets/scss/variable/index.scss" as *;
          `,
        },
      },
    },
  },
});
