
<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects.js'

defineOptions({
  name: 'FeaturedProjects',
})

const themes = {
  hardware: {
    background: '#353C37',
    foreground: '#E5A16D',
    border: '#566159',
  },
  research: {
    background: '#DDE4D6',
    foreground: '#526E51',
    border: '#C0CFB9',
  },
  web: {
    background: '#DCD6CD',
    foreground: '#786A5C',
    border: '#C5B9A9',
  },
  portfolio: {
    background: '#D8DDD9',
    foreground: '#566C61',
    border: '#BECBC2',
  },
}

function getTheme(name) {
  return themes[name] ?? themes.portfolio
}

function formatNumber(number) {
  return String(number).padStart(2, '0')
}
</script>

<template>
  <section
    id="proyek"
    aria-labelledby="projects-heading"
    class="scroll-mt-24 border-t border-border py-20 md:py-28"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

      <!-- Section header -->
      <div
        class="mb-10 flex flex-col justify-between gap-5
               border-b border-border pb-7
               md:mb-12 md:flex-row md:items-end"
      >
        <div>
          <p
            class="mb-4 font-mono text-xs font-medium
                   uppercase tracking-widest text-secondary"
          >
            05 / SELECTED WORK
          </p>

          <h2
            id="projects-heading"
            class="text-3xl font-semibold tracking-tight
                   text-foreground sm:text-4xl"
          >
            Projects &amp; Experiments<span class="text-accent">.</span>
          </h2>

          <p
            class="mt-4 max-w-xl text-sm leading-relaxed
                   text-muted sm:text-base"
          >
            A collection of software projects, embedded
            experiments, and research work.
          </p>
        </div>

        <div class="font-mono text-xs text-muted">
          SELECTED / {{ formatNumber(projects.length) }}
        </div>
      </div>

      <!-- Project grid -->
      <div class="grid gap-5 md:grid-cols-2 lg:gap-7">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="group flex min-w-0 flex-col overflow-hidden
                 rounded-xl border border-border bg-surface
                 transition-colors duration-200
                 hover:border-secondary"
        >
          <!-- Project visual -->
          <div
            class="relative flex aspect-[16/9] items-center
                   justify-center overflow-hidden
                   border-b border-border"
            :style="{
              backgroundColor: getTheme(project.theme).background,
              color: getTheme(project.theme).foreground,
            }"
          >
            <!-- Engineering grid -->
            <div
              class="pointer-events-none absolute inset-0 opacity-15"
              :style="{
                backgroundImage:
                  'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }"
              aria-hidden="true"
            ></div>

            <!-- Project visual label -->
            <span
              class="relative font-mono text-5xl font-bold
                     tracking-tighter sm:text-6xl"
              aria-hidden="true"
            >
              {{ project.visual }}
            </span>

            <!-- Project index -->
            <span
              class="absolute left-4 top-4 rounded border
                     px-2 py-1 font-mono text-[10px] uppercase"
              :style="{
                borderColor: getTheme(project.theme).border,
              }"
            >
              PROJECT / {{ formatNumber(index + 1) }}
            </span>

            <!-- Category -->
            <span
              class="absolute bottom-4 right-4 font-mono
                     text-[10px] uppercase tracking-wider"
            >
              {{ project.category }}
            </span>
          </div>

          <!-- Project information -->
          <div class="flex flex-1 flex-col p-5 sm:p-7">

            <!-- Category and status -->
            <div class="mb-3 flex flex-wrap items-center gap-2">
              <span
                class="font-mono text-[11px] uppercase
                       tracking-wide text-secondary"
              >
                {{ project.category }}
              </span>

              <span
                v-if="project.status"
                class="rounded border border-border
                       bg-elevated px-2 py-0.5
                       text-[10px] font-medium text-muted"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- Title -->
            <h3
              class="text-xl font-semibold tracking-tight
                     text-foreground sm:text-2xl"
            >
              <RouterLink
                :to="`/projects/${project.id}`"
                class="transition-colors hover:text-accent
                       focus-visible:rounded
                       focus-visible:outline-2
                       focus-visible:outline-offset-4
                       focus-visible:outline-accent"
              >
                {{ project.title }}
              </RouterLink>
            </h3>

            <!-- Description -->
            <p
              class="mt-3 flex-1 text-sm leading-relaxed
                     text-muted"
            >
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <ul
              class="mt-6 flex flex-wrap gap-2"
              :aria-label="`Technologies used for ${project.title}`"
            >
              <li
                v-for="tech in project.tech"
                :key="tech"
                class="rounded border border-border px-2.5 py-1
                       font-mono text-[11px] text-muted"
              >
                {{ tech }}
              </li>
            </ul>

            <!-- Project footer -->
            <div
              class="mt-6 flex flex-wrap items-center
                     justify-between gap-4
                     border-t border-border pt-5"
            >
              <!-- Project counter -->
              <span class="font-mono text-[10px] text-muted">
                {{ formatNumber(index + 1) }}
                / {{ formatNumber(projects.length) }}
              </span>

              <!-- Actions -->
              <div
                class="flex flex-wrap items-center
                       gap-x-5 gap-y-3"
              >
                <!-- Internal detail page -->
                <RouterLink
                  :to="`/projects/${project.id}`"
                  class="group/link inline-flex items-center
                         gap-2 text-sm font-medium
                         text-foreground transition-colors
                         hover:text-accent
                         focus-visible:rounded
                         focus-visible:outline-2
                         focus-visible:outline-offset-4
                         focus-visible:outline-accent"
                  :aria-label="`View details for ${project.title}`"
                >
                  View Details

                  <svg
                    class="h-4 w-4 shrink-0
                           transition-transform duration-200
                           group-hover/link:translate-x-0.5"
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

                <!-- External repository -->
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/link inline-flex items-center
                         gap-2 text-sm font-medium
                         text-muted transition-colors
                         hover:text-accent
                         focus-visible:rounded
                         focus-visible:outline-2
                         focus-visible:outline-offset-4
                         focus-visible:outline-accent"
                  :aria-label="`View ${project.title} repository (opens in new tab)`"
                >
                  Repository

                  <svg
                    class="h-4 w-4 shrink-0
                           transition-transform duration-200
                           group-hover/link:-translate-y-0.5
                           group-hover/link:translate-x-0.5"
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
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- View all projects -->
      <div
        class="mt-10 flex flex-wrap items-center
               justify-between gap-4
               border-t border-border pt-6"
      >
        <RouterLink
          to="/projects"
          class="group/link inline-flex items-center gap-3
                 text-sm font-medium text-foreground
                 transition-colors hover:text-accent
                 focus-visible:rounded
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-accent"
        >
          View All Projects

          <svg
            class="h-4 w-4 transition-transform duration-200
                   group-hover/link:translate-x-1"
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

        <span class="font-mono text-xs text-secondary">
          END / SELECTED WORK
        </span>
      </div>
    </div>
  </section>
</template>
