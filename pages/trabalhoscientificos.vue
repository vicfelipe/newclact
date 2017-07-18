<template>
  <section id="trabalhos" class="trabalhos">
    <div class="content is-medium">
      <header class="banner" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
        <h1 class="has-text-centered">Como divulgar seu trabalho</h1>
      </header>
    </div>
    <section class="section">
      <div class="container content is-medium">
        <div id="termos" v-if="viewModel">
          <p class="has-text-centered">Envie seu trabalho científico através do formulário de inscrição, mas antes é preciso que você expositor aceite os termos citados abaixo:</p>
          <h3>1. Candidatos</h3>
          <ul>
            <li>Profissionais de nível superior de todas as áreas.</li>
            <li>Estudantes de nível superior de todas as áreas.</li>
            <li>CTs filiadas à Federações da FLACT, ou indicadas por estas.</li>
          </ul>
          <h3>2. Escopo:</h3>
          <ul>
            <li>Assuntos relacionados com os eixos temáticos da CLACT.</li>
          </ul>   
          <h3>3. Modalidades:</h3>
          <ul>
            <li>Apresentação Oral (20 vagas) – 30 minutos.</li>
            <li>Pôster (70)</li>
          </ul>     
          <h3>4. Tipos de trabalhos:</h3>
          <h4>4.1.	Apresentação Oral</h4>
          <ul>
            <li>Pesquisas, Estudos de caso, Relatos de experiência e Revisões críticas decorrentes de TCCs, iniciações científicas, projetos de extensão, dissertações de mestrado, teses de doutorado, ou superiores.</li>
            <li>Artigos publicados em revistas Qualis B2 ou mais.</li>
          </ul> 
          <h4>4.2. Pôster</h4>
          <ul>
            <li>Pesquisas, Estudos de caso, Relatos de experiência e Revisões críticas decorrentes de TCCs, iniciações científicas, projetos de extensão, dissertações de mestrado, teses de doutorado, ou superiores.</li>
            <li>Artigos publicados em revistas Qualis B2 ou mais.</li>
            <li>TCCs em andamento.</li>
            <li>Apresentação de resultados do serviço para CTs filiadas.</li>
          </ul>
          <h3>5. Normas gerais para submissão:</h3>
          <ul>
            <li>As inscrições de trabalhos poderão ser feitas apenas por autores já inscritos no evento.</li>
            <li>Cada autor poderá submeter um trabalho de cada Modalidade como autor principal, podendo ser coautor de outros trabalhos.</li>
            <li>Deverá ser enviado por email arquivo anexo em word, com Resumo expandido, fonte Arial ou Times New Roman tamanho 12, espaçamento simples.</li>
            <li>O Resumo expandido deverá seguir a seguinte estrutura: Título; Autores; Instituição; Palavras-chaves; Introdução; Objetivos; Método; Resultados e Discussão; Conclusões; Referências. </li>
            <li>O Resumo expandido deverá conter de 500 a 1500 palavras.</li>
            <li>Não deverão ser inseridos gráficos, tabelas ou outros recursos visuais no Resumo expandido, apenas o texto.</li>
            <li>A data limite para submissão de trabalhos será 31 de outubro de 2017.</li>
          </ul>
          <h4>5.1 Normas para Apresentação Oral</h4>
          <ul>
            <li>A Apresentação Oral terá uma duração de, no máximo, 30 minutos.</li>
            <li>O autor deverá encaminhar previamente à Comissão Científica o material audiovisual a ser utilizado durante a apresentação, para a correspondente validação.</li>
            <li>O escopo e os resultados da Apresentação Oral deverão ser os mesmos que os apresentados no Resumo expandido aprovado.</li>
            <li>Se o autor for distribuir qualquer tipo de material de apoio para a Apresentação Oral, a elaboração do mesmo será de responsabilidade única do mesmo.</li>
          </ul>
          <h4>5.2 Normas para Pôster</h4>
          <ul>
            <li>Dimensões: Largura 90 cm; Altura 120 cm (Orientação retrato/vertical).</li>
            <li>Deverá ser confeccionado com cordão para pendurar.</li>
            <li>O conteúdo do Pôster deverá seguir a estrutura do Resumo expandido, podendo conter imagens, gráficos e tabelas, se necessário.</li>
            <li>A fonte do corpo do texto deverá ser Arial ou Times New Roman tamanho 24, sendo o Título em caixa alta, negrito com tamanho 40.</li>
            <li>Após a aprovação do Resumo expandido, o autor deverá enviar para a Comissão Científica um arquivo em formato pdf ou jpg com a arte final do Pôster, para aprovação.</li>
            <li>O autor será responsável pela entrega de seu pôster no dia do credenciamento, e pela sua retirada no último dia do evento.</li>
            <li>Os pôsteres ficaram expostos na galeria durante todo o evento, não sendo obrigatória a presença do autor junto ao mesmo.</li>
          </ul>
          <!--<router-link to="/trabalhos/enviarTrabalhos" class="button is-info btnConcordo"><b-icon pack="fa" icon="thumbs-up"></b-icon><span>Concordo com os termos e desejo continuar</span></router-link>-->
          <!--<a :href="this.$route.go()" class="button is-info btnConcordo" @click="viewModel=false"></a>-->
        </div>
        <div id="formulario" v-else>
          <h2>Formulário</h2>
          <form>
            <input type="text" class="input" name="nome" placeholder="Nome">
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Trabalhos Científicos - CLACT BRASIL',
    meta: [
      { hid: 'description', name: 'description', content: 'XVI Conferência Latino Americana de Comunidades Terapêuticas e III Conferência Nacional de Comunidades Terapêuticas. 07, 08 e 09 de Dezembro na Expo Dom Pedro em Campinas/SP' }
    ]
  },
  data () {
    return {
      viewModel: true,
      msg: 'trabalho',
      backgroundImage: require('~assets/images/header-image-trabalhos.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trabalhos .banner{
  padding: 8em 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top center;
}
.trabalhos .banner h1{
  color: white;
}
.btnConcordo span + span{
  margin: 0 0.2rem;
}
</style>
