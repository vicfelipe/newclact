<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="palestrante in palestrantes" :key="palestrante">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="palestrante.fotourl" :alt="palestrante.nome">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <h1 class="title is-6 has-text-centered">{{ palestrante.nome }}</h1>
                <h2 class="subtitle is-6 has-text-centered">{{ palestrante.ocupacao }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
import {db} from '~components/database/Config'

export default {
  data () {
    return {
      titulos: ['XVI Conferência Latino Americana de Comunidades Terapêuticas', 'III Conferência Brasileira de Comunidades Terapêuticas', '07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP'],
      botaoDestaque: {
        texto: 'Quero participar',
        link: '#inscricao'
      },
      swiperOption: {
        notNextTick: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: 5000,
        grabCursor: true,
        setWrapperSize: true,
        observeParents: true,
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  firebase: {
    palestrantes: {
      source: db.ref('palestrantes'),
      cancelCallback (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
  .palestrante-home .swiper-container{
    margin-top: 4rem;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPgogIDxnPgogICAgPHBhdGggZD0ibTQwLjQsMTIxLjNjLTAuOCwwLjgtMS44LDEuMi0yLjksMS4ycy0yLjEtMC40LTIuOS0xLjJjLTEuNi0xLjYtMS42LTQuMiAwLTUuOGw1MS01MS01MS01MWMtMS42LTEuNi0xLjYtNC4yIDAtNS44IDEuNi0xLjYgNC4yLTEuNiA1LjgsMGw1My45LDUzLjljMS42LDEuNiAxLjYsNC4yIDAsNS44bC01My45LDUzLjl6IiBmaWxsPSIjMDA2ODM3Ii8+CiAgPC9nPgo8L3N2Zz4K);
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPgogIDxnPgogICAgPHBhdGggZD0ibTQwLjQsMTIxLjNjLTAuOCwwLjgtMS44LDEuMi0yLjksMS4ycy0yLjEtMC40LTIuOS0xLjJjLTEuNi0xLjYtMS42LTQuMiAwLTUuOGw1MS01MS01MS01MWMtMS42LTEuNi0xLjYtNC4yIDAtNS44IDEuNi0xLjYgNC4yLTEuNiA1LjgsMGw1My45LDUzLjljMS42LDEuNiAxLjYsNC4yIDAsNS44bC01My45LDUzLjl6IiBmaWxsPSIjMDA2ODM3Ii8+CiAgPC9nPgo8L3N2Zz4K);
  }
  .swiper-scrollbar-drag{
    background: #006837;
  }
  .swiper-pagination-bullet-active{
    background: #4CAF50;
  }
  .palestrante-home .card{
    background: transparent;
    border: none;
    box-shadow: none !important;
  }
  .palestrante-home .card .card-content{
    margin-top: -10px;
  }
  .palestrante-home .card .card-content p{
    color: whitesmoke;
  }
  .palestrante-home .card .card-content .title{
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .palestrante-home .card .card-image img{
    border-radius: 0.5rem;
  }
  .palestrante-home .card .subtitle.is-6 {
    font-size: 0.8rem;
  }
</style>
