<script setup>
import { ref, watch } from 'vue';
import search from '../assets/search.png';

const emit = defineEmits(['search']);

const searchQuery = ref('');

watch(searchQuery, (newQuery) => {
  emit('search', newQuery);  
});
</script>

<template>
  <div class="relative mt-10">
    <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="Recherche..." 
      class="placeholder:pl-5 w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder-[#1A0007]/70 placeholder:font-medium"
      autocomplete="off"
    >
    <img class="absolute w-5 h-5 text-gray-400 transform left-3 -translate-y-[2rem]" :src="search" alt="Search Icon" />
  </div>
</template>
