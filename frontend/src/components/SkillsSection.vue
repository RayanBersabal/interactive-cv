
<script setup>
import { skillGroups, developmentTools } from '@/data/skills.js'
</script>

<template>
  <section
    id="skill"
    aria-labelledby="skills-title"
    class="scroll-mt-24 border-t border-border py-20 md:py-28"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <!-- Header -->
      <div
        class="mb-10 flex flex-col justify-between gap-4
               border-b border-border pb-7 md:flex-row md:items-end"
      >
        <div>
          <p
            class="mb-4 font-mono text-xs uppercase
                   tracking-widest text-secondary"
          >
            04 / Skills & Technologies
          </p>

          <h2
            id="skills-title"
            class="text-3xl font-semibold tracking-tight
                   text-foreground sm:text-4xl"
          >
            Tools I work with<span class="text-accent">.</span>
          </h2>

          <p class="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Technologies I've used in projects, coursework,
            and personal experiments.
          </p>
        </div>

        <span class="font-mono text-xs text-muted">
          TECH STACK / OVERVIEW
        </span>
      </div>

      <!-- Categories -->
      <div class="grid gap-5 md:grid-cols-2 lg:gap-7">
        <article
          v-for="group in skillGroups"
          :key="group.id"
          class="flex flex-col rounded-xl border border-border
                 bg-surface p-6 transition-colors
                 hover:border-secondary sm:p-7"
        >
          <div class="mb-7 flex items-center justify-between">
            <span class="font-mono text-xs text-secondary">
              CATEGORY / {{ group.number }}
            </span>
            <span
              class="h-2 w-2 rounded-full bg-secondary"
              aria-hidden="true"
            ></span>
          </div>

          <h3 class="text-xl font-semibold text-foreground">
            {{ group.title }}
          </h3>

          <p class="mt-2 min-h-12 text-sm leading-relaxed text-muted">
            {{ group.description }}
          </p>

          <ul
            class="mt-6 flex flex-wrap gap-2 border-t
                   border-border pt-6"
            :aria-label="group.title"
          >
            <li
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-md border border-border
                     bg-background px-3 py-2
                     text-xs font-medium text-foreground
                     transition-colors hover:bg-elevated"
            >
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>

      <!-- Additional tools -->
      <div
        class="mt-7 flex flex-col gap-4 rounded-xl
               border border-border bg-elevated p-6
               md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3 class="text-sm font-semibold text-foreground">
            Additional Tools
          </h3>
          <p class="mt-1 text-xs text-muted">
            Tools used across development and experimentation.
          </p>
        </div>

        <ul class="flex flex-wrap gap-2">
          <li
            v-for="tool in developmentTools"
            :key="tool"
            class="rounded border border-border bg-surface
                   px-3 py-1.5 font-mono text-xs text-muted"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
