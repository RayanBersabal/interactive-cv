<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue'; // Asumsi Anda punya komponen
const projects = ref([]);
const API_URL = import.meta.env.PROD ? '/api/projects' : 'http://localhost:3000/api/projects';
onMounted(async () => {
try {
const response = await axios.get(API_URL);
projects.value = response.data;
} catch (error)
{
console.error('Gagal mengambil data proyek:', error);
}
});
</script>
<template>
  <section id="proyek" class="py-20 bg-white dark:bg-neutral-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
        >
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ project.description }}
            </p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full transition-colors duration-300"
              >
                {{ t }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

