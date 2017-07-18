<template>
  <section id="programacao" class="programacao">
    <div class="content is-medium">
      <header class="banner" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
        <h1 class="has-text-centered">Programação</h1>
      </header>
    </div>
    <div class="container content is-medium">
      <p>A XVI Conferência Latinoamericana de Comunidades Terapêuticas (XVI CLACT) tem por objetivo promover a discussão dos temas mais relevantes na atualidade para a prática e desenvolvimento das CTs.<br> <h3 class="is-5 has-text-centered">Em breve programação completa</h3></p>
      <!-- <section class="section tabela">
        <div class="columns">
          <Tabela></Tabela>
        </div>
      </section> -->
      <section class="section has-text-centered">
        <btnInscricao></btnInscricao>
      </section>
    </div>
  </section>
</template>

<script>
import Tabela from '~components/programacao/Tabela'
import BotaoInscricao from '~components/all/BotaoInscricao'

export default {
  layout: 'default',
  head: {
    title: 'Programação - CLACT BRASIL',
    meta: [
      { hid: 'description', name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' }
    ]
  },
  components: {
    'btnInscricao': BotaoInscricao,
    'Tabela': Tabela
  },
  data () {
    return {
      msg: 'programacao',
      backgroundImage: require('~assets/images/header-image-programacao.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.programacao header{
  padding: 8em 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top center;
}
.programacao header h1{
  color: white;
}
</style>
