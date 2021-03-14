<template>
  <div>
    <div class="l-create-cv">
      <div class="l-inner">
        <Form />
      </div>
    </div>
  </div>
  
</template>


<script>
import Form from '@/components/Form.vue';

export default {
  name: 'CreateCV',
  components: {
    Form
  },
}
</script>

<style lang="scss" src="../assets/css/style.scss"></style>
<style lang="scss" src="../assets/css/cv.scss"></style>