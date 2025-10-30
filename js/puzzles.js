// Halloween Puzzle Types and Generation
class HalloweenPuzzles {
    constructor() {
        this.halloweenEmojis = {
            easy: ['🎃', '👻', '🦇', '🕷️', '🍬', '🧙‍♀️'],
            medium: ['🎃', '👻', '🦇', '🕷️', '🍬', '🧙‍♀️', '🧛‍♂️', '💀', '🕸️'],
            hard: ['🎃', '👻', '🦇', '🕷️', '🍬', '🧙‍♀️', '🧛‍♂️', '💀', '🕸️', '🌙', '⚡', '🪄']
        };
        
        this.shapes = {
            easy: ['⭐', '❤️', '🔵', '🟡'],
            medium: ['⭐', '❤️', '🔵', '🟡', '🔺', '⬜'],
            hard: ['⭐', '❤️', '🔵', '🟡', '🔺', '⬜', '🔶', '🟣']
        };
        
        this.colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '⚫', '⚪'];
    }

    // Generate a puzzle based on level and type
    generatePuzzle(level, type, isRetry = false) {
        const difficulty = this.getDifficulty(level);
        const seed = isRetry ? Date.now() : level * 100; // Different seed for retries
        
        switch(type) {
            case 'counting':
                return this.generateCountingPuzzle(difficulty, seed);
            case 'memory':
                return this.generateMemoryPuzzle(difficulty, seed);
            case 'pattern':
                return this.generatePatternPuzzle(difficulty, seed);
            case 'shapes':
                return this.generateShapesPuzzle(difficulty, seed);
            default:
                return this.generateCountingPuzzle(difficulty, seed);
        }
    }

    getDifficulty(level) {
        if (level <= 4) return 'easy';
        if (level <= 8) return 'medium';
        return 'hard';
    }

    // Counting Puzzle: Count Halloween items
    generateCountingPuzzle(difficulty, seed) {
        const items = this.halloweenEmojis[difficulty];
        const selectedItem = items[seed % items.length];
        
        let count;
        switch(difficulty) {
            case 'easy': count = Math.floor(Math.random() * 5) + 1; break; // 1-5
            case 'medium': count = Math.floor(Math.random() * 8) + 3; break; // 3-10
            case 'hard': count = Math.floor(Math.random() * 10) + 5; break; // 5-14
        }
        
        // Add some random other items to make it more interesting
        const totalItems = count + Math.floor(Math.random() * 3) + 2;
        const displayItems = [];
        
        // Add the items to count
        for (let i = 0; i < count; i++) {
            displayItems.push({ emoji: selectedItem, isTarget: true });
        }
        
        // Add distractor items
        for (let i = count; i < totalItems; i++) {
            const otherItems = items.filter(item => item !== selectedItem);
            const randomItem = otherItems[Math.floor(Math.random() * otherItems.length)];
            displayItems.push({ emoji: randomItem, isTarget: false });
        }
        
        // Shuffle the array
        for (let i = displayItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [displayItems[i], displayItems[j]] = [displayItems[j], displayItems[i]];
        }
        
        return {
            type: 'counting',
            question: `How many ${selectedItem} can you count?`,
            items: displayItems,
            correctAnswer: count,
            targetEmoji: selectedItem,
            difficulty: difficulty
        };
    }

    // Memory Puzzle: Find matching pairs
    generateMemoryPuzzle(difficulty, seed) {
        const items = this.halloweenEmojis[difficulty];
        let pairCount;
        
        switch(difficulty) {
            case 'easy': pairCount = 3; break; // 3 pairs = 6 cards
            case 'medium': pairCount = 4; break; // 4 pairs = 8 cards
            case 'hard': pairCount = 6; break; // 6 pairs = 12 cards
        }
        
        const selectedItems = items.slice(0, pairCount);
        const cards = [];
        
        // Create pairs
        selectedItems.forEach((item, index) => {
            cards.push({ id: index * 2, emoji: item, matched: false });
            cards.push({ id: index * 2 + 1, emoji: item, matched: false });
        });
        
        // Shuffle cards
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        return {
            type: 'memory',
            question: 'Find all the matching pairs!',
            cards: cards,
            pairCount: pairCount,
            difficulty: difficulty,
            flippedCards: [],
            matchedPairs: 0,
            failedAttempts: 0
        };
    }

    // Pattern Puzzle: Complete the sequence
    generatePatternPuzzle(difficulty, seed) {
        const items = this.halloweenEmojis[difficulty];
        let patternLength, sequenceLength;
        
        switch(difficulty) {
            case 'easy': 
                patternLength = 2; // AB pattern
                sequenceLength = 6;
                break;
            case 'medium': 
                patternLength = 3; // ABC pattern
                sequenceLength = 9;
                break;
            case 'hard': 
                patternLength = 4; // ABCD pattern
                sequenceLength = 12;
                break;
        }
        
        // Create base pattern
        const pattern = items.slice(0, patternLength);
        const sequence = [];
        
        // Build sequence
        for (let i = 0; i < sequenceLength; i++) {
            sequence.push(pattern[i % patternLength]);
        }
        
        // Remove the last 1-2 items for the user to guess
        const missingCount = difficulty === 'easy' ? 1 : 2;
        const correctAnswers = [];
        
        for (let i = 0; i < missingCount; i++) {
            correctAnswers.push(sequence.pop());
        }
        
        // Create options (correct answers + distractors)
        const allOptions = [...new Set([...correctAnswers, ...items])];
        
        return {
            type: 'pattern',
            question: 'What comes next in this spooky pattern?',
            sequence: sequence,
            correctAnswers: correctAnswers.reverse(),
            options: allOptions.slice(0, Math.min(6, allOptions.length)),
            difficulty: difficulty,
            selectedAnswers: []
        };
    }

    // Shapes Puzzle: Sort shapes by category
    generateShapesPuzzle(difficulty, seed) {
        const shapes = this.shapes[difficulty];
        let categoriesCount;
        
        switch(difficulty) {
            case 'easy': categoriesCount = 2; break;
            case 'medium': categoriesCount = 3; break;
            case 'hard': categoriesCount = 4; break;
        }
        
        const categories = shapes.slice(0, categoriesCount);
        const items = [];
        
        // Create items for each category
        categories.forEach(shape => {
            const count = Math.floor(Math.random() * 3) + 2; // 2-4 items per category
            for (let i = 0; i < count; i++) {
                items.push({
                    id: items.length,
                    shape: shape,
                    category: shape
                });
            }
        });
        
        // Shuffle items
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        
        return {
            type: 'shapes',
            question: 'Drag each shape to its matching group!',
            items: items,
            categories: categories.map(cat => ({ name: cat, items: [] })),
            difficulty: difficulty
        };
    }

    // Render puzzle in the container
    renderPuzzle(puzzle, container) {
        container.innerHTML = '';
        
        switch(puzzle.type) {
            case 'counting':
                this.renderCountingPuzzle(puzzle, container);
                break;
            case 'memory':
                this.renderMemoryPuzzle(puzzle, container);
                break;
            case 'pattern':
                this.renderPatternPuzzle(puzzle, container);
                break;
            case 'shapes':
                this.renderShapesPuzzle(puzzle, container);
                break;
        }
    }

    renderCountingPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="counting-container">
                <h3>${puzzle.question}</h3>
                <div class="counting-items">
                    ${puzzle.items.map((item, index) => 
                        `<span class="counting-item" style="--i: ${index}">${item.emoji}</span>`
                    ).join('')}
                </div>
                <div class="counting-input-section">
                    <label for="countAnswer">Your answer:</label>
                    <input type="number" id="countAnswer" class="number-input" min="0" max="20" placeholder="?">
                </div>
            </div>
        `;
    }

    renderMemoryPuzzle(puzzle, container) {
        const gridSize = puzzle.cards.length <= 6 ? 3 : (puzzle.cards.length <= 8 ? 4 : 4);
        container.innerHTML = `
            <div class="memory-container">
                <h3>${puzzle.question}</h3>
                <div class="memory-stats">
                    <span>Pairs found: <span id="pairsFound">0</span> / ${puzzle.pairCount}</span>
                    <span>Failed attempts: <span id="failedAttempts">0</span></span>
                </div>
                <div id="memoryInstructions" class="memory-instructions">
                    <p>📚 <strong>Study the cards for <span id="studyTimer">5</span> seconds!</strong></p>
                    <p>Remember where each pair is located...</p>
                </div>
                <div class="puzzle-grid" style="grid-template-columns: repeat(${gridSize}, 1fr);">
                    ${puzzle.cards.map(card => `
                        <div class="memory-card study-mode" data-id="${card.id}" data-emoji="${card.emoji}">
                            <div class="front">?</div>
                            <div class="back">${card.emoji}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.setupMemoryCardListeners(puzzle, container);
    }

    renderPatternPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="pattern-container">
                <h3>${puzzle.question}</h3>
                <div class="pattern-sequence">
                    ${puzzle.sequence.map(item => `<span class="pattern-item">${item}</span>`).join('')}
                    ${puzzle.correctAnswers.map((_, index) => `
                        <span class="pattern-missing" data-index="${index}">?</span>
                    `).join('')}
                </div>
                <div class="pattern-options">
                    ${puzzle.options.map(option => `
                        <button class="pattern-option" data-value="${option}">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.setupPatternListeners(puzzle, container);
    }

    renderShapesPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="shapes-container">
                <h3>${puzzle.question}</h3>
                <div class="shapes-game">
                    <div class="shapes-to-sort">
                        ${puzzle.items.map(item => `
                            <div class="draggable-item" draggable="true" data-id="${item.id}" data-category="${item.category}" title="Drag me to the ${item.category} group!">
                                ${item.shape}
                            </div>
                        `).join('')}
                    </div>
                    <div class="drop-zones">
                        ${puzzle.categories.map(cat => `
                            <div class="drop-zone" data-category="${cat.name}">
                                <div class="zone-label">${cat.name}</div>
                                <div class="zone-items"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="shapes-instructions">
                    <p>💡 <strong>Tip:</strong> Drag each shape to its matching group above!</p>
                </div>
            </div>
        `;
        
        this.setupShapesListeners(puzzle, container);
    }

    // Event listeners for memory game
    setupMemoryCardListeners(puzzle, container) {
        const cards = container.querySelectorAll('.memory-card');
        const instructionsDiv = container.querySelector('#memoryInstructions');
        const timerSpan = container.querySelector('#studyTimer');
        let flippedCards = [];
        let canClick = false;
        let failedAttempts = 0;
        let studyPhase = true;
        
        // Initialize puzzle state
        puzzle.failedAttempts = 0;
        
        // Study phase - show all cards for a few seconds
        this.startStudyPhase(puzzle, cards, instructionsDiv, timerSpan, () => {
            studyPhase = false;
            canClick = true;
            this.startGamePhase(instructionsDiv);
        });
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (studyPhase || !canClick || card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) return;
                
                card.classList.add('flipped');
                flippedCards.push(card);
                
                if (flippedCards.length === 2) {
                    canClick = false;
                    setTimeout(() => {
                        const card1 = flippedCards[0];
                        const card2 = flippedCards[1];
                        const emoji1 = card1.dataset.emoji;
                        const emoji2 = card2.dataset.emoji;
                        
                        if (emoji1 === emoji2) {
                            // Match found!
                            card1.classList.add('matched');
                            card2.classList.add('matched');
                            puzzle.matchedPairs++;
                            container.querySelector('#pairsFound').textContent = puzzle.matchedPairs;
                            
                            // Success sound and animation
                            card1.style.animation = 'correctAnswer 0.5s ease-out';
                            card2.style.animation = 'correctAnswer 0.5s ease-out';
                            
                            // Check if game is complete
                            if (puzzle.matchedPairs === puzzle.pairCount) {
                                instructionsDiv.innerHTML = `
                                    <p>🎉 <strong>Fantastic! All pairs found!</strong></p>
                                    <p>Failed attempts: ${failedAttempts} | Success rate: ${Math.round(((puzzle.pairCount - failedAttempts) / puzzle.pairCount) * 100)}%</p>
                                `;
                                instructionsDiv.className = 'memory-instructions success';
                                
                                // Enable submit button
                                setTimeout(() => {
                                    const submitBtn = document.getElementById('submitAnswer');
                                    if (submitBtn) {
                                        submitBtn.disabled = false;
                                        submitBtn.textContent = 'Complete Level!';
                                    }
                                }, 500);
                            }
                        } else {
                            // No match - count as failed attempt
                            failedAttempts++;
                            puzzle.failedAttempts = failedAttempts;
                            container.querySelector('#failedAttempts').textContent = failedAttempts;
                            
                            // Visual feedback for wrong match
                            card1.classList.add('incorrect');
                            card2.classList.add('incorrect');
                            
                            setTimeout(() => {
                                card1.classList.remove('flipped', 'incorrect');
                                card2.classList.remove('flipped', 'incorrect');
                            }, 1000);
                        }
                        
                        flippedCards = [];
                        canClick = true;
                    }, 1000);
                }
            });
        });
    }
    
    startStudyPhase(puzzle, cards, instructionsDiv, timerSpan, onComplete) {
        // Show all cards during study phase
        cards.forEach(card => {
            card.classList.add('flipped', 'study-mode');
        });
        
        // Countdown timer
        let timeLeft = puzzle.difficulty === 'easy' ? 5 : (puzzle.difficulty === 'medium' ? 4 : 3);
        
        const countdown = setInterval(() => {
            timeLeft--;
            timerSpan.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                
                // Hide all cards
                cards.forEach(card => {
                    card.classList.remove('flipped', 'study-mode');
                });
                
                onComplete();
            }
        }, 1000);
    }
    
    startGamePhase(instructionsDiv) {
        instructionsDiv.innerHTML = `
            <p>🧠 <strong>Now find the matching pairs!</strong></p>
            <p>Click two cards to see if they match...</p>
        `;
        instructionsDiv.className = 'memory-instructions game-mode';
    }

    // Event listeners for pattern puzzle
    setupPatternListeners(puzzle, container) {
        const options = container.querySelectorAll('.pattern-option');
        const missing = container.querySelectorAll('.pattern-missing');
        let currentMissingIndex = 0;
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                if (currentMissingIndex >= missing.length) return;
                
                const value = option.dataset.value;
                missing[currentMissingIndex].textContent = value;
                missing[currentMissingIndex].classList.add('filled');
                puzzle.selectedAnswers[currentMissingIndex] = value;
                
                currentMissingIndex++;
                
                // If all filled, enable submit
                if (currentMissingIndex >= missing.length) {
                    document.getElementById('submitAnswer').disabled = false;
                }
            });
        });
        
        // Reset functionality
        missing.forEach((missingSpot, index) => {
            missingSpot.addEventListener('click', () => {
                if (missingSpot.classList.contains('filled')) {
                    missingSpot.textContent = '?';
                    missingSpot.classList.remove('filled');
                    puzzle.selectedAnswers[index] = null;
                    currentMissingIndex = index;
                }
            });
        });
    }

    // Event listeners for shapes puzzle
    setupShapesListeners(puzzle, container) {
        const draggableItems = container.querySelectorAll('.draggable-item');
        const dropZones = container.querySelectorAll('.drop-zone');
        
        draggableItems.forEach(item => {
            // Drag start
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.dataset.id);
                item.classList.add('dragging');
            });
            
            // Drag end
            item.addEventListener('dragend', (e) => {
                item.classList.remove('dragging');
            });
            
            // Touch support for mobile
            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
                item.classList.add('dragging');
            });
        });
        
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            
            zone.addEventListener('dragleave', (e) => {
                // Only remove drag-over if we're actually leaving the zone
                if (!zone.contains(e.relatedTarget)) {
                    zone.classList.remove('drag-over');
                }
            });
            
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData('text/plain');
                const item = container.querySelector(`[data-id="${itemId}"]`);
                const zoneItems = zone.querySelector('.zone-items');
                
                if (item) {
                    zoneItems.appendChild(item);
                    zone.classList.remove('drag-over');
                    zone.classList.add('filled');
                    item.classList.remove('dragging');
                    
                    // Add success animation
                    item.style.animation = 'correctAnswer 0.5s ease-out';
                    setTimeout(() => {
                        item.style.animation = '';
                    }, 500);
                    
                    // Check if all items are placed
                    const remainingItems = container.querySelector('.shapes-to-sort').children.length;
                    if (remainingItems === 0) {
                        // Enable submit button when all items are placed
                        const submitBtn = document.getElementById('submitAnswer');
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
                        }
                    }
                }
            });
            
            // Click to move items (easier for young kids)
            zone.addEventListener('click', (e) => {
                const selectedItem = container.querySelector('.draggable-item.selected');
                if (selectedItem && e.target.closest('.drop-zone') === zone) {
                    const zoneItems = zone.querySelector('.zone-items');
                    zoneItems.appendChild(selectedItem);
                    selectedItem.classList.remove('selected');
                    zone.classList.add('filled');
                    
                    // Success animation
                    selectedItem.style.animation = 'correctAnswer 0.5s ease-out';
                    setTimeout(() => {
                        selectedItem.style.animation = '';
                    }, 500);
                }
            });
        });
        
        // Click selection for easier interaction
        draggableItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Remove selection from other items
                draggableItems.forEach(i => i.classList.remove('selected'));
                // Select current item
                item.classList.add('selected');
                e.stopPropagation();
            });
        });
    }

    // Check if puzzle is solved correctly
    checkAnswer(puzzle, userAnswer = null) {
        switch(puzzle.type) {
            case 'counting':
                const countInput = document.getElementById('countAnswer');
                return parseInt(countInput.value) === puzzle.correctAnswer;
                
            case 'memory':
                // Memory game is complete when all pairs are found
                return puzzle.matchedPairs === puzzle.pairCount;
                
            case 'pattern':
                return puzzle.selectedAnswers.every((answer, index) => 
                    answer === puzzle.correctAnswers[index]
                );
                
            case 'shapes':
                const dropZones = document.querySelectorAll('.drop-zone');
                let correctPlacements = 0;
                
                dropZones.forEach(zone => {
                    const category = zone.dataset.category;
                    const items = zone.querySelectorAll('.draggable-item');
                    items.forEach(item => {
                        if (item.dataset.category === category) {
                            correctPlacements++;
                        }
                    });
                });
                
                return correctPlacements === puzzle.items.length;
                
            default:
                return false;
        }
    }

    // Get hint for current puzzle
    getHint(puzzle) {
        switch(puzzle.type) {
            case 'counting':
                return `Look for ${puzzle.targetEmoji} and count them one by one. Point at each one as you count!`;
                
            case 'memory':
                return `Try to remember where you saw matching pictures. Start with corners and edges!`;
                
            case 'pattern':
                return `Look at how the sequence repeats: ${puzzle.sequence.slice(0, 3).join(' ')}... What comes next?`;
                
            case 'shapes':
                return `Look at the shape and drag it to the group with the same shape. Each shape has its own home!`;
                
            default:
                return "Think carefully and try your best!";
        }
    }
}

// Export for use in other files
window.HalloweenPuzzles = HalloweenPuzzles;