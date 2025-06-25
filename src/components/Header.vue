<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link">
            <h1>🎲 BoardGames</h1>
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="nav">
          <ul class="nav-list">
            <li><router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link></li>
            <li class="dropdown">
              <button @click="toggleDropdown" class="nav-link dropdown-toggle">
                {{ $t('nav.about') }}
                <span class="dropdown-arrow">▼</span>
              </button>
              <ul v-show="isDropdownOpen" class="dropdown-menu">
                <li><router-link to="/about" @click="closeDropdown" class="dropdown-link">{{ $t('nav.about') }}</router-link></li>
                <li><router-link to="/press-kit" @click="closeDropdown" class="dropdown-link">{{ $t('nav.pressKit') }}</router-link></li>
              </ul>
            </li>
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
          <li><router-link to="/" @click="closeMobileMenu" class="mobile-nav-link">{{ $t('nav.home') }}</router-link></li>
          <li class="mobile-dropdown">
            <button @click="toggleMobileDropdown" class="mobile-nav-link mobile-dropdown-toggle">
              {{ $t('nav.about') }}
              <span class="dropdown-arrow">▼</span>
            </button>
            <ul v-show="isMobileDropdownOpen" class="mobile-dropdown-menu">
              <li><router-link to="/about" @click="closeMobileMenu" class="mobile-dropdown-link">{{ $t('nav.about') }}</router-link></li>
              <li><router-link to="/press-kit" @click="closeMobileMenu" class="mobile-dropdown-link">{{ $t('nav.pressKit') }}</router-link></li>
            </ul>
          </li>
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
const isDropdownOpen = ref(false)
const isMobileDropdownOpen = ref(false)

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
  if (!isMobileMenuOpen.value) {
    isMobileDropdownOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value
}

// Close dropdowns when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.dropdown')) {
    isDropdownOpen.value = false
  }
}

// Add click outside listener
if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
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

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-link:hover {
  color: #C73D42;
  transition: color 0.3s ease;
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

/* ===========================================
   DROPDOWN MENU STYLES
   =========================================== */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-arrow,
.dropdown-toggle:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid rgba(30, 30, 30, 0.1);
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
}

.dropdown:hover .dropdown-menu,
.dropdown-menu:hover {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.dropdown-link:hover {
  background: #ECE9E6;
  color: #C73D42;
}

/* Mobile dropdown styles */
.mobile-dropdown {
  position: relative;
}

.mobile-dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 15px 0;
  text-align: left;
}

.mobile-dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(199, 61, 66, 0.05);
  border-left: 3px solid #C73D42;
  margin-left: 1rem;
}

.mobile-dropdown-link {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1rem;
  border-bottom: 1px solid rgba(30, 30, 30, 0.1);
}

.mobile-dropdown-link:hover {
  color: #C73D42;
  background: rgba(199, 61, 66, 0.1);
}

.mobile-dropdown-link:last-child {
  border-bottom: none;
}
</style> 