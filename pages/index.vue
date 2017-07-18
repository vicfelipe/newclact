<template>
  <div id="conteudo">
    <BannerDestaque></BannerDestaque>

    <a href="#" id="#sobre"></a>
    <Sobre></Sobre>

    <a href="#" id="#palestrantes"></a>
    <Palestrantes></Palestrantes>

    <a href="#" id="#inscricao"></a>
    <Inscricao></Inscricao>

    <a href="#" id="#patrocinadores"></a>
    <Patrocinadores></Patrocinadores>
    <BotaoAtencao></BotaoAtencao>
  </div>
</template>

<script>
import BannerDestaque from '~components/inicio/BannerDestaque'
import Sobre from '~components/inicio/Sobre'
import Palestrantes from '~components/inicio/Palestrantes'
import Inscricao from '~components/inicio/Inscricao'
import Patrocinadores from '~components/inicio/Patrocinadores'
import BotaoAtencao from '~components/all/BotaoAtencao'

export default {
  layout: 'default',
  head: {
    title: 'CLACT BRASIL',
    meta: [
      { hid: 'description', name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' }
    ]
  },
  components: {
    BannerDestaque,
    Sobre,
    Palestrantes,
    Inscricao,
    Patrocinadores,
    BotaoAtencao
  }
}

</script>

<style>
</style>
