<template>
  <section class="bg-[#1A0007]/30 text-white p-8 rounded-lg shadow-md max-w-6xl mx-auto my-12">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold">👋 Salut, {{ userName }} !</h1>
      <p class="mb-6 text-lg">
        Bienvenue dans l'application de gestion des œuvres d'art de l'Institut d'Art de Chicago. Explorez, recherchez et découvrez de magnifiques œuvres d'art.
      </p>

      <h2 class="mb-4 text-2xl font-semibold">Voici ce que vous pouvez faire :</h2>

      <ul class="pl-6 space-y-4 text-lg text-left list-disc">
        <li>
          <RouterLink to="/search" class="text-[#B20937] hover:underline">
            Visitez la <strong>Galerie</strong>
          </RouterLink> pour voir un large éventail d'œuvres d'art.
        </li>
        <li>
          Utilisez la fonction de <strong>Recherche</strong> pour trouver des œuvres spécifiques en fonction du titre ou de l'artiste.
        </li>
        <li>
          Découvrez des détails intéressants sur chaque œuvre, y compris les images, les artistes, et bien plus encore.
        </li>
        <li>
          Profitez d'une expérience utilisateur fluide et agréable grâce à une interface réactive et moderne.
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';

const userName = ref('');
const auth = getAuth();

onMounted(() => {
  const user = auth.currentUser;
  if (user) {
    userName.value = user.displayName || 'Invité';  
  }
});
</script>
