<template>
  <div id="menu">
    <transition name="fade"
    enter-active-class="fadeInDown">
      <nav class="navbar is-transparent" v-if="!isSticky" key="visible" style="overflow: visible">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
              <img :src="require('~assets/images/logo.png')" alt="XVI Conferência de Comunidades Terapêuticas">
            </nuxt-link>
          <div class="navbar-burger burger" :class="{'is-active': showResponsiveMenu}"  @click='toggleMenu()' data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuTransparentExample" class="navbar-menu" :class="{'is-active': showResponsiveMenu}">
          <div class="navbar-end">
            <nuxt-link to="/conferencia" class="navbar-item">Conferência</nuxt-link>
            <nuxt-link to="/programacao" class="navbar-item">Programação</nuxt-link>
            <nuxt-link to="/palestrantes" class="navbar-item">Palestrantes</nuxt-link>
            <nuxt-link to="/trabalhoscientificos" class="navbar-item">Trabalhos Científicos</nuxt-link>
          </div>
        </div>
      </nav>
      <nav class="navbar is-transparent sticky"  v-else key="sticked" style="overflow: visible">
        <div class="navbar-brand">
          <nuxt-link to="/">
            <img :src="require('~assets/images/logo.png')" alt="XVI Conferência de Comunidades Terapêuticas">
          </nuxt-link>
          <div class="navbar-burger burger" :class="{'is-active': showResponsiveMenu}"  @click='toggleMenu()' data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuTransparentExample" class="navbar-menu" :class="{'is-active': showResponsiveMenu}">
          <div class="navbar-end">
            <nuxt-link to="/conferencia" class="navbar-item">Conferência</nuxt-link>
            <nuxt-link to="/programacao" class="navbar-item">Programação</nuxt-link>
            <nuxt-link to="/palestrantes" class="navbar-item">Palestrantes</nuxt-link>
            <nuxt-link to="/trabalhoscientificos" class="navbar-item">Trabalhos Científicos</nuxt-link>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['isSticky'],
  data () {
    return {
      activeIndex: '0',
      showResponsiveMenu: false,
      navigation: 'home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleMenu () {
      this.showResponsiveMenu = !this.showResponsiveMenu
    }
  }
}
</script>

<style lang="scss">
  .active-link{
    color: #27ae60 !important;
  }
  .sticky{
    position: fixed !important;
    background-color: #172a3a !important;
  }
  .navbar{
    width: 100%;
    top: 0;
    z-index: 2;
    height: 80px;
    .navbar-item{
      color: whitesmoke;
      &:hover{
        color: #27ae60;
      }
      img{
        margin-top: 2rem;
        max-height: 4.25rem;
      }
    }
    .navbar-item{
      .navbar-drop{
        color: whitesmoke;
      }
    }
    .navbar-link{
      color: whitesmoke;
      &:hover{
        color: #27ae60;
      }
    }
  .navbar-burger{
    height: 5.25rem;
    width: 5.25rem;
    span {
        background-color: #4caf50!important;
        width: 20px!important;
    }
  }
}     
.navbar.sticky{
  img{
    margin-top: 0.4rem;
    margin-left: 0.4rem;
    max-height: 4.25rem;
  }
  .navbar-end{
    .nuxt-link-exact-active{
      color: white !important;
      background-color: #597d8c !important;
    }
  }
}
@media screen and (max-width: 999px) {
  .navbar{
    .navbar-end{
      margin-top: 25px;
      background: #363636;
    }
  }    
  .navbar.sticky{
    .navbar-end{
      margin-top: 20px;
      background: #1d3b54;
    }
  }
  
}
</style>
