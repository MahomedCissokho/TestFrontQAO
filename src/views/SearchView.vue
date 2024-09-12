<script setup>
import { onMounted } from 'vue';
import { useArtworksStore } from '../stores/store.js';
import SearchBarComponent from '@/components/SearchBarComponent.vue'; 
import CardComponent from '@/components/CardComponent.vue';

const artworksStore = useArtworksStore();

onMounted(() => {
  artworksStore.fetchArtworks();
});

const handleSearch = (searchQuery) => {
  artworksStore.searchArtworks(searchQuery);
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

    <div v-if="artworksStore.loading" class="text-center">Chargement des œuvres d'art...</div>
    <div v-if="artworksStore.error" class="text-center text-red-500">{{ artworksStore.error }}</div>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <CardComponent 
        v-for="art in artworksStore.filteredArtworks" 
        :key="art.id" 
        :art="art"
      />
    </div>
  </div>
</template>
