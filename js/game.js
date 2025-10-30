// Main Game Logic for Halloween 12 Levels
class HalloweenGame {
    constructor() {
        this.characters = new HalloweenCharacters();
        this.puzzles = new HalloweenPuzzles();
        this.soundManager = null;
        this.gameState = {
            playerName: '',
            currentLevel: 1,
            currentScreen: 'welcome',
            currentPuzzle: null,
            score: 0,
            totalScore: 0,
            attempts: 0,
            completedLevels: [],
            levelScores: {},
            soundEnabled: true
        };
        this.maxLevel = 12;
        this.init();
    }

    init() {
        this.loadGameData();
        this.initializeSoundSystem();
        this.setupEventListeners();
        this.showScreen('welcome');
        this.playWelcomeSound();
    }

    initializeSoundSystem() {
        try {
            this.soundManager = new SpookySoundManager();
            this.setupSoundControls();
            
            // Play ambient sound after user interaction
            document.addEventListener('click', () => {
                if (this.soundManager && this.gameState.soundEnabled) {
                    this.soundManager.startAmbientSound();
                }
            }, { once: true });
            
        } catch (e) {
            console.log('Sound system initialization failed:', e);
        }
    }

    setupSoundControls() {
        const soundToggle = document.getElementById('soundToggle');
        const volumeSlider = document.getElementById('volumeSlider');
        
        if (soundToggle) {
            soundToggle.addEventListener('click', () => {
                this.gameState.soundEnabled = this.soundManager.toggleMute();
                soundToggle.textContent = this.gameState.soundEnabled ? '🔊' : '🔇';
                soundToggle.classList.toggle('muted', !this.gameState.soundEnabled);
                this.saveGameData();
            });
        }
        
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                const volume = e.target.value / 100;
                this.soundManager.setVolume(volume);
            });
        }
    }

    // Event Listeners Setup
    setupEventListeners() {
        // Welcome screen
        document.getElementById('startGameBtn').addEventListener('click', () => {
            this.playSound('click');
            const nameInput = document.getElementById('playerName');
            if (nameInput.value.trim()) {
                this.gameState.playerName = nameInput.value.trim();
                this.saveGameData();
                this.showLevelSelection();
            } else {
                this.showAlert('Please enter your name to start the adventure!');
            }
        });

        // Level selection
        document.getElementById('backToWelcome').addEventListener('click', () => {
            this.showScreen('welcome');
        });

        // Game screen controls
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.showHint();
        });

        document.getElementById('submitAnswer').addEventListener('click', () => {
            this.playSound('click');
            this.checkPuzzleAnswer();
        });

        document.getElementById('retryLevel').addEventListener('click', () => {
            this.playSound('click');
            this.retryCurrentLevel();
        });

        document.getElementById('backToLevels').addEventListener('click', () => {
            this.playSound('click');
            this.showLevelSelection();
        });

        // Modal controls
        document.getElementById('nextLevelBtn').addEventListener('click', () => {
            this.playSound('click');
            this.goToNextLevel();
        });

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.playSound('click');
            this.retryCurrentLevel();
            this.hideModal('successModal');
        });

        // Modal close buttons
        document.querySelectorAll('.close, .hint-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    this.hideModal(modal.id);
                }
            });
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideModal(e.target.id);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.style.display === 'block') {
                        this.hideModal(modal.id);
                    }
                });
            }
        });
    }

    // Screen Management
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenName + 'Screen').classList.add('active');
        this.gameState.currentScreen = screenName;
    }

    showLevelSelection() {
        this.showScreen('level');
        document.getElementById('playerNameDisplay').textContent = this.gameState.playerName;
        document.getElementById('totalScore').textContent = this.gameState.totalScore;
        this.renderLevelGrid();
    }

    showGameScreen(level) {
        this.gameState.currentLevel = level;
        this.gameState.score = 0;
        this.gameState.attempts = 0;
        this.showScreen('game');
        this.startLevel(level);
    }

    // Level Management
    renderLevelGrid() {
        const grid = document.getElementById('levelsGrid');
        grid.innerHTML = '';

        for (let level = 1; level <= this.maxLevel; level++) {
            const character = this.characters.getCharacter(level);
            const isUnlocked = this.isLevelUnlocked(level);
            const isCompleted = this.gameState.completedLevels.includes(level);
            const bestScore = this.gameState.levelScores[level] || 0;

            const levelCard = document.createElement('div');
            levelCard.className = `level-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCompleted ? 'completed' : ''}`;
            
            if (isUnlocked) {
                levelCard.addEventListener('click', () => {
                    this.playSound('click');
                    setTimeout(() => {
                        this.showGameScreen(level);
                    }, 100); // Small delay for sound feedback
                });
            }

            levelCard.innerHTML = `
                <div class="level-number">Level ${level}</div>
                <div class="level-character-emoji">${character.emoji}</div>
                <div class="level-character-name">${character.name}</div>
                ${isCompleted ? `<div class="level-best-score">Best: ${bestScore} pts</div>` : ''}
                ${!isUnlocked ? '<div class="lock-icon">🔒</div>' : ''}
            `;

            grid.appendChild(levelCard);
        }
    }

    isLevelUnlocked(level) {
        if (level === 1) return true;
        return this.gameState.completedLevels.includes(level - 1);
    }

    startLevel(level) {
        const character = this.characters.getCharacter(level);
        
        // Play level start sound
        this.playSound('levelStart');
        
        // Update UI
        document.getElementById('currentLevel').textContent = level;
        document.getElementById('currentCharacter').textContent = character.name;
        document.getElementById('currentScore').textContent = this.gameState.score;
        
        // Display character
        const characterDisplay = document.getElementById('characterDisplay');
        this.characters.displayCharacter(level, characterDisplay);
        
        // Character welcome message with sound
        const speechElement = document.getElementById('characterMessage');
        this.characters.speakCharacter(level, null, speechElement);
        
        // Play character-specific sound
        this.playCharacterSound(character.name);
        
        // Generate and display puzzle
        this.generateNewPuzzle(level, false);
    }

    generateNewPuzzle(level, isRetry) {
        const character = this.characters.getCharacter(level);
        const availablePuzzleTypes = character.puzzleTypes;
        const puzzleType = availablePuzzleTypes[Math.floor(Math.random() * availablePuzzleTypes.length)];
        
        this.gameState.currentPuzzle = this.puzzles.generatePuzzle(level, puzzleType, isRetry);
        
        const puzzleContainer = document.getElementById('puzzleContainer');
        this.puzzles.renderPuzzle(this.gameState.currentPuzzle, puzzleContainer);
        
        // Reset submit button
        const submitBtn = document.getElementById('submitAnswer');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Answer';
        
        if (isRetry) {
            this.gameState.attempts++;
            const speechElement = document.getElementById('characterMessage');
            const encouragement = this.characters.getEncouragementMessage(level, this.gameState.attempts);
            this.characters.speakCharacter(level, encouragement, speechElement);
        }
    }

    checkPuzzleAnswer() {
        const isCorrect = this.puzzles.checkAnswer(this.gameState.currentPuzzle);
        
        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer();
        }
    }

    handleCorrectAnswer() {
        const level = this.gameState.currentLevel;
        const baseScore = this.calculateScore(level, this.gameState.attempts);
        this.gameState.score += baseScore;
        this.gameState.totalScore += baseScore;
        
        // Mark level as completed
        if (!this.gameState.completedLevels.includes(level)) {
            this.gameState.completedLevels.push(level);
        }
        
        // Update best score
        if (!this.gameState.levelScores[level] || this.gameState.levelScores[level] < baseScore) {
            this.gameState.levelScores[level] = baseScore;
        }
        
        this.saveGameData();
        
        // Play celebration sounds based on completion
        if (level === this.maxLevel) {
            this.playSound('gameComplete');
        } else {
            this.playSound('levelComplete');
        }
        
        // Play character celebration sound
        const character = this.characters.getCharacter(level);
        setTimeout(() => {
            this.playCharacterSound(character.name);
        }, 800);
        
        this.triggerSpookyEffect('success');
        this.showSuccessModal(baseScore);
    }

    handleIncorrectAnswer() {
        this.gameState.attempts++;
        this.playSound('error');
        this.triggerSpookyEffect('error');
        
        // Provide encouragement
        const speechElement = document.getElementById('characterMessage');
        const encouragement = this.characters.getEncouragementMessage(
            this.gameState.currentLevel, 
            this.gameState.attempts
        );
        this.characters.speakCharacter(this.gameState.currentLevel, encouragement, speechElement);
        
        // Add visual feedback
        const submitBtn = document.getElementById('submitAnswer');
        submitBtn.textContent = 'Try Again';
        submitBtn.style.background = 'linear-gradient(45deg, #FF6B35, #FF9800)';
        
        setTimeout(() => {
            submitBtn.textContent = 'Submit Answer';
            submitBtn.style.background = '';
        }, 1500);
    }

    calculateScore(level, attempts) {
        const baseScore = level * 100;
        let finalScore = baseScore;
        
        // Handle memory game scoring differently
        if (this.gameState.currentPuzzle && this.gameState.currentPuzzle.type === 'memory') {
            const puzzle = this.gameState.currentPuzzle;
            const successRate = ((puzzle.pairCount - puzzle.failedAttempts) / puzzle.pairCount);
            
            // Memory game bonus based on success rate
            if (successRate >= 0.9) {
                finalScore *= 1.5; // 90%+ success rate
            } else if (successRate >= 0.7) {
                finalScore *= 1.2; // 70%+ success rate
            } else if (successRate >= 0.5) {
                finalScore *= 1.0; // 50%+ success rate
            } else {
                finalScore *= 0.8; // Below 50% success rate
            }
            
            // Bonus for perfect memory (no failed attempts)
            if (puzzle.failedAttempts === 0) {
                finalScore += 200; // Perfect memory bonus
            }
        } else {
            // Regular scoring for other puzzle types
            const attemptPenalty = Math.max(0, (attempts - 1) * 20);
            const bonusMultiplier = attempts === 0 ? 1.5 : 1;
            finalScore = (baseScore - attemptPenalty) * bonusMultiplier;
        }
        
        return Math.round(finalScore);
    }

    showSuccessModal(score) {
        const character = this.characters.getCharacter(this.gameState.currentLevel);
        let celebrationMessage = this.characters.getCelebrationMessage(
            this.gameState.currentLevel, 
            score
        );
        
        // Add memory-specific achievements
        if (this.gameState.currentPuzzle && this.gameState.currentPuzzle.type === 'memory') {
            const puzzle = this.gameState.currentPuzzle;
            const successRate = Math.round(((puzzle.pairCount - puzzle.failedAttempts) / puzzle.pairCount) * 100);
            
            if (puzzle.failedAttempts === 0) {
                celebrationMessage += "\n\n🧠 PERFECT MEMORY! You found all pairs without any mistakes! Amazing brain power! 🌟";
            } else if (successRate >= 90) {
                celebrationMessage += "\n\n🧠 EXCELLENT MEMORY! You found most pairs correctly! Great job! ⭐";
            } else if (successRate >= 70) {
                celebrationMessage += "\n\n🧠 GOOD MEMORY! You're getting better at remembering! Keep it up! 👍";
            }
            
            celebrationMessage += `\n\nMemory Stats: ${puzzle.matchedPairs} pairs found, ${puzzle.failedAttempts} failed attempts (${successRate}% success rate)`;
        }
        
        document.getElementById('successText').textContent = celebrationMessage;
        document.getElementById('pointsEarned').textContent = score;
        
        // Show/hide next level button
        const nextBtn = document.getElementById('nextLevelBtn');
        if (this.gameState.currentLevel < this.maxLevel) {
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = `Level ${this.gameState.currentLevel + 1}`;
        } else {
            nextBtn.style.display = 'none';
            document.getElementById('successText').textContent += 
                " 🎉 Congratulations! You've completed all 12 spooky levels! You're a true Halloween puzzle master! 🎉";
        }
        
        this.showModal('successModal');
    }

    goToNextLevel() {
        this.hideModal('successModal');
        if (this.gameState.currentLevel < this.maxLevel) {
            this.showGameScreen(this.gameState.currentLevel + 1);
        } else {
            this.showLevelSelection();
        }
    }

    retryCurrentLevel() {
        this.generateNewPuzzle(this.gameState.currentLevel, true);
    }

    // Hint System
    showHint() {
        // Play hint sound
        this.playSound('hint');
        
        const puzzleHint = this.puzzles.getHint(this.gameState.currentPuzzle);
        const characterHint = this.characters.getCharacterHint(
            this.gameState.currentLevel,
            this.gameState.currentPuzzle.type
        );
        
        const combinedHint = `${characterHint}\n\n💡 ${puzzleHint}`;
        
        document.getElementById('hintText').textContent = combinedHint;
        this.showModal('hintModal');
        
        // Small score penalty for using hints
        if (this.gameState.score > 10) {
            this.gameState.score -= 10;
            document.getElementById('currentScore').textContent = this.gameState.score;
        }
    }

    // Modal Management
    showModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    hideModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    // Sound Management
    playSound(soundType) {
        if (!this.gameState.soundEnabled || !this.soundManager) return;
        this.soundManager.playSound(soundType);
    }

    playWelcomeSound() {
        if (!this.gameState.soundEnabled || !this.soundManager) return;
        
        // Play a magical welcome sound
        setTimeout(() => {
            this.soundManager.playSound('ghostWhisper');
        }, 500);
        
        setTimeout(() => {
            this.soundManager.playSound('success');
        }, 1000);
    }

    playCharacterSound(characterName) {
        if (!this.gameState.soundEnabled || !this.soundManager) return;
        
        const characterSoundFunc = this.soundManager.getCharacterSound(characterName);
        if (characterSoundFunc) {
            setTimeout(characterSoundFunc, 300); // Delay for character introduction
        }
    }

    // Data Persistence
    saveGameData() {
        try {
            const volumeSlider = document.getElementById('volumeSlider');
            const volume = volumeSlider ? volumeSlider.value / 100 : 0.5;
            
            localStorage.setItem('halloween12levels', JSON.stringify({
                playerName: this.gameState.playerName,
                totalScore: this.gameState.totalScore,
                completedLevels: this.gameState.completedLevels,
                levelScores: this.gameState.levelScores,
                soundEnabled: this.gameState.soundEnabled,
                volume: volume
            }));
        } catch (e) {
            console.log('Could not save game data:', e);
        }
    }

    loadGameData() {
        try {
            const saved = localStorage.getItem('halloween12levels');
            if (saved) {
                const data = JSON.parse(saved);
                this.gameState.playerName = data.playerName || '';
                this.gameState.totalScore = data.totalScore || 0;
                this.gameState.completedLevels = data.completedLevels || [];
                this.gameState.levelScores = data.levelScores || {};
                this.gameState.soundEnabled = data.soundEnabled !== false;
                
                // Update sound control UI
                setTimeout(() => {
                    const soundToggle = document.getElementById('soundToggle');
                    const volumeSlider = document.getElementById('volumeSlider');
                    
                    if (soundToggle) {
                        soundToggle.textContent = this.gameState.soundEnabled ? '🔊' : '🔇';
                        soundToggle.classList.toggle('muted', !this.gameState.soundEnabled);
                    }
                    
                    if (volumeSlider && data.volume !== undefined) {
                        volumeSlider.value = data.volume * 100;
                    }
                }, 100);
                
                // Pre-fill player name if available
                if (this.gameState.playerName) {
                    document.getElementById('playerName').value = this.gameState.playerName;
                }
            }
        } catch (e) {
            console.log('Could not load game data:', e);
        }
    }

    // Spooky Visual Effects
    triggerSpookyEffect(type) {
        // Create overlay element if it doesn't exist
        let overlay = document.querySelector('.spooky-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'spooky-overlay';
            document.body.appendChild(overlay);
        }
        
        // Remove any existing classes
        overlay.classList.remove('success', 'error');
        
        // Add appropriate effect class
        overlay.classList.add(type);
        overlay.style.opacity = '1';
        
        // Remove effect after animation
        setTimeout(() => {
            overlay.style.opacity = '0';
            overlay.classList.remove(type);
        }, type === 'success' ? 2000 : 500);
        
        // Special effects based on type
        if (type === 'success') {
            this.triggerSuccessParticles();
        } else if (type === 'error') {
            this.shakeScreen();
        }
    }
    
    triggerSuccessParticles() {
        // Create temporary success particles
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    font-size: 2rem;
                    z-index: 1000;
                    pointer-events: none;
                    animation: successParticle 3s ease-out forwards;
                `;
                particle.textContent = ['🌟', '✨', '🎉', '⭐', '💫'][Math.floor(Math.random() * 5)];
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 3000);
            }, i * 100);
        }
    }
    
    shakeScreen() {
        document.body.style.animation = 'spookyShake 0.5s ease-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }

    // Utility Methods
    showAlert(message) {
        // Simple alert replacement for better UX
        const alertDiv = document.createElement('div');
        alertDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(45deg, #ff6b35, #ffcc00);
            color: #1a0033;
            padding: 15px 30px;
            border-radius: 25px;
            font-family: 'Griffy', cursive;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideDown 0.3s ease-out;
        `;
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            alertDiv.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    }

    // Reset game progress (for testing or new players)
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress?')) {
            localStorage.removeItem('halloween12levels');
            location.reload();
        }
    }
}

// Add CSS animations for alerts
const alertStyles = document.createElement('style');
alertStyles.textContent = `
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -100%); opacity: 0; }
    }
`;
document.head.appendChild(alertStyles);

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.halloweenGame = new HalloweenGame();
    
    // Add reset button for testing (can be removed for production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset Progress (Dev)';
        resetBtn.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            padding: 5px 10px;
            background: #ff0000;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            z-index: 10000;
        `;
        resetBtn.addEventListener('click', () => window.halloweenGame.resetProgress());
        document.body.appendChild(resetBtn);
    }
});

// Export for global access
window.HalloweenGame = HalloweenGame;