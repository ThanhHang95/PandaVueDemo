<template>
  <header class="l-header">
    <h1 class="l-header__logo">
      
      <router-link :to="baseURL" class="">
        <!-- <img alt="logo" :src="baseURL + 'img/logo.svg'"> -->
        <img alt="logo" src="../assets/images/logo.svg">
      </router-link>
      
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      // baseURL: '/HangThong/vue-demo/',
      baseURL: '/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../assets/css/style.scss">
  
</style>
