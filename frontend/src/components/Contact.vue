
<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const email = 'rayanbersabal@gmail.com'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/RayanBersabal',
    external: true,
  },
]
</script>

<template>
  <footer
    id="kontak"
    class="scroll-mt-24 border-t border-border bg-surface"
  >
    <!-- Contact section -->
    <div
      class="mx-auto max-w-7xl px-5 py-20
             sm:px-8 md:py-28 lg:px-12"
    >
      <!-- Heading -->
      <div
        class="mb-12 flex flex-wrap items-center
               justify-between gap-3 border-b
               border-border pb-6"
      >
        <span
          class="font-mono text-xs font-medium
                 uppercase tracking-widest text-secondary"
        >
          06 / Contact
        </span>

        <span class="font-mono text-xs text-muted">
          GET IN TOUCH
        </span>
      </div>

      <!-- Main contact content -->
      <div
        class="grid gap-10
               lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]
               lg:gap-16"
      >
        <div>
          <h2
            class="max-w-3xl text-4xl font-semibold
                   leading-tight tracking-tight
                   text-foreground sm:text-5xl lg:text-6xl"
          >
            Have something
            <span class="block">
              in mind<span class="text-accent">?</span>
            </span>
          </h2>

          <p
            class="mt-7 max-w-xl text-base
                   leading-relaxed text-muted"
          >
            Open to conversations about software
            development, collaborations, and interesting
            technical projects.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <!-- Email -->
            <a
              :href="`mailto:${email}`"
              class="inline-flex min-h-12 items-center
                     justify-center gap-3 rounded-md
                     bg-foreground px-6 py-3
                     text-sm font-semibold text-background
                     transition-opacity hover:opacity-85
                     focus-visible:outline-2
                     focus-visible:outline-offset-4
                     focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>

              Send an Email
            </a>

            <!-- Social links -->
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="inline-flex min-h-12 items-center
                     justify-center gap-2 rounded-md
                     border border-border bg-background
                     px-6 py-3 text-sm font-medium
                     text-foreground transition-colors
                     hover:bg-elevated
                     focus-visible:outline-2
                     focus-visible:outline-offset-4
                     focus-visible:outline-accent"
            >
              {{ link.name }}
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
          </div>
        </div>

        <!-- Contact details -->
        <aside
          class="self-start rounded-xl border
                 border-border bg-background p-6 sm:p-7"
          aria-label="Contact information"
        >
          <p
            class="mb-7 font-mono text-xs
                   uppercase tracking-widest text-secondary"
          >
            CONTACT / DETAILS
          </p>

          <div class="space-y-6">
            <div>
              <p class="mb-2 font-mono text-xs text-muted">
                EMAIL
              </p>

              <a
                :href="`mailto:${email}`"
                class="break-all text-sm font-medium
                       text-foreground hover:text-accent"
              >
                {{ email }}
              </a>
            </div>

            <div class="border-t border-border pt-5">
              <p class="mb-2 font-mono text-xs text-muted">
                GITHUB
              </p>

              <a
                href="https://github.com/RayanBersabal"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium
                       text-foreground hover:text-accent"
              >
                github.com/RayanBersabal
              </a>
            </div>

            <div class="border-t border-border pt-5">
              <p class="mb-2 font-mono text-xs text-muted">
                INTERESTS
              </p>

              <p class="text-sm leading-relaxed text-foreground">
                Software Development,
                Embedded Systems &amp; Creative Technology
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="border-t border-border">
      <div
        class="mx-auto flex max-w-7xl flex-col
               justify-between gap-6 px-5 py-8
               sm:px-8 md:flex-row md:items-center
               lg:px-12"
      >
        <!-- Brand -->
        <div>
          <p class="text-sm font-semibold text-foreground">
            RB. / PORTFOLIO
          </p>

          <p
            class="mt-1 font-mono text-[11px]
                   uppercase tracking-wide text-muted"
          >
            Software / Hardware / Creative
          </p>
        </div>

        <!-- Footer navigation -->
        <nav
          class="flex flex-wrap items-center gap-x-6 gap-y-3"
          aria-label="Footer navigation"
        >
          <a
            href="#profil"
            class="text-xs text-muted hover:text-accent"
          >
            Home
          </a>

          <a
            href="#tentang"
            class="text-xs text-muted hover:text-accent"
          >
            About
          </a>

          <a
            href="#proyek"
            class="text-xs text-muted hover:text-accent"
          >
            Projects
          </a>

          <a
            href="#kontak"
            class="text-xs text-muted hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <!-- Copyright -->
        <p class="font-mono text-xs text-muted">
          © {{ currentYear }} Rayan Bersabal
        </p>
      </div>
    </div>
  </footer>
</template>
