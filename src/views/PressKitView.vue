<template>
  <div class="press-kit-page">
    <!-- Hero Section -->
    <section class="press-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title">🎲 PRESS KIT – KLEFF</h1>
          <p class="hero-subtitle">La comunidad de juegos de mesa más grande de Europa</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <!-- ¿Quiénes Somos? Section -->
      <section class="who-we-are-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📍 ¿Quiénes somos?</h2>
          </div>
          <div class="content-wrapper">
            <p class="description">KLEFF nace a finales de 2019 como el primer <strong>afterwork lúdico</strong> de Barcelona. Nuestro objetivo es <strong>conectar personas</strong> a través de juegos de mesa en un ambiente inclusivo y multicultural.</p>
            <ul class="stats-list">
              <li><strong>Sede actual:</strong> L'Estació - Espai Gastronòmic, Estació de França</li>
              <li><strong>Asistentes:</strong> +300 por evento</li>
              <li><strong>Juegos disponibles:</strong> +200</li>
              <li><strong>Crecimiento anual:</strong> 25%</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Público Objetivo Section -->
      <section class="target-audience-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🎯 Público Objetivo</h2>
          </div>
          <div class="content-wrapper">
            <ul class="audience-list">
              <li>Idiomas: Español, Catalán e Inglés</li>
              <li>Jugadores: novatos, casuales y expertos</li>
              <li>Edad: desde 14 años (media: 20–35 años)</li>
              <li>Formato: personas solas, parejas, grupos, familias</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tipos de Eventos Section -->
      <section class="events-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📅 Tipos de Eventos</h2>
          </div>
          <div class="content-wrapper">
            <div class="table-container">
              <table class="events-table">
                <thead>
                  <tr>
                    <th>Frecuencia</th>
                    <th>Evento</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in events" :key="event.name" class="animate-on-scroll">
                    <td class="frequency">{{ event.frequency }}</td>
                    <td class="event-name"><strong>{{ event.name }}</strong></td>
                    <td class="description">{{ event.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Comunidades Section -->
      <section class="communities-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🧠 Nuestras Comunidades</h2>
          </div>
          <div class="content-wrapper">
            <ul class="communities-list">
              <li><strong>Blood on the Clocktower:</strong> mínimo 2 partidas semanales</li>
              <li><strong>Catan:</strong> torneos y comunidad activa</li>
              <li><strong>Unmatched:</strong> torneos regulares</li>
              <li><strong>Roles ocultos:</strong> deducción social e identidades secretas</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Colaboraciones Section -->
      <section class="collaborations-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🤝 Colaboraciones</h2>
          </div>
          <div class="content-wrapper">
            <div class="collaborations-grid">
              <div class="collab-category animate-on-scroll">
                <h3>Editoriales</h3>
                <ul class="collab-list">
                  <li v-for="item in editoriales" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="collab-category animate-on-scroll">
                <h3>Tiendas</h3>
                <ul class="collab-list">
                  <li v-for="item in tiendas" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="collab-category animate-on-scroll">
                <h3>Entidades</h3>
                <ul class="collab-list">
                  <li v-for="item in entidades" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Redes Sociales Section -->
      <section class="social-reach-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📈 Alcance en Redes Sociales</h2>
          </div>
          <div class="content-wrapper">
            <div class="table-container">
              <table class="social-table">
                <thead>
                  <tr>
                    <th>Plataforma</th>
                    <th>Seguidores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(count, network) in redes" :key="network" class="animate-on-scroll">
                    <td class="platform-name">{{ network }}</td>
                    <td class="platform-followers">{{ count }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Presencia en Medios Section -->
      <section class="media-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📰 Presencia en Medios</h2>
          </div>
          <div class="content-wrapper">
            <ul class="media-list">
              <li v-for="link in medios" :key="link.url">
                <a :href="link.url" target="_blank" class="text-blue-600 underline">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ¿Qué Buscamos / Ofrecemos? Section -->
      <section class="offer-section">
        <div class="container">
          <div class="content-wrapper">
            <div class="offer-grid">
              <div class="offer-card animate-on-scroll">
                <h3>🎯 ¿Qué buscamos?</h3>
                <ul class="offer-list">
                  <li>Espacios nuevos</li>
                  <li>Patrocinio económico</li>
                  <li>Apoyo en difusión y eventos</li>
                </ul>
              </div>
              <div class="offer-card animate-on-scroll">
                <h3>💡 ¿Qué ofrecemos?</h3>
                <ul class="offer-list">
                  <li>Publicidad y visibilidad</li>
                  <li>Aparición en carteles</li>
                  <li>Presencia en eventos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Galería Section -->
      <section class="gallery-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🖼 Recopilatorio Fotográfico</h2>
          </div>
          <div class="content-wrapper">
            <div class="gallery-content animate-on-scroll">
              <div class="gallery-grid">
                <img v-for="(img, index) in fotos" :key="index" :src="img" class="gallery-image" />
              </div>
              <div class="gallery-link">
                <a href="https://drive.google.com/drive/folders/1mff6ikHdJJ44H-lS-qsC-mHvG5F40Q3a" target="_blank" class="btn-secondary">
                  Ver galería completa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Juegos Recomendados Section -->
      <section class="games-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>🕹 Juegos Recomendados</h2>
          </div>
          <div class="content-wrapper">
            <ul class="games-list">
              <li><strong>¿Sois dos?</strong> Jaipur, Azul, Lost Cities</li>
              <li><strong>¿Fiesta?</strong> Secret Hitler, Wavelength, Scrawl</li>
              <li><strong>¿Algo rápido?</strong> Danger, Virus, Trio, Hanabi</li>
              <li><strong>¿Más complejo?</strong> Terraforming Mars, Bitoku, Darwin's Journey</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Ubicación Section -->
      <section class="location-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📍 Ubicación</h2>
          </div>
          <div class="content-wrapper">
            <div class="location-content animate-on-scroll">
              <h3><strong>L'Estació Espai Gastronòmic</strong></h3>
              <p class="venue-address">Av. del Marquès de l'Argentera, 6, 8 – 08002, Barcelona</p>
              <p class="venue-description">Más de 300 juegos de mesa te están esperando.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contacto Section -->
      <section class="contact-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <h2>📞 Contacto</h2>
          </div>
          <div class="content-wrapper">
            <ul class="contact-list">
              <li>Email: <a href="mailto:hola@kleff.es" class="contact-link">hola@kleff.es</a></li>
              <li>Web: <a href="https://kleff.es" target="_blank" class="contact-link">kleff.es</a></li>
              <li>Instagram: <a href="https://www.instagram.com/kleff.bcn" target="_blank" class="contact-link">@kleff.bcn</a></li>
              <li>Meetup: <a href="https://www.meetup.com/es/k-leff" target="_blank" class="contact-link">KLEFF en Meetup</a></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Mensaje Final Section -->
      <section class="cta-section">
        <div class="container">
          <div class="content-wrapper">
            <div class="cta-content animate-on-scroll">
              <blockquote class="cta-quote">
                <p>¿Te gustan los juegos de mesa? ¿Quieres conocer gente nueva y jugar mientras tomas algo?</p>
                <p class="cta-highlight">¡Únete a la comunidad KLEFFER y no te pierdas nada!</p>
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

// Datos de ejemplo – sustituir por props o fetch dinámico si se necesita
const events = [
  { frequency: 'Semanal', name: 'Noche de juegos', description: 'Partidas de Catan, Blood on the Clocktower, etc.' },
  { frequency: 'Puntual', name: 'Slow Dating Lúdico', description: 'Conexión entre personas mediante juegos sociales.' },
  { frequency: 'Mensual', name: 'Torneos', description: 'Competencias de distintos juegos.' },
  { frequency: 'Mensual', name: 'Jornadas de demostración', description: 'Editoriales enseñan a jugar sus juegos.' },
  { frequency: 'Anual', name: 'Carnival Game Night', description: 'Noche temática con disfraces.' },
  { frequency: 'Anual', name: 'Halloween Game Night', description: 'Evento especial temático Halloween.' },
  { frequency: 'Anual', name: 'X-Mas Game Night', description: 'Evento benéfico para niños con cáncer.' }
];

const editoriales = ['DEVIR', 'Maldito Games', 'GDM Games', 'Magic Box Games', 'Asmodee', 'Key Enigma', 'Toysline'];
const tiendas = ['Mathom', 'The Curiosity Shop', 'Gameria', 'Kaburi'];
const entidades = ['CNL', 'Espai de Joc 0-99', 'Espai de Jocs Sant Andreu', 'Movistar Center', 'BNGrup', 'Checkpoint Gaming'];

const redes = {
  Instagram: '10,2k',
  Meetup: '10,7k',
  Whatsapp: '1,8k',
  Telegram: '1k'
};

const medios = [
  { name: 'El Periódico', url: 'https://www.elperiodico.com/es/...' },
  { name: 'RTVE – Punts de Vista', url: 'https://www.rtve.es/...' },
  { name: 'Time Out', url: 'https://www.timeout.es/...' },
  // Agrega más enlaces si lo deseas
];

const fotos = [
  'https://drive.google.com/uc?export=view&id=IMAGE_ID_1',
  'https://drive.google.com/uc?export=view&id=IMAGE_ID_2'
  // Añadir más imágenes si es necesario
];

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
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.stats-list li {
  margin-bottom: 0.5rem;
}

/* ===========================================
   TARGET AUDIENCE SECTION
   =========================================== */
.target-audience-section {
  background: #ECE9E6;
}

.audience-list {
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.audience-list li {
  margin-bottom: 0.5rem;
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
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.communities-list li {
  margin-bottom: 0.5rem;
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
  list-style: disc;
  padding-left: 1.5rem;
}

.collab-list li {
  padding: 0.5rem 0;
  color: #666;
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
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.media-list li {
  margin-bottom: 0.5rem;
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
  list-style: disc;
  padding-left: 1.5rem;
}

.offer-list li {
  padding: 0.5rem 0;
  color: #666;
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.games-list {
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.games-list li {
  margin-bottom: 0.5rem;
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
  list-style: disc;
  padding-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.contact-list li {
  margin-bottom: 0.5rem;
}

.contact-link {
  color: #C73D42;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #D1636D;
  text-decoration: underline;
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
  
  .collaborations-grid,
  .offer-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
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