<script setup>
import { ref, onMounted } from 'vue';
import { getAllData } from '@/api/api.js'; 
import SearchBarComponent from '@/components/SearchBarComponent.vue'; 

const artworks = ref([]);
const loading = ref(true);
const error = ref(null);
const filteredArtworks = ref([]);

onMounted(async () => {
  try {
    artworks.value = await getAllData();
    filteredArtworks.value = artworks.value; 
    console.log('Artworks:', artworks.value);
  } catch (err) {
    error.value = 'Échec du chargement des œuvres d\'art. Veuillez réessayer plus tard.';
    console.error('Erreur:', err);
  } finally {
    loading.value = false;
  }
});

const handleSearch = (searchQuery) => {
  if (!searchQuery) {
    filteredArtworks.value = artworks.value;
    return;
  }

  const query = searchQuery.toLowerCase();  

  filteredArtworks.value = artworks.value.filter(art => {
    const matchesId = art.id.toString().includes(query);
    const matchesTitle = art.title.toLowerCase().includes(query);
    const matchesArtist = art.artist.toLowerCase().includes(query);
    const matchesThemes = art.themes.some(theme => theme.toLowerCase().includes(query));
    
    return matchesId || matchesTitle || matchesArtist || matchesThemes;
  });

  if (filteredArtworks.value.length === 0) {
    error.value = `Aucune œuvre trouvée pour "${searchQuery}"`;
  } else {
    error.value = null;  
  }
};
</script>

<template>
  <div class="max-w-6xl px-5 pb-4 mx-auto mb-10">
    <div class="flex items-center justify-between mb-16">
      <div class="w-4/12">
        <SearchBarComponent @search="handleSearch" />
      </div>
      <div>
        <!-- Les boutons de pagination peuvent aller ici -->
      </div>
    </div>

    <div v-if="loading" class="text-center">Chargement des œuvres d'art...</div>

    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <div 
        v-for="art in filteredArtworks" 
        :key="art.id" 
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
    </div>
  </div>
</template>
