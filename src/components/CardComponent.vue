<template>
    <div 
      class="relative overflow-hidden bg-[#F1B5C5] rounded-lg shadow-xl"
    >
      <img 
        :src="art.imageUrl" 
        :alt="art.title" 
        class="object-cover w-full h-full" 
      />
  
      <div class="absolute bottom-0 left-0 right-0 bg-[#1A0007]/70 p-2 text-white flex flex-col justify-end">
        <h3 class="pb-2 text-sm font-medium truncate">{{ art.title }}</h3>
        <p class="text-xs text-[#F1B5C5]">{{ art.artist }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    art: Object
  });
  </script>
  
  <style scoped>
  
  </style>
  