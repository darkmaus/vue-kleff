<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E1E1E;
  line-height: 1.6;
  background-color: #ECE9E6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Utility classes */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Smooth scrolling for anchor links */
html {
  scroll-padding-top: 80px; /* Account for fixed header */
}

/* Focus styles for accessibility */
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #C73D42;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #ECE9E6;
}

::-webkit-scrollbar-thumb {
  background: #D1636D;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #C73D42;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive typography */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  body {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  body {
    font-size: 0.9rem;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  body {
    font-size: 1.05rem;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  body {
    font-size: 1.1rem;
  }
}

/* Section spacing */
section {
  padding: 80px 0;
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  section {
    padding: 50px 0;
  }
}

@media (min-width: 1400px) {
  section {
    padding: 100px 0;
  }
}

@media (min-width: 1920px) {
  section {
    padding: 120px 0;
  }
}
</style>
