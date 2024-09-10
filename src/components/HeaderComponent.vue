<script setup>
    import logo from '../assets/logo.png'
</script>

<template>
    <header class="p-4 rounded-b-2xl  bg-[#1A0007] ">
      <div class="flex flex-col items-center justify-between max-w-6xl mx-auto text-white sm:flex-row">
        <img :src=logo alt="Art Institute Chicago" class="w-16 h-16">
        <nav class="flex items-center justify-center w-full gap-40 sm:w-auto">
          <ul class="flex flex-col items-center justify-center gap-5 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <li><RouterLink to="/" class="">Accueil</RouterLink></li>
            <li><RouterLink to="/search" class="">Galerie</RouterLink></li>
            <li><RouterLink to="/about" class="">A propos</RouterLink></li>
          </ul>
          <span><RouterLink to="/signin" class="bg-[#B20937] px-2 py-3 rounded-md ">Connexion</RouterLink></span>
        </nav>
      </div>
    </header>
</template>