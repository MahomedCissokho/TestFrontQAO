<script setup>
    import logo from '../assets/logo.png'
    import SignUp from '../assets/signup.png'
</script>
  <template>
    <main class="py-4 bg-red-500  sm:py-8">
      <div class="flex flex-col max-w-6xl mx-auto lg:flex-row">
        <div class="w-full p-6 mb-8 bg-[#1A0007] rounded-lg lg:w-1/2 sm:p-8 lg:mb-0">
          <div class="max-w-md mx-auto ">
            <img :src=SignUp alt="Sign Up" class=""/>
          </div>
        </div>
        <div class="w-full p-6 lg:w-1/2 sm:p-8">
          <div class="flex flex-col items-center justify-center max-w-md mx-auto bg-red-400">
            <img :src=logo alt="Art Institute Chicago" class="w-auto h-16 mb-8">
            <h2 class="mb-4 text-2xl font-bold">Create an account</h2>
            <form class="space-y-4">
              
            </form>
            <p class="mt-4 text-sm">You Have an account! <a href="#" class="text-red-700">Sign in</a></p>
          </div>
        </div>
      </div>
    </main>
  </template>
 