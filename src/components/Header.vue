<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <h1>🎲 BoardGames</h1>
        </div>

        <!-- Navigation -->
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="#home" class="nav-link">{{ $t('nav.home') }}</a></li>
            <li><a href="#about" class="nav-link">{{ $t('nav.about') }}</a></li>
            <li><a href="#games" class="nav-link">{{ $t('nav.games') }}</a></li>
            <li><a href="#contact" class="nav-link">{{ $t('nav.contact') }}</a></li>
          </ul>
        </nav>

        <!-- Language Switcher -->
        <div class="language-switcher">
          <select v-model="currentLocale" @change="changeLanguage" class="language-select">
            <option value="en">{{ $t('language.en') }}</option>
            <option value="es">{{ $t('language.es') }}</option>
            <option value="ca">{{ $t('language.ca') }}</option>
          </select>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="toggleMobileMenu" class="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <nav v-show="isMobileMenuOpen" class="mobile-nav">
        <ul class="mobile-nav-list">
          <li><a href="#home" @click="closeMobileMenu" class="mobile-nav-link">{{ $t('nav.home') }}</a></li>
          <li><a href="#about" @click="closeMobileMenu" class="mobile-nav-link">{{ $t('nav.about') }}</a></li>
          <li><a href="#games" @click="closeMobileMenu" class="mobile-nav-link">{{ $t('nav.games') }}</a></li>
          <li><a href="#contact" @click="closeMobileMenu" class="mobile-nav-link">{{ $t('nav.contact') }}</a></li>
        </ul>
        <div class="mobile-language-switcher">
          <select v-model="currentLocale" @change="changeLanguage" class="mobile-language-select">
            <option value="en">{{ $t('language.en') }}</option>
            <option value="es">{{ $t('language.es') }}</option>
            <option value="ca">{{ $t('language.ca') }}</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isMobileMenuOpen = ref(false)

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
  }
})

const changeLanguage = () => {
  // Language change is handled by the computed setter
  localStorage.setItem('preferred-language', currentLocale.value)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Load saved language preference on component mount
const savedLanguage = localStorage.getItem('preferred-language')
if (savedLanguage && ['en', 'es', 'ca'].includes(savedLanguage)) {
  locale.value = savedLanguage
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(236, 233, 230, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(30, 30, 30, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1E1E1E;
  margin: 0;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  font-size: 1rem;
}

.nav-link:hover {
  color: #C73D42;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #C73D42;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.language-switcher {
  position: relative;
}

.language-select {
  padding: 8px 12px;
  border: 1px solid #D1636D;
  border-radius: 6px;
  background: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.language-select:focus {
  outline: none;
  border-color: #C73D42;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #1E1E1E;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.mobile-nav {
  display: none;
  padding: 20px 0;
  border-top: 1px solid rgba(30, 30, 30, 0.1);
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-link {
  display: block;
  padding: 15px 0;
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  border-bottom: 1px solid rgba(30, 30, 30, 0.1);
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

.mobile-nav-link:hover {
  color: #C73D42;
}

.mobile-language-switcher {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(30, 30, 30, 0.1);
}

.mobile-language-select {
  width: 100%;
  padding: 12px;
  border: 1px solid #D1636D;
  border-radius: 6px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .nav-list {
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 0.95rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }

  .language-switcher {
    display: none;
  }

  .logo h1 {
    font-size: 1.5rem;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .header-content {
    height: 60px;
  }
  
  .logo h1 {
    font-size: 1.3rem;
  }
  
  .mobile-menu-toggle span {
    width: 22px;
    height: 2px;
  }
  
  .mobile-nav-link {
    font-size: 1rem;
    padding: 12px 0;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .header-content {
    height: 80px;
  }
  
  .logo h1 {
    font-size: 2rem;
  }
  
  .nav-list {
    gap: 3rem;
  }
  
  .nav-link {
    font-size: 1.1rem;
  }
  
  .language-select {
    padding: 10px 15px;
    font-size: 1rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .header-content {
    height: 90px;
  }
  
  .logo h1 {
    font-size: 2.2rem;
  }
  
  .nav-list {
    gap: 4rem;
  }
  
  .nav-link {
    font-size: 1.2rem;
  }
}
</style> 