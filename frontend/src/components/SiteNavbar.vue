
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { label: 'About', href: '#profil' },
  { label: 'Education', href: '#pendidikan' },
  { label: 'Skills', href: '#skill' },
  { label: 'Work', href: '#proyek' },
  { label: 'Contact', href: '#kontak' },
]

function syncTheme() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  isDark.value = !isDark.value

  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  document.documentElement.classList.toggle(
    'dark',
    savedTheme === 'dark' || (!savedTheme && prefersDark)
  )

  syncTheme()
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5
             sm:px-8 lg:px-12"
      aria-label="Main navigation"
    >
      <!-- Brand -->
      <a
        href="#profil"
        class="flex items-center gap-3"
        @click="closeMenu"
      >
        <span
          class="flex h-10 w-10 items-center justify-center
                 rounded-md bg-foreground text-sm font-bold text-background"
        >
          RB.
        </span>

        <div class="flex flex-col leading-tight">
          <span class="text-sm font-semibold tracking-wide text-foreground">
            PORTFOLIO
          </span>
          <span class="font-mono text-[10px] tracking-wider text-muted">
            SOFTWARE / HARDWARE
          </span>
        </div>
      </a>

      <!-- Desktop navigation -->
      <div class="hidden items-center gap-7 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-muted transition-colors
                 hover:text-accent focus-visible:rounded
                 focus-visible:outline-2 focus-visible:outline-offset-4
                 focus-visible:outline-accent"
        >
          {{ item.label }}
        </a>

        <span class="h-6 w-px bg-border" aria-hidden="true"></span>

        <button
          type="button"
          @click="toggleTheme"
          class="flex h-10 w-10 items-center justify-center rounded-md
                 border border-border text-foreground transition-colors
                 hover:bg-elevated focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-accent"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <!-- Moon -->
          <svg
            v-if="!isDark"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20.985 12.486A9 9 0 0 1 11.514 3.015 9 9 0 1 0 20.985 12.486Z" />
          </svg>

          <!-- Sun -->
          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M6.35 17.65l-1.42 1.42M19.07 4.93l-1.42 1.42" />
          </svg>
        </button>
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          @click="toggleTheme"
          class="flex h-10 w-10 items-center justify-center
                 rounded-md border border-border text-foreground"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span aria-hidden="true">{{ isDark ? '☀' : '☾' }}</span>
        </button>

        <button
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          class="flex h-10 w-10 items-center justify-center
                 rounded-md border border-border text-foreground"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path v-if="isMenuOpen" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile navigation -->
    <div
      v-if="isMenuOpen"
      id="mobile-navigation"
      class="border-t border-border bg-surface px-5 pb-5 md:hidden"
    >
      <div class="flex flex-col gap-1 pt-3">
        <a
          v-for="(item, index) in navItems"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
          class="flex items-center justify-between rounded-md px-3
                 py-3 text-sm text-foreground hover:bg-elevated"
        >
          <span>{{ item.label }}</span>
          <span class="font-mono text-xs text-muted">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </a>
      </div>
    </div>
  </header>
</template>
