<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
const API_URL = import.meta.env.PROD ? '/api/education' : 'http://localhost:3000/api/education';
onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Failed to fetch education data:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white dark:bg-neutral-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="timeline-item"
        >
          <div class="timeline-content-container" :class="[index % 2 === 0 ? 'left' : 'right']">
            <div class="timeline-dot"></div>

            <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="timeline-card">
              <div class="flex items-center gap-4">
                <div>
                  <p class="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{{ edu.period }}</p>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ edu.institution }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ edu.major }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base container for the timeline */
.timeline-container {
  position: relative;
  margin-top: 3rem;
}

/* The central vertical line of the timeline */
.timeline-line {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%); /* Ensures it's perfectly centered */
  height: 100%;
  width: 2px;
  background-color: #dbeafe; /* Tailwind 'blue-100' */
}

/* Individual timeline item container */
.timeline-item {
  position: relative;
  margin-bottom: 3rem; /* Spacing between items */
}

/* Container for content and dot, handles left/right positioning */
.timeline-content-container {
  position: relative;
  width: 50%; /* Each content block takes half the width */
  padding: 0 2rem; /* Padding for content inside */
}

/* Styles for items on the left side of the timeline */
.timeline-content-container.left {
  text-align: right;
  margin-right: auto; /* Pushes the item to the left */
}
/* Reverse flex direction for content on the left to keep dot/card alignment correct */
.timeline-content-container.left .flex {
  flex-direction: row-reverse;
}

/* Styles for items on the right side of the timeline */
.timeline-content-container.right {
  margin-left: auto; /* Pushes the item to the right */
}

/* The circular dot on the timeline line */
.timeline-dot {
  position: absolute;
  top: 1.25rem; /* Vertical alignment with the card */
  z-index: 10;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #3b82f6;
  border: 4px solid #3b82f6; /* Tailwind 'blue-600' */
  border-radius: 50%;
}

/* Position the dot for left-side items */
.timeline-content-container.left .timeline-dot {
  right: -0.625rem; /* Half the dot width to overlap the line */
}
/* Position the dot for right-side items */
.timeline-content-container.right .timeline-dot {
  left: -0.625rem; /* Half the dot width to overlap the line */
}

/* Styles for the individual education card */
.timeline-card {

  /* Tailwind CSS utility classes applied via @apply */
  @apply inline-block p-4 md:p-6 bg-gray-100 dark:bg-neutral-600 rounded-xl border border-gray-100 dark:border-neutral-600 shadow-lg transform transition-transform duration-300 hover:-translate-y-2;
  /* Removed hover:shadow-2xl and shadow-lg */
  max-width: 420px; /* Max width for the card */
  width: 100%; /* Ensures it fills its container up to max-width */
}

/* --- Responsive Adjustments for smaller screens (e.g., mobile) --- */
@media (max-width: 767px) {
  /* Move the vertical line to the left edge */
  .timeline-line {
    left: 10px;
    transform: translateX(0); /* Remove center translation */
  }

  /* Make content containers full width and adjust padding/text alignment */
  .timeline-content-container,
  .timeline-content-container.left,
  .timeline-content-container.right {
    width: 100%;
    margin-left: 0;
    padding-left: 45px; /* Space for the line and dot */
    padding-right: 0;
    text-align: left; /* All content aligns left */
  }

  /* Ensure flex direction is row for all items on mobile */
  .timeline-content-container.left .flex,
  .timeline-content-container.right .flex {
    flex-direction: row;
  }

  /* Position dots on the left side for all items on mobile */
  .timeline-dot,
  .timeline-content-container.left .timeline-dot,
  .timeline-content-container.right .timeline-dot {
    left: 2px; /* Adjust dot position relative to new line position */
  }
}
</style>
