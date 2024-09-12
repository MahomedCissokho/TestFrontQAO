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
  <main class="w-full py-4 mx-auto overflow-hidden sm:py-8">
    <div class="w-screen bg-[#FFDAE4] shadow-inner rounded-tl-2xl">
    </div>
    <div class="flex flex-col w-full mx-auto lg:flex-row">
      <div class="w-full p-6 mb-8 bg-[#1A0007] rounded-tr-2xl rounded-br-2xl lg:w-1/2 sm:p-8 lg:mb-0">
        <div class="max-w-md mx-auto">
          <img :src="SignUp" alt="Sign Up" class="w-full h-auto" />
        </div>
      </div>
      <div class="w-full p-6 ml-40 lg:w-1/2 sm:p-8">
        <div class="flex flex-col items-center justify-center max-w-md mx-auto">
          <img :src="logo" alt="Art Institute Chicago" class="w-auto h-16 mb-8">
          <h2 class="mb-4 text-2xl font-bold">Create an account</h2>
          <form class="w-full space-y-4">
            <div class="relative">
              <label class="block mb-1 font-semibold" for="name">Name</label>
              <input id="name" type="text" placeholder="Enter your name" v-model="name"
                class="placeholder:pl-5 w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder-[#1A0007]/70 placeholder:font-medium"
                autocomplete="none">
              <img class="absolute w-5 h-5 text-gray-400 transform left-3 -translate-y-[2rem]" :src=user
                alt="User Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 font-semibold" for="mail">Email</label>
              <input id="mail" v-model="mail" type="email" placeholder="Enter your email address"
                class="placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder:pl-5">
              <img class="absolute w-5 h-4 transform -translate-y-[1.8rem] left-3" :src=email alt="Email Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 font-semibold" for="passWord">Password</label>
              <input id="passWord" v-model="passWord" type="password" placeholder="Enter your password"
                class="placeholder:pl-5 placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none">
              <img class="absolute w-4 h-5 text-gray-400 transform left-3 top-1/2 translate-y-[.1rem]" :src=password
                alt="Password Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 font-semibold" for="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirm your password"
                class="placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder:pl-5">
              <img class="absolute w-4 h-5 text-gray-400 transform translate-y-[.1rem] left-3 top-1/2" :src=password
                alt="Password Icon" />
            </div>
            <div class="flex items-center justify-between my-4">
              <div class="w-2/5 border-t border-[#F1B5C5]"></div>
              <span class="mx-2 text-[#F1B5C5]">or</span>
              <div class="w-2/5 border-t border-[#F1B5C5]"></div>
            </div>
            <button @click.prevent="register"
              class="w-full p-2 text-white rounded-md bg-[#B20937] hover:bg-[#9d0831] transition-all duration-300 ease-in-out">Register</button>
          </form>
          
          <p class="flex items-center justify-center mt-4 text-sm gap-7"><span class="">Already have an account?</span><a
              href="/login" class="text-[#B20937] font-semibold">Sign in</a></p>
        </div>
      </div>
    </div>
  </main>
</template>
