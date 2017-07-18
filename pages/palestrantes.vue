<template>
    <section id="palestrantes" class="palestrantes">
      <div class="content is-medium">
        <header class="banner" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
          <h1 class="has-text-centered">Palestrantes</h1>
        </header>
      </div>
      <section class="section content">
        <div class="container is-fluid">
          <div class="columns is-multiline is-mobile">
            <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop" v-for="palestrante of palestrantes" v-bind:data="palestrante" v-bind:key="palestrante.nome">
              <div class="card">
                <div class="card-image">
                  <figure class="is-4by3 image">
                    <img :src="palestrante.fotourl" :alt="palestrante.nome + ' CLACT Brasil'">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media ">
                    <div class="media-content">
                      <h1>{{ palestrante.nome }}</h1>
                      <h4>{{ palestrante.ocupacao }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="section has-text-centered">
      <BotaoInscricao></BotaoInscricao>
    </div>
  </section>
</template>

<script>
import {db} from '~components/database/Config'
import BotaoInscricao from '~components/all/BotaoInscricao'

export default {
  layout: 'default',
  head: {
    title: 'Palestrantes - CLACT BRASIL',
    meta: [
      { hid: 'description', name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' }
    ]
  },
  data () {
    return {
      palestrantes: {},
      backgroundImage: require('~assets/images/header-image-palestrantes.jpg')
    }
  },
  components: {
    BotaoInscricao
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .palestrantes{
    .section{
      padding: 3rem 0;
    }
    .banner{
      padding: 8em 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top center;
    }
    .banner h1{
      color: white;
    }
    .card{
      margin: 0 5px;
      animation: all ease .9;
      -webkit-animation: all ease .9;
      background-color: #006837;
      &:hover{
        -webkit-animation: all ease .9;
        background-color: #2ab148;
        color: whitesmoke;
        .media-content h1{
          color: whitesmoke;
        }
        .media-content h4{
          color: whitesmoke;
        } 
      }
      .media-content{
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 85px;
      }
      h1{
        font-size: 1.2rem;
        font-weight: 700;
        color: whitesmoke;
      }
      h4{
        font-size: 1rem;
        color: whitesmoke;
      }
      .card-content{
        padding: 1.5rem 1rem;
      }
    }
  } 
</style>
