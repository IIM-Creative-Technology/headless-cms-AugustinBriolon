export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4'
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', href: '/assets/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicon/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Rubik:wght@300;500&display=swap' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  }
})