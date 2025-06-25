<script setup lang="ts">
import Hero from '../components/Hero.vue'
import GamesGrid from '../components/GamesGrid.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <div class="home">
    <Hero />
    <GamesGrid />
    <About />
    <Contact />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
