<template>
    <section class="flex flex-col items-center justify-center min-h-screen bg-[#1A0007]/20 text-white p-8">
      <div class="text-center">
        <img src="https://via.placeholder.com/300x200?text=Erreur+404" alt="Error 404" class="mx-auto mb-8 w-72" />
  
        <h1 class="mb-4 text-5xl font-bold">Oups, page non trouvée !</h1>
        <p class="mb-6 text-lg">
          Il semble que la page que vous recherchez n'existe pas ou a été déplacée. 
        </p>
  
        <RouterLink to="/" class="bg-[#B20937] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#90072B]">
          Retourner à l'accueil
        </RouterLink>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
