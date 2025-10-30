// Halloween Characters Data and Management
class HalloweenCharacters {
    constructor() {
        this.characters = this.initializeCharacters();
    }

    initializeCharacters() {
        return [
            {
                id: 1,
                name: "Friendly Ghost",
                emoji: "👻",
                color: "#E8F4FF",
                welcomeMessage: "Boo! Don't be scared, I'm here to help you with some fun puzzles!",
                hints: {
                    counting: "Look carefully at each item and count them one by one!",
                    memory: "Try to remember where you saw the matching pictures!",
                    pattern: "Look for what comes next in the sequence!",
                    shapes: "Look at the shapes and colors - what matches?"
                },
                puzzleTypes: ["counting"]
            },
            {
                id: 2,
                name: "Wise Witch",
                emoji: "🧙‍♀️",
                color: "#8B4C9B",
                welcomeMessage: "Greetings little one! My magic tells me you're ready for a challenge!",
                hints: {
                    counting: "Cast a counting spell - point at each item as you count!",
                    memory: "Use your memory magic to remember the pairs!",
                    pattern: "My crystal ball shows the pattern - what comes next?",
                    shapes: "Mix the right shapes in your magical cauldron!"
                },
                puzzleTypes: ["memory", "counting"]
            },
            {
                id: 3,
                name: "Happy Pumpkin",
                emoji: "🎃",
                color: "#FF8C00",
                welcomeMessage: "Hey there! I'm the happiest pumpkin in the patch. Let's solve puzzles together!",
                hints: {
                    counting: "Count like you're counting pumpkin seeds!",
                    memory: "Remember the pumpkin pairs like seeds in a pod!",
                    pattern: "Pumpkins grow in patterns - can you see it?",
                    shapes: "Sort the shapes like sorting different pumpkins!"
                },
                puzzleTypes: ["pattern", "shapes"]
            },
            {
                id: 4,
                name: "Spooky Vampire",
                emoji: "🧛‍♂️",
                color: "#8B0000",
                welcomeMessage: "Vell-come! Don't worry, I only bite... into challenging puzzles! Blah!",
                hints: {
                    counting: "Count like you're counting bat friends!",
                    memory: "Use your vampire memory - it's very good!",
                    pattern: "Even creatures of the night follow patterns!",
                    shapes: "Transform the shapes like I transform at night!"
                },
                puzzleTypes: ["memory", "pattern"]
            },
            {
                id: 5,
                name: "Funny Frankenstein",
                emoji: "🧟‍♂️",
                color: "#228B22",
                welcomeMessage: "Grrrr... Hello friend! Me like puzzles! Me help you solve them!",
                hints: {
                    counting: "Me count on fingers - you count too!",
                    memory: "Me have good memory in big brain!",
                    pattern: "Me see pattern... pattern good!",
                    shapes: "Me sort shapes like Dr. sort body parts!"
                },
                puzzleTypes: ["shapes", "counting"]
            },
            {
                id: 6,
                name: "Cute Black Cat",
                emoji: "🐱",
                color: "#2F2F2F",
                welcomeMessage: "Meow! I may be black, but I bring good luck with puzzles! Purr!",
                hints: {
                    counting: "Count like you're counting my nine lives!",
                    memory: "Cats have great memory - follow my lead!",
                    pattern: "I always land on my feet - patterns help!",
                    shapes: "Cats love to play with different shaped toys!"
                },
                puzzleTypes: ["memory", "shapes", "pattern"]
            },
            {
                id: 7,
                name: "Silly Spider",
                emoji: "🕷️",
                color: "#4B0082",
                welcomeMessage: "Don't be afraid! I weave webs and weave solutions to puzzles too!",
                hints: {
                    counting: "Count like counting the legs I have!",
                    memory: "I remember every strand of my web!",
                    pattern: "My webs follow beautiful patterns!",
                    shapes: "I can make my web into many shapes!"
                },
                puzzleTypes: ["pattern", "shapes", "memory"]
            },
            {
                id: 8,
                name: "Magical Owl",
                emoji: "🦉",
                color: "#8B4513",
                welcomeMessage: "Hoot hoot! Wise owls love puzzles. Let me share my wisdom with you!",
                hints: {
                    counting: "Hoot once for each item you count!",
                    memory: "Owls have excellent memory - trust yours!",
                    pattern: "Look with owl eyes to see the pattern!",
                    shapes: "Sort shapes like I sort my feathers!"
                },
                puzzleTypes: ["pattern", "memory", "counting"]
            },
            {
                id: 9,
                name: "Dancing Skeleton",
                emoji: "💀",
                color: "#F5F5DC",
                welcomeMessage: "Rattle rattle! I may be all bones, but I'm full of puzzle fun!",
                hints: {
                    counting: "Count my 206 bones... just kidding, count the puzzle items!",
                    memory: "Even without a brain, I remember well!",
                    pattern: "My dance follows a pattern - can you find yours?",
                    shapes: "My bones fit together like puzzle shapes!"
                },
                puzzleTypes: ["shapes", "pattern", "memory", "counting"]
            },
            {
                id: 10,
                name: "Friendly Bat",
                emoji: "🦇",
                color: "#36454F",
                welcomeMessage: "Squeak! I fly through the night solving puzzles. Let's soar together!",
                hints: {
                    counting: "Count like you're counting my colony friends!",
                    memory: "I navigate by memory - use yours too!",
                    pattern: "I fly in patterns through the sky!",
                    shapes: "My wings make shapes as I fly!"
                },
                puzzleTypes: ["memory", "pattern", "shapes", "counting"]
            },
            {
                id: 11,
                name: "Mystical Cauldron",
                emoji: "🪄",
                color: "#483D8B",
                welcomeMessage: "Bubble bubble! I'm brewing up some magical puzzles for you!",
                hints: {
                    counting: "Count the ingredients in my magical recipe!",
                    memory: "Remember the spell ingredients like a true wizard!",
                    pattern: "Magic follows ancient patterns!",
                    shapes: "Mix different shaped ingredients in my pot!"
                },
                puzzleTypes: ["shapes", "memory", "pattern", "counting"]
            },
            {
                id: 12,
                name: "Halloween Candy",
                emoji: "🍬",
                color: "#FF69B4",
                welcomeMessage: "Sweet! I'm the sweetest puzzle helper you'll ever meet! No tricks, just treats!",
                hints: {
                    counting: "Count me like counting trick-or-treat candy!",
                    memory: "Remember where you found the best candy!",
                    pattern: "Candy comes in delicious patterns!",
                    shapes: "I come in many sweet shapes and colors!"
                },
                puzzleTypes: ["counting", "memory", "pattern", "shapes"]
            }
        ];
    }

    getCharacter(level) {
        return this.characters[level - 1] || this.characters[0];
    }

    getAllCharacters() {
        return this.characters;
    }

    getCharacterHint(level, puzzleType) {
        const character = this.getCharacter(level);
        return character.hints[puzzleType] || "Think carefully and try your best!";
    }

    getCharacterPuzzleTypes(level) {
        const character = this.getCharacter(level);
        return character.puzzleTypes;
    }

    displayCharacter(level, containerElement) {
        const character = this.getCharacter(level);
        
        // Clear previous character
        containerElement.innerHTML = '';
        
        // Create character display
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character-display';
        characterDiv.innerHTML = character.emoji;
        characterDiv.style.borderColor = character.color;
        
        // Add floating animation based on character
        characterDiv.style.animation = `characterBounce 3s ease-in-out infinite`;
        
        containerElement.appendChild(characterDiv);
        
        return character;
    }

    speakCharacter(level, message, speechElement, messageType = 'default') {
        const character = this.getCharacter(level);
        let finalMessage = message;
        
        // If no custom message, use character's welcome message
        if (!message) {
            finalMessage = character.welcomeMessage;
        }
        
        // Add character-specific speech patterns
        switch(character.name) {
            case "Spooky Vampire":
                finalMessage = finalMessage.replace(/w/g, 'v').replace(/W/g, 'V');
                break;
            case "Funny Frankenstein":
                finalMessage = finalMessage.replace(/I /g, 'Me ').replace(/my/g, 'me');
                break;
            case "Cute Black Cat":
                if (Math.random() > 0.7) {
                    finalMessage += " *purr*";
                }
                break;
            case "Magical Owl":
                if (Math.random() > 0.7) {
                    finalMessage = "Hoot! " + finalMessage;
                }
                break;
        }
        
        // Display the message with typing effect
        this.typeMessage(finalMessage, speechElement);
    }

    typeMessage(message, element, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        
        const typeTimer = setInterval(() => {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                i++;
            } else {
                clearInterval(typeTimer);
            }
        }, speed);
    }

    // Get appropriate encouraging messages based on performance
    getEncouragementMessage(level, attempts) {
        const character = this.getCharacter(level);
        
        const messages = [
            "You're doing great! Keep trying!",
            "I believe in you! You can do this!",
            "Every try gets you closer to the answer!",
            "Don't give up! You're learning with every attempt!",
            "That's the spirit! Try again!",
            "You're so smart! Keep going!",
            "I'm proud of you for not giving up!",
            "Learning is fun, isn't it?"
        ];
        
        let message = messages[Math.floor(Math.random() * messages.length)];
        
        // Add character-specific encouragement
        switch(character.name) {
            case "Friendly Ghost":
                message = "Boo-lieve in yourself! " + message;
                break;
            case "Wise Witch":
                message = "My magic says " + message.toLowerCase();
                break;
            case "Happy Pumpkin":
                message = "Don't be a pumpkin head! " + message;
                break;
            case "Spooky Vampire":
                message = message.replace(/you/g, 'you, my little bat friend');
                break;
        }
        
        return message;
    }

    // Get celebration messages for successful puzzle completion
    getCelebrationMessage(level, score) {
        const character = this.getCharacter(level);
        
        const messages = [
            "Fantastic! You solved it!",
            "Brilliant work, puzzle master!",
            "Amazing! You're so smart!",
            "Wonderful! I'm so proud of you!",
            "Excellent! You're a puzzle wizard!",
            "Incredible! You did it perfectly!",
            "Superb! You're getting really good at this!",
            "Outstanding! What a clever solver you are!"
        ];
        
        let message = messages[Math.floor(Math.random() * messages.length)];
        
        // Add character-specific celebration
        switch(character.name) {
            case "Friendly Ghost":
                message = "Boo-tiful job! " + message;
                break;
            case "Wise Witch":
                message = "Magical! " + message + " You've earned " + score + " spell points!";
                break;
            case "Happy Pumpkin":
                message = "Pumpkin-credible! " + message;
                break;
            case "Spooky Vampire":
                message = "Fang-tastic! " + message + " Blah!";
                break;
            case "Funny Frankenstein":
                message = "Me so proud! " + message + " Me happy!";
                break;
            case "Cute Black Cat":
                message = "Purr-fect! " + message + " *meow*";
                break;
            case "Silly Spider":
                message = "Web-solutely amazing! " + message;
                break;
            case "Magical Owl":
                message = "Hoot hoot! " + message + " Wise choice!";
                break;
            case "Dancing Skeleton":
                message = "I'm rattling with joy! " + message;
                break;
            case "Friendly Bat":
                message = "That's bat-tastic! " + message;
                break;
            case "Mystical Cauldron":
                message = "Bubble bubble, that was trouble-free! " + message;
                break;
            case "Halloween Candy":
                message = "Sweet success! " + message + " You're such a treat!";
                break;
        }
        
        return message;
    }
}

// Export for use in other files
window.HalloweenCharacters = HalloweenCharacters;