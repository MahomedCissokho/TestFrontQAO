<script setup>
import logo from '../assets/logo.png'
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const isLoggedIn = ref(false)
const router = useRouter()
const route = useRoute()

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
    router.push('/signin') 
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error)
  }
}
</script>

<template>
  <header class="p-4 bg-[#1A0007] rounded-b-3xl">
    <div class="flex flex-col items-center justify-between max-w-6xl mx-auto text-white sm:flex-row">
      <img :src="logo" alt="Art Institute Chicago" class="w-16 h-16">

      <nav class="flex items-center justify-center w-full gap-40 sm:w-auto">
        <ul class="flex flex-col items-center justify-center gap-5 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <li>
            <RouterLink 
              to="/" 
              class="relative px-2 py-1 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-[#FFF2F5]"
              :class="{'border-b-2 border-[#FFF2F5] font-semibold': route.path === '/'}">
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/search" 
              class="relative px-2 py-1 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-[#FFF2F5]"
              :class="{'border-b-2 border-[#FFF2F5] font-semibold': route.path === '/search'}">
              Galerie
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/about" 
              class="relative px-2 py-1 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-[#FFF2F5]"
              :class="{'border-b-2 border-[#FFF2F5] font-semibold': route.path === '/about'}">
              À propos
            </RouterLink>
          </li>
        </ul>
        <div v-if="!isLoggedIn">
          <RouterLink to="/signin" class="bg-[#B20937] px-4 py-2 rounded-md hover:bg-[#9d0831] transition-all duration-300 ease-in-out">
            Connexion
          </RouterLink>
        </div>

        <div v-if="isLoggedIn">
          <button @click="handleSignOut" class="font-medium text-[#B20937] bg-[#FFF2F5] px-4 py-2 rounded-md border border-[#F1B5C5] hover:bg-[#FFE0E8] transition-all duration-300 ease-in-out">
            Déconnexion
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
