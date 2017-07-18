<template>
  <div>
    <a class="botaoAtencao button is-info btninscricao is-large" data-aos="fade-zoom-in" data-aos-delay="5000000" @click="isComponentModalActive = true">
      <b-icon pack="fa" icon="rocket" size="is-medium"></b-icon>
      <span class="desc">Faça aqui sua inscrição com desconto</span>
    </a>
    <b-modal
      :active.sync="isComponentModalActive"
      :component="ModalInscricao"
      :width="width">
    </b-modal>
  </div>
</template>

<script>
import ModalInscricao from '~components/all/ModalInscricao'

export default {
  data () {
    return {
      ModalInscricao,
      width: '960',
      isComponentModalActive: false
    }
  }
}
</script>

<style lang="scss">
   .botaoAtencao{
     position: fixed;
     bottom: 20px;
     right: 20px;
     z-index: 9;
   }
   .botaoAtencao .desc{
     display: none;
     font-size: 1rem;
   }
  .botaoAtencao{
    color: whitesmoke;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    -ms-transition: All 0.5s ease;
    transition: All 0.5s ease;
     -webkit-animation: jump 1.5s ease 0s infinite normal ;
    animation: jump 1.5s ease 0s infinite normal ;
  }
  .botaoAtencao:hover {
    -webkit-animation: none;
    animation: none;
    .desc {
      display: block;
    }
  }

  @-webkit-keyframes jump {
  0%{
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  20%{
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  40%{
	-webkit-transform: translateY(-30px);
	transform: translateY(-30px);
  }
  50%{
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  60%{
	-webkit-transform: translateY(-15px);
	transform: translateY(-15px);
  }
  80%{
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  100%{
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
}

@keyframes jump {
  0%{
	  transform: translateY(0);
  }
  20%{
	  transform: translateY(0);
  }
  40%{
	  transform: translateY(-30px);
  }
  50%{
	  transform: translateY(0);
  }
  60%{
	  transform: translateY(-15px);
  }
  80%{
	  transform: translateY(0);
  }
  100%{
	  transform: translateY(0);
  }
}
</style>
