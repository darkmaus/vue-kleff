<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ $t('hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          <button class="hero-cta" @click="scrollToGames">
            {{ $t('hero.cta') }}
          </button>
        </div>
        <div class="hero-visual">
          <div class="game-cards">
            <div class="game-card card-1">
              <div class="card-content">🎮</div>
            </div>
            <div class="game-card card-2">
              <div class="card-content">🎲</div>
            </div>
            <div class="game-card card-3">
              <div class="card-content">♟️</div>
            </div>
            <div class="game-card card-4">
              <div class="card-content">🃏</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToGames = () => {
  const gamesSection = document.getElementById('games')
  if (gamesSection) {
    gamesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 70px; /* Account for fixed header */
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  z-index: -1;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
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
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-cta {
  background: #E59C6F;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(229, 156, 111, 0.3);
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-cta:hover {
  background: #D1636D;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(229, 156, 111, 0.4);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.game-cards {
  position: relative;
  width: 300px;
  height: 300px;
}

.game-card {
  position: absolute;
  width: 120px;
  height: 160px;
  background: #ECE9E6;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-10px) rotate(5deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.card-content {
  font-size: 3rem;
}

.card-1 {
  top: 0;
  left: 0;
  animation: float 3s ease-in-out infinite;
}

.card-2 {
  top: 20px;
  right: 0;
  animation: float 3s ease-in-out infinite 0.5s;
}

.card-3 {
  bottom: 20px;
  left: 20px;
  animation: float 3s ease-in-out infinite 1s;
}

.card-4 {
  bottom: 0;
  right: 20px;
  animation: float 3s ease-in-out infinite 1.5s;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .hero-content {
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .game-cards {
    width: 280px;
    height: 280px;
  }
  
  .game-card {
    width: 110px;
    height: 150px;
  }
  
  .card-content {
    font-size: 2.8rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .hero {
    padding-top: 60px;
    min-height: 90vh;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .game-cards {
    width: 250px;
    height: 250px;
  }

  .game-card {
    width: 100px;
    height: 140px;
  }

  .card-content {
    font-size: 2.5rem;
  }
  
  .hero-cta {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .hero {
    padding-top: 60px;
    min-height: 85vh;
  }
  
  .container {
    padding: 0 10px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .game-cards {
    width: 200px;
    height: 200px;
  }

  .game-card {
    width: 80px;
    height: 120px;
  }

  .card-content {
    font-size: 2rem;
  }
  
  .hero-cta {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .scroll-indicator {
    bottom: 20px;
  }
  
  .scroll-arrow {
    width: 25px;
    height: 25px;
    border-width: 2px;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .hero-content {
    gap: 5rem;
  }
  
  .hero-title {
    font-size: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-cta {
    padding: 18px 35px;
    font-size: 1.2rem;
  }
  
  .game-cards {
    width: 350px;
    height: 350px;
  }
  
  .game-card {
    width: 140px;
    height: 180px;
  }
  
  .card-content {
    font-size: 3.5rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .hero-content {
    gap: 6rem;
  }
  
  .hero-title {
    font-size: 4.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-cta {
    padding: 20px 40px;
    font-size: 1.3rem;
  }
  
  .game-cards {
    width: 400px;
    height: 400px;
  }
  
  .game-card {
    width: 160px;
    height: 200px;
  }
  
  .card-content {
    font-size: 4rem;
  }
}
</style> 