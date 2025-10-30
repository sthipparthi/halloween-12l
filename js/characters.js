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
                    shapes: "Look at the shapes and colors - what matches?",
                    spelling: "Sound out each letter - what letter comes first?",
                    geography: "Look at the colors and patterns of this flag!",
                    addition: "Count all the friendly ghosts together!",
                    subtraction: "Some ghosts float away - count how many are left!",
                    missingNumbers: "Help me find the missing spirit numbers!",
                    missingLetters: "Help me complete these spooky words!",
                    space: "Boo! Let's explore the spooky universe together!",
                    physics: "Even ghosts follow the laws of physics!",
                    chemistry: "I may be a spirit, but I know about elements!"
                },
                puzzleTypes: ["counting", "addition"]
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
                    shapes: "Mix the right shapes in your magical cauldron!",
                    spelling: "Cast a spelling spell - arrange the magical letters!",
                    geography: "My magical knowledge tells me about this land!",
                    addition: "Add up my magical ingredients with witch math!",
                    subtraction: "Remove ingredients from my cauldron - count what's left!",
                    missingNumbers: "My spell book has missing numbers - help me find them!",
                    missingLetters: "Complete these magical incantations!",
                    space: "My magic reveals the secrets of the cosmos!",
                    physics: "Magic and physics are both about forces and energy!",
                    chemistry: "I brew potions - I know all about mixing elements!",
                    organicTable: "My spell book contains the secrets of all elements!"
                },
                puzzleTypes: ["memory", "counting", "spelling", "missingLetters", "chemistry", "organicTable"]
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
                    shapes: "Sort the shapes like sorting different pumpkins!",
                    spelling: "Carve letters like carving a pumpkin face!",
                    geography: "Pumpkins grow in many countries around the world!",
                    addition: "Add up pumpkin seeds from different pumpkins!",
                    subtraction: "Birds ate some pumpkin seeds - how many are left?",
                    missingNumbers: "Help count the pumpkin patch rows in order!",
                    missingLetters: "Carve the missing letters into the pumpkin!",
                    space: "Pumpkins can grow on Mars with the right conditions!",
                    physics: "Pumpkins fall from vines due to gravity!",
                    chemistry: "Pumpkins are made of carbon, hydrogen, and oxygen!"
                },
                puzzleTypes: ["pattern", "shapes", "addition", "subtraction"]
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
                    shapes: "Transform the shapes like I transform at night!",
                    spelling: "Spell words with the speed of the night!",
                    geography: "I have traveled to many castles across the globe!",
                    space: "I fly through space faster than any rocket!",
                    physics: "I understand the physics of transformation!",
                    chemistry: "My centuries of life taught me about elements!"
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
                    shapes: "Me sort shapes like Dr. sort body parts!",
                    spelling: "Me spell words... me getting better at letters!",
                    geography: "Dr. Frankenstein travel many places to create me!",
                    space: "Me wonder about stars and planets!",
                    physics: "Dr. use electricity to make me - me know physics!",
                    chemistry: "Me made from different body parts - me know chemistry!"
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
                    shapes: "Cats love to play with different shaped toys!",
                    spelling: "Meow out each letter as you spell!",
                    geography: "Cats are loved in every country in the world!",
                    space: "Cats have amazing balance - perfect for space travel!",
                    physics: "I always land on my feet due to physics laws!",
                    chemistry: "My purr creates vibrations - that's science!"
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
                    shapes: "I can make my web into many shapes!",
                    spelling: "Weave letters together like I weave my web!",
                    geography: "Spiders live on every continent except Antarctica!",
                    space: "I could weave webs between the stars!",
                    physics: "My webs use tension and physics principles!",
                    chemistry: "My silk is made of amazing protein molecules!"
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
                    shapes: "Sort shapes like I sort my feathers!",
                    spelling: "Hoot out each letter with wise precision!",
                    geography: "I fly over many countries in my nighttime journeys!",
                    addition: "Use owl wisdom to add numbers together!",
                    subtraction: "Wise owls can subtract - take away and count what's left!",
                    missingNumbers: "My owl wisdom helps find missing numbers in sequences!",
                    missingLetters: "Hoot! Help me complete these wise words!",
                    space: "Hoot! I fly under the stars and know the cosmos!",
                    physics: "My flight uses physics - lift, thrust, and drag!",
                    chemistry: "My sharp eyes can spot chemical reactions!"
                },
                puzzleTypes: ["pattern", "memory", "counting", "missingNumbers", "geography", "space"]
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
                    shapes: "My bones fit together like puzzle shapes!",
                    spelling: "Rattle those letters like my bones!",
                    geography: "I've traveled the world as a dancing skeleton!",
                    addition: "Add up my dancing moves - bone math is fun!",
                    subtraction: "Some bones broke off - subtract and count what's left!",
                    missingNumbers: "Help me count my dance steps in order!",
                    missingLetters: "Rattle out the missing letters with me!",
                    space: "I rattle like asteroids in space!",
                    physics: "My bones are levers - that's physics!",
                    chemistry: "My bones are made of calcium compounds!"
                },
                puzzleTypes: ["shapes", "pattern", "memory", "counting", "spelling", "addition", "subtraction", "physics"]
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
                    shapes: "My wings make shapes as I fly!",
                    spelling: "Squeak out each letter to spell the word!",
                    geography: "I've flown over many countries at night!",
                    space: "I use echolocation like space radar!",
                    physics: "My wings create lift through air pressure!",
                    chemistry: "I navigate using chemical signals!"
                },
                puzzleTypes: ["memory", "pattern", "shapes", "counting", "geography"]
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
                    shapes: "Mix different shaped ingredients in my pot!",
                    spelling: "Brew up the letters to create magical words!",
                    geography: "My magic comes from lands across the world!",
                    space: "I bubble with cosmic energy from the stars!",
                    physics: "My bubbling follows thermodynamics laws!",
                    chemistry: "I'm the perfect vessel for mixing chemicals!",
                    organicTable: "I bubble with the essence of pure elements!"
                },
                puzzleTypes: ["shapes", "memory", "pattern", "counting", "spelling", "geography", "chemistry", "organicTable"]
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
                    shapes: "I come in many sweet shapes and colors!",
                    spelling: "Spell words as sweet as candy!",
                    geography: "I'm enjoyed by children all around the world!",
                    addition: "Add up all your sweet Halloween candy!",
                    subtraction: "You ate some candy - subtract to see how many are left!",
                    missingNumbers: "Count your candy bags in the right order!",
                    missingLetters: "Complete these sweet candy words!",
                    space: "I'm as sweet as discovering a new planet!",
                    physics: "Candy making uses heat and physics principles!",
                    chemistry: "I'm made of sugar molecules - that's chemistry!",
                    organicTable: "I'm made of carbon, hydrogen, and oxygen elements!"
                },
                puzzleTypes: ["counting", "memory", "pattern", "shapes", "spelling", "geography", "addition", "subtraction", "missingNumbers", "missingLetters", "space", "physics", "chemistry", "organicTable"]
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