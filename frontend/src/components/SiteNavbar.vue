
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isMenuOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { label: 'Home', to: '/#profil', number: '01' },
  { label: 'About', to: '/#tentang', number: '02' },
  { label: 'Background', to: '/#pendidikan', number: '03' },
  { label: 'Skills', to: '/#skill', number: '04' },
  { label: 'Projects', to: '/#proyek', number: '05' },
  { label: 'Contact', to: '/#kontak', number: '06' },
]

function isActive(item) {
  if (item.label === 'Projects') {
    return (
      route.path.startsWith('/projects') ||
      (route.path === '/' && route.hash === '#proyek')
    )
  }

  return route.path === '/' && route.hash === item.to.slice(1)
}

function syncTheme() {
  isDark.value =
    document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  isDark.value = !isDark.value

  document.documentElement.classList.toggle(
    'dark',
    isDark.value
  )

  localStorage.setItem(
    'theme',
    isDark.value ? 'dark' : 'light'
  )
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  document.documentElement.classList.toggle(
    'dark',
    savedTheme === 'dark' ||
      (!savedTheme && prefersDark)
  )

  syncTheme()
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

watch(
  () => route.fullPath,
  closeMenu
)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      aria-label="Main navigation"
    >
      <!-- Brand -->
      <RouterLink
        to="/#profil"
        class="flex items-center gap-3"
        aria-label="RB Portfolio - Home"
        @click="closeMenu"
      >
        <span
          class="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
        >
          RB.
        </span>

        <div class="flex flex-col leading-tight">
          <span
            class="text-sm font-semibold tracking-wide text-foreground"
          >
            PORTFOLIO
          </span>

          <span
            class="font-mono text-[10px] tracking-wider text-muted"
          >
            SOFTWARE / HARDWARE
          </span>
        </div>
      </RouterLink>

      <!-- Desktop navigation -->
      <div class="hidden items-center gap-5 md:flex lg:gap-7">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium transition-colors focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          :class="
            isActive(item)
              ? 'text-accent'
              : 'text-muted hover:text-accent'
          "
          :aria-current="isActive(item) ? 'page' : undefined"
        >
          {{ item.label }}
        </RouterLink>

        <span
          class="h-6 w-px bg-border"
          aria-hidden="true"
        ></span>

        <!-- Desktop theme toggle -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
          @click="toggleTheme"
        >
          <!-- Moon -->
          <svg
            v-if="!isDark"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M20.985 12.486A9 9 0 0 1 11.514 3.015 9 9 0 1 0 20.985 12.486Z"
            />
          </svg>

          <!-- Sun -->
          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M6.35 17.65l-1.42 1.42M19.07 4.93l-1.42 1.42"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-2 md:hidden">
        <!-- Mobile theme toggle -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-elevated"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <svg
            v-if="!isDark"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M20.985 12.486A9 9 0 0 1 11.514 3.015 9 9 0 1 0 20.985 12.486Z"
            />
          </svg>

          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M6.35 17.65l-1.42 1.42M19.07 4.93l-1.42 1.42"
            />
          </svg>
        </button>

        <!-- Hamburger -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-elevated"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path
              v-if="isMenuOpen"
              d="M6 6l12 12M18 6L6 18"
            />
            <path
              v-else
              d="M4 7h16M4 12h16M4 17h16"
            />
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
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center justify-between rounded-md px-3 py-3 text-sm transition-colors"
          :class="
            isActive(item)
              ? 'bg-elevated text-accent'
              : 'text-foreground hover:bg-elevated'
          "
          :aria-current="isActive(item) ? 'page' : undefined"
          @click="closeMenu"
        >
          <span>{{ item.label }}</span>

          <span class="font-mono text-xs text-muted">
            {{ item.number }}
          </span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
