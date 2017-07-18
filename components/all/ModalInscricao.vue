<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-centered">Inscrição CLACT Brasil</p>
    </header>
    <section class="modal-card-body">
      <imaster></imaster>
    </section>
    <footer class="modal-card-foot">
    </footer>
  </div>
</template>

<script>
import IMaster from '~components/all/IMaster'
export default {
  components: {
    'imaster': IMaster
  }
}
</script>


<style scoped>
.modal-card {
  margin: 0 auto;
  width: auto;
}
</style>
