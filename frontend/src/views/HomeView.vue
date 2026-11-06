
<script setup>
import SiteNavbar from '@/components/SiteNavbar.vue'
import Hero from '@/components/Hero.vue'
import AboutSection from '@/components/AboutSection.vue'
import BackgroundSection from '@/components/BackgroundSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <div>
    <SiteNavbar />

    <main>
      <Hero />
      <AboutSection />
      <BackgroundSection />
      <SkillsSection />
      <Projects />
      <Contact />
    </main>
  </div>
</template>
