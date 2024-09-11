<script setup>
  import Header from '@/components/HeaderComponent.vue'
  import Footer from '@/components/FooterComponent.vue'
  import { RouterView } from 'vue-router';

</script>

<template >
  <div class="example">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>

</template>


<style scoped>
.example {
  background-color: #FFDAE4;
}
</style>