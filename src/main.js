
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './style.css'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtEyhcrjv9OxbMUCpscu2nBDeroZ3IdLk",
  authDomain: "galery-bea7f.firebaseapp.com",
  projectId: "galery-bea7f",
  storageBucket: "galery-bea7f.appspot.com",
  messagingSenderId: "650748747345",
  appId: "1:650748747345:web:b0cbf2b286934f62c4a270",
  measurementId: "G-LPSXBF2XFB"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
