<template>
  <div>
    <button class="button is-primary btninscricao is-large" @click="isComponentModalActive = true">
      <b-icon
        pack="fa"
        icon="pencil"
        size="is-medium">
      </b-icon> Quero me inscrever agora
    </button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .inscricao{
    padding: 60px 0;
  }
  .btninscricao{
    margin: 22px 0 0 0;
  }
  .btninscricao .icon{
    margin-right: 0px !important
  }
</style>
