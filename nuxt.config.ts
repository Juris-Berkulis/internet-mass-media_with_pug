// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: [
    '~/assets/styles/main.scss',
  ],
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Internet mass media with Pug',
      meta: [
        {
          name: 'description',
          content: 'Test app for mass media',
        },
        {
          name: 'keywords',
          content: 'Internet, mass, media',
        },
      ],
    },
  },
});
