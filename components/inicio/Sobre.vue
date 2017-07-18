<template>
    <section id="sobre resumo" class="sobre">
      <div class="container content is-medium">
        <section class="section descricao-evento">
          <h1 class="title is-1 is-spaced has-text-centered">XVI CLACT</h1>
          <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" data-aos-once="true">{{ textos.paragrafo1 }}</p>
          <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-once="true">{{ textos.paragrafo2 }}</p>
        </section>
        <section class="atividades">
          <div class="container is-fluid">
            <div class="columns content has-text-centered">
              <div class="column">
                <div class="caixa1" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600" data-aos-once="true">
                  <div class="header">
                    <h4><b-icon pack="fa" icon="check"></b-icon> {{ textos.titulobox1 }}</h4>
                  </div>
                  <div class="body">
                    <p>{{ textos.textobox1 }}</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="caixa2" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" data-aos-once="true">
                  <div class="header">
                    <h4><b-icon pack="fa" icon="gavel"></b-icon> {{ textos.titulobox2 }}</h4>
                  </div>
                  <div class="body">
                    <p>{{ textos.textobox2 }}</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="caixa3" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1000" data-aos-once="true">
                  <div class="header">
                    <h4><b-icon pack="fa" icon="line-chart"></b-icon> {{ textos.titulobox3 }}</h4>
                  </div>
                  <div class="body">
                    <p>{{ textos.textobox3 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="has-text-centered" data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-once="true">
            <nuxt-link :to="botoes.saibamais.link" class="saibamais button is-primary is-outlined is-large">{{ botoes.saibamais.texto }}</nuxt-link>
          </div>
        </section>
      </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      textos: {
        titulosecao: 'XVI CLACT',
        paragrafo1: 'O consumo de drogas tem se mostrado um dos mais complexos e inquietantes fenômenos de nossos tempos, exigindo que o governo e toda a sociedade partilhem a responsabilidade na busca de alternativas que levem à sua melhor compreensão e abordagem.',
        paragrafo2: 'Diante desta realidade a FEBRACT (Federação Brasileira de Comunidades Terapêuticas) em parceria com a FLACT (Federação Latino Americana de Comunidades Terapêuticas), realizará entre os dias 07 a 09 de dezembro de 2017, a III Conferência Nacional de Comunidades Terapêuticas e a XVI Conferência Latino Americana de Comunidades Terapêuticas.',
        titulobox1: 'Boas práticas em CTs',
        titulobox2: 'Políticas públicas e trabalho em Rede',
        titulobox3: 'Estratégias técnicas de modernização',
        textobox1: 'A Comunidade Terapêutica é reconhecida como um modelo eficiente de tratamento para dependência química. Neste eixo temático serão abordados assuntos pertinentes às diferentes atividades desenvolvidas no cotidiano das CTs, visando fomentar a discussão e a reflexão crítica acerca da teoria e das melhores práticas aplicáveis aos diversos contextos e populações atendidas.',
        textobox2: 'Eixo temático que tem como propósito discutir questões relacionadas à estruturação e o fortalecimento de uma rede de atenção plural aos usuários de álcool e outras drogas e às suas famílias e sua articulação com outras redes de serviços sociais e de saúde, importante desafio à política pública de álcool e drogas no Brasil e na América Latina.',
        textobox3: 'Neste eixo temático serão abordados temas alinhados com as práticas em CTs baseadas em evidências em CTs, pesquisas e levantamento de indicadores como forma de apoiar a metodologia e as estratégias de formação de pessoal.'
      },
      botoes: {
        saibamais: {
          texto: 'Saiba Mais',
          link: '/conferencia'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .caixa1,
  .caixa2,
  .caixa3,
  .caixa4{
    border: 1px solid #f0f0f0;
    font-size: 1.05rem;
    @media screen and (min-width: 1200px){
        border: 1px solid #f0f0f0;
        font-size: 1.05rem;
        height: 390px;
    }
    .body{
      padding: 1rem;
    }
    .header{
      padding: 1rem 0 0.1rem 0;
      -webkit-box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2);
      box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2);
    }
    h4, p{
      color: whitesmoke;
    }
  }
  .caixa1{
    background-color: #007b70;
    .header{
      background-color: #009688;
    }
  }
  .caixa2{
    background-color: #439846;
    .header{
      background-color: #4CAF50;
    }
  }
  .caixa3{
    background-color: #de8502;
    .header{
      background-color: #ff9800;
    }
  }
  .caixa4{
    background-color: #bb352b;
    .header{
      background-color: #f44336;
    }
  }
  .saibamais{
    margin: 2rem;
  }
</style>
