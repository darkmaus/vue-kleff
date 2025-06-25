<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <h3>🎲 BoardGames</h3>
            <p>Bringing people together through the joy of board games</p>
          </div>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <span class="social-icon">📘</span>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <span class="social-icon">📷</span>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <span class="social-icon">🐦</span>
            </a>
            <a href="#" class="social-link" aria-label="Discord">
              <span class="social-icon">💬</span>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">{{ $t('nav.home') }}</a></li>
            <li><a href="#about">{{ $t('nav.about') }}</a></li>
            <li><a href="#games">{{ $t('nav.games') }}</a></li>
            <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Community</h4>
          <ul class="footer-links">
            <li><a href="#">Events</a></li>
            <li><a href="#">Tournaments</a></li>
            <li><a href="#">Game Reviews</a></li>
            <li><a href="#">Member Stories</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <ul class="footer-links">
            <li><a href="#">{{ $t('footer.privacy') }}</a></li>
            <li><a href="#">{{ $t('footer.terms') }}</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-info">
          <p class="copyright">{{ $t('footer.copyright') }}</p>
          <p class="location">📍 Barcelona, Spain</p>
        </div>
        <div class="footer-newsletter">
          <h5>Stay Updated</h5>
          <div class="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="newsletter-input"
              v-model="newsletterEmail"
            >
            <button @click="subscribeNewsletter" class="newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Success Toast -->
    <div v-if="showNewsletterToast" class="newsletter-toast">
      <div class="toast-content">
        <span class="toast-icon">✅</span>
        <span>Thank you for subscribing!</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newsletterEmail = ref('')
const showNewsletterToast = ref(false)

const subscribeNewsletter = () => {
  if (newsletterEmail.value.trim()) {
    // Simulate newsletter subscription
    showNewsletterToast.value = true
    newsletterEmail.value = ''
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      showNewsletterToast.value = false
    }, 3000)
  }
}
</script>

<style scoped>
.footer {
  background: #1E1E1E;
  color: white;
  padding: 60px 0 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0;
}

.footer-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #1E1E1E;
}

.footer-section p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #C73D42;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #C73D42;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #D1636D;
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

.footer-bottom {
  border-top: 1px solid #dee2e6;
  padding: 1.5rem 0;
  text-align: center;
  color: #6c757d;
  font-size: 0.9rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright {
  color: #bdc3c7;
  font-size: 0.9rem;
  margin: 0;
}

.location {
  color: #95a5a6;
  font-size: 0.85rem;
  margin: 0;
}

.footer-newsletter h5 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #ECE9E6;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 0.9rem;
}

.newsletter-input:focus {
  outline: none;
  border-color: #C73D42;
}

.newsletter-btn {
  background: #C73D42;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background: #D1636D;
}

/* Newsletter Toast */
.newsletter-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #27ae60;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toast-icon {
  font-size: 1.2rem;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-section h3 {
    font-size: 1.2rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-section h3 {
    font-size: 1.2rem;
  }

  .social-links {
    justify-content: center;
  }

  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input {
    width: 100%;
  }
  
  .newsletter-btn {
    width: 100%;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .footer-content {
    padding: 2rem 0;
    gap: 1.5rem;
  }
  
  .footer-section h3 {
    font-size: 1.1rem;
  }
  
  .footer-section p {
    font-size: 0.9rem;
  }
  
  .footer-links a {
    font-size: 0.9rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
  
  .newsletter-input {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
  
  .newsletter-btn {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
  
  .footer-bottom {
    padding: 1rem 0;
    font-size: 0.8rem;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .footer-content {
    gap: 4rem;
    padding: 4rem 0;
  }
  
  .footer-section h3 {
    font-size: 1.5rem;
  }
  
  .footer-section p {
    font-size: 1.1rem;
  }
  
  .footer-links a {
    font-size: 1.1rem;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
  }
  
  .newsletter-input {
    padding: 1rem;
    font-size: 1rem;
  }
  
  .newsletter-btn {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
  
  .footer-bottom {
    padding: 2rem 0;
    font-size: 1rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .footer-content {
    gap: 5rem;
    padding: 5rem 0;
  }
  
  .footer-section h3 {
    font-size: 1.7rem;
  }
  
  .footer-section p {
    font-size: 1.2rem;
  }
  
  .footer-links a {
    font-size: 1.2rem;
  }
  
  .social-link {
    width: 50px;
    height: 50px;
  }
  
  .newsletter-input {
    padding: 1.2rem;
    font-size: 1.1rem;
  }
  
  .newsletter-btn {
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
  }
  
  .footer-bottom {
    padding: 2.5rem 0;
    font-size: 1.1rem;
  }
}
</style> 