<script setup>
const profileImage =
  'https://avatars.githubusercontent.com/u/87006289?v=4'
</script>

<template>
  <section
    id="profil"
    aria-labelledby="hero-title"
    class="relative mx-auto max-w-7xl scroll-mt-24
           px-5 py-12 sm:px-8 md:py-16 lg:px-12 lg:py-20"
  >
    <!-- Section metadata -->
    <div
      class="mb-10 flex flex-wrap items-center justify-between
             gap-3 border-b border-border pb-4"
    >
      <span
        class="font-mono text-xs font-medium
               tracking-widest text-secondary"
      >
        01 / INTRODUCTION
      </span>

      <span class="font-mono text-xs text-muted">
        PERSONAL PORTFOLIO
      </span>
    </div>

    <!-- Main layout -->
    <div
      class="grid items-center gap-8
             lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
             lg:gap-16"
    >
      <!-- Introduction -->
      <div class="max-w-2xl">
        <div class="mb-6 flex items-center gap-3">
          <span
            class="h-2 w-2 rounded-full bg-secondary"
            aria-hidden="true"
          ></span>

          <p
            class="font-mono text-xs font-medium
                   uppercase tracking-wider text-muted"
          >
            Software / Hardware / Creative Tech
          </p>
        </div>

        <h1
          id="hero-title"
          class="mb-7 text-4xl font-semibold leading-tight
                 tracking-tight text-foreground
                 sm:text-5xl lg:text-6xl"
        >
          Building software.
          <span class="block text-accent">
            Exploring hardware.
          </span>
        </h1>

        <p
          class="mb-5 max-w-xl text-base leading-relaxed
                 text-muted sm:text-lg"
        >
          Hi, I'm Rayan — an Informatics undergraduate
          with a background in web development and a
          growing interest in embedded systems,
          electronics, and creative technology.
        </p>

        <p
          class="mb-9 max-w-xl text-sm leading-relaxed
                 text-muted sm:text-base"
        >
          I enjoy building applications, experimenting
          with hardware, and understanding how things
          work through hands-on projects.
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap gap-3">
          <a
            href="#proyek"
            class="inline-flex min-h-12 items-center
                   justify-center gap-2 rounded-md
                   bg-foreground px-6 py-3
                   text-sm font-medium text-background
                   transition-opacity hover:opacity-85
                   focus-visible:outline-2
                   focus-visible:outline-offset-4
                   focus-visible:outline-accent"
          >
            Explore Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="shrink-0 transition-transform duration-200
                    group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

          <a
            href="#kontak"
            class="inline-flex min-h-12 items-center
                   justify-center rounded-md
                   border border-border bg-surface
                   px-6 py-3 text-sm font-medium
                   text-foreground
                   transition-colors hover:bg-elevated
                   focus-visible:outline-2
                   focus-visible:outline-offset-4
                   focus-visible:outline-accent"
          >
            Get in Touch
          </a>
        </div>

        <!-- Tech interests -->
        <div
          class="mt-12 flex flex-wrap gap-x-5 gap-y-2
                 border-t border-border pt-6
                 font-mono text-xs text-muted"
        >
          <span>WEB DEVELOPMENT</span>
          <span>EMBEDDED SYSTEMS</span>
          <span>3D & CREATIVE</span>
        </div>
      </div>

      <!-- Visual panel -->
      <div class="relative mx-auto w-full max-w-[380px] lg:max-w-none">
        <div
          class="rounded-xl border border-border
                 bg-surface p-3 shadow-sm sm:p-4"
        >
          <div
            class="mb-4 flex items-center justify-between
                   border-b border-border pb-3"
          >
            <span
              class="font-mono text-xs font-medium
                     tracking-wider text-muted"
            >
              PROFILE / 001
            </span>

            <span
              class="h-2 w-2 rounded-full bg-secondary"
              aria-hidden="true"
            ></span>
          </div>

          <!-- Existing profile photo -->
          <div
            class="flex aspect-[4/3] items-center justify-center
                   overflow-hidden rounded-lg bg-elevated"
          >
            <img
              :src="profileImage"
              alt="Rayan's profile picture"
              class="h-full w-full object-contain"
              width="480"
              height="360"
              fetchpriority="high"
            />
          </div>

          <div
            class="mt-4 flex items-center
                   justify-between gap-3"
          >
            <div>
              <p class="text-sm font-semibold text-foreground">
                Rayan
              </p>
              <p class="mt-1 text-xs text-muted">
                Informatics Undergraduate
              </p>
            </div>

            <span
              class="rounded border border-border
                     px-2 py-1 font-mono text-[10px]
                     text-muted"
            >
              ID / 001
            </span>
          </div>
        </div>

        <!-- Decorative corner -->
        <div
          class="pointer-events-none absolute -bottom-3 -right-3
                 -z-10 h-20 w-20 rounded-lg
                 border border-accent/50"
          aria-hidden="true"
        ></div>
      </div>
    </div>

    <!-- Bottom technical label -->
    <div
      class="mt-16 flex items-center justify-between
             border-t border-border pt-4
             font-mono text-[10px] tracking-wider
             text-muted md:mt-24"
    >
      <span>DESIGN / DEVELOPMENT / EXPERIMENTATION</span>
      <span class="hidden sm:inline">SCROLL TO EXPLORE ↓</span>
    </div>
  </section>
</template>
