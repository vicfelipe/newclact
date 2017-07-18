<template>
  <section class="section palestrante-home" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <div class="container content is-medium">
        <h1 class="title is-1 has-text-centered">{{ textos.titulosecao }}</h1>
        <h2 class="subtitle is-5 has-text-centered">{{ textos.subtitulosecao }}</h2>
        <Carrousel></Carrousel>
      </div>
  </section>
  
</template>

<script>
import Carrousel from '~components/inicio/CarrouselPalestrantes'
export default {
  components: {
    Carrousel
  },
  data () {
    return {
      textos: {
        titulosecao: 'Palestrantes',
        subtitulosecao: 'Capacitação com os melhores profissionais da área'
      },
      backgroundImage: require('~assets/images/palestrantesbg.jpg')
    }
  }
}
</script>

<style lang="scss">
   .palestrante-home{
    padding: 60px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top center;
    h1, h2{
      color: whitesmoke;
    }
  }
</style>
