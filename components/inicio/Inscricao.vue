<template>
  <section id="resumo" class="section inscricao">
    <div class="container content is-medium has-text-centered">
      <h1 class="title is-2 has-text-centered">{{ textos.titulosecao }}</h1>
      <section id="inscricao" class="section">
        <imaster></imaster>
      </section>
    </div>
  </section>
</template>

<script>
import IMaster from '~components/all/IMaster'

export default {
  data () {
    return {
      textos: {
        titulosecao: 'Inscrições Abertas'
      }
    }
  },
  components: {
    'imaster': IMaster
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .inscricao{
    padding: 60px 0;
  }
</style>
