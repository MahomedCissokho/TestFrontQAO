<template>
    <section class="bg-[#1A0007]/20 text-white p-8 rounded-lg shadow-md max-w-6xl mx-auto my-12">
      <h1 class="mb-6 text-4xl font-bold text-center">À Propos de ce Projet</h1>
      
      <div class="space-y-6">
        <p class="text-lg">
          Ce projet est une application web interactive permettant de découvrir et de gérer une liste d'œuvres d'art issues de l'Institut d'Art de Chicago, tout en proposant une expérience utilisateur agréable et fluide.
        </p>
  
        <ul class="pl-5 space-y-4 text-lg list-disc">
          <li>
            <span class="font-semibold">Objectif Principal :</span> 
            Gérer une liste d'œuvres d'art via l'API ouverte de l'Institut d'Art de Chicago. L'application affiche ces œuvres sous forme de grille avec des informations pertinentes comme le titre de l'œuvre, le nom de l'artiste, et une image.
          </li>
          <li>
            <span class="font-semibold">Technologies utilisées :</span> 
            Ce projet est construit avec <span class="text-[#B20937]">Vue.js 3</span>, <span class="text-[#B20937]">Axios</span>, <span class="text-[#B20937]">Firebase</span> pour l'authentification, et <span class="text-[#B20937]">Vue Router</span> pour la navigation. L'interface utilise <span class="text-[#B20937]">Tailwind CSS</span> pour un design réactif et moderne.
          </li>
          <li>
            <span class="font-semibold">Authentification :</span> 
            L'inscription et la connexion des utilisateurs sont gérées via Firebase, garantissant une gestion sécurisée des comptes et une navigation fluide à travers l'application.
          </li>
          <li>
            <span class="font-semibold">Recherche :</span> 
            La page de recherche permet aux utilisateurs d'explorer les œuvres d'art avec des filtres. Les résultats sont présentés sous forme de grille avec des images, titres, et noms d'artistes. 
          </li>
          <li>
            <span class="font-semibold">User Experience :</span> 
            Une attention particulière a été portée à l'expérience utilisateur, avec une interface réactive, des transitions fluides, et une palette de couleurs adaptée pour une navigation agréable.
          </li>
          <li>
            <span class="font-semibold">Délai de réalisation :</span> 
            Ce projet a été conçu dans un délai serré de 3 jours, avec des fonctionnalités clés respectées, telles que l'authentification, la recherche et l'affichage des œuvres d'art. Des améliorations futures sont envisagées, notamment pour la pagination et la gestion avancée des œuvres.
          </li>
        </ul>
        
        <p class="text-lg">
          Ce projet est une démonstration de la manière dont les technologies modernes peuvent être utilisées pour créer des applications web riches en fonctionnalités tout en restant simple d'utilisation. Pour plus d'informations, veuillez consulter le <a href="https://api.artic.edu/docs/" class="text-[#B20937] hover:underline">lien de l'API de l'Institut d'Art de Chicago</a>.
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  
  