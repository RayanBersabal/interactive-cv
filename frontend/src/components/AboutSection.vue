<script setup>
const interests = [
  'Full-stack development',
  'Embedded systems',
  'Electronics & hardware',
  '3D & game development',
]

const facts = [
  { label: 'Education', value: 'B.Sc. Informatics (in progress)' },
  { label: 'English', value: 'CEFR B2' },
  { label: 'Focus', value: 'Software Development' },
]
</script>

<template>
  <section
    id="tentang"
    aria-labelledby="about-title"
    class="scroll-mt-24 border-t border-border py-20 md:py-28"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="mb-10 border-b border-border pb-7">
        <p class="mb-4 font-mono text-xs uppercase tracking-widest text-secondary">
          03 / About
        </p>
        <h2
          id="about-title"
          class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Beyond the code<span class="text-accent">.</span>
        </h2>
        <p class="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          A little about my background, interests, and approach to building things.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <!-- Biography -->
        <article class="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p class="mb-6 font-mono text-xs tracking-wider text-secondary">
            PROFILE / OVERVIEW
          </p>

          <div class="space-y-5 text-sm leading-7 text-muted sm:text-base">
            <p>
              I'm an Informatics undergraduate at Universitas Amikom
              Yogyakarta with a background in web development,
              particularly JavaScript, Vue.js, and backend technologies.
            </p>

            <p>
              My interests have expanded beyond web applications
              into embedded systems, microcontrollers, electronics,
              and machine learning. I enjoy understanding how software
              interacts with hardware and experimenting with ideas
              through personal projects.
            </p>

            <p>
              I'm also interested in 3D modeling and game development.
              While software development remains my primary focus,
              I continue exploring these areas as opportunities to
              learn and build something different.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              v-for="interest in interests"
              :key="interest"
              class="rounded-md border border-border px-3 py-2
                     font-mono text-xs text-muted"
            >
              {{ interest }}
            </span>
          </div>
        </article>

        <!-- Personal information -->
        <div class="flex flex-col gap-6">
          <article class="rounded-xl border border-border bg-surface p-6">
            <p class="mb-5 font-mono text-xs tracking-wider text-secondary">
              QUICK FACTS
            </p>

            <dl class="divide-y divide-border">
              <div
                v-for="fact in facts"
                :key="fact.label"
                class="py-4 first:pt-0 last:pb-0"
              >
                <dt class="mb-1 font-mono text-xs text-muted">
                  {{ fact.label }}
                </dt>
                <dd class="text-sm font-medium text-foreground">
                  {{ fact.value }}
                </dd>
              </div>
            </dl>
          </article>

          <article
            class="rounded-xl border border-border
                   bg-elevated p-6"
          >
            <div class="mb-4 flex items-center justify-between">
              <p class="font-mono text-xs tracking-wider text-secondary">
                CURRENT DIRECTION
              </p>
              <span
                class="h-2 w-2 rounded-full bg-secondary"
                aria-hidden="true"
              ></span>
            </div>

            <h3 class="text-lg font-semibold text-foreground">
              Learning through building.
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-muted">
              Developing practical software projects while exploring
              embedded hardware and documenting technical experiments.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
