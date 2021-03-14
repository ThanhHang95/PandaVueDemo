<template>
  <div class="l-index l-page">
    <div class="l-inner">
      <div class="index-group">
        <h2 class="c-ttl--01">About Demo</h2>
        <div class="index-group__txt">Panda CV is an online CV generation tool made by VueJS. It makes it easy for users to fill in necessary information for their CV, preview it, and download it as pdf file for later use.</div>
        <router-link :to="baseURL + 'create-cv/'" class="c-btn index-group__btn">Create CV</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Form
  },
  data() {
    return {
      // baseURL: '/HangThong/vue-demo/',
      baseURL: '/'
    }
  }
}
</script>

<style lang="scss" src="../assets/css/style.scss"></style>