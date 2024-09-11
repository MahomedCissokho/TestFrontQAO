<script setup>
import { ref } from 'vue'
import logo from '../../assets/logo.png'
import SignIn from '../../assets/signin.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const mail = ref("")
const passWord = ref("")
const rememberMe = ref(false)
const router = useRouter()
const auth = getAuth()

const signIn = async() => {
  if (mail.value === "" || passWord.value === "") {
    alert("Please fill all the fields")
    return
  }

  await signInWithEmailAndPassword(auth, mail.value, passWord.value)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("User signed in successfully:", user)
      router.push("/")
    })
    .catch((error) => {
      console.error("Error signing in:", error.message)
      alert("Invalid email or password. Please try again.")
    })
}
</script>

<template>
  <main class="w-full py-4 mx-auto overflow-hidden sm:py-8">
    <div class="w-screen bg-[#FFDAE4] shadow-inner rounded-tl-2xl">
    </div>
    <div class="flex flex-col w-full mx-auto lg:flex-row">
      <div class="w-full p-6 mb-8 bg-[#1A0007] rounded-tr-2xl rounded-br-2xl lg:w-1/2 sm:p-8 lg:mb-0">
        <div class="max-w-md mx-auto">
          <img :src="SignIn" alt="Sign In" class="w-full h-auto" />
        </div>
      </div>
      <div class="w-full p-6 ml-40 lg:w-1/2 sm:p-8">
        <div class="flex flex-col items-center justify-center max-w-md mx-auto">
          <img :src="logo" alt="Art Institute Chicago" class="w-auto h-16 mb-8">
          <h2 class="mb-4 text-2xl font-bold">Hello! Welcome back</h2>
          <form class="w-full space-y-4" @submit.prevent="signIn">
            <div class="relative">
              <label class="block mb-1 font-semibold" for="mail">Email</label>
              <input id="mail" v-model="mail" type="email" placeholder="Enter your email address"
                class="placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none placeholder:pl-5">
              <img class="absolute w-5 h-4 transform -translate-y-[1.8rem] left-3" :src="email" alt="Email Icon" />
            </div>
            <div class="relative">
              <label class="block mb-1 font-semibold" for="passWord">Password</label>
              <input id="passWord" v-model="passWord" type="password" placeholder="Enter your password"
                class="placeholder:pl-5 placeholder-[#1A0007]/70 placeholder:font-medium w-full p-2 pl-10 border border-[#F1B5C5] rounded-md focus:outline-none">
              <img class="absolute w-4 h-5 text-gray-400 transform left-3 top-1/2 translate-y-[.1rem]" :src="password"
                alt="Password Icon" />
            </div>
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" v-model="rememberMe" class="mr-2">
                <span>Remember me</span>
              </label>
              <a href="#" class="text-[#B20937] hover:underline">Reset Password</a>
            </div>
            <button
              class="w-full p-2 text-white transition duration-300 rounded-md bg-[#B20937] hover:bg-[#9d0831] ease-in-out">Login</button>
          </form>
          <div class="flex items-center justify-between w-full my-5 ">
            <div class="w-2/5 border-t border-[#F1B5C5]"></div>
            <span class="mx-2 text-[#F1B5C5]">or</span>
            <div class="w-2/5 border-t border-[#F1B5C5]"></div>
          </div>
          <p class="flex items-center justify-center mt-4 text-sm gap-7">
            <span>Don't Have an account?</span>
            <a href="/signup" class="text-[#B20937] font-semibold">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
