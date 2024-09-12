<script setup>
import logovariant from '../assets/logovariant.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
</script>

<template>
  <footer class="p-4 text-white bg-[#1A0007] rounded-t-3xl">
    <div class="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <div class="flex flex-col items-center sm:flex-row sm:items-center">
        <img :src="logovariant" alt="Art Institute Chicago" class="w-auto h-10 mb-2 sm:mb-0 sm:mr-2">
        <span class="font-light text-[#FFF2F5] text-center sm:text-left">ART INSTITUTE CHICAGO</span>
      </div>

      <div class="flex items-center justify-center space-x-4">
        <span class="p-1 transition duration-300 ease-in-out border border-white rounded-lg hover:bg-white hover:text-black">
          <img :src="facebook" alt="facebook" class="w-7 h-7">
        </span>
        <span class="p-1 transition duration-300 ease-in-out border border-white rounded-lg hover:bg-white hover:text-black">
          <img :src="twitter" alt="twitter" class="w-7 h-7">
        </span>
        <span class="p-1 transition duration-300 ease-in-out border border-white rounded-lg hover:bg-white hover:text-black">
          <img :src="youtube" alt="youtube" class="w-7 h-7">
        </span>
        <span class="p-1 transition duration-300 ease-in-out border border-white rounded-lg hover:bg-white hover:text-black">
          <img :src="instagram" alt="instagram" class="w-7 h-7">
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Responsive styles */
@media (max-width: 768px) {
  .space-y-4 {
    margin-top: 10px;
  }
  
  footer {
    padding: 2rem 1rem;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .items-center {
    align-items: center;
  }
}
</style>
