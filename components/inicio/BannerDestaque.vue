<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner">
        <section class="hero is-transparent is-medium">
          <!-- Hero header: will stick at the top -->
          <div class="hero-head">
          </div>
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="destaque container has-text-centered">
              <h1 class="title is-3" data-aos="zoom-in" data-aos-once="true">
                {{ titulos[0] }}
              </h1>
              <h1 class="title is-4" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-once="true">
                {{ titulos[1] }}
              </h1>
              <h2 class="subtitle is-6" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" data-aos-once="true">
                {{ titulos[2] }}
              </h2>
              <div class="has-text-centered">
                <a :href="botaoDestaque.link" data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="1200" class="inscricaobtn button is-outlined is-primary is-inverted is-large" data-aos-once="true"> {{ botaoDestaque.texto }}</a>
              </div>
            </div>
          </div>
          <div class="hero-footer">
            <div class="realizacao container has-text-centered">
              <div class="logo">
                <img :src="require('~assets/images/logo.png')">
                <img :src="require('~assets/images/cobract.png')">
              </div>
            </div>
          </div>
        </section>
        <div class="backgroundslider" :style="{ 'background-image': 'url(' + banner + ')' }"></div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titulos: ['XVI Conferência Latino Americana de Comunidades Terapêuticas', 'III Conferência Brasileira de Comunidades Terapêuticas', '07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP'],
      botaoDestaque: {
        texto: 'Quero participar',
        link: '#inscricao'
      },
      banners: [require('~assets/images/banners/banner-destaque-clact-1.jpg'), require('~assets/images/banners/banner-destaque-clact-2.jpg'), require('~assets/images/banners/banner-destaque-clact-3.jpg')],
      swiperOption: {
        autoplay: 10000,
        loop: true,
        effect: 'fade',
        setWrapperSize: true,
        parallax: true,
        slideToClickedSlide: false,
        paginationClickable: false,
        simulateTouch: false
      }
    }
  }
}
</script>

<style>
.hero{
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
}
.backgroundslider{
  width: 100vw;
  height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 100%;
}
.hero.is-medium .hero-body{
  padding-bottom: 3rem !important;
}
.inscricaobtn{
  margin: 1rem 0;
}
.destaque .title,
.destaque .subtitle{
  color: whitesmoke;
}
.destaque,
.realizacao {
  padding: 3.5em 0 0;
}
@media screen and (max-width: 960px){
  .hero-body{
    padding-top: 9rem !important;
  }
  .realizacao{
    display: none;
  }
}
.destaque .logo {
  margin: 1em 0;
}

.destaque .title:not(:last-child),
.subtitle:not(:last-child) {
  margin-bottom: 0.5rem;
}

.destaque .title:not(.is-spaced)+.subtitle {
  margin-top: 0rem;
}

.destaque img+img {
  margin: 0 1em;
}
</style>
