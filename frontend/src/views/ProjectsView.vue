
<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  projects,
  projectSlug,
  projectTitle,
  projectDescription,
  projectCategory,
  projectTechnologies,
} from '../utils/projectCatalog'

const selectedCategory = ref('All')

const categories = computed(() => [
  'All',
  ...new Set(projects.map(projectCategory)),
])

const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects
    : projects.filter(
        project => projectCategory(project) === selectedCategory.value
      )
)
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

      <RouterLink
        to="/#proyek"
        class="group mt-10 inline-flex items-center gap-2
              text-sm text-muted transition-colors hover:text-accent"
      >
        <svg
          class="h-4 w-4 transition-transform
                group-hover:-translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>

        Back to Selected Work
      </RouterLink>


      <section class="pb-12 pt-10 md:pb-16 md:pt-14">
        <p class="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-accent">
          Portfolio / Project Archive
        </p>

        <h1 class="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Selected work<span class="text-accent">.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-base leading-8 text-muted">
          A collection of software, web, and hardware projects —
          from experiments and prototypes to working applications.
        </p>

        <div class="mt-12 flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :aria-pressed="selectedCategory === category"
            class="rounded-full border px-4 py-2 text-sm transition-colors"
            :class="
              selectedCategory === category
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted hover:border-foreground hover:text-foreground'
            "
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <section
        class="grid gap-5 pb-24 md:grid-cols-2"
        aria-label="Project archive"
      >
        <RouterLink
          v-for="(project, index) in filteredProjects"
          :key="projectSlug(project)"
          :to="`/projects/${projectSlug(project)}`"
          class="group flex min-h-72 flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
        >
          <div class="flex items-start justify-between gap-3">
            <span class="font-mono text-xs text-muted">
              PROJECT / {{ String(index + 1).padStart(2, '0') }}
            </span>

            <svg
              class="h-5 w-5 text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>

          <div class="mt-auto pt-16">
            <p class="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              {{ projectCategory(project) }}
            </p>

            <h2 class="text-2xl font-semibold tracking-tight">
              {{ projectTitle(project) }}
            </h2>

            <p class="mt-3 line-clamp-3 text-sm leading-7 text-muted">
              {{ projectDescription(project) }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="technology in projectTechnologies(project).slice(0, 5)"
                :key="technology"
                class="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </RouterLink>

        <p
          v-if="filteredProjects.length === 0"
          class="col-span-full py-12 text-muted"
        >
          No projects available in this category.
        </p>
      </section>

      <footer class="border-t border-border py-6 text-xs text-muted">
        © {{ new Date().getFullYear() }} · Portfolio
      </footer>
    </div>
  </main>
</template>
