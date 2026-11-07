
<script setup>
import { RouterView } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
</script>

<template>
  <div
    class="relative min-h-screen bg-background
           font-sans text-foreground"
  >
    <!-- Global decorative background -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-0
             bg-[url('/bg-lines.svg')]
             bg-cover bg-repeat opacity-30"
    ></div>

    <!-- Global navigation -->
    <SiteNavbar />

    <!-- Routed page content -->
    <div class="relative z-10">
      <RouterView />
    </div>
  </div>
</template>
