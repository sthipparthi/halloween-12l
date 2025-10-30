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
        
        // Spelling words for different difficulties
        this.spellingWords = {
            easy: [
                { word: 'CAT', emoji: '🐱', hint: 'A furry pet that says meow' },
                { word: 'DOG', emoji: '🐶', hint: 'A loyal pet that barks' },
                { word: 'BAT', emoji: '🦇', hint: 'A flying creature of the night' },
                { word: 'OWL', emoji: '🦉', hint: 'A wise bird that hoots' },
                { word: 'BEE', emoji: '🐝', hint: 'Makes honey and buzzes' },
                { word: 'PIG', emoji: '🐷', hint: 'Farm animal that oinks' },
                { word: 'EGG', emoji: '🥚', hint: 'Chickens lay these white ovals' },
                { word: 'SUN', emoji: '☀️', hint: 'Bright yellow star in the sky' },
                { word: 'CAR', emoji: '🚗', hint: 'Vehicle with four wheels' },
                { word: 'BUS', emoji: '🚌', hint: 'Big vehicle for many people' },
                { word: 'CUP', emoji: '☕', hint: 'You drink from this container' },
                { word: 'HAT', emoji: '🎩', hint: 'You wear this on your head' }
            ],
            medium: [
                { word: 'SPIDER', emoji: '🕷️', hint: 'Has eight legs and spins webs' },
                { word: 'GHOST', emoji: '👻', hint: 'A friendly spooky spirit' },
                { word: 'WITCH', emoji: '🧙‍♀️', hint: 'Casts magic spells' },
                { word: 'CANDY', emoji: '🍬', hint: 'Sweet Halloween treat' },
                { word: 'MOUSE', emoji: '🐭', hint: 'Small creature that squeaks' },
                { word: 'SNAKE', emoji: '🐍', hint: 'Long reptile that slithers' },
                { word: 'APPLE', emoji: '🍎', hint: 'Red fruit that grows on trees' },
                { word: 'TIGER', emoji: '🐅', hint: 'Orange cat with black stripes' },
                { word: 'PIZZA', emoji: '🍕', hint: 'Round food with cheese' },
                { word: 'ROBOT', emoji: '🤖', hint: 'Mechanical helper made of metal' },
                { word: 'CASTLE', emoji: '🏰', hint: 'Where kings and queens live' },
                { word: 'FLOWER', emoji: '🌸', hint: 'Beautiful plant that blooms' }
            ],
            hard: [
                { word: 'ELEPHANT', emoji: '🐘', hint: 'Large animal with a trunk' },
                { word: 'BUTTERFLY', emoji: '🦋', hint: 'Colorful insect with wings' },
                { word: 'PUMPKIN', emoji: '🎃', hint: 'Orange Halloween decoration' },
                { word: 'VAMPIRE', emoji: '🧛‍♂️', hint: 'Drinks blood and avoids garlic' },
                { word: 'SKELETON', emoji: '💀', hint: 'Made of bones' },
                { word: 'CAULDRON', emoji: '🪄', hint: 'Witch uses this for brewing' },
                { word: 'DINOSAUR', emoji: '🦕', hint: 'Ancient giant reptile' },
                { word: 'COMPUTER', emoji: '💻', hint: 'Electronic device for games' },
                { word: 'SPACESHIP', emoji: '🛸', hint: 'Vehicle that travels in space' },
                { word: 'SANDWICH', emoji: '🥪', hint: 'Food with bread and fillings' },
                { word: 'TELEPHONE', emoji: '📞', hint: 'Device used to call people' },
                { word: 'HAMBURGER', emoji: '🍔', hint: 'Round meat sandwich with bun' }
            ]
        };
        
        // Countries with flags and hints
        this.countries = {
            easy: [
                { name: 'USA', flag: '🇺🇸', hint: 'Land of the free, home of the brave' },
                { name: 'CANADA', flag: '🇨🇦', hint: 'Known for maple syrup and hockey' },
                { name: 'JAPAN', flag: '🇯🇵', hint: 'Land of the rising sun' },
                { name: 'FRANCE', flag: '🇫🇷', hint: 'Famous for the Eiffel Tower' },
                { name: 'ITALY', flag: '🇮🇹', hint: 'Boot-shaped country, famous for pizza' },
                { name: 'CHINA', flag: '🇨🇳', hint: 'Has the Great Wall' },
                { name: 'SPAIN', flag: '🇪🇸', hint: 'Famous for flamenco dancing' },
                { name: 'EGYPT', flag: '🇪🇬', hint: 'Home to ancient pyramids' }
            ],
            medium: [
                { name: 'AUSTRALIA', flag: '🇦🇺', hint: 'Home to kangaroos and koalas' },
                { name: 'BRAZIL', flag: '🇧🇷', hint: 'Largest country in South America' },
                { name: 'GERMANY', flag: '🇩🇪', hint: 'Known for cars and Oktoberfest' },
                { name: 'INDIA', flag: '🇮🇳', hint: 'Home to the Taj Mahal' },
                { name: 'RUSSIA', flag: '🇷🇺', hint: 'Largest country in the world' },
                { name: 'MEXICO', flag: '🇲🇽', hint: 'Famous for tacos and sombreros' },
                { name: 'GREECE', flag: '🇬🇷', hint: 'Birthplace of democracy and Olympics' },
                { name: 'TURKEY', flag: '🇹🇷', hint: 'Bridge between Europe and Asia' },
                { name: 'THAILAND', flag: '🇹🇭', hint: 'Known for temples and spicy food' },
                { name: 'ARGENTINA', flag: '🇦🇷', hint: 'Famous for tango dancing' }
            ],
            hard: [
                { name: 'SWITZERLAND', flag: '🇨🇭', hint: 'Neutral country famous for chocolate' },
                { name: 'NETHERLANDS', flag: '🇳🇱', hint: 'Land of tulips and windmills' },
                { name: 'SOUTH KOREA', flag: '🇰🇷', hint: 'Known for K-pop and kimchi' },
                { name: 'NORWAY', flag: '🇳🇴', hint: 'Land of fjords and northern lights' },
                { name: 'SWEDEN', flag: '🇸🇪', hint: 'Home to IKEA and meatballs' },
                { name: 'PORTUGAL', flag: '��', hint: 'Famous for explorers and pastries' },
                { name: 'IRELAND', flag: '🇮🇪', hint: 'Emerald Isle with leprechauns' },
                { name: 'SOUTH AFRICA', flag: '��', hint: 'Rainbow Nation at tip of Africa' },
                { name: 'NEW ZEALAND', flag: '🇳🇿', hint: 'Island nation with hobbits' },
                { name: 'FINLAND', flag: '��', hint: 'Land of saunas and Santa Claus' }
            ]
        };
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
            case 'spelling':
                return this.generateSpellingPuzzle(difficulty, seed);
            case 'geography':
                return this.generateGeographyPuzzle(difficulty, seed);
            case 'addition':
                return this.generateAdditionPuzzle(difficulty, seed);
            case 'subtraction':
                return this.generateSubtractionPuzzle(difficulty, seed);
            case 'missingNumbers':
                return this.generateMissingNumbersPuzzle(difficulty, seed);
            case 'missingLetters':
                return this.generateMissingLettersPuzzle(difficulty, seed);
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

    generateSpellingPuzzle(difficulty, seed) {
        const wordsArray = this.spellingWords[difficulty] || this.spellingWords.easy;
        const selectedWord = wordsArray[Math.floor((seed * 7) % wordsArray.length)];
        
        // Scramble the letters
        const letters = selectedWord.word.split('');
        const scrambledLetters = [...letters];
        
        // Fisher-Yates shuffle with seed
        for (let i = scrambledLetters.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [scrambledLetters[i], scrambledLetters[j]] = [scrambledLetters[j], scrambledLetters[i]];
        }
        
        return {
            type: 'spelling',
            word: selectedWord.word,
            emoji: selectedWord.emoji,
            hint: selectedWord.hint,
            letters: letters,
            scrambledLetters: scrambledLetters,
            userAnswer: []
        };
    }

    generateGeographyPuzzle(difficulty, seed) {
        const countriesArray = this.countries[difficulty] || this.countries.easy;
        const selectedCountry = countriesArray[Math.floor((seed * 11) % countriesArray.length)];
        
        // Create multiple choice options
        const allCountries = [...this.countries.easy, ...this.countries.medium, ...this.countries.hard];
        const wrongOptions = allCountries
            .filter(c => c.name !== selectedCountry.name)
            .sort(() => (seed * 13) % 2 - 1)
            .slice(0, 3);
        
        const options = [selectedCountry, ...wrongOptions]
            .sort(() => (seed * 17) % 2 - 1);
        
        return {
            type: 'geography',
            country: selectedCountry,
            flag: selectedCountry.flag,
            hint: selectedCountry.hint,
            options: options.map(country => ({
                name: country.name,
                isCorrect: country.name === selectedCountry.name
            }))
        };
    }

    generateAdditionPuzzle(difficulty, seed) {
        let maxNumber, problemCount;
        
        switch(difficulty) {
            case 'easy':
                maxNumber = 5;
                problemCount = 1;
                break;
            case 'medium':
                maxNumber = 10;
                problemCount = 2;
                break;
            case 'hard':
                maxNumber = 20;
                problemCount = 3;
                break;
            default:
                maxNumber = 5;
                problemCount = 1;
        }
        
        const problems = [];
        for (let i = 0; i < problemCount; i++) {
            const num1 = Math.floor((seed * (i + 1) * 7) % maxNumber) + 1;
            const num2 = Math.floor((seed * (i + 2) * 11) % maxNumber) + 1;
            const answer = num1 + num2;
            
            problems.push({
                num1: num1,
                num2: num2,
                answer: answer,
                userAnswer: null,
                visualItems1: '🍎'.repeat(num1),
                visualItems2: '🍊'.repeat(num2)
            });
        }
        
        return {
            type: 'addition',
            problems: problems,
            currentProblem: 0,
            difficulty: difficulty
        };
    }

    generateSubtractionPuzzle(difficulty, seed) {
        let maxNumber, problemCount;
        
        switch(difficulty) {
            case 'easy':
                maxNumber = 5;
                problemCount = 1;
                break;
            case 'medium':
                maxNumber = 10;
                problemCount = 2;
                break;
            case 'hard':
                maxNumber = 15;
                problemCount = 3;
                break;
            default:
                maxNumber = 5;
                problemCount = 1;
        }
        
        const problems = [];
        for (let i = 0; i < problemCount; i++) {
            const num1 = Math.floor((seed * (i + 1) * 7) % maxNumber) + 3; // Ensure num1 is at least 3
            const num2 = Math.floor((seed * (i + 2) * 11) % (num1 - 1)) + 1; // Ensure num2 < num1
            const answer = num1 - num2;
            
            problems.push({
                num1: num1,
                num2: num2,
                answer: answer,
                userAnswer: null,
                visualItems: '🟢'.repeat(num1),
                removeItems: num2
            });
        }
        
        return {
            type: 'subtraction',
            problems: problems,
            currentProblem: 0,
            difficulty: difficulty
        };
    }

    generateMissingNumbersPuzzle(difficulty, seed) {
        let sequenceLength, missingCount;
        
        switch(difficulty) {
            case 'easy':
                sequenceLength = 7;
                missingCount = 1;
                break;
            case 'medium':
                sequenceLength = 10;
                missingCount = 2;
                break;
            case 'hard':
                sequenceLength = 12;
                missingCount = 3;
                break;
            default:
                sequenceLength = 7;
                missingCount = 1;
        }
        
        const startNumber = Math.floor((seed * 13) % 10) + 1;
        const sequence = [];
        const missingPositions = [];
        
        // Create sequence
        for (let i = 0; i < sequenceLength; i++) {
            sequence.push(startNumber + i);
        }
        
        // Select random positions to hide
        const availablePositions = [...Array(sequenceLength).keys()];
        for (let i = 0; i < missingCount; i++) {
            const randomIndex = Math.floor((seed * (i + 7) * 17) % availablePositions.length);
            missingPositions.push(availablePositions.splice(randomIndex, 1)[0]);
        }
        
        return {
            type: 'missingNumbers',
            sequence: sequence,
            missingPositions: missingPositions.sort((a, b) => a - b),
            userAnswers: new Array(missingCount).fill(null),
            difficulty: difficulty
        };
    }

    generateMissingLettersPuzzle(difficulty, seed) {
        const wordsArray = this.spellingWords[difficulty] || this.spellingWords.easy;
        const selectedWord = wordsArray[Math.floor((seed * 7) % wordsArray.length)];
        
        let missingCount;
        switch(difficulty) {
            case 'easy':
                missingCount = 1;
                break;
            case 'medium':
                missingCount = 2;
                break;
            case 'hard':
                missingCount = 3;
                break;
            default:
                missingCount = 1;
        }
        
        const wordArray = selectedWord.word.split('');
        const missingPositions = [];
        const availablePositions = [...Array(wordArray.length).keys()];
        
        // Don't hide the first letter on easy mode
        if (difficulty === 'easy' && availablePositions.length > 1) {
            availablePositions.shift();
        }
        
        // Select random positions to hide
        for (let i = 0; i < missingCount && i < availablePositions.length; i++) {
            const randomIndex = Math.floor((seed * (i + 5) * 19) % availablePositions.length);
            missingPositions.push(availablePositions.splice(randomIndex, 1)[0]);
        }
        
        return {
            type: 'missingLetters',
            word: selectedWord.word,
            emoji: selectedWord.emoji,
            hint: selectedWord.hint,
            wordArray: wordArray,
            missingPositions: missingPositions.sort((a, b) => a - b),
            userAnswers: new Array(missingPositions.length).fill(null),
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
            case 'spelling':
                this.renderSpellingPuzzle(puzzle, container);
                break;
            case 'geography':
                this.renderGeographyPuzzle(puzzle, container);
                break;
            case 'addition':
                this.renderAdditionPuzzle(puzzle, container);
                break;
            case 'subtraction':
                this.renderSubtractionPuzzle(puzzle, container);
                break;
            case 'missingNumbers':
                this.renderMissingNumbersPuzzle(puzzle, container);
                break;
            case 'missingLetters':
                this.renderMissingLettersPuzzle(puzzle, container);
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

    renderSpellingPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="spelling-container">
                <h3>🔤 Spell the word!</h3>
                <div class="spelling-word-display">
                    <div class="word-emoji">${puzzle.emoji}</div>
                    <div class="word-hint">${puzzle.hint}</div>
                </div>
                <div class="spelling-game">
                    <div class="letter-pool">
                        ${puzzle.scrambledLetters.map((letter, index) => `
                            <div class="letter-tile" 
                                 draggable="true" 
                                 data-letter="${letter}"
                                 data-index="${index}">
                                ${letter}
                            </div>
                        `).join('')}
                    </div>
                    <div class="word-slots">
                        ${puzzle.letters.map((letter, index) => `
                            <div class="letter-slot" 
                                 data-position="${index}"
                                 data-expected="${letter}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="spelling-feedback"></div>
            </div>
        `;
        
        this.setupSpellingListeners(puzzle, container);
    }

    renderGeographyPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="geography-container">
                <h3>🌍 Which country does this flag belong to?</h3>
                <div class="geography-game">
                    <div class="flag-display">
                        <div class="country-flag">${puzzle.flag}</div>
                        <div class="country-hint">${puzzle.hint}</div>
                    </div>
                    <div class="country-options">
                        ${puzzle.options.map((option, index) => `
                            <button class="country-option" 
                                    data-country="${option.name}"
                                    data-correct="${option.isCorrect}">
                                ${option.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="geography-feedback"></div>
            </div>
        `;
        
        this.setupGeographyListeners(puzzle, container);
    }

    renderAdditionPuzzle(puzzle, container) {
        const currentProblem = puzzle.problems[puzzle.currentProblem];
        const problemNumber = puzzle.currentProblem + 1;
        const totalProblems = puzzle.problems.length;
        
        container.innerHTML = `
            <div class="math-container">
                <h3>🧮 Addition Time! (${problemNumber}/${totalProblems})</h3>
                <div class="math-problem">
                    <div class="visual-math">
                        <div class="math-group">
                            <div class="math-items">${currentProblem.visualItems1}</div>
                            <div class="math-number">${currentProblem.num1}</div>
                        </div>
                        <div class="math-operator">+</div>
                        <div class="math-group">
                            <div class="math-items">${currentProblem.visualItems2}</div>
                            <div class="math-number">${currentProblem.num2}</div>
                        </div>
                        <div class="math-equals">=</div>
                        <div class="math-answer">
                            <input type="number" class="math-input" min="0" max="50" placeholder="?">
                        </div>
                    </div>
                </div>
                <div class="math-feedback"></div>
            </div>
        `;
        
        this.setupMathListeners(puzzle, container, 'addition');
    }

    renderSubtractionPuzzle(puzzle, container) {
        const currentProblem = puzzle.problems[puzzle.currentProblem];
        const problemNumber = puzzle.currentProblem + 1;
        const totalProblems = puzzle.problems.length;
        
        const crossedOut = '❌'.repeat(currentProblem.removeItems);
        const remaining = currentProblem.visualItems.substring(0, currentProblem.answer);
        
        container.innerHTML = `
            <div class="math-container">
                <h3>➖ Subtraction Time! (${problemNumber}/${totalProblems})</h3>
                <div class="math-problem">
                    <div class="visual-math">
                        <div class="math-group">
                            <div class="math-items">${currentProblem.visualItems}</div>
                            <div class="math-number">${currentProblem.num1}</div>
                        </div>
                        <div class="math-operator">-</div>
                        <div class="math-group">
                            <div class="math-items">${crossedOut}</div>
                            <div class="math-number">${currentProblem.num2}</div>
                        </div>
                        <div class="math-equals">=</div>
                        <div class="math-answer">
                            <input type="number" class="math-input" min="0" max="50" placeholder="?">
                        </div>
                    </div>
                    <div class="subtraction-visual">
                        <p>Cross out ${currentProblem.num2} items:</p>
                        <div class="remaining-items">${remaining}${crossedOut}</div>
                    </div>
                </div>
                <div class="math-feedback"></div>
            </div>
        `;
        
        this.setupMathListeners(puzzle, container, 'subtraction');
    }

    renderMissingNumbersPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="missing-container">
                <h3>🔢 Find the Missing Numbers!</h3>
                <div class="number-sequence">
                    ${puzzle.sequence.map((num, index) => {
                        if (puzzle.missingPositions.includes(index)) {
                            const missingIndex = puzzle.missingPositions.indexOf(index);
                            return `<div class="number-slot missing" data-position="${index}" data-missing-index="${missingIndex}">
                                <input type="number" class="missing-input" min="1" max="50" placeholder="?">
                            </div>`;
                        } else {
                            return `<div class="number-slot">${num}</div>`;
                        }
                    }).join('')}
                </div>
                <div class="missing-feedback"></div>
            </div>
        `;
        
        this.setupMissingNumbersListeners(puzzle, container);
    }

    renderMissingLettersPuzzle(puzzle, container) {
        container.innerHTML = `
            <div class="missing-letters-container">
                <h3>🔤 Complete the Word!</h3>
                <div class="word-display">
                    <div class="word-emoji">${puzzle.emoji}</div>
                    <div class="word-hint">${puzzle.hint}</div>
                </div>
                <div class="letter-sequence">
                    ${puzzle.wordArray.map((letter, index) => {
                        if (puzzle.missingPositions.includes(index)) {
                            const missingIndex = puzzle.missingPositions.indexOf(index);
                            return `<div class="letter-slot missing" data-position="${index}" data-missing-index="${missingIndex}">
                                <input type="text" class="missing-letter-input" maxlength="1" placeholder="?">
                            </div>`;
                        } else {
                            return `<div class="letter-slot">${letter}</div>`;
                        }
                    }).join('')}
                </div>
                <div class="missing-letters-feedback"></div>
            </div>
        `;
        
        this.setupMissingLettersListeners(puzzle, container);
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

    // Event listeners for spelling puzzle
    setupSpellingListeners(puzzle, container) {
        const letterTiles = container.querySelectorAll('.letter-tile');
        const letterSlots = container.querySelectorAll('.letter-slot');
        const feedback = container.querySelector('.spelling-feedback');
        
        letterTiles.forEach(tile => {
            tile.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.letter);
                e.dataTransfer.setData('source', 'tile');
                e.dataTransfer.setData('index', e.target.dataset.index);
            });
            
            tile.addEventListener('click', () => {
                // Find first empty slot and place letter there
                const emptySlot = Array.from(letterSlots).find(slot => !slot.textContent);
                if (emptySlot) {
                    emptySlot.textContent = tile.dataset.letter;
                    emptySlot.dataset.filled = 'true';
                    tile.style.display = 'none';
                    this.checkSpelling(puzzle, container);
                }
            });
        });
        
        letterSlots.forEach((slot, index) => {
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                slot.classList.add('drag-over');
            });
            
            slot.addEventListener('dragleave', () => {
                slot.classList.remove('drag-over');
            });
            
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                slot.classList.remove('drag-over');
                
                const letter = e.dataTransfer.getData('text/plain');
                const sourceIndex = e.dataTransfer.getData('index');
                
                if (!slot.textContent) {
                    slot.textContent = letter;
                    slot.dataset.filled = 'true';
                    
                    // Hide the source tile
                    const sourceTile = container.querySelector(`[data-index="${sourceIndex}"]`);
                    if (sourceTile) sourceTile.style.display = 'none';
                    
                    this.checkSpelling(puzzle, container);
                }
            });
            
            slot.addEventListener('click', () => {
                // Remove letter from slot and show tile again
                if (slot.textContent) {
                    const letter = slot.textContent;
                    const tile = Array.from(letterTiles).find(t => 
                        t.dataset.letter === letter && t.style.display === 'none'
                    );
                    if (tile) {
                        tile.style.display = 'block';
                        slot.textContent = '';
                        slot.dataset.filled = 'false';
                        this.checkSpelling(puzzle, container);
                    }
                }
            });
        });
    }

    // Event listeners for geography puzzle
    setupGeographyListeners(puzzle, container) {
        const options = container.querySelectorAll('.country-option');
        const feedback = container.querySelector('.geography-feedback');
        
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const isCorrect = option.dataset.correct === 'true';
                
                // Disable all options
                options.forEach(opt => opt.disabled = true);
                
                if (isCorrect) {
                    option.classList.add('correct');
                    feedback.innerHTML = `<div class="success">🎉 Correct! That's ${puzzle.country.name}!</div>`;
                    
                    // Trigger completion after a short delay
                    setTimeout(() => {
                        const event = new CustomEvent('puzzleComplete', { 
                            detail: { puzzle: puzzle, success: true } 
                        });
                        container.dispatchEvent(event);
                    }, 1000);
                } else {
                    option.classList.add('incorrect');
                    
                    // Show correct answer
                    const correctOption = Array.from(options).find(opt => opt.dataset.correct === 'true');
                    correctOption.classList.add('correct');
                    
                    feedback.innerHTML = `<div class="error">❌ Not quite! The correct answer is ${puzzle.country.name}.</div>`;
                    
                    setTimeout(() => {
                        const event = new CustomEvent('puzzleComplete', { 
                            detail: { puzzle: puzzle, success: false } 
                        });
                        container.dispatchEvent(event);
                    }, 2000);
                }
            });
        });
    }

    checkSpelling(puzzle, container) {
        const letterSlots = container.querySelectorAll('.letter-slot');
        const feedback = container.querySelector('.spelling-feedback');
        const filledSlots = Array.from(letterSlots).filter(slot => slot.dataset.filled === 'true');
        
        if (filledSlots.length === puzzle.letters.length) {
            const userWord = Array.from(letterSlots).map(slot => slot.textContent).join('');
            
            if (userWord === puzzle.word) {
                feedback.innerHTML = `<div class="success">🎉 Perfect! You spelled "${puzzle.word}" correctly!</div>`;
                letterSlots.forEach(slot => slot.classList.add('correct'));
                
                setTimeout(() => {
                    const event = new CustomEvent('puzzleComplete', { 
                        detail: { puzzle: puzzle, success: true } 
                    });
                    container.dispatchEvent(event);
                }, 1500);
            } else {
                feedback.innerHTML = `<div class="error">❌ Not quite right. Try again!</div>`;
                letterSlots.forEach(slot => slot.classList.add('incorrect'));
                
                // Reset after a moment
                setTimeout(() => {
                    letterSlots.forEach(slot => {
                        slot.classList.remove('incorrect');
                        slot.textContent = '';
                        slot.dataset.filled = 'false';
                    });
                    
                    const tiles = container.querySelectorAll('.letter-tile');
                    tiles.forEach(tile => tile.style.display = 'block');
                    feedback.innerHTML = '';
                }, 2000);
            }
        }
    }

    setupMathListeners(puzzle, container, type) {
        const mathInput = container.querySelector('.math-input');
        const feedback = container.querySelector('.math-feedback');
        
        mathInput.addEventListener('input', () => {
            const userAnswer = parseInt(mathInput.value);
            const currentProblem = puzzle.problems[puzzle.currentProblem];
            
            if (!isNaN(userAnswer)) {
                if (userAnswer === currentProblem.answer) {
                    feedback.innerHTML = `<div class="success">🎉 Correct! ${currentProblem.num1} ${type === 'addition' ? '+' : '-'} ${currentProblem.num2} = ${currentProblem.answer}</div>`;
                    mathInput.disabled = true;
                    
                    // Move to next problem or complete puzzle
                    setTimeout(() => {
                        puzzle.currentProblem++;
                        if (puzzle.currentProblem < puzzle.problems.length) {
                            this.renderPuzzle(puzzle, container);
                        } else {
                            const event = new CustomEvent('puzzleComplete', { 
                                detail: { puzzle: puzzle, success: true } 
                            });
                            container.dispatchEvent(event);
                        }
                    }, 2000);
                } else if (userAnswer > currentProblem.answer + 10 || userAnswer < 0) {
                    feedback.innerHTML = `<div class="error">❌ That seems too ${userAnswer > currentProblem.answer ? 'high' : 'low'}. Try again!</div>`;
                }
            }
        });
    }

    setupMissingNumbersListeners(puzzle, container) {
        const inputs = container.querySelectorAll('.missing-input');
        const feedback = container.querySelector('.missing-feedback');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                const value = parseInt(input.value);
                const expectedPosition = puzzle.missingPositions[index];
                const expectedValue = puzzle.sequence[expectedPosition];
                
                if (!isNaN(value)) {
                    puzzle.userAnswers[index] = value;
                    
                    if (value === expectedValue) {
                        input.classList.add('correct');
                        input.classList.remove('incorrect');
                    } else {
                        input.classList.add('incorrect');
                        input.classList.remove('correct');
                    }
                    
                    // Check if all answers are correct
                    const allCorrect = puzzle.userAnswers.every((answer, i) => 
                        answer === puzzle.sequence[puzzle.missingPositions[i]]
                    );
                    
                    if (allCorrect && puzzle.userAnswers.every(answer => answer !== null)) {
                        feedback.innerHTML = `<div class="success">🎉 Perfect! You found all the missing numbers!</div>`;
                        inputs.forEach(inp => inp.disabled = true);
                        
                        setTimeout(() => {
                            const event = new CustomEvent('puzzleComplete', { 
                                detail: { puzzle: puzzle, success: true } 
                            });
                            container.dispatchEvent(event);
                        }, 2000);
                    }
                }
            });
        });
    }

    setupMissingLettersListeners(puzzle, container) {
        const inputs = container.querySelectorAll('.missing-letter-input');
        const feedback = container.querySelector('.missing-letters-feedback');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                const value = input.value.toUpperCase();
                const expectedPosition = puzzle.missingPositions[index];
                const expectedLetter = puzzle.wordArray[expectedPosition];
                
                if (value) {
                    puzzle.userAnswers[index] = value;
                    input.value = value; // Ensure uppercase display
                    
                    if (value === expectedLetter) {
                        input.classList.add('correct');
                        input.classList.remove('incorrect');
                    } else {
                        input.classList.add('incorrect');
                        input.classList.remove('correct');
                    }
                    
                    // Check if all answers are correct
                    const allCorrect = puzzle.userAnswers.every((answer, i) => 
                        answer === puzzle.wordArray[puzzle.missingPositions[i]]
                    );
                    
                    if (allCorrect && puzzle.userAnswers.every(answer => answer !== null && answer !== '')) {
                        feedback.innerHTML = `<div class="success">🎉 Excellent! You completed "${puzzle.word}"!</div>`;
                        inputs.forEach(inp => inp.disabled = true);
                        
                        setTimeout(() => {
                            const event = new CustomEvent('puzzleComplete', { 
                                detail: { puzzle: puzzle, success: true } 
                            });
                            container.dispatchEvent(event);
                        }, 2000);
                    }
                }
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
                
            case 'spelling':
                const letterSlots = document.querySelectorAll('.letter-slot');
                const userWord = Array.from(letterSlots).map(slot => slot.textContent).join('');
                return userWord === puzzle.word;
                
            case 'geography':
                // Geography puzzles are completed through event listeners
                return false;
                
            case 'addition':
            case 'subtraction':
                return puzzle.currentProblem >= puzzle.problems.length;
                
            case 'missingNumbers':
                return puzzle.userAnswers.every((answer, i) => 
                    answer === puzzle.sequence[puzzle.missingPositions[i]]
                );
                
            case 'missingLetters':
                return puzzle.userAnswers.every((answer, i) => 
                    answer === puzzle.wordArray[puzzle.missingPositions[i]]
                );
                
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
                
            case 'spelling':
                return `Sound out each letter in "${puzzle.hint}". What letter comes first? Drag the letters to spell the word!`;
                
            case 'geography':
                return `Look at the colors and patterns of the flag. ${puzzle.hint} Which country do you think it is?`;
                
            case 'addition':
                return `Count all the items together! Add the first group to the second group.`;
                
            case 'subtraction':
                return `Cross out the number of items you're taking away, then count what's left!`;
                
            case 'missingNumbers':
                return `Look at the pattern! Count up from the numbers you can see.`;
                
            case 'missingLetters':
                return `Think about how "${puzzle.hint}" is spelled. What letters are missing?`;
                
            default:
                return "Think carefully and try your best!";
        }
    }
}

// Export for use in other files
window.HalloweenPuzzles = HalloweenPuzzles;