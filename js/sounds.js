// Spooky Sound Effects Generator and Manager
class SpookySoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.isMuted = false;
        this.volume = 0.5;
        this.initializeAudioContext();
        this.generateSounds();
    }

    initializeAudioContext() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        } catch (e) {
            console.log('Web Audio API not supported');
            this.audioContext = null;
        }
    }

    // Generate spooky sounds using Web Audio API
    generateSounds() {
        if (!this.audioContext) return;

        // Background ambient sound
        this.createAmbientSound();
        
        // Generate other sounds
        this.sounds.click = this.createClickSound();
        this.sounds.success = this.createSuccessSound();
        this.sounds.error = this.createErrorSound();
        this.sounds.levelComplete = this.createLevelCompleteSound();
        this.sounds.gameComplete = this.createGameCompleteSound();
        this.sounds.levelStart = this.createLevelStartSound();
        this.sounds.hint = this.createHintSound();
        this.sounds.spookyLaugh = this.createSpookyLaughSound();
        this.sounds.ghostWhisper = this.createGhostWhisperSound();
    }

    createAmbientSound() {
        if (!this.audioContext) return;
        
        // Create a continuous ambient spooky sound
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        oscillator1.type = 'sine';
        oscillator1.frequency.setValueAtTime(55, this.audioContext.currentTime); // Low rumble
        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(110, this.audioContext.currentTime);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        
        oscillator1.connect(filter);
        oscillator2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Add subtle variations
        setInterval(() => {
            if (this.audioContext && !this.isMuted) {
                const time = this.audioContext.currentTime;
                oscillator1.frequency.exponentialRampToValueAtTime(
                    55 + Math.random() * 20, time + 2
                );
            }
        }, 3000);
        
        this.sounds.ambient = { oscillator1, oscillator2, gainNode };
    }

    createClickSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.3 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        };
    }

    createSuccessSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Magical success chime
            oscillator.frequency.setValueAtTime(523, this.audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.4 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.5);
        };
    }

    createErrorSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.2 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        };
    }

    createLevelCompleteSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Triumphant spooky fanfare
            const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
            
            notes.forEach((freq, index) => {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.3 * this.volume, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
                    
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.4);
                }, index * 100);
            });
        };
    }

    createGameCompleteSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Epic completion fanfare
            const melody = [523, 659, 784, 1047, 1319, 1047, 784, 659, 523];
            
            melody.forEach((freq, index) => {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.4 * this.volume, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                    
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.3);
                }, index * 150);
            });
        };
    }

    createLevelStartSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Mysterious level start sound
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(220, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(440, this.audioContext.currentTime + 0.5);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(500, this.audioContext.currentTime);
            filter.frequency.exponentialRampToValueAtTime(2000, this.audioContext.currentTime + 0.5);
            
            gainNode.gain.setValueAtTime(0.3 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.8);
        };
    }

    createHintSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Gentle hint chime
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1760, this.audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.2 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.4);
        };
    }

    createSpookyLaughSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Friendly spooky laugh (not scary for kids)
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.type = 'square';
                    oscillator.frequency.setValueAtTime(300 + Math.random() * 200, this.audioContext.currentTime);
                    
                    gainNode.gain.setValueAtTime(0.1 * this.volume, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
                    
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.1);
                }, i * 80);
            }
        };
    }

    createGhostWhisperSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Gentle ghost whisper
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
            
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
            filter.Q.setValueAtTime(10, this.audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.1 * this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 1);
        };
    }

    // Play sound methods
    playSound(soundName) {
        if (this.sounds[soundName] && typeof this.sounds[soundName] === 'function') {
            this.sounds[soundName]();
        }
    }

    startAmbientSound() {
        if (this.sounds.ambient && !this.isMuted) {
            try {
                this.sounds.ambient.oscillator1.start();
                this.sounds.ambient.oscillator2.start();
            } catch (e) {
                // Already started
            }
        }
    }

    stopAmbientSound() {
        if (this.sounds.ambient) {
            try {
                this.sounds.ambient.oscillator1.stop();
                this.sounds.ambient.oscillator2.stop();
            } catch (e) {
                // Already stopped
            }
        }
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.sounds.ambient) {
            this.sounds.ambient.gainNode.gain.setValueAtTime(0.1 * this.volume, this.audioContext.currentTime);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopAmbientSound();
        } else {
            this.startAmbientSound();
        }
        return this.isMuted;
    }

    // Character-specific sounds
    getCharacterSound(characterName) {
        const characterSounds = {
            'Friendly Ghost': () => this.playSound('ghostWhisper'),
            'Wise Witch': () => this.playSound('spookyLaugh'),
            'Happy Pumpkin': () => this.playSound('success'),
            'Spooky Vampire': () => this.playSound('spookyLaugh'),
            'Funny Frankenstein': () => this.playSound('error'),
            'Cute Black Cat': () => this.playSound('hint'),
            'Silly Spider': () => this.playSound('click'),
            'Magical Owl': () => this.playSound('hint'),
            'Dancing Skeleton': () => this.playSound('spookyLaugh'),
            'Friendly Bat': () => this.playSound('ghostWhisper'),
            'Mystical Cauldron': () => this.playSound('success'),
            'Halloween Candy': () => this.playSound('levelComplete')
        };

        return characterSounds[characterName] || (() => this.playSound('click'));
    }
}

// Export for global use
window.SpookySoundManager = SpookySoundManager;