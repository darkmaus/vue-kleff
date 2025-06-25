<template>
  <section id="games" class="games-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('games.title') }}</h2>
        <p class="section-subtitle">{{ $t('games.subtitle') }}</p>
      </div>
      
      <div class="games-grid">
        <div 
          v-for="game in games" 
          :key="game.id" 
          class="game-card"
          @click="selectGame(game)"
        >
          <div class="game-image">
            <div class="game-emoji">{{ game.emoji }}</div>
          </div>
          <div class="game-info">
            <h3 class="game-title">{{ game.title }}</h3>
            <p class="game-description">{{ game.description }}</p>
            <div class="game-details">
              <div class="game-detail">
                <span class="detail-label">{{ $t('games.playerCount') }}:</span>
                <span class="detail-value">{{ game.players }}</span>
              </div>
              <div class="game-detail">
                <span class="detail-label">{{ $t('games.duration') }}:</span>
                <span class="detail-value">{{ game.duration }}</span>
              </div>
              <div class="game-detail">
                <span class="detail-label">{{ $t('games.difficulty') }}:</span>
                <span class="detail-value difficulty-{{ game.difficulty }}">
                  {{ $t(`games.difficultyLevels.${game.difficulty}`) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Game Modal -->
    <div v-if="selectedGame" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-content">
          <div class="modal-image">
            <div class="modal-emoji">{{ selectedGame.emoji }}</div>
          </div>
          <div class="modal-info">
            <h2 class="modal-title">{{ selectedGame.title }}</h2>
            <p class="modal-description">{{ selectedGame.description }}</p>
            <div class="modal-details">
              <div class="modal-detail">
                <span class="detail-label">{{ $t('games.playerCount') }}:</span>
                <span class="detail-value">{{ selectedGame.players }}</span>
              </div>
              <div class="modal-detail">
                <span class="detail-label">{{ $t('games.duration') }}:</span>
                <span class="detail-value">{{ selectedGame.duration }}</span>
              </div>
              <div class="modal-detail">
                <span class="detail-label">{{ $t('games.difficulty') }}:</span>
                <span class="detail-value difficulty-{{ selectedGame.difficulty }}">
                  {{ $t(`games.difficultyLevels.${selectedGame.difficulty}`) }}
                </span>
              </div>
            </div>
            <div class="modal-actions">
              <button class="btn-primary">Learn More</button>
              <button class="btn-secondary">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Game {
  id: number
  title: string
  description: string
  emoji: string
  players: string
  duration: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const selectedGame = ref<Game | null>(null)

const games: Game[] = [
  {
    id: 1,
    title: "Catan",
    description: "A strategic game of resource management and trading where players build settlements and cities.",
    emoji: "🏘️",
    players: "3-4",
    duration: "60-90 min",
    difficulty: "medium"
  },
  {
    id: 2,
    title: "Ticket to Ride",
    description: "Connect cities across the map by building train routes in this award-winning strategy game.",
    emoji: "🚂",
    players: "2-5",
    duration: "45-60 min",
    difficulty: "easy"
  },
  {
    id: 3,
    title: "Pandemic",
    description: "Work together as a team to stop the spread of diseases and save humanity.",
    emoji: "🦠",
    players: "2-4",
    duration: "45-60 min",
    difficulty: "medium"
  },
  {
    id: 4,
    title: "Chess",
    description: "The classic game of strategy and tactics, perfect for developing critical thinking skills.",
    emoji: "♟️",
    players: "2",
    duration: "10-60 min",
    difficulty: "hard"
  },
  {
    id: 5,
    title: "Codenames",
    description: "A word association game where teams compete to identify their agents using one-word clues.",
    emoji: "🕵️",
    players: "4-8+",
    duration: "15-30 min",
    difficulty: "easy"
  },
  {
    id: 6,
    title: "Risk",
    description: "Conquer the world in this classic game of global domination and military strategy.",
    emoji: "🌍",
    players: "2-6",
    duration: "120-180 min",
    difficulty: "medium"
  }
]

const selectGame = (game: Game) => {
  selectedGame.value = game
}

const closeModal = () => {
  selectedGame.value = null
}
</script>

<style scoped>
.games-section {
  padding: 80px 0;
  background: #ECE9E6;
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
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.game-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.game-image {
  height: 200px;
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-emoji {
  font-size: 4rem;
}

.game-info {
  padding: 1.5rem;
}

.game-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 1rem 0;
}

.game-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.game-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.game-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-label {
  font-weight: 500;
  color: #495057;
}

.detail-value {
  font-weight: 600;
  color: #1E1E1E;
}

.difficulty-easy {
  color: #28a745;
}

.difficulty-medium {
  color: #E59C6F;
}

.difficulty-hard {
  color: #C73D42;
}

/* Modal Styles */
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

.modal {
  background: white;
  border-radius: 15px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6c757d;
  z-index: 1;
}

.modal-close:hover {
  color: #1E1E1E;
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;
}

.modal-image {
  height: 200px;
  background: linear-gradient(135deg, #C73D42 0%, #D1636D 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-emoji {
  font-size: 4rem;
}

.modal-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1E1E1E;
  margin: 0;
}

.modal-description {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.modal-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
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
}

.btn-secondary {
  background: #E59C6F;
  color: white;
}

.btn-secondary:hover {
  background: #D1636D;
}

/* Tablet styles */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
  
  .games-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
  
  .game-card {
    margin: 0;
  }
  
  .modal-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .modal-actions {
    flex-direction: column;
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
  
  .section-subtitle {
    font-size: 0.9rem;
  }

  .game-card {
    margin: 0;
  }
  
  .game-info {
    padding: 1rem;
  }
  
  .game-title {
    font-size: 1.3rem;
  }
  
  .game-description {
    font-size: 0.9rem;
  }
  
  .modal {
    margin: 10px;
  }
  
  .modal-content {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
}

/* Wide screen styles */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
    padding: 0 40px;
  }
  
  .games-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2.5rem;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
  }
  
  .game-card {
    border-radius: 20px;
  }
  
  .game-info {
    padding: 2rem;
  }
  
  .game-title {
    font-size: 1.7rem;
  }
  
  .game-description {
    font-size: 1.1rem;
  }
}

/* Extra wide screen styles */
@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
    padding: 0 60px;
  }
  
  .games-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 3rem;
  }
  
  .section-title {
    font-size: 3.5rem;
  }
  
  .section-subtitle {
    font-size: 1.4rem;
  }
  
  .game-card {
    border-radius: 25px;
  }
  
  .game-info {
    padding: 2.5rem;
  }
  
  .game-title {
    font-size: 1.9rem;
  }
  
  .game-description {
    font-size: 1.2rem;
  }
}
</style> 