// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/supabase'
  ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  }
})
