
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/vue-the-mask.js', mode: 'client' },
    // { src: '~/plugins/swiper.js', mode: 'client' }
  ],
  css: [
    "~/assets/sass/style.scss",
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation'
  ],
})
