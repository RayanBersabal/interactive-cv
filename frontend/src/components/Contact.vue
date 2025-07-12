<script setup>
import SectionTitle from './SectionTitle.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

      <a
        href="mailto:rayanbersabal@gmail.com"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8">
        <!-- GitHub -->
        <a
          href="https://github.com/RayanBersabal"
          target="_blank"
          class="hover:text-white transition-colors duration-300"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            class="w-6 h-6 invert"
          />
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          class="hover:text-white transition-colors duration-300"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
            alt="Instagram"
            class="w-6 h-6 invert"
          />
        </a>
      </div>
      <p class="text-gray-500 text-sm">
        &copy; {{ year }} Rayan Bersabal. Dibuat dengan Vue.js dan Tailwind CSS
      </p>
    </div>
  </footer>
</template>
