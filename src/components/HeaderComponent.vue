<script setup>
import logo from '../assets/logo.png'
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const isLoggedIn = ref(false)
const router = useRouter()

const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = async () => {
  try {
    await signOut(auth)
    isLoggedIn.value = false
    router.push('/') 
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error)
  }
}
</script>

<template>
  <header class="p-4 bg-[#1A0007] rounded-b-3xl">
    <div class="flex flex-col items-center justify-between max-w-6xl mx-auto text-white sm:flex-row">
      <!-- Logo -->
      <img :src="logo" alt="Art Institute Chicago" class="w-16 h-16">

      <!-- Navigation -->
      <nav class="flex items-center justify-center w-full gap-40 sm:w-auto">
        <ul class="flex flex-col items-center justify-center gap-5 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/search">Galerie</RouterLink></li>
          <li><RouterLink to="/about">À propos</RouterLink></li>
        </ul>

        <!-- Bouton Connexion/Déconnexion -->
        <div v-if="!isLoggedIn">
          <RouterLink to="/signin" class="bg-[#B20937] px-4 py-2 rounded-md">Connexion</RouterLink>
        </div>

        <div v-if="isLoggedIn">
          <button @click="handleSignOut" class="font-medium text-[#B20937] bg-[#FFF2F5] px-4 py-2 rounded-md border border-[#F1B5C5]">
            Déconnexion
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
