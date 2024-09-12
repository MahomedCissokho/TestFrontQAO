🎨 TestFrontQAO : Explorateur d'Art de Chicago
🌟 Vue d'ensemble
TestFrontQAO est une application web conçue pour explorer la collection de l'Institut d'Art de Chicago, utilisant leur API ouverte (https://api.artic.edu/docs/). L'application offre une expérience utilisateur intuitive et visuellement attrayante, conforme à la maquette Figma fournie.
✨ Fonctionnalités Principales
🔐 Authentification avec Firebase

Inscription et connexion sécurisées
Stockage des données utilisateurs dans Firebase
Utilisation du module d'authentification Firebase

🔍 Page de Recherche des Œuvres

Affichage des œuvres en grille responsive
Informations détaillées pour chaque œuvre :

🖼️ Image (via https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg)
📜 Titre de l'œuvre
👩‍🎨 Nom de l'artiste (ou "--" si non disponible)


Barre de recherche intelligente avec filtrage avancé
Pagination pour une navigation fluide

🛠️ Technologies Utilisées

🖖 Vue.js 3 : Framework frontend principal
🔥 Firebase : Authentification et gestion des utilisateurs
🎨 Tailwind CSS : Styling et responsive design
🔄 Pinia : Gestion d'état
🛣️ Vue Router : Navigation entre les pages
🌐 Axios : Communication avec l'API

🚀 Installation et Configuration

Cloner le projet :
Copygit clone https://github.com/mahmedcissokho/TestFrontQAO.git
cd TestFrontQAO

Configuration Firebase et API :
Créez un fichier .env à la racine :
CopyVITE_FIREBASE_API_KEY=votre_clé_api
VITE_FIREBASE_AUTH_DOMAIN=votre_domaine_auth
VITE_FIREBASE_PROJECT_ID=votre_id_projet
VITE_FIREBASE_STORAGE_BUCKET=votre_bucket_stockage
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_id_sender
VITE_FIREBASE_APP_ID=votre_app_id
VITE_API_URL=https://api.artic.edu/api/v1/artworks
VITE_IMAGE_URL=https://www.artic.edu/iiif/2

Installation et lancement :
bashCopynpm install
npm run dev


📊 Architecture et Performance

Structure bien patchée pour une maintenance aisée
Optimisation des performances avec Tailwind CSS
Gestion efficace de l'état avec Pinia

🌈 Améliorations Futures

🌙 Implémentation d'un mode sombre
🌍 Support multilingue
🔊 Intégration d'informations audio sur les œuvres

✅ Déjà Fait

🔐 Page d'inscription et de connexion :
• Interface utilisateur conforme à la maquette Figma
• Intégration complète avec Firebase pour l'authentification
• Gestion sécurisée des données utilisateurs
🔍 Page de recherche des œuvres :
• Affichage en grille responsive des œuvres d'art
• Implémentation de la barre de recherche avec filtrage intelligent
• Pagination pour une navigation fluide dans les résultats
• Affichage des détails de chaque œuvre (image, titre, artiste)
🎨 Design et Responsivité :
• Utilisation de Tailwind CSS pour un design moderne et responsive
• Adaptation de l'interface pour différents appareils et tailles d'écran
🏗️ Architecture du Code :
• Structure modulaire et maintenable du projet
• Utilisation efficace de Pinia pour la gestion d'état
• Implémentation des meilleures pratiques Vue.js 3

👨‍💻 Développeur
Projet réalisé par Mahomed CISSOKHO 🌟
