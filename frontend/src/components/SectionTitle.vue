
<script setup>
defineProps({
  number: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mb-10 border-b border-border pb-7">
    <p
      v-if="number || label"
      class="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
    >
      <template v-if="number">{{ number }}</template>
      <template v-if="number && label"> / </template>
      <template v-if="label">{{ label }}</template>
    </p>

    <h2
      class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
    >
      {{ title }}<span class="text-accent">.</span>
    </h2>

    <p
      v-if="description"
      class="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
