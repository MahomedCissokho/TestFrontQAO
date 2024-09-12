# 🎨 TestFrontQAO : Explorateur d'Art de Chicago

## 🌟 Vue d'ensemble
**TestFrontQAO** est une application web conçue pour explorer la collection de l'**Institut d'Art de Chicago**, en utilisant leur API ouverte ([Documentation de l'API](https://api.artic.edu/docs/)). L'application offre une expérience utilisateur fluide et visuellement attrayante, conforme à la maquette **Figma** fournie.

---

## ✨ Fonctionnalités principales

### 🔐 Authentification avec Firebase
- Inscription et connexion sécurisées
- Stockage des données utilisateurs dans **Firebase**
- Intégration complète du module d'authentification Firebase

### 🔍 Page de recherche des œuvres
- Affichage des œuvres sous forme de grille responsive
- Informations détaillées pour chaque œuvre :
  - 🖼️ **Image** (via `https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg`)
  - 📜 **Titre de l'œuvre**
  - 👩‍🎨 **Nom de l'artiste** (ou `--` si non disponible)
- Barre de recherche intelligente avec filtrage avancé
- Pagination pour une navigation fluide

---

## 🛠️ Technologies utilisées
- **🖖 Vue.js 3** : Framework frontend principal
- **🔥 Firebase** : Authentification et gestion des utilisateurs
- **🎨 Tailwind CSS** : Design et responsive
- **🔄 Pinia** : Gestion de l'état global
- **🛣️ Vue Router** : Navigation entre les pages
- **🌐 Axios** : Communication avec l'API

---

## 🚀 Installation et configuration

### Cloner le projet :
```bash
git clone https://github.com/mahomedcissokho/TestFrontQAO.git
cd TestFrontQAO
```

### Configurer Firebase et l'API :
Créez un fichier `.env` à la racine du projet contenant les informations suivantes :
```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_API_URL=
VITE_IMAGE_URL=
```

### Installer les dépendances et lancer l'application :
```bash
npm install
npm run dev
```

---

## 📊 Architecture et performances
- Structure bien pensée pour faciliter la maintenance
- Optimisation des performances avec **Tailwind CSS**
- Gestion efficace de l'état global avec **Pinia**

---

## 🌈 Améliorations futures
- 🌙 Mode sombre
- 🌍 Support multilingue
- 🔊 Intégration d'informations audio sur les œuvres

---

## ✅ Déjà implémenté
### 🔐 Authentification et inscription :
- Interface conforme à la maquette **Figma**
- Intégration complète avec **Firebase** pour l'authentification
- Gestion sécurisée des utilisateurs
### 🔍 Recherche d'œuvres d'art :
- Affichage en grille responsive
- Barre de recherche avec filtrage intelligent selon **L'id ou le titre de l'oeuvre, l'artiste ou encore le theme**
- Pagination fluide
- Détails de chaque œuvre : image, titre, artiste
### 🎨 Design responsive :
- Utilisation de **Tailwind CSS** pour un design moderne et adaptatif
- Interface adaptée à différents appareils
### 🏗️ Architecture du code :
- Structure du projet maintenable
- Utilisation efficace de **Pinia** pour la gestion d'état
- Implémentation des bonnes pratiques avec **Vue.js 3**

---

## 👨‍💻 Développeur
Projet réalisé par **Mahomed CISSOKHO** 🌟
