<script setup>
import logo from '../../assets/logo.png';
import SignUp from '../../assets/signup.png';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import user from '../../assets/username.png';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref("");
const mail = ref("");
const passWord = ref("");
const confirmPassword = ref("");
const router = useRouter();
const auth = getAuth();

const register = async () => {
  if (mail.value === "" || confirmPassword.value === "" || name.value === "") {
    alert("Please fill all the fields");
  } else if (passWord.value !== confirmPassword.value) {
    alert("Passwords do not match");
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, mail.value, passWord.value);
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: name.value,
      });

      console.log("User created successfully", user);
      router.push("/signin");
    } catch (error) {
      console.error("Error creating user:", error.message);
      alert("Failed to create account: " + error.message);
    }
  }
};
</script>

<template>
  <main class="w-full min-h-screen py-4 mx-auto overflow-hidden sm:py-8">
    <div class="w-full bg-[#FFDAE4] shadow-inner rounded-tl-2xl h-4 sm:h-8"></div>
    <div class="flex flex-col w-full mx-auto lg:flex-row">
      <div class="w-full p-4 mb-8 bg-[#1A0007] rounded-tr-2xl rounded-br-2xl lg:w-1/2 sm:p-8 lg:mb-0">
        <div class="max-w-md mx-auto">
          <img :src="SignUp" alt="Sign Up" class="w-full h-auto" />
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/2 sm:p-8 lg:ml-8">
        <div class="flex flex-col items-center justify-center max-w-md mx-auto">
          <img :src="logo" alt="Art Institute Chicago" class="w-auto h-12 mb-6 sm:h-16 sm:mb-8">
          <h2 class="mb-4 text-xl font-bold sm:text-2xl">Create an account</h2>
          <form class="w-full space-y-4">
            <div class="relative">
              <label class="block mb-1 text-sm font-semibold sm:text-base" for="name">Name</label>
              <input id="name" type="text" placeholder="Enter your name" v-model="name"
                class="placeholder:pl-5 w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder-[#1A0007]/70 placeholder:font-medium text-sm sm:text-base"
                autocomplete="none">
              <img class="absolute w-4 h-4 text-gray-400 transform sm:w-5 sm:h-5 left-3 top-9 sm:top-10" :src="user"
                alt="User Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 text-sm font-semibold sm:text-base" for="mail">Email</label>
              <input id="mail" v-model="mail" type="email" placeholder="Enter your email address"
                class="placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder:pl-5 text-sm sm:text-base">
              <img class="absolute w-4 h-3 transform sm:w-5 sm:h-4 top-9 sm:top-10 left-3" :src="email" alt="Email Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 text-sm font-semibold sm:text-base" for="passWord">Password</label>
              <input id="passWord" v-model="passWord" type="password" placeholder="Enter your password"
                class="placeholder:pl-5 placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none text-sm sm:text-base">
              <img class="absolute w-3 h-4 text-gray-400 transform sm:w-4 sm:h-5 left-3 top-9 sm:top-10" :src="password"
                alt="Password Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 text-sm font-semibold sm:text-base" for="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirm your password"
                class="placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder:pl-5 text-sm sm:text-base">
              <img class="absolute w-3 h-4 text-gray-400 transform sm:w-4 sm:h-5 left-3 top-9 sm:top-10" :src="password"
                alt="Password Icon" />
            </div>
            <div class="flex items-center justify-between my-4">
              <div class="w-2/5 border-t border-[#F1B5C5]"></div>
              <span class="mx-2 text-sm text-[#F1B5C5]">or</span>
              <div class="w-2/5 border-t border-[#F1B5C5]"></div>
            </div>
            <button @click.prevent="register"
              class="w-full p-2 text-white rounded-md bg-[#B20937] hover:bg-[#9d0831] transition-all duration-300 ease-in-out text-sm sm:text-base">Register</button>
          </form>
          
          <p class="flex flex-col items-center justify-center gap-2 mt-4 text-sm sm:flex-row sm:gap-7">
            <span>Already have an account?</span>
            <a href="/login" class="text-[#B20937] font-semibold">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 1023px) {
  .rounded-tr-2xl,
  .rounded-br-2xl {
    border-radius: 0;
  }
}
</style>