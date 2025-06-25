<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title">{{ $t('aboutPage.heroTitle') }}</h1>
          <p class="hero-subtitle">{{ $t('aboutPage.heroSubtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Our Story Section -->
      <section class="story-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>{{ $t('aboutPage.story.title') }}</h2>
            <p>{{ $t('aboutPage.story.subtitle') }}</p>
          </div>
          <div class="story-content">
            <div class="story-text animate-on-scroll">
              <p>{{ $t('aboutPage.story.paragraph1') }}</p>
              <p>{{ $t('aboutPage.story.paragraph2') }}</p>
              <p>{{ $t('aboutPage.story.paragraph3') }}</p>
            </div>
            <div class="story-image animate-on-scroll">
              <div class="image-placeholder">
                <div class="placeholder-icon">🎲</div>
                <p>{{ $t('aboutPage.story.imagePlaceholder') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Values Section -->
      <section class="mission-section">
        <div class="container">
          <div class="mission-grid">
            <div class="mission-card animate-on-scroll" v-for="(card, index) in ['mission', 'vision', 'values']" :key="index">
              <div class="card-icon">{{ index === 0 ? '🎯' : index === 1 ? '👁️' : '💎' }}</div>
              <h3>{{ $t(`aboutPage.${card}.title`) }}</h3>
              <p v-if="card !== 'values'">{{ $t(`aboutPage.${card}.description`) }}</p>
              <ul v-else class="values-list">
                <li v-for="(value, valueIndex) in $t('aboutPage.values.list')" :key="valueIndex">
                  {{ value }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>{{ $t('aboutPage.team.title') }}</h2>
            <p>{{ $t('aboutPage.team.subtitle') }}</p>
          </div>
          <div class="team-grid">
            <div class="team-member animate-on-scroll" v-for="(member, index) in $t('aboutPage.team.members')" :key="index">
              <div class="member-avatar">
                <div class="avatar-placeholder">{{ member.emoji }}</div>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-description">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements Section -->
      <section class="achievements-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>{{ $t('aboutPage.achievements.title') }}</h2>
            <p>{{ $t('aboutPage.achievements.subtitle') }}</p>
          </div>
          <div class="achievements-grid">
            <div class="achievement-card animate-on-scroll" v-for="(achievement, index) in $t('aboutPage.achievements.list')" :key="index">
              <div class="achievement-icon">{{ achievement.icon }}</div>
              <h3>{{ achievement.title }}</h3>
              <p>{{ achievement.description }}</p>
              <div class="achievement-year">{{ achievement.year }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Community Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card animate-on-scroll" v-for="(stat, index) in $t('aboutPage.stats.list')" :key="index">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Join Us Section -->
      <section class="join-section">
        <div class="container">
          <div class="join-content animate-on-scroll">
            <h2>{{ $t('aboutPage.join.title') }}</h2>
            <p>{{ $t('aboutPage.join.description') }}</p>
            <div class="join-buttons">
              <button class="btn-primary" @click="scrollToContact">
                {{ $t('aboutPage.join.contactBtn') }}
              </button>
              <button class="btn-secondary" @click="scrollToGames">
                {{ $t('aboutPage.join.gamesBtn') }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const animatedElements = ref<HTMLElement[]>([])

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToGames = () => {
  const gamesSection = document.getElementById('games')
  if (gamesSection) {
    gamesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Intersection Observer for scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
  elementsToAnimate.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* ===========================================
   ABOUT PAGE - MAIN LAYOUT
   =========================================== */
.about-page {
  min-height: 100vh;
}

/* ===========================================
   HERO SECTION
   =========================================== */
.about-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 70px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="triangles" width="20" height="20" patternUnits="userSpaceOnUse"><polygon points="0,0 10,10 0,20" fill="%23E59C6F" opacity="0.12"/><polygon points="10,0 20,10 10,20" fill="%23D1636D" opacity="0.08"/><polygon points="5,5 15,5 10,15" fill="%23ECE9E6" opacity="0.06"/></pattern></defs><rect width="100" height="100" fill="url(%23triangles)"/></svg>');
  z-index: -1;
  animation: patternFloat 20s ease-in-out infinite;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.2s both;
}

/* ===========================================
   MAIN CONTENT
   =========================================== */
.main-content {
  background: white;
}

/* ===========================================
   CONTAINER
   =========================================== */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===========================================
   SECTION HEADERS
   =========================================== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.section-header p {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
  line-height: 1.6;
}

/* ===========================================
   STORY SECTION
   =========================================== */
.story-section {
  padding: 80px 0;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
  margin: 0 0 1.5rem 0;
}

.story-text p:last-child {
  margin-bottom: 0;
}

.story-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: #ECE9E6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.image-placeholder p {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
}

/* ===========================================
   MISSION SECTION
   =========================================== */
.mission-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.mission-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.mission-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.mission-card p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.values-list li {
  padding: 0.5rem 0;
  color: #6c757d;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
}

.values-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #C73D42;
  font-weight: bold;
}

/* ===========================================
   TEAM SECTION
   =========================================== */
.team-section {
  padding: 80px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  background: #ECE9E6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.team-member h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 0.5rem 0;
}

.member-role {
  color: #C73D42;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.member-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

/* ===========================================
   ACHIEVEMENTS SECTION
   =========================================== */
.achievements-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
}

.achievement-card:hover {
  transform: translateY(-5px);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.achievement-card p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.achievement-year {
  background: #C73D42;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
}

/* ===========================================
   STATS SECTION
   =========================================== */
.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* ===========================================
   JOIN SECTION
   =========================================== */
.join-section {
  padding: 80px 0;
  background: #ECE9E6;
}

.join-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.join-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.join-content p {
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.join-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 12px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #C73D42;
  color: white;
}

.btn-primary:hover {
  background: #D1636D;
  transform: translateY(-2px);
}

.btn-secondary {
  background: white;
  color: #C73D42;
  border: 2px solid #C73D42;
}

.btn-secondary:hover {
  background: #C73D42;
  color: white;
  transform: translateY(-2px);
}

/* ===========================================
   ANIMATIONS & TRANSITIONS
   =========================================== */

/* Base animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animations for grid items */
.mission-card:nth-child(1) { transition-delay: 0.1s; }
.mission-card:nth-child(2) { transition-delay: 0.2s; }
.mission-card:nth-child(3) { transition-delay: 0.3s; }

.team-member:nth-child(1) { transition-delay: 0.1s; }
.team-member:nth-child(2) { transition-delay: 0.2s; }
.team-member:nth-child(3) { transition-delay: 0.3s; }
.team-member:nth-child(4) { transition-delay: 0.4s; }

.achievement-card:nth-child(1) { transition-delay: 0.1s; }
.achievement-card:nth-child(2) { transition-delay: 0.2s; }
.achievement-card:nth-child(3) { transition-delay: 0.3s; }
.achievement-card:nth-child(4) { transition-delay: 0.4s; }

.stat-card:nth-child(1) { transition-delay: 0.1s; }
.stat-card:nth-child(2) { transition-delay: 0.2s; }
.stat-card:nth-child(3) { transition-delay: 0.3s; }
.stat-card:nth-child(4) { transition-delay: 0.4s; }

/* Hero animations */
.hero-content.animate-in .hero-title {
  animation: slideInFromTop 1s ease-out 0.2s both;
}

.hero-content.animate-in .hero-subtitle {
  animation: slideInFromBottom 1s ease-out 0.4s both;
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card hover animations */
.mission-card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}

.mission-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(199, 61, 66, 0.15);
}

.mission-card .card-icon {
  transition: all 0.3s ease;
}

.mission-card:hover .card-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Team member animations */
.team-member {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(199, 61, 66, 0.1);
}

.member-avatar {
  transition: all 0.3s ease;
}

.team-member:hover .member-avatar {
  transform: scale(1.1);
}

.avatar-placeholder {
  transition: all 0.3s ease;
}

.team-member:hover .avatar-placeholder {
  background: linear-gradient(135deg, #C73D42, #D1636D);
  color: white;
}

/* Achievement card animations */
.achievement-card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.achievement-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(199, 61, 66, 0.1), transparent);
  transition: left 0.6s ease;
}

.achievement-card:hover::before {
  left: 100%;
}

.achievement-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(199, 61, 66, 0.15);
}

.achievement-icon {
  transition: all 0.3s ease;
}

.achievement-card:hover .achievement-icon {
  transform: scale(1.2) rotate(10deg);
}

/* Stats animations */
.stat-card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.stat-number {
  transition: all 0.3s ease;
}

.stat-card:hover .stat-number {
  color: #C73D42;
  transform: scale(1.1);
}

/* Button animations */
.btn-primary, .btn-secondary {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.btn-primary::before, .btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.btn-primary:hover::before, .btn-secondary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(229, 156, 111, 0.3);
}

/* Image placeholder animations */
.image-placeholder {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.story-image:hover .image-placeholder {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 15px 30px rgba(199, 61, 66, 0.15);
}

.placeholder-icon {
  transition: all 0.3s ease;
}

.story-image:hover .placeholder-icon {
  transform: scale(1.2) rotate(10deg);
}

/* Floating animation for hero overlay */
@keyframes patternFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}

/* Pulse animation for stats */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.stat-card:hover .stat-number {
  animation: pulse 1s ease-in-out;
}

/* Bounce animation for icons */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.mission-card:hover .card-icon,
.achievement-card:hover .achievement-icon {
  animation: bounce 0.6s ease-in-out;
}

/* Slide in animations for different directions */
.section-header.animate-on-scroll {
  transform: translateX(-30px);
}

.section-header.animate-in {
  transform: translateX(0);
}

.story-text.animate-on-scroll {
  transform: translateX(-30px);
}

.story-text.animate-in {
  transform: translateX(0);
}

.story-image.animate-on-scroll {
  transform: translateX(30px);
}

.story-image.animate-in {
  transform: translateX(0);
}

/* Join section special animation */
.join-content.animate-in {
  animation: fadeInScale 1s ease-out both;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive animation adjustments */
@media (max-width: 768px) {
  .animate-on-scroll {
    transform: translateY(20px);
  }
  
  .mission-card:hover,
  .team-member:hover,
  .achievement-card:hover {
    transform: translateY(-5px) scale(1.01);
  }
  
  .btn-primary:hover,
  .btn-secondary:hover {
    transform: translateY(-2px);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .mission-card,
  .team-member,
  .achievement-card,
  .stat-card,
  .btn-primary,
  .btn-secondary,
  .image-placeholder {
    transition: none;
    animation: none;
  }
  
  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}

/* ===========================================
   RESPONSIVE DESIGN
   =========================================== */

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .story-content {
    gap: 3rem;
  }
  
  .image-placeholder {
    width: 250px;
    height: 250px;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .about-hero {
    min-height: 50vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .join-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 250px;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .story-text p {
    font-size: 1rem;
  }
  
  .image-placeholder {
    width: 150px;
    height: 150px;
  }
  
  .placeholder-icon {
    font-size: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .join-content h2 {
    font-size: 2rem;
  }
  
  .join-content p {
    font-size: 1rem;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .hero-title {
    font-size: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .section-header h2 {
    font-size: 3rem;
  }
  
  .section-header p {
    font-size: 1.3rem;
  }
  
  .story-text p {
    font-size: 1.2rem;
  }
  
  .image-placeholder {
    width: 350px;
    height: 350px;
  }
  
  .placeholder-icon {
    font-size: 5rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .hero-title {
    font-size: 4.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .section-header h2 {
    font-size: 3.5rem;
  }
  
  .section-header p {
    font-size: 1.4rem;
  }
  
  .story-text p {
    font-size: 1.3rem;
  }
  
  .image-placeholder {
    width: 400px;
    height: 400px;
  }
  
  .placeholder-icon {
    font-size: 6rem;
  }
}
</style>
