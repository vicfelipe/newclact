<template>
  <section id="patrocinadores" class="section patrocinadores">
    <h1 class="title is-1 has-text-centered">{{ textos.titulosecao }}</h1>
    <div class="container">
      <ul class="columns is-multiline has-text-centered">
        <li v-for="patrocinador in patrocinadores" v-bind:key="patrocinador" class="column is-one-third-tablet is-2-desktop">
          <img :src="patrocinador.logo" :alt="patrocinador.marca">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        textos: {
          titulosecao: 'Apoiam este evento'
        },
        patrocinadores: [
          { logo: require('~assets/images/padreharoldo.png'),
            marca: 'Instituto Padre Haroldo' },
          { logo: require('~assets/images/fazendadaesperanca.png'),
            marca: 'Fazenda da Esperança' },
          { logo: require('~assets/images/senad.png'),
            marca: 'SENAD' },
          { logo: require('~assets/images/prefeituradecampinas.png'),
            marca: 'Prefeitura de Campinas' },
          { logo: require('~assets/images/sanasa.png'),
            marca: 'SANASA' }
        ]
      }
    }
  }
</script>

<style>

</style>
