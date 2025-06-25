<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <h2 class="section-title">{{ $t('about.title') }}</h2>
            <p class="section-subtitle">{{ $t('about.subtitle') }}</p>
          </div>
          
          <div class="about-description">
            <p>{{ $t('about.description') }}</p>
          </div>

          <div class="about-features">
            <div class="feature">
              <div class="feature-icon">🎯</div>
              <div class="feature-content">
                <h3>{{ $t('about.mission') }}</h3>
                <p>{{ $t('about.missionText') }}</p>
              </div>
            </div>

            <div class="feature">
              <div class="feature-icon">💎</div>
              <div class="feature-content">
                <h3>{{ $t('about.values') }}</h3>
                <ul class="values-list">
                  <li v-for="(value, index) in $t('about.valuesList')" :key="index">
                    {{ value }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="about-visual">
          <div class="visual-container">
            <div class="floating-card card-1">
              <div class="card-icon">🎲</div>
              <div class="card-text">Strategy</div>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon">🤝</div>
              <div class="card-text">Community</div>
            </div>
            <div class="floating-card card-3">
              <div class="card-icon">🧠</div>
              <div class="card-text">Learning</div>
            </div>
            <div class="floating-card card-4">
              <div class="card-icon">🎉</div>
              <div class="card-text">Fun</div>
            </div>
            <div class="floating-card card-5">
              <div class="card-icon">🌟</div>
              <div class="card-text">Excellence</div>
            </div>
            <div class="floating-card card-6">
              <div class="card-icon">❤️</div>
              <div class="card-text">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic is minimal, mostly template-driven
</script>

<style scoped>
.about-section {
  padding: 80px 0;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
  line-height: 1.6;
}

.about-description {
  margin-bottom: 3rem;
}

.about-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
  margin: 0;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 0.5rem 0;
}

.feature-content p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
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

/* Visual Section */
.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: #ECE9E6;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 100px;
  border: 2px solid transparent;
}

.floating-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: #E59C6F;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1E1E1E;
}

.card-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: float 4s ease-in-out infinite;
}

.card-2 {
  top: 20%;
  right: 0;
  animation: float 4s ease-in-out infinite 0.5s;
}

.card-3 {
  top: 50%;
  right: 10%;
  animation: float 4s ease-in-out infinite 1s;
}

.card-4 {
  bottom: 20%;
  right: 0;
  animation: float 4s ease-in-out infinite 1.5s;
}

.card-5 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: float 4s ease-in-out infinite 2s;
}

.card-6 {
  bottom: 20%;
  left: 0;
  animation: float 4s ease-in-out infinite 2.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .about-content {
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .about-description p {
    font-size: 1rem;
  }
  
  .visual-container {
    width: 350px;
    height: 350px;
  }
  
  .floating-card {
    min-width: 90px;
    padding: 0.9rem;
  }
  
  .card-icon {
    font-size: 1.8rem;
  }
  
  .card-text {
    font-size: 0.8rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .feature {
    flex-direction: column;
    text-align: center;
  }

  .feature-icon {
    margin-bottom: 1rem;
  }

  .visual-container {
    width: 300px;
    height: 300px;
  }

  .floating-card {
    min-width: 80px;
    padding: 0.8rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-text {
    font-size: 0.8rem;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }

  .about-description p {
    font-size: 0.95rem;
  }

  .visual-container {
    width: 250px;
    height: 250px;
  }

  .floating-card {
    min-width: 70px;
    padding: 0.6rem;
  }

  .card-icon {
    font-size: 1.3rem;
  }

  .card-text {
    font-size: 0.7rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-content h3 {
    font-size: 1.1rem;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .about-content {
    gap: 5rem;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
  }
  
  .about-description p {
    font-size: 1.2rem;
  }
  
  .feature-icon {
    font-size: 3rem;
  }
  
  .feature-content h3 {
    font-size: 1.5rem;
  }
  
  .visual-container {
    width: 450px;
    height: 450px;
  }
  
  .floating-card {
    min-width: 120px;
    padding: 1.2rem;
  }
  
  .card-icon {
    font-size: 2.5rem;
  }
  
  .card-text {
    font-size: 1.1rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .about-content {
    gap: 6rem;
  }
  
  .section-title {
    font-size: 3.5rem;
  }
  
  .section-subtitle {
    font-size: 1.4rem;
  }
  
  .about-description p {
    font-size: 1.3rem;
  }
  
  .feature-icon {
    font-size: 3.5rem;
  }
  
  .feature-content h3 {
    font-size: 1.7rem;
  }
  
  .visual-container {
    width: 500px;
    height: 500px;
  }
  
  .floating-card {
    min-width: 140px;
    padding: 1.5rem;
  }
  
  .card-icon {
    font-size: 3rem;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
}
</style> 