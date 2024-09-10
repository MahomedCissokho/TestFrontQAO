<script setup>
    import logovariant from '../assets/logovariant.png'
    import facebook from '../assets/facebook.png'
    import twitter from '../assets/twitter.png'
    import instagram from '../assets/instagram.png'
    import youtube from '../assets/youtube.png'
</script> 

  <template>
    <footer class="p-4 text-white bg-[#1A0007] rounded-t-2xl">
      <div class="flex flex-col items-center justify-between max-w-6xl mx-auto sm:flex-row">
        <div class="flex items-center mb-4 sm:mb-0">
          <img :src=logovariant alt="Art Institute Chicago" class="w-auto h-8 mr-2">
          <span class=" font-light text-[#FFF2F5]">ART INSTITUTE CHICAGO</span>
        </div>
        <div class="flex items-center justify-center space-x-4 ">
           <span class="p-1 border border-white rounded-lg"><img :src=facebook alt="facebook" class="w-4 h-4"></span>
           <span class="p-1 border border-white rounded-lg" ><img :src=twitter alt="twitter" class="w-4 h-4"></span>
           <span class="p-1 border border-white rounded-lg"><img :src=youtube alt="youtube" class="w-4 h-4"></span>
           <span class="p-1 border border-white rounded-lg"> <img :src=instagram alt="instagram" class="w-4 h-4"></span>
         
        </div>
      </div>
    </footer>
</template>