<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const isDark = ref(false)

const navItems = [
  { label: 'Profil', href: '#profil', icon: '👤' },
  { label: 'Pendidikan', href: '#pendidikan', icon: '🎓' },
  { label: 'Skill', href: '#skill', icon: '🛠️' },
  { label: 'Proyek', href: '#proyek', icon: '💻' },
  { label: 'Kontak', href: '#kontak', icon: '📞' }
];
// Load saved theme
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">Rayan</div>

      <!-- Desktop -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400
          hover:-translate-y-0.5 transition-all duration-300">
            {{ item.label }}
          </a>
        </li>
        <li>
          <button @click="toggleDarkMode" class="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <!-- Moon (Dark Mode Active) -->
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>

          <!-- Sun (Light Mode Active) — Fixing alignment by adjusting `viewBox` and adding `stroke` -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12.5,18 C9.46243388,18 7,15.5375661 7,12.5 C7,9.46243388 9.46243388,7 12.5,7 C15.5375661,7 18,9.46243388 18,12.5 C18,15.5375661 15.5375661,18 12.5,18 Z M12.5,17 C14.9852814,17 17,14.9852814 17,12.5 C17,10.0147186 14.9852814,8 12.5,8 C10.0147186,8 8,10.0147186 8,12.5 C8,14.9852814 10.0147186,17 12.5,17 Z M13,5.5 C13,5.77614237 12.7761424,6 12.5,6 C12.2238576,6 12,5.77614237 12,5.5 L12,2.5 C12,2.22385763 12.2238576,2 12.5,2 C12.7761424,2 13,2.22385763 13,2.5 L13,5.5 Z M13,22.5 C13,22.7761424 12.7761424,23 12.5,23 C12.2238576,23 12,22.7761424 12,22.5 L12,19.5 C12,19.2238576 12.2238576,19 12.5,19 C12.7761424,19 13,19.2238576 13,19.5 L13,22.5 Z M17.8033009,7.90380592 C17.6080387,8.09906807 17.2914562,8.09906807 17.0961941,7.90380592 C16.9009319,7.70854378 16.9009319,7.39196129 17.0961941,7.19669914 L19.1464466,5.14644661 C19.3417088,4.95118446 19.6582912,4.95118446 19.8535534,5.14644661 C20.0488155,5.34170876 20.0488155,5.65829124 19.8535534,5.85355339 L17.8033009,7.90380592 Z M5.85355339,19.8535534 C5.65829124,20.0488155 5.34170876,20.0488155 5.14644661,19.8535534 C4.95118446,19.6582912 4.95118446,19.3417088 5.14644661,19.1464466 L7.19669914,17.0961941 C7.39196129,16.9009319 7.70854378,16.9009319 7.90380592,17.0961941 C8.09906807,17.2914562 8.09906807,17.6080387 7.90380592,17.8033009 L5.85355339,19.8535534 Z M19.5,13 C19.2238576,13 19,12.7761424 19,12.5 C19,12.2238576 19.2238576,12 19.5,12 L22.5,12 C22.7761424,12 23,12.2238576 23,12.5 C23,12.7761424 22.7761424,13 22.5,13 L19.5,13 Z M2.5,13 C2.22385763,13 2,12.7761424 2,12.5 C2,12.2238576 2.22385763,12 2.5,12 L5.5,12 C5.77614237,12 6,12.2238576 6,12.5 C6,12.7761424 5.77614237,13 5.5,13 L2.5,13 Z M17.0961941,17.8033009 C16.9009319,17.6080387 16.9009319,17.2914562 17.0961941,17.0961941 C17.2914562,16.9009319 17.6080387,16.9009319 17.8033009,17.0961941 L19.8535534,19.1464466 C20.0488155,19.3417088 20.0488155,19.6582912 19.8535534,19.8535534 C19.6582912,20.0488155 19.3417088,20.0488155 19.1464466,19.8535534 L17.0961941,17.8033009 Z M5.14644661,5.85355339 C4.95118446,5.65829124 4.95118446,5.34170876 5.14644661,5.14644661 C5.34170876,4.95118446 5.65829124,4.95118446 5.85355339,5.14644661 L7.90380592,7.19669914 C8.09906807,7.39196129 8.09906807,7.70854378 7.90380592,7.90380592 C7.70854378,8.09906807 7.39196129,8.09906807 7.19669914,7.90380592 L5.14644661,5.85355339 Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2"stroke-linecap="round"stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" /><path d="M5 5l1.5 1.5" /><path d="M17.5 17.5L19 19" />
            <path d="M2 12h2" /><path d="M20 12h2" /><path d="M5 19l1.5-1.5" /><path d="M17.5 6.5L19 5" />
          </svg>
        </button>
        </li>
      </ul>
      <!-- Burger Button (Mobile Only) -->
      <button class="md:hidden" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden px-6 pb-4 bg-white dark:bg-gray-900 shadow-md">
        <ul class="flex flex-col space-y-4">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" class="flex items-center space-x-2 text-gray-700
            dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <span>{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </a>
          </li>
          <li class="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <button @click="toggleDarkMode" class="flex items-center space-x-2" aria-label="Toggle Dark Mode">
            <span v-if="!isDark">🌞</span>
            <span v-else>🌙</span>
            <span>Dark Mode</span>
          </button>
        </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
