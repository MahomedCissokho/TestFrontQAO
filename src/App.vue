<script setup>
  import Header from '@/components/HeaderComponent.vue'
  import Footer from '@/components/FooterComponent.vue'
  import { RouterView } from 'vue-router';

</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>
