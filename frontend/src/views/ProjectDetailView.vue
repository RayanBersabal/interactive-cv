
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import {
  getProjectBySlug,
  projectTitle,
  projectDescription,
  projectCategory,
  projectTechnologies,
} from '@/utils/projectCatalog'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const project = computed(() =>
  getProjectBySlug(props.slug)
)

const repositoryUrl = computed(() => {
  const value = project.value?.link

  if (typeof value !== 'string') return null

  try {
    const url = new URL(value)

    return ['https:', 'http:'].includes(url.protocol)
      ? url.href
      : null
  } catch {
    return null
  }
})

const overview = computed(() => {
  if (!project.value) return ''

  return project.value.details
    ?? project.value.longDescription
    ?? projectDescription(project.value)
})
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <div class="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
      <!-- Project detail -->
      <article
        v-if="project"
        class="pb-24 pt-12 md:pt-16"
      >
        <!-- Breadcrumb -->
        <!-- Project navigation -->
        <nav
          aria-label="Project navigation"
          class="flex flex-wrap items-center justify-between gap-4"
        >
          <!-- Back to homepage projects section -->
          <RouterLink
            to="/#proyek"
            class="group inline-flex items-center gap-2
                  text-sm font-medium text-muted
                  transition-colors hover:text-accent
                  focus-visible:rounded
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-accent"
          >
            <svg
              class="h-4 w-4 shrink-0 transition-transform
                    duration-200 group-hover:-translate-x-1"
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

            Back to Projects
          </RouterLink>

          <!-- Project archive -->
          <RouterLink
            to="/projects"
            class="group inline-flex items-center gap-2
                  text-sm font-medium text-muted
                  transition-colors hover:text-accent
                  focus-visible:rounded
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-accent"
          >
            All Projects

            <svg
              class="h-4 w-4 shrink-0 transition-transform
                    duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </RouterLink>
        </nav>


        <!-- Project heading -->
        <header class="mt-14 border-b border-border pb-12">
          <div
            class="mb-6 flex flex-wrap items-center
                   gap-3"
          >
            <span
              class="font-mono text-xs uppercase
                     tracking-widest text-accent"
            >
              {{ projectCategory(project) }}
            </span>

            <span
              v-if="project.status"
              class="rounded-md border border-border
                     bg-surface px-3 py-1
                     font-mono text-xs text-muted"
            >
              {{ project.status }}
            </span>
          </div>

          <h1
            class="max-w-3xl text-4xl font-semibold
                   tracking-tight sm:text-5xl
                   lg:text-6xl"
          >
            {{ projectTitle(project)
            }}<span class="text-accent">.</span>
          </h1>

          <p
            class="mt-7 max-w-2xl text-base leading-8
                   text-muted sm:text-lg"
          >
            {{ projectDescription(project) }}
          </p>
        </header>

        <!-- Project metadata -->
        <section
          class="grid gap-8 border-b border-border
                 py-10 md:grid-cols-2"
          aria-label="Project metadata"
        >
          <div>
            <p
              class="mb-4 font-mono text-xs
                     uppercase tracking-widest
                     text-secondary"
            >
              PROJECT / CATEGORY
            </p>

            <p class="text-base font-medium">
              {{ projectCategory(project) }}
            </p>
          </div>

          <div>
            <p
              class="mb-4 font-mono text-xs
                     uppercase tracking-widest
                     text-secondary"
            >
              TECHNOLOGY STACK
            </p>

            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tech in projectTechnologies(project)"
                :key="tech"
                class="rounded-md border border-border
                       bg-surface px-3 py-2
                       font-mono text-xs text-muted"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Overview -->
        <section class="mt-16">
          <p
            class="mb-5 font-mono text-xs uppercase
                   tracking-widest text-secondary"
          >
            PROJECT / OVERVIEW
          </p>

          <h2
            class="text-2xl font-semibold tracking-tight
                   sm:text-3xl"
          >
            About this project<span class="text-accent">.</span>
          </h2>

          <p
            class="mt-6 max-w-3xl whitespace-pre-line
                   text-base leading-8 text-muted"
          >
            {{ overview }}
          </p>
        </section>

        <!-- Project links -->
        <section
          class="mt-16 border-t border-border pt-8"
          aria-label="Project links"
        >
          <p
            class="mb-5 font-mono text-xs
                   uppercase tracking-widest
                   text-secondary"
          >
            PROJECT / LINKS
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <!-- Repository -->
            <a
              v-if="repositoryUrl"
              :href="repositoryUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex min-h-12 items-center
                     justify-center gap-3 rounded-md
                     bg-foreground px-5 py-3
                     text-sm font-medium text-background
                     transition-opacity hover:opacity-85"
            >
              View Repository

              <svg
                class="h-4 w-4 transition-transform
                       group-hover:-translate-y-0.5
                       group-hover:translate-x-0.5"
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
            </a>

            <!-- No repository yet -->
            <span
              v-else
              class="font-mono text-sm text-muted"
            >
              Repository not publicly available
            </span>
          </div>
        </section>
        <!-- Project footer -->
        <div
          class="mt-20 flex items-center justify-end
                border-t border-border pt-6">
          <span
            class="font-mono text-xs uppercase
                  tracking-wider text-secondary">
            END / PROJECT DETAIL
          </span>
        </div>
      </article>

      <!-- Project not found -->
      <section
        v-else
        class="py-28 text-center"
      >
        <p
          class="font-mono text-xs uppercase
                 tracking-widest text-accent"
        >
          404 / PROJECT NOT FOUND
        </p>

        <h1
          class="mt-5 text-3xl font-semibold
                 tracking-tight sm:text-4xl"
        >
          Project not found<span class="text-accent">.</span>
        </h1>

        <p class="mt-5 text-sm text-muted">
          The requested project does not exist in this portfolio.
        </p>

        <RouterLink
          to="/projects"
          class="mt-8 inline-flex items-center gap-2
                 text-sm font-medium text-foreground
                 underline underline-offset-4
                 transition-colors hover:text-accent"
        >
          Return to all projects
        </RouterLink>
      </section>
    </div>
  </main>
</template>
