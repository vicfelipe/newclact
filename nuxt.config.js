module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - XVI Conferência Nacional de Comunidades Terapêuticas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=1, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' },
      { name: 'description', content: 'CLACT, BRASIL, CLACT BRASIL, CLACTBRASIL, XVI, Conferência, Latino, Americana, de, Comunidades, Terapêutica, FEBRACT, CLACT, Expo, Dom, Pedro' },
      { name: 'description', content: 'index, nofollow' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: '3jFzrjw6MMy6nQXWX4IX71ZsRR3L-xUbvoSjFhUyyNA' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'assets/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: 'assets/images/favicon-16x16.png' },
      { rel: 'manifest', href: 'assets/images/manifest.json' },
      { rel: 'mask-icon', href: 'assets/images/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    build: {
      vendor: ['aos/dist/aos.js']
    }
  },
  plugins: [
    '~plugins/swiper.js',
    '~plugins/font-awesome.js',
    '~plugins/buefy.js',
    '~plugins/vue-animate.js',
    '~plugins/aos.js',
    '~plugins/vuefire.js',
    '~plugins/ga.js'
  ],
  // some nuxt config...
  css: [
    'swiper/dist/css/swiper.css',
    'vue2-animate/dist/vue2-animate.min.css',
    'aos/dist/aos.css',
    'assets/css/app.scss'
  ],
  router: {
    linkActiveClass: 'active-link',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
