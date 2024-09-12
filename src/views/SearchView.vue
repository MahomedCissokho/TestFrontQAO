<script setup lang="js">
import { ref, onMounted } from 'vue';
import { getAllData } from '@/api/api.js'; 
import SearchBarComponent from '@/components/SearchBarComponent.vue';

const artworks = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    artworks.value = await getAllData();
    console.log('Artworks:', artworks.value);
  } catch (err) {
    error.value = 'Failed to load artworks. Please try again later.';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="h-screen max-w-6xl px-5 pb-4 mx-auto">
    <div class="flex items-center justify-between mb-16">
      <div class="w-4/12">
        <SearchBarComponent />
      </div>
      <div>
        <!-- Pagination buttons can go here -->
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center">Loading artworks...</div>

    <!-- Error message -->
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <!-- Grid view for artworks -->
    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <div 
        v-for="art in artworks" 
        :key="art.id" 
        class="relative overflow-hidden bg-[#F1B5C5] rounded-lg shadow-xl "
      >
        <!-- Image that covers the whole card -->
        <img 
          :src="art.imageUrl" 
          :alt="art.title" 
          class="object-cover w-full h-full" 
        />

        <!-- Overlay for text at the bottom of the card -->
        <div class="absolute bottom-0 left-0 right-0 bg-[#1A0007]/70 p-2 text-white flex flex-col justify-end">
          <h3 class="pb-2 text-sm font-medium truncate">{{ art.title }}</h3>
          <p class="text-xs text-[#F1B5C5]">{{ art.artist }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional styles for truncation handling */
.grid > div {
  min-height: 200px; /* Ensures consistent height for cards */
}

img {
  height: 100%; /* Ensures the image fills the card */
}
</style>
