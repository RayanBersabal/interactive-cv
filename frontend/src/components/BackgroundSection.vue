
<script setup>
import { education, experience } from '@/data/background.js'
</script>

<template>
  <section
    id="pendidikan"
    aria-labelledby="background-heading"
    class="scroll-mt-24 border-t border-border py-20 md:py-28"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

      <!-- Section heading -->
      <div class="mb-12 border-b border-border pb-7">
        <p
          class="mb-4 font-mono text-xs uppercase
                 tracking-widest text-secondary"
        >
          03 / BACKGROUND
        </p>

        <h2
          id="background-heading"
          class="text-3xl font-semibold tracking-tight
                 text-foreground sm:text-4xl"
        >
          Education &amp; Experience<span class="text-accent">.</span>
        </h2>

        <p class="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          My academic background, practical experience,
          and professional learning journey.
        </p>
      </div>

      <!-- Education -->
      <div class="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div>
          <p class="font-mono text-xs text-secondary">
            03.1 / EDUCATION
          </p>

          <h3 class="mt-3 text-xl font-semibold text-foreground">
            Academic Background
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-muted">
            Formal education and academic development.
          </p>
        </div>

        <ol
          class="relative space-y-5 border-l-2 border-border pl-6 sm:pl-8"
          aria-label="Education history"
        >
          <li
            v-for="item in education"
            :key="item.id"
            class="relative"
          >
            <!-- Timeline indicator -->
            <span
              class="absolute -left-[31px] top-7 h-3 w-3
                     rounded-full border-2 border-background
                     bg-secondary sm:-left-[39px]"
              aria-hidden="true"
            ></span>

            <article
              class="rounded-xl border border-border bg-surface
                     p-5 sm:p-7"
            >
              <div
                class="mb-5 flex flex-wrap items-center
                       justify-between gap-3"
              >
                <span
                  class="font-mono text-xs uppercase
                         tracking-wider text-secondary"
                >
                  {{ item.period }}
                </span>

                <span
                  class="rounded border border-border bg-elevated
                         px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {{ item.status }}
                </span>
              </div>

              <h4
                class="text-lg font-semibold text-foreground sm:text-xl"
              >
                {{ item.institution }}
              </h4>

              <p class="mt-2 text-sm font-medium text-foreground">
                {{ item.qualification }}
              </p>

              <p class="mt-3 text-sm leading-relaxed text-muted">
                {{ item.description }}
              </p>
            </article>
          </li>
        </ol>
      </div>

      <!-- Experience -->
      <div
        id="pengalaman"
        class="mt-16 scroll-mt-24 border-t border-border
               pt-12 md:mt-20"
      >
        <div class="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p class="font-mono text-xs text-secondary">
              03.2 / EXPERIENCE
            </p>

            <h3 class="mt-3 text-xl font-semibold text-foreground">
              Experience &amp; Training
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-muted">
              Practical experience and structured learning.
            </p>
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <article
              v-for="item in experience"
              :key="item.id"
              class="flex flex-col rounded-xl border
                     border-border bg-surface p-5 sm:p-7"
            >
              <div class="mb-6 flex items-center justify-between gap-3">
                <span
                  class="font-mono text-[11px] uppercase
                         tracking-wide text-secondary"
                >
                  {{ item.type }}
                </span>

                <span
                  class="h-2 w-2 rounded-full bg-secondary"
                  aria-hidden="true"
                ></span>
              </div>

              <h4 class="text-lg font-semibold text-foreground">
                {{ item.title }}
              </h4>

              <p
                v-if="item.organization"
                class="mt-2 text-sm font-medium text-foreground"
              >
                {{ item.organization }}
              </p>

              <p class="mt-2 font-mono text-xs text-muted">
                {{ [item.period, item.duration].filter(Boolean).join(' · ') }}
              </p>

              <p
                v-if="item.description"
                class="mt-5 text-sm leading-relaxed text-muted"
              >
                {{ item.description }}
              </p>

              <ul
                v-if="item.highlights.length"
                class="mt-5 list-inside list-disc space-y-2
                       text-sm leading-relaxed text-muted"
              >
                <li
                  v-for="highlight in item.highlights"
                  :key="highlight"
                >
                  {{ highlight }}
                </li>
              </ul>

              <div class="mt-auto border-t border-border pt-4"
                   :class="item.description || item.highlights.length
                     ? 'mt-6'
                     : 'mt-8'">
                <span class="font-mono text-[11px] text-secondary">
                  {{ item.type === 'Training'
                    ? 'STRUCTURED LEARNING'
                    : 'PRACTICAL EXPERIENCE' }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="mt-12 flex flex-wrap justify-between gap-3
               border-t border-border pt-5"
      >
        <span class="font-mono text-xs text-muted">
          EDUCATION / EXPERIENCE / DEVELOPMENT
        </span>

        <span class="font-mono text-xs text-secondary">
          END / BACKGROUND
        </span>
      </div>
    </div>
  </section>
</template>
