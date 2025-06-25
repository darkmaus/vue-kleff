<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>{{ $t('contact.email') }}</h3>
            <p>hello@boardgames.com</p>
            <a href="mailto:hello@boardgames.com" class="contact-link">Send Email</a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📍</div>
            <h3>{{ $t('contact.location') }}</h3>
            <p>Barcelona, Spain</p>
            <p>We meet weekly at local game stores</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📱</div>
            <h3>{{ $t('contact.socialMedia') }}</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <span class="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" class="social-link">
                <span class="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="#" class="social-link">
                <span class="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <div class="form-header">
            <h3>{{ $t('contact.joinUs') }}</h3>
            <p>Fill out the form below to join our community!</p>
          </div>

          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                class="form-input"
                placeholder="Your full name"
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                class="form-input"
                placeholder="your.email@example.com"
              >
            </div>

            <div class="form-group">
              <label for="experience">Experience Level</label>
              <select id="experience" v-model="form.experience" class="form-input">
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message (Optional)</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="4" 
                class="form-input"
                placeholder="Tell us about your favorite games or why you'd like to join..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Join Community' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
      <div class="success-modal" @click.stop>
        <div class="success-icon">✅</div>
        <h3>Welcome to the Community!</h3>
        <p>Thank you for joining us! We'll be in touch soon with details about our next meetup.</p>
        <button @click="closeSuccessModal" class="close-btn">Close</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const form = reactive({
  name: '',
  email: '',
  experience: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form
  form.name = ''
  form.email = ''
  form.experience = ''
  form.message = ''
  
  isSubmitting.value = false
  showSuccessModal.value = true
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  color: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.contact-card p {
  margin: 0 0 1rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

.contact-link {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.social-icon {
  font-size: 1.2rem;
}

/* Contact Form */
.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.form-header p {
  opacity: 0.9;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  font-size: 0.9rem;
}

.form-input {
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
}

.form-input option {
  background: #1E1E1E;
  color: white;
}

.submit-btn {
  background: #E59C6F;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  background: #D1636D;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Success Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.success-modal {
  background: white;
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
  color: #1E1E1E;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.success-modal h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.success-modal p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.close-btn {
  background: #C73D42;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #D1636D;
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .contact-content {
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-card {
    padding: 1.5rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
  
  .contact-icon {
    font-size: 2.5rem;
  }
  
  .contact-card h3 {
    font-size: 1.2rem;
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

  .contact-card {
    padding: 1rem;
  }

  .contact-form {
    padding: 1rem;
  }

  .success-modal {
    padding: 2rem;
  }
  
  .contact-icon {
    font-size: 2rem;
  }
  
  .contact-card h3 {
    font-size: 1.1rem;
  }
  
  .form-header h3 {
    font-size: 1.3rem;
  }
  
  .submit-btn {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .contact-content {
    gap: 5rem;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
  }
  
  .contact-card {
    padding: 2.5rem;
  }
  
  .contact-form {
    padding: 2.5rem;
  }
  
  .contact-icon {
    font-size: 3.5rem;
  }
  
  .contact-card h3 {
    font-size: 1.5rem;
  }
  
  .form-header h3 {
    font-size: 1.7rem;
  }
  
  .submit-btn {
    padding: 1.2rem;
    font-size: 1.1rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .contact-content {
    gap: 6rem;
  }
  
  .section-title {
    font-size: 3.5rem;
  }
  
  .section-subtitle {
    font-size: 1.4rem;
  }
  
  .contact-card {
    padding: 3rem;
  }
  
  .contact-form {
    padding: 3rem;
  }
  
  .contact-icon {
    font-size: 4rem;
  }
  
  .contact-card h3 {
    font-size: 1.7rem;
  }
  
  .form-header h3 {
    font-size: 1.9rem;
  }
  
  .submit-btn {
    padding: 1.5rem;
    font-size: 1.2rem;
  }
}
</style> 