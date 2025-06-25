<template>
  <div class="press-kit-page">
    <!-- Hero Section -->
    <section class="press-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title">🎲 {{ $t('pressKit.heroTitle') }}</h1>
          <p class="hero-subtitle">{{ $t('pressKit.heroSubtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Who We Are Section -->
      <section class="who-we-are-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📍 {{ $t('pressKit.whoWeAre.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <p class="description" v-html="$t('pressKit.whoWeAre.description')"></p>
            <ul class="stats-list">
              <li v-for="(stat, index) in ($t('pressKit.whoWeAre.stats') as unknown as StatItem[])" :key="index">
                <span class="stat-icon">{{ stat.icon }}</span>
                <span class="stat-text" v-html="stat.text"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Target Audience Section -->
      <section class="target-audience-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🎯 {{ $t('pressKit.targetAudience.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <ul class="audience-list">
              <li v-for="(audience, index) in ($t('pressKit.targetAudience.items') as unknown as AudienceItem[])" :key="index">
                <span class="audience-icon">{{ audience.icon }}</span>
                <span class="audience-text" v-html="audience.text"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Event Types Section -->
      <section class="events-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📅 {{ $t('pressKit.events.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="table-container">
              <table class="events-table">
                <thead>
                  <tr>
                    <th>{{ $t('pressKit.events.frequency') }}</th>
                    <th>{{ $t('pressKit.events.event') }}</th>
                    <th>{{ $t('pressKit.events.description') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, index) in ($t('pressKit.events.list') as unknown as Event[])" :key="index" class="animate-on-scroll">
                    <td class="frequency">{{ event.frequency }}</td>
                    <td class="event-name"><strong>{{ event.name }}</strong></td>
                    <td class="description" v-html="event.description"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Communities Section -->
      <section class="communities-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🧠 {{ $t('pressKit.communities.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <ul class="communities-list">
              <li v-for="(community, index) in ($t('pressKit.communities.list') as unknown as Community[])" :key="index">
                <span class="community-icon">{{ community.icon }}</span>
                <span class="community-text" v-html="community.text"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Collaborations Section -->
      <section class="collaborations-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🤝 {{ $t('pressKit.collaborations.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="collaborations-grid">
              <div class="collab-category animate-on-scroll" v-for="(category, index) in ($t('pressKit.collaborations.categories') as unknown as CollaborationCategory[])" :key="index">
                <h3>{{ category.title }}</h3>
                <ul class="collab-list">
                  <li v-for="(item, itemIndex) in (category.items || [])" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Social Media Reach Section -->
      <section class="social-reach-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📈 {{ $t('pressKit.socialReach.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="table-container">
              <table class="social-table">
                <thead>
                  <tr>
                    <th>{{ $t('pressKit.socialReach.platform') }}</th>
                    <th>{{ $t('pressKit.socialReach.followers') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(platform, index) in ($t('pressKit.socialReach.platforms') as unknown as Platform[])" :key="index" class="animate-on-scroll">
                    <td class="platform-name">{{ platform.name }}</td>
                    <td class="platform-followers">{{ platform.followers }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Media Presence Section -->
      <section class="media-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📰 {{ $t('pressKit.mediaPresence.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <ul class="media-list">
              <li v-for="(media, index) in ($t('pressKit.mediaPresence.outlets') as unknown as MediaOutlet[])" :key="index">
                <span class="media-text" v-html="media.text"></span>
              </li>
            </ul>
            <div class="media-link animate-on-scroll">
              <a href="https://drive.google.com/drive/folders/1mff6ikHdJJ44H-lS-qsC-mHvG5F40Q3a?usp=drive_link" target="_blank" class="btn-primary">
                {{ $t('pressKit.mediaPresence.viewArticles') }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- What We Offer Section -->
      <section class="offer-section">
        <div class="container">
          <div class="content-wrapper">
            <div class="offer-grid">
              <div class="offer-card animate-on-scroll">
                <h3>🎯 {{ $t('pressKit.whatWeOffer.seeking.title') }}</h3>
                <ul class="offer-list">
                  <li v-for="(item, index) in $t('pressKit.whatWeOffer.seeking.items')" :key="index">{{ item }}</li>
                </ul>
              </div>
              <div class="offer-card animate-on-scroll">
                <h3>💡 {{ $t('pressKit.whatWeOffer.providing.title') }}</h3>
                <ul class="offer-list">
                  <li v-for="(item, index) in $t('pressKit.whatWeOffer.providing.items')" :key="index">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Photo Gallery Section -->
      <section class="gallery-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🖼 {{ $t('pressKit.gallery.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="gallery-content animate-on-scroll">
              <div class="gallery-placeholder">
                <div class="placeholder-icon">📸</div>
                <p>{{ $t('pressKit.gallery.placeholder') }}</p>
              </div>
              <div class="gallery-link">
                <a href="https://drive.google.com/drive/folders/1mff6ikHdJJ44H-lS-qsC-mHvG5F40Q3a" target="_blank" class="btn-secondary">
                  {{ $t('pressKit.gallery.viewGallery') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recommended Games Section -->
      <section class="games-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🕹 {{ $t('pressKit.recommendedGames.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="games-grid">
              <div class="game-category animate-on-scroll" v-for="(category, index) in ($t('pressKit.recommendedGames.categories') as unknown as GameCategory[])" :key="index">
                <h3><strong>{{ category.title }}</strong></h3>
                <p class="games-list">{{ category.games ? category.games.join(', ') : '' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section class="location-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📍 {{ $t('pressKit.location.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <div class="location-content animate-on-scroll">
              <h3><strong>{{ $t('pressKit.location.venue') }}</strong></h3>
              <p class="venue-address">{{ $t('pressKit.location.address') }}</p>
              <p class="venue-description">{{ $t('pressKit.location.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📞 {{ $t('pressKit.contact.title') }}</h2>
          </div>
          <div class="content-wrapper">
            <ul class="contact-list">
              <li v-for="(contact, index) in ($t('pressKit.contact.links') as unknown as ContactLink[])" :key="index">
                <span class="contact-icon">{{ contact.icon }}</span>
                <a :href="contact.url" target="_blank" class="contact-link">{{ contact.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="cta-section">
        <div class="container">
          <div class="content-wrapper">
            <div class="cta-content animate-on-scroll">
              <blockquote class="cta-quote">
                <p>{{ $t('pressKit.cta.question1') }}</p>
                <p class="cta-highlight" v-html="$t('pressKit.cta.callToAction')"></p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { StatItem, AudienceItem, Event, Community, CollaborationCategory, Platform, MediaOutlet, GameCategory, ContactLink } from '../types/locale'

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
   PRESS KIT PAGE - MAIN LAYOUT
   =========================================== */
.press-kit-page {
  min-height: 100vh;
}

/* ===========================================
   HERO SECTION
   =========================================== */
.press-hero {
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
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* ===========================================
   MAIN CONTENT
   =========================================== */
.main-content {
  background: #ECE9E6;
}

/* ===========================================
   SECTION STYLES
   =========================================== */
section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1E1E1E;
  margin-bottom: 1rem;
  font-weight: 700;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

/* ===========================================
   WHO WE ARE SECTION
   =========================================== */
.who-we-are-section {
  background: white;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.stats-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stats-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #ECE9E6;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stats-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.stat-icon {
  font-size: 2rem;
  color: #C73D42;
}

.stat-text {
  font-size: 1rem;
  color: #333;
}

/* ===========================================
   TARGET AUDIENCE SECTION
   =========================================== */
.target-audience-section {
  background: #ECE9E6;
}

.audience-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.audience-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.audience-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.audience-icon {
  font-size: 2rem;
  color: #C73D42;
}

.audience-text {
  font-size: 1rem;
  color: #333;
}

/* ===========================================
   EVENTS SECTION
   =========================================== */
.events-section {
  background: white;
}

.table-container {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.events-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.events-table th {
  background: #C73D42;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.events-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.events-table tr:hover {
  background: #f8f8f8;
}

.frequency {
  font-weight: 600;
  color: #C73D42;
}

.event-name {
  font-weight: 600;
  color: #1E1E1E;
}

.description {
  color: #666;
  line-height: 1.5;
}

/* ===========================================
   COMMUNITIES SECTION
   =========================================== */
.communities-section {
  background: #ECE9E6;
}

.communities-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.communities-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.communities-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.community-icon {
  font-size: 2rem;
  color: #C73D42;
}

.community-text {
  font-size: 1rem;
  color: #333;
}

/* ===========================================
   COLLABORATIONS SECTION
   =========================================== */
.collaborations-section {
  background: white;
}

.collaborations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.collab-category {
  background: #ECE9E6;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.collab-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.collab-category h3 {
  font-size: 1.3rem;
  color: #1E1E1E;
  margin-bottom: 1rem;
  text-align: center;
}

.collab-list {
  list-style: none;
  padding: 0;
}

.collab-list li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.collab-list li:last-child {
  border-bottom: none;
}

/* ===========================================
   SOCIAL REACH SECTION
   =========================================== */
.social-reach-section {
  background: #ECE9E6;
}

.social-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-table th {
  background: #C73D42;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.social-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.social-table tr:hover {
  background: #f8f8f8;
}

.platform-name {
  font-weight: 600;
  color: #1E1E1E;
}

.platform-followers {
  font-weight: 700;
  color: #C73D42;
}

/* ===========================================
   MEDIA SECTION
   =========================================== */
.media-section {
  background: white;
}

.media-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.media-list li {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.media-list li:last-child {
  border-bottom: none;
}

.media-text {
  font-size: 1rem;
  color: #333;
}

.media-link {
  text-align: center;
}

/* ===========================================
   OFFER SECTION
   =========================================== */
.offer-section {
  background: #ECE9E6;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.offer-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(199, 61, 66, 0.15);
}

.offer-card h3 {
  font-size: 1.3rem;
  color: #1E1E1E;
  margin-bottom: 1rem;
  text-align: center;
}

.offer-list {
  list-style: none;
  padding: 0;
}

.offer-list li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.offer-list li:last-child {
  border-bottom: none;
}

/* ===========================================
   GALLERY SECTION
   =========================================== */
.gallery-section {
  background: white;
}

.gallery-content {
  text-align: center;
}

.gallery-placeholder {
  background: #ECE9E6;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #C73D42;
}

.gallery-placeholder p {
  color: #666;
  font-size: 1.1rem;
}

.gallery-link {
  text-align: center;
}

/* ===========================================
   GAMES SECTION
   =========================================== */
.games-section {
  background: #ECE9E6;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.game-category {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.game-category:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(199, 61, 66, 0.15);
}

.game-category h3 {
  font-size: 1.3rem;
  color: #1E1E1E;
  margin-bottom: 1rem;
  text-align: center;
}

.games-list {
  color: #666;
  line-height: 1.6;
  text-align: center;
}

/* ===========================================
   LOCATION SECTION
   =========================================== */
.location-section {
  background: white;
}

.location-content {
  text-align: center;
}

.location-content h3 {
  font-size: 1.5rem;
  color: #C73D42;
  margin-bottom: 1rem;
}

.venue-address {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
}

.venue-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* ===========================================
   CONTACT SECTION
   =========================================== */
.contact-section {
  background: #ECE9E6;
}

.contact-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(199, 61, 66, 0.1);
}

.contact-icon {
  font-size: 1.5rem;
  color: #C73D42;
}

.contact-link {
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #C73D42;
}

/* ===========================================
   CTA SECTION
   =========================================== */
.cta-section {
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  color: white;
}

.cta-content {
  text-align: center;
}

.cta-quote {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  border: none;
}

.cta-quote p {
  margin-bottom: 1rem;
}

.cta-quote p:last-child {
  margin-bottom: 0;
}

.cta-highlight {
  font-size: 1.4rem;
  font-weight: 700;
  color: #E59C6F;
}

/* ===========================================
   BUTTONS
   =========================================== */
.btn-primary {
  display: inline-block;
  background: #C73D42;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #D1636D;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(199, 61, 66, 0.3);
}

.btn-secondary {
  display: inline-block;
  background: #E59C6F;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #D1636D;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(229, 156, 111, 0.3);
}

/* ===========================================
   ANIMATIONS
   =========================================== */
@keyframes patternFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* ===========================================
   RESPONSIVE DESIGN
   =========================================== */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .stats-list,
  .audience-list,
  .communities-list {
    grid-template-columns: 1fr;
  }
  
  .collaborations-grid,
  .offer-grid,
  .games-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-list {
    grid-template-columns: 1fr;
  }
  
  .events-table,
  .social-table {
    font-size: 0.9rem;
  }
  
  .events-table th,
  .events-table td,
  .social-table th,
  .social-table td {
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .events-table,
  .social-table {
    font-size: 0.8rem;
  }
  
  .events-table th,
  .events-table td,
  .social-table th,
  .social-table td {
    padding: 0.5rem;
  }
}
</style> 