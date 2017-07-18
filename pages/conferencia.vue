<template>
  <section id="sobre completo" class="sobre">
    <div class="content is-medium">
      <header :style="{ 'background-image': 'url(' + backgroundImage + ')' }" class="topo-destaque">
        <h1 class="has-text-centered">{{ textos.titulosecao }}</h1>
      </header>
    </div>
    <div class="container content is-medium">
      <section class="section tema">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="50" data-aos-once="true"><b-icon pack="fa" icon="tag" size="is-big"></b-icon> Tema</h2>
        <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true">O Tema escolhido <strong>“Evoluir sem perder a essência”</strong>, será abordado em duas principais dimensões – Boas Práticas - Aspectos Técnicos e Teóricos e Desafios para o Biênio. O evento pretende abrir espaço no âmbito estadual, nacional e internacional para aprofundar discussões e analisar os cenários tecnológico, social e político das Comunidades Terapêuticas, da Prevenção ao Uso e da Rede de Atenção aos usuários de Álcool e outras Drogas de uma forma mais ampla, como fonte de informação fundamental para sua gestão e desenvolvimento.</p>
      </section>

      <section class="section tema">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="150" data-aos-once="true"><b-icon pack="fa" icon="flag-checkered" size="is-big"></b-icon> Objetivos</h2>
        <ul data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" data-aos-once="true">
          <li>Apresentar uma visão geral das Políticas Públicas Sobre Álcool e Drogas no Brasil e demais países da América Latina, visando estreitar a cooperação e intercâmbio de conhecimento entre os países participantes;</li>
          <li>Oferecer oportunidade de atualização acerca de Boas Práticas em Comunidades Terapêuticas, por meio de palestras, painéis temáticos, oficinas e exposição de trabalhos acadêmicos que apresentem as novidades técnicas e os novos projetos em desenvolvimento;</li>
          <li>Abordar os fundamentos, princípios e diretrizes norteadores das políticas públicas sobre drogas e refletir sobre o papel das Comunidades Terapêuticas na definição destas políticas;</li>
          <li>Buscar um posicionamento acerca da descriminalização e legalização de drogas, bem como promover reflexões sobre o diálogo com as diversas linhas de cuidados e promoção de saúde - Redução de Danos, abordagens territoriais, tratamentos de base comunitária, etc;</li>
          <li>Promover o debate e a reflexão sobre legislação, regulamentação e financiamento das Comunidades Terapêuticas, no Brasil e América Latina;</li>
          <li>Debater sobre a aplicabilidade do modelo de Comunidade Terapêutica no cuidado a populações específicas - adolescentes, idosos, apenados, etc;</li>
          <li>Fomentar a produção científica sobre o tema e promover a apresentação de trabalhos acadêmicos;</li>
          <li>Proporcionar aos estudantes das diversas áreas correlacionadas a convivência com o meio profissional e a interação com profissionais experientes e de diversas instituições estaduais, nacionais e estrangeiras ligadas à temática da dependência química.</li>
        </ul>
      </section>

      <BotaoAtencao></BotaoAtencao>
      
      <section class="section publico">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="250" data-aos-once="true"><b-icon pack="fa" icon="users" size="is-big"></b-icon> Público</h2>
        <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="300" data-aos-once="true">O público estimado é de 700 participantes entre profissionais, dirigentes, gestores, professores e estudantes, representantes de órgãos governamentais e organizações privadas, além de Entidades parceiras que colaboram no desenvolvimento de programas de prevenção, tratamento, recuperação e reinserção social de dependentes químicos no Estado de São Paulo, no Brasil país e na América Latina.</p>
      </section>

      <section class="section programacao">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="350" data-aos-once="true"><b-icon pack="fa" icon="clock-o" size="is-big"></b-icon> Programação</h2>
        <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-once="true">A programação técnica, composta por palestras, painéis e apresentações de trabalhos abordando assuntos de destaque, contará com a participação de membros da academia e especialistas de renome nacional e internacional, gestores públicos, profissionais de saúde e juristas, além de outros técnicos, representantes e lideranças reconhecidas do segmento.</p>
      </section>

      <section class="section local">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="450" data-aos-once="true"><b-icon pack="fa" icon="map-marker" size="is-big"></b-icon> Local do Evento</h2>
        <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500" data-aos-once="true">{{ textos.textolocalevento}}
<a :href="textos.linkevento" target="_blank">{{ textos.textolinklocalevento}}</a>.</p>
      </section>
      <section class="section has-text-centered">
        <btnInscricao></btnInscricao>
      </section>
    </div>
  </section>
</template>

<script>
import btnInscricao from '~components/all/BotaoInscricao'
import BotaoAtencao from '~components/all/BotaoAtencao'

export default {
  scrollToTop: true,
  layout: 'default',
  head: {
    title: 'Sobre - CLACT BRASIL',
    meta: [
      { hid: 'description', name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' }
    ]
  },
  components: {
    btnInscricao,
    BotaoAtencao
  },
  data () {
    return {
      textos: {
        titulosecao: 'XVI Conferência Latino Americana de Comunidades Terapêuticas',
        textolocalevento: 'O Expo Dom Pedro é um anexo do Shopping Dom Pedro com mais de 100 opções para alimentação e lazer. Além de estacionamento para 10.000 carros.',
        textolinklocalevento: 'Conheça mais o ambiente e serviços',
        linklocalevento: 'http://www.parquedpedro.com.br/alimentacao/'
      },
      botoes: {
        saibamais: {
          texto: 'Saiba Mais',
          link: '/conferencia'
        }
      },
      backgroundImage: require('~assets/images/header-image-sobre.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .sobre{
    .topo-destaque{
      padding: 8em 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top center;
      h1{
        color: white;
      }
    }
    .icon{
      vertical-align: middle;
    }
  }
</style>
