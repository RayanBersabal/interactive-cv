<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative min-h-screen bg-[whitesmoke] dark:bg-neutral-900 font-sans">
    <!-- SVG Background -->
    <div
      class="absolute inset-0 w-full h-full z-0 bg-[url('/bg-lines.svg')] bg-cover bg-repeat opacity-30 pointer-events-none"
    ></div>

    <!-- Content wrapper -->
    <div class="relative z-10">
      <RouterView />
    </div>
  </div>
</template>
