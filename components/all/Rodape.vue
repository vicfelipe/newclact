<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="contato">
            <h1 class="title is-5">Com dúvidas? Entre em contato</h1>
            <h2 class="subtitle is-6">Estamos pronto para atendê-lo!</h2>
            <p>Telefone: <span>{{ textos.telefone }}</span></p>
            <p>E-mail: <a :href="'mailto:'+textos.email">{{ textos.email }}</a></p>
          </div>
        </div>
        <div class="column is-6">
          <div class="redes-sociais has-text-right">
            <h1 class="title is-5">Siga-nos nas redes sociais</h1>
            <h2 class="subtitle is-6">Receba sempre notícias atualizadas</h2>
            <ul>
              <li><a :href="textos.facebook" target="_blank"><b-icon pack="fa" icon="facebook" size="is-medium"></b-icon></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="has-text-centered">
        <p><small> Desenvolvido por  <a href="https://oficinademarketing.com.br">Oficina de Marketing</a></small> </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        textos: {
          telefone: '(19) 3291-4883',
          email: 'contato@clactbrasil.com.br',
          facebook: 'https://www.facebook.com/clactbrasil/'
        }
      }
    }
  }
</script>

<style>
.footer{
  padding: 1em 0 !important;
}
.contato h1, .redes-sociais h1{
  font-weight: 500;
}
.redes-sociais ul{
  display: inline-block;
}
.redes-sociais ul li{
  float: left;
  padding: 0 0.5rem;
}
</style>
