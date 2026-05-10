// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  
  // Nitro engine configuration for Cloudflare Pages
  nitro: {
    preset: 'cloudflare-pages'
  },

  // Supabase module configuration
  supabase: {
    redirect: false // Disable redirect for public demo
  },

  // Ensure Nuxt looks for components in the 'app' directory if it exists, 
  // but standard Nuxt 3 expects pages in 'pages/'
  // Since we have an 'app/' directory, let's make sure it doesn't conflict.
})
