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
        
        // Space puzzles for different difficulties
        this.spacePuzzles = {
            easy: [
                { question: 'Which planet is closest to the Sun?', options: ['Mercury', 'Venus', 'Earth', 'Mars'], correct: 0, emoji: '☀️', hint: 'It\'s the smallest planet and very hot!' },
                { question: 'What do we call the path Earth takes around the Sun?', options: ['Orbit', 'Circle', 'Line', 'Square'], correct: 0, emoji: '🌍', hint: 'It takes 365 days to complete this path!' },
                { question: 'What do astronauts wear in space?', options: ['Space suit', 'Swimming suit', 'Regular clothes', 'Pajamas'], correct: 0, emoji: '👨‍🚀', hint: 'It protects them from the vacuum of space!' },
                { question: 'How many moons does Earth have?', options: ['1', '2', '3', '0'], correct: 0, emoji: '🌙', hint: 'You can see it at night!' },
                { question: 'What is the biggest planet in our solar system?', options: ['Jupiter', 'Saturn', 'Earth', 'Sun'], correct: 0, emoji: '🪐', hint: 'It has a big red spot and many moons!' },
                { question: 'What gives us light and heat during the day?', options: ['The Sun', 'The Moon', 'Stars', 'Clouds'], correct: 0, emoji: '☀️', hint: 'It\'s a big ball of fire in the sky!' },
                { question: 'What do we call the twinkly lights in the night sky?', options: ['Stars', 'Planets', 'Moons', 'Clouds'], correct: 0, emoji: '⭐', hint: 'They\'re like tiny suns very far away!' },
                { question: 'What vehicle takes astronauts to space?', options: ['Rocket', 'Car', 'Boat', 'Airplane'], correct: 0, emoji: '🚀', hint: 'It shoots up into the sky with fire!' },
                { question: 'What do we call people who travel to space?', options: ['Astronauts', 'Pilots', 'Sailors', 'Drivers'], correct: 0, emoji: '👨‍🚀', hint: 'They wear special suits and helmets!' },
                { question: 'Which planet do we live on?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correct: 0, emoji: '🌍', hint: 'It\'s the blue and green planet!' },
                { question: 'What shape is the Moon?', options: ['Round like a ball', 'Square', 'Triangle', 'Flat'], correct: 0, emoji: '🌕', hint: 'It\'s the same shape as Earth!' },
                { question: 'When can we see the Moon best?', options: ['At night', 'In the morning', 'At noon', 'Never'], correct: 0, emoji: '🌙', hint: 'It glows in the dark sky!' },
                { question: 'What do we call a group of many stars together?', options: ['Galaxy', 'Family', 'Team', 'School'], correct: 0, emoji: '🌌', hint: 'Our galaxy is called the Milky Way!' }
            ],
            medium: [
                { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Mercury'], correct: 0, emoji: '🔴', hint: 'It looks red because of iron oxide on its surface!' },
                { question: 'What is a group of stars that form a pattern called?', options: ['Constellation', 'Galaxy', 'Solar system', 'Asteroid'], correct: 0, emoji: '⭐', hint: 'Examples include the Big Dipper and Orion!' },
                { question: 'How long does it take for light from the Sun to reach Earth?', options: ['8 minutes', '1 hour', '1 day', '1 second'], correct: 0, emoji: '💡', hint: 'Light travels very fast but space is huge!' },
                { question: 'What is the name of our galaxy?', options: ['Milky Way', 'Andromeda', 'Spiral Way', 'Star Road'], correct: 0, emoji: '🌌', hint: 'It looks milky when you see it in the night sky!' },
                { question: 'Which planet has the most beautiful rings?', options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'], correct: 0, emoji: '💫', hint: 'Its rings are made of ice and rock particles!' },
                { question: 'What happens when the Moon blocks the Sun?', options: ['Solar eclipse', 'Rainbow', 'Thunderstorm', 'Winter'], correct: 0, emoji: '🌑', hint: 'The Moon\'s shadow covers the Earth!' },
                { question: 'Which planet is hottest in our solar system?', options: ['Venus', 'Mercury', 'Mars', 'Jupiter'], correct: 0, emoji: '🔥', hint: 'Its thick clouds trap heat like a blanket!' },
                { question: 'What do we call rocks that fall from space to Earth?', options: ['Meteorites', 'Asteroids', 'Comets', 'Satellites'], correct: 0, emoji: '☄️', hint: 'They burn up as shooting stars in our sky!' },
                { question: 'How many planets are in our solar system?', options: ['8', '7', '9', '10'], correct: 0, emoji: '🪐', hint: 'Pluto used to be the 9th but is now called a dwarf planet!' },
                { question: 'What makes comets have tails?', options: ['Solar wind', 'Space rain', 'Rocket fuel', 'Magic'], correct: 0, emoji: '☄️', hint: 'The Sun\'s energy pushes ice and dust away!' },
                { question: 'What is the space station that orbits Earth?', options: ['ISS', 'NASA', 'ESA', 'SpaceX'], correct: 0, emoji: '🛰️', hint: 'International Space Station - people live there!' },
                { question: 'Which planet could float in water?', options: ['Saturn', 'Mars', 'Venus', 'Neptune'], correct: 0, emoji: '🪐', hint: 'It\'s less dense than water because it\'s mostly gas!' },
                { question: 'What causes the seasons on Earth?', options: ['Earth\'s tilt', 'Distance from Sun', 'Moon phases', 'Solar flares'], correct: 0, emoji: '🌍', hint: 'Earth leans like a spinning top!' },
                { question: 'What do we call a dead star that has exploded?', options: ['Supernova', 'Black hole', 'White dwarf', 'Red giant'], correct: 0, emoji: '💥', hint: 'It shines brighter than a whole galaxy!' }
            ],
            hard: [
                { question: 'What is the closest star to Earth (besides the Sun)?', options: ['Proxima Centauri', 'Sirius', 'Polaris', 'Betelgeuse'], correct: 0, emoji: '🌟', hint: 'It\'s about 4.2 light-years away!' },
                { question: 'What happens when a massive star dies?', options: ['Supernova', 'Rainbow', 'Eclipse', 'Meteor shower'], correct: 0, emoji: '💥', hint: 'It explodes and can be brighter than a whole galaxy!' },
                { question: 'What is the International Space Station?', options: ['A space laboratory', 'A rocket', 'A planet', 'A telescope'], correct: 0, emoji: '🛰️', hint: 'Astronauts live and work there orbiting Earth!' },
                { question: 'Which planet rotates on its side?', options: ['Uranus', 'Venus', 'Mars', 'Jupiter'], correct: 0, emoji: '🔄', hint: 'It spins like a rolling ball instead of like a top!' },
                { question: 'What is dark matter?', options: ['Invisible matter in space', 'Black holes', 'Empty space', 'Planet shadows'], correct: 0, emoji: '🕳️', hint: 'We can\'t see it but it makes up most of the universe!' },
                { question: 'What is a light-year?', options: ['Distance light travels in a year', 'How long light lasts', 'A very bright year', 'Time on other planets'], correct: 0, emoji: '💡', hint: 'It\'s about 6 trillion miles!' },
                { question: 'Which planet has the strongest gravity?', options: ['Jupiter', 'Saturn', 'Earth', 'Mars'], correct: 0, emoji: '🪐', hint: 'You would weigh much more there!' },
                { question: 'What are Saturn\'s rings made of?', options: ['Ice and rock chunks', 'Gas clouds', 'Solid metal', 'Colored light'], correct: 0, emoji: '💫', hint: 'Billions of pieces orbiting the planet!' },
                { question: 'How long is a day on Venus?', options: ['Longer than its year', 'Same as Earth', 'Half an Earth day', 'One Earth week'], correct: 0, emoji: '🔄', hint: 'It spins very slowly backwards!' },
                { question: 'What creates the Northern Lights?', options: ['Solar particles hitting atmosphere', 'Reflected moonlight', 'Ice crystals in air', 'City lights'], correct: 0, emoji: '🌌', hint: 'Charged particles from the Sun dance in our sky!' },
                { question: 'Which moon in our solar system might have life?', options: ['Europa (Jupiter\'s moon)', 'Phobos (Mars moon)', 'Titan (Saturn\'s moon)', 'Our Moon'], correct: 0, emoji: '🌊', hint: 'It has an ocean under its icy surface!' },
                { question: 'What is the Great Red Spot on Jupiter?', options: ['A giant storm', 'A big crater', 'A volcanic eruption', 'A cloud shadow'], correct: 0, emoji: '🌪️', hint: 'It\'s been raging for hundreds of years!' },
                { question: 'How fast does Earth spin?', options: ['1000 mph at equator', '100 mph everywhere', '10 mph at poles', '500 mph at equator'], correct: 0, emoji: '🌍', hint: 'We don\'t feel it because we\'re spinning with it!' },
                { question: 'What would happen if you tried to walk on Jupiter?', options: ['You\'d sink into gas', 'You\'d bounce high', 'You\'d freeze instantly', 'You\'d float away'], correct: 0, emoji: '🪐', hint: 'It\'s a gas giant with no solid surface!' }
            ]
        };
        
        // Physics puzzles for different difficulties  
        this.physicsPuzzles = {
            easy: [
                { question: 'What happens when you drop a ball?', options: ['It falls down', 'It flies up', 'It stays still', 'It disappears'], correct: 0, emoji: '⚽', hint: 'Gravity pulls everything toward the ground!' },
                { question: 'What do magnets attract?', options: ['Metal objects', 'Plastic toys', 'Wooden blocks', 'Paper'], correct: 0, emoji: '🧲', hint: 'Iron, nickel, and cobalt stick to magnets!' },
                { question: 'What makes things hot?', options: ['Heat energy', 'Cold energy', 'Sound energy', 'Color energy'], correct: 0, emoji: '🔥', hint: 'Energy makes molecules move faster!' },
                { question: 'What do you need to see things?', options: ['Light', 'Sound', 'Smell', 'Touch'], correct: 0, emoji: '💡', hint: 'Without this, everything would be dark!' },
                { question: 'What happens when you push something?', options: ['It moves', 'It gets smaller', 'It changes color', 'It makes noise'], correct: 0, emoji: '👐', hint: 'Force makes objects change their motion!' },
                { question: 'What makes a ball bounce?', options: ['It pushes back up', 'Magic', 'Wind', 'Heat'], correct: 0, emoji: '🏀', hint: 'The ball squashes and springs back!' },
                { question: 'Why do we fall down instead of up?', options: ['Gravity pulls us down', 'Wind pushes us', 'We\'re too heavy', 'The ground is sticky'], correct: 0, emoji: '🍎', hint: 'Earth pulls everything toward its center!' },
                { question: 'What happens when you rub your hands together fast?', options: ['They get warm', 'They get cold', 'They change color', 'They make music'], correct: 0, emoji: '👏', hint: 'Friction creates heat energy!' },
                { question: 'Which rolls down a hill faster?', options: ['A round ball', 'A square block', 'They\'re the same', 'Neither will roll'], correct: 0, emoji: '⚽', hint: 'Round things roll because they have no corners!' },
                { question: 'What makes your voice?', options: ['Air moving through your throat', 'Your tongue moving', 'Your teeth clicking', 'Your brain thinking'], correct: 0, emoji: '🗣️', hint: 'Vocal cords vibrate like guitar strings!' },
                { question: 'Why does ice melt?', options: ['Heat makes it warm', 'It gets tired', 'Time passes', 'Air touches it'], correct: 0, emoji: '🧊', hint: 'When ice gets warm enough, it turns to water!' },
                { question: 'What happens when you blow on hot soup?', options: ['It cools down', 'It gets hotter', 'It changes color', 'It disappears'], correct: 0, emoji: '🍲', hint: 'Moving air carries heat away!' },
                { question: 'Why do things look bigger through a magnifying glass?', options: ['It bends light', 'It adds more light', 'It pulls things closer', 'Magic'], correct: 0, emoji: '🔍', hint: 'Curved glass changes the path of light rays!' }
            ],
            medium: [
                { question: 'What is friction?', options: ['Force that slows things down', 'Force that speeds things up', 'Force that makes things float', 'Force that changes colors'], correct: 0, emoji: '🛞', hint: 'It\'s why your bike slows down when you stop pedaling!' },
                { question: 'What type of energy does a moving car have?', options: ['Kinetic energy', 'Potential energy', 'Sound energy', 'Light energy'], correct: 0, emoji: '🚗', hint: 'It\'s the energy of motion!' },
                { question: 'Why do things float in water?', options: ['They are less dense than water', 'They are magic', 'They are light colored', 'They are round'], correct: 0, emoji: '🛟', hint: 'If something weighs less than the water it displaces, it floats!' },
                { question: 'What is the speed of light?', options: ['300,000 km/s', '100 km/s', '1,000 km/s', '10 km/s'], correct: 0, emoji: '⚡', hint: 'It\'s the fastest thing in the universe!' },
                { question: 'What happens to sound in a vacuum?', options: ['It cannot travel', 'It gets louder', 'It gets quieter', 'It changes color'], correct: 0, emoji: '🔇', hint: 'Sound needs air or another medium to travel through!' },
                { question: 'What creates an echo?', options: ['Sound bouncing back', 'Sound getting louder', 'Sound changing pitch', 'Sound disappearing'], correct: 0, emoji: '🔊', hint: 'Sound waves bounce off walls and come back to you!' },
                { question: 'Why does a compass always point north?', options: ['Earth has a magnetic field', 'The North Pole is heavy', 'Wind pushes it', 'It\'s trained to do that'], correct: 0, emoji: '🧭', hint: 'Earth acts like a giant magnet!' },
                { question: 'What makes a rainbow?', options: ['Light splitting into colors', 'Paint in the sky', 'Colored clouds', 'Magic'], correct: 0, emoji: '🌈', hint: 'White light breaks apart into all its colors!' },
                { question: 'Why do we see lightning before we hear thunder?', options: ['Light travels faster than sound', 'Lightning is closer', 'Thunder is quieter', 'Our eyes are faster'], correct: 0, emoji: '⚡', hint: 'Light is much much faster than sound!' },
                { question: 'What makes a pencil look bent in water?', options: ['Light bends when it hits water', 'Water pushes the pencil', 'The pencil actually bends', 'Water magnifies things'], correct: 0, emoji: '✏️', hint: 'Light changes direction when it goes through water!' },
                { question: 'Why do we have shadows?', options: ['Objects block light', 'Light creates darkness', 'The ground is dark', 'Air makes shadows'], correct: 0, emoji: '👤', hint: 'When something stops light, it creates a dark area!' },
                { question: 'What makes a guitar string make sound?', options: ['Vibrations in the air', 'Electricity', 'Magic', 'The wood'], correct: 0, emoji: '🎸', hint: 'The string shakes back and forth very fast!' },
                { question: 'Why do ice cubes make drinks colder?', options: ['Heat moves from drink to ice', 'Cold moves from ice to drink', 'Ice pushes heat away', 'Magic cooling'], correct: 0, emoji: '🧊', hint: 'Heat always moves from hot things to cold things!' },
                { question: 'What happens when you mix hot and cold water?', options: ['You get warm water', 'You get ice', 'You get steam', 'Nothing happens'], correct: 0, emoji: '🌡️', hint: 'The temperatures even out in the middle!' }
            ],
            hard: [
                { question: 'What is Einstein\'s famous equation?', options: ['E=mc²', 'F=ma', 'v=d/t', 'P=mv'], correct: 0, emoji: '🧠', hint: 'It shows that mass and energy are related!' },
                { question: 'What is the principle behind how airplanes fly?', options: ['Bernoulli\'s principle', 'Newton\'s law', 'Gravity', 'Magnetism'], correct: 0, emoji: '✈️', hint: 'Air moving faster over the wing creates lift!' },
                { question: 'What is the smallest unit of matter?', options: ['Atom', 'Molecule', 'Cell', 'Grain'], correct: 0, emoji: '⚛️', hint: 'Everything is made of these tiny building blocks!' },
                { question: 'What causes lightning?', options: ['Static electricity', 'Magnetism', 'Gravity', 'Heat'], correct: 0, emoji: '⚡', hint: 'Electric charges build up in clouds!' },
                { question: 'What is absolute zero?', options: ['-273°C', '0°C', '100°C', '-100°C'], correct: 0, emoji: '🧊', hint: 'It\'s the coldest possible temperature!' },
                { question: 'What makes objects appear different colors?', options: ['They reflect different wavelengths of light', 'They contain colored particles', 'The sun paints them', 'Our eyes add color'], correct: 0, emoji: '🎨', hint: 'Red objects reflect red light and absorb other colors!' },
                { question: 'Why does sound travel faster in water than air?', options: ['Water molecules are closer together', 'Water is heavier', 'Fish help carry sound', 'Water amplifies sound'], correct: 0, emoji: '🌊', hint: 'Sound moves faster when molecules are packed tighter!' },
                { question: 'What creates the force that keeps planets orbiting the Sun?', options: ['Gravity', 'Magnetism', 'Solar wind', 'Centrifugal force'], correct: 0, emoji: '🪐', hint: 'The same force that makes apples fall from trees!' },
                { question: 'Why do we feel heavier in an elevator going up?', options: ['Acceleration adds to our weight', 'Gravity increases', 'Air pressure changes', 'The elevator pushes us down'], correct: 0, emoji: '🛗', hint: 'When you speed up, you feel an extra force!' },
                { question: 'What happens to the energy when you rub your hands together?', options: ['Motion energy becomes heat', 'Energy disappears', 'Energy becomes light', 'Energy becomes sound'], correct: 0, emoji: '👏', hint: 'Kinetic energy transforms into thermal energy!' },
                { question: 'Why does a straw look bent in a glass of water?', options: ['Refraction bends light rays', 'Water pressure bends the straw', 'The glass magnifies it', 'Air bubbles distort vision'], correct: 0, emoji: '🥤', hint: 'Light changes direction when it enters water!' },
                { question: 'What type of simple machine is a bottle opener?', options: ['Lever', 'Pulley', 'Inclined plane', 'Wheel and axle'], correct: 0, emoji: '🍾', hint: 'It uses a fulcrum to multiply your force!' },
                { question: 'Why do satellites stay in orbit instead of falling to Earth?', options: ['They\'re moving sideways fast enough', 'They have rocket engines', 'There\'s no gravity in space', 'Magnetic fields hold them up'], correct: 0, emoji: '🛰️', hint: 'They\'re constantly falling but missing Earth!' },
                { question: 'What makes a prism separate white light into colors?', options: ['Different colors bend different amounts', 'The prism adds colors', 'Light gets excited', 'Prism has colored glass'], correct: 0, emoji: '🔺', hint: 'Each color of light has a different wavelength!' }
            ]
        };
        
        // Organic table (periodic elements) puzzles for kids
        this.organicTablePuzzles = {
            easy: [
                {
                    question: "Which element do we breathe to stay alive?",
                    emoji: "💨",
                    options: ["Oxygen", "Water", "Sugar", "Air"],
                    correct: 0,
                    hint: "It's invisible but we need it every second!",
                    explanation: "Oxygen (O) is what we breathe from the air to live!"
                },
                {
                    question: "What element makes up most of water?",
                    emoji: "💧",
                    options: ["Salt", "Hydrogen", "Ice", "Blue"],
                    correct: 1,
                    hint: "Water is H2O - this element appears twice!",
                    explanation: "Hydrogen (H) makes up 2/3 of water molecules!"
                },
                {
                    question: "Which element is in all living things like plants and animals?",
                    emoji: "🌱",
                    options: ["Carbon", "Metal", "Rock", "Plastic"],
                    correct: 0,
                    hint: "It's in your body, trees, and even diamonds!",
                    explanation: "Carbon (C) is the building block of all life!"
                },
                {
                    question: "What element makes table salt taste salty?",
                    emoji: "🧂",
                    options: ["Sugar", "Pepper", "Sodium", "Lemon"],
                    correct: 2,
                    hint: "Table salt is sodium + chlorine together!",
                    explanation: "Sodium (Na) gives salt its salty taste!"
                },
                {
                    question: "Which element is the lightest gas that floats balloons?",
                    emoji: "🎈",
                    options: ["Air", "Helium", "Wind", "Magic"],
                    correct: 1,
                    hint: "It makes your voice sound funny when you breathe it!",
                    explanation: "Helium (He) is super light and makes balloons float!"
                },
                {
                    question: "What element makes gold jewelry shiny and valuable?",
                    emoji: "👑",
                    options: ["Yellow paint", "Gold", "Sunshine", "Butter"],
                    correct: 1,
                    hint: "Pirates love to find treasure made of this element!",
                    explanation: "Gold (Au) is a precious metal that never rusts!"
                },
                {
                    question: "Which element is in the air but we can't see it?",
                    emoji: "🌪️",
                    options: ["Nitrogen", "Clouds", "Wind", "Invisible stuff"],
                    correct: 0,
                    hint: "It makes up most of the air around us!",
                    explanation: "Nitrogen (N) is 78% of the air we breathe!"
                },
                {
                    question: "What element makes silver spoons and coins shiny?",
                    emoji: "🥄",
                    options: ["Mirror", "Silver", "Shiny paint", "Ice"],
                    correct: 1,
                    hint: "It's a precious metal like gold but white colored!",
                    explanation: "Silver (Ag) is a shiny metal used in jewelry and coins!"
                },
                {
                    question: "Which element do we put in car tires to make them bouncy?",
                    emoji: "🚗",
                    options: ["Air", "Nitrogen", "Rubber", "Bounce"],
                    correct: 1,
                    hint: "It's the same gas that makes up most of our air!",
                    explanation: "Nitrogen (N) in tires keeps them properly inflated!"
                },
                {
                    question: "What element makes our swimming pool smell clean?",
                    emoji: "🏊‍♀️",
                    options: ["Water", "Chlorine", "Soap", "Blue color"],
                    correct: 1,
                    hint: "It kills germs and has a strong smell!",
                    explanation: "Chlorine (Cl) keeps swimming pools clean and safe!"
                }
            ],
            medium: [
                {
                    question: "What element makes our bones and teeth strong?",
                    emoji: "🦷",
                    options: ["Milk", "Calcium", "White paint", "Plastic"],
                    correct: 1,
                    hint: "Drink milk to get more of this element!",
                    explanation: "Calcium (Ca) makes bones and teeth hard and strong!"
                },
                {
                    question: "Which element do plants need to make their green color?",
                    emoji: "🍃",
                    options: ["Green paint", "Magnesium", "Grass", "Sunlight"],
                    correct: 1,
                    hint: "It's in the middle of chlorophyll molecules!",
                    explanation: "Magnesium (Mg) is at the center of green chlorophyll!"
                },
                {
                    question: "What element carries oxygen in our red blood?",
                    emoji: "🩸",
                    options: ["Red dye", "Iron", "Ketchup", "Rust"],
                    correct: 1,
                    hint: "When this element rusts, it turns red-brown!",
                    explanation: "Iron (Fe) in blood carries oxygen and makes blood red!"
                },
                {
                    question: "Which element is in bananas and helps our muscles work?",
                    emoji: "🍌",
                    options: ["Yellow color", "Potassium", "Sweetness", "Peel"],
                    correct: 1,
                    hint: "Athletes eat bananas to prevent muscle cramps!",
                    explanation: "Potassium (K) helps muscles and nerves work properly!"
                },
                {
                    question: "What element is used in pencils for writing?",
                    emoji: "✏️",
                    options: ["Wood", "Carbon", "Yellow paint", "Metal"],
                    correct: 1,
                    hint: "It's the same element as in diamonds, but arranged differently!",
                    explanation: "Carbon (C) in graphite form is what makes pencil marks!"
                },
                {
                    question: "Which element makes up most of the air we breathe?",
                    emoji: "🌬️",
                    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
                    correct: 1,
                    hint: "It makes up about 78% of air but we don't use it for breathing!",
                    explanation: "Nitrogen (N) is 78% of air, oxygen is only 21%!"
                },
                {
                    question: "What element is in all sugary foods and candy?",
                    emoji: "🍭",
                    options: ["Sweetness", "Carbon", "Sugar powder", "Taste"],
                    correct: 1,
                    hint: "Sugar molecules are made of carbon, hydrogen, and oxygen!",
                    explanation: "Carbon (C) is the main element in all sugar molecules!"
                },
                {
                    question: "Which element makes zinc sunscreen protect our skin?",
                    emoji: "☀️",
                    options: ["White cream", "Zinc", "Protection", "Sunlight"],
                    correct: 1,
                    hint: "It's a metal that blocks harmful sun rays!",
                    explanation: "Zinc (Zn) in sunscreen reflects UV rays to protect skin!"
                },
                {
                    question: "What element is in table salt that our body needs?",
                    emoji: "🧂",
                    options: ["White crystals", "Sodium", "Ocean water", "Taste buds"],
                    correct: 1,
                    hint: "Our muscles and nerves need this element to work!",
                    explanation: "Sodium (Na) in salt helps our body maintain fluid balance!"
                },
                {
                    question: "Which element makes copper wires carry electricity?",
                    emoji: "⚡",
                    options: ["Electricity", "Copper", "Wire covering", "Power"],
                    correct: 1,
                    hint: "It's a reddish-brown metal that conducts electricity well!",
                    explanation: "Copper (Cu) is excellent for carrying electrical current!"
                },
                {
                    question: "What element do we breathe out when we exhale?",
                    emoji: "😮‍💨",
                    options: ["Air", "Carbon", "Breath", "Oxygen"],
                    correct: 1,
                    hint: "It combines with oxygen to make the gas we exhale!",
                    explanation: "Carbon (C) combines with oxygen to make carbon dioxide (CO₂)!"
                },
                {
                    question: "Which element makes fluoride toothpaste protect teeth?",
                    emoji: "🦷",
                    options: ["Minty flavor", "Fluorine", "Toothpaste", "Brushing"],
                    correct: 1,
                    hint: "It helps make tooth enamel stronger against cavities!",
                    explanation: "Fluorine (F) in toothpaste helps prevent tooth decay!"
                },
                {
                    question: "What element is in all the oil and gasoline we use?",
                    emoji: "⛽",
                    options: ["Liquid", "Carbon", "Energy", "Black color"],
                    correct: 1,
                    hint: "Oil and gas are made of carbon chains from ancient plants!",
                    explanation: "Carbon (C) forms the backbone of all petroleum products!"
                }
            ],
            hard: [
                {
                    question: "What element makes fireworks and matches burn with bright light?",
                    emoji: "🎆",
                    options: ["Fire", "Phosphorus", "Sparkles", "Heat"],
                    correct: 1,
                    hint: "It glows in the dark and is very reactive!",
                    explanation: "Phosphorus (P) burns brightly and is used in matches and fireworks!"
                },
                {
                    question: "Which element is added to water in swimming pools to keep it clean?",
                    emoji: "🏊‍♂️",
                    options: ["Soap", "Chlorine", "Bleach powder", "Blue dye"],
                    correct: 1,
                    hint: "It has a strong smell and kills germs in water!",
                    explanation: "Chlorine (Cl) kills bacteria and keeps pool water safe!"
                },
                {
                    question: "What element is in all proteins and helps build muscles?",
                    emoji: "💪",
                    options: ["Protein powder", "Nitrogen", "Meat", "Exercise"],
                    correct: 1,
                    hint: "All amino acids (protein building blocks) contain this element!",
                    explanation: "Nitrogen (N) is essential in all proteins that build our muscles!"
                },
                {
                    question: "Which element makes aluminum foil lightweight but strong?",
                    emoji: "📄",
                    options: ["Silver", "Aluminum", "Metal", "Shiny stuff"],
                    correct: 1,
                    hint: "It's the third most common element in Earth's crust!",
                    explanation: "Aluminum (Al) is light, strong, and doesn't rust easily!"
                },
                {
                    question: "What element is in baking soda that makes cakes rise?",
                    emoji: "🧁",
                    options: ["Flour", "Sodium", "Sugar", "Bubbles"],
                    correct: 1,
                    hint: "Baking soda is sodium bicarbonate!",
                    explanation: "Sodium (Na) in baking soda releases gas bubbles that make cakes fluffy!"
                },
                {
                    question: "Which element makes copper pennies turn green over time?",
                    emoji: "🪙",
                    options: ["Green paint", "Copper", "Dirt", "Age"],
                    correct: 1,
                    hint: "The Statue of Liberty is green for the same reason!",
                    explanation: "Copper (Cu) reacts with air and water to form green compounds!"
                },
                {
                    question: "What element makes stainless steel knives and forks shiny?",
                    emoji: "🍴",
                    options: ["Polish", "Chromium", "Steel", "Shiny coating"],
                    correct: 1,
                    hint: "It's added to steel to prevent rust and keep it shiny!",
                    explanation: "Chromium (Cr) in stainless steel prevents rust and corrosion!"
                },
                {
                    question: "Which element is in all living cells and DNA?",
                    emoji: "🧬",
                    options: ["Life force", "Phosphorus", "Genetics", "Cells"],
                    correct: 1,
                    hint: "DNA and cell membranes need this element to function!",
                    explanation: "Phosphorus (P) is essential for DNA and energy storage in cells!"
                },
                {
                    question: "What element makes thermometers measure temperature?",
                    emoji: "🌡️",
                    options: ["Heat", "Mercury", "Temperature", "Glass"],
                    correct: 1,
                    hint: "It's a liquid metal that expands when heated!",
                    explanation: "Mercury (Hg) expands and contracts with temperature changes!"
                },
                {
                    question: "Which element makes rechargeable batteries work?",
                    emoji: "🔋",
                    options: ["Electricity", "Lithium", "Battery acid", "Power"],
                    correct: 1,
                    hint: "It's a light metal that stores electrical energy very well!",
                    explanation: "Lithium (Li) is perfect for storing and releasing electrical energy!"
                },
                {
                    question: "What element makes nuclear power plants generate energy?",
                    emoji: "⚛️",
                    options: ["Nuclear power", "Uranium", "Energy", "Radiation"],
                    correct: 1,
                    hint: "It's a heavy radioactive element that splits to release energy!",
                    explanation: "Uranium (U) splits apart to release enormous amounts of energy!"
                },
                {
                    question: "Which element makes jewelry tarnish-resistant and valuable?",
                    emoji: "💎",
                    options: ["Sparkle", "Platinum", "Expensive", "Jewelry"],
                    correct: 1,
                    hint: "It's rarer and more valuable than gold!",
                    explanation: "Platinum (Pt) is a precious metal that doesn't tarnish or corrode!"
                },
                {
                    question: "What element makes old paint dangerous if eaten?",
                    emoji: "🎨",
                    options: ["Color", "Lead", "Old age", "Paint chips"],
                    correct: 1,
                    hint: "This heavy metal was banned from house paint because it's toxic!",
                    explanation: "Lead (Pb) in old paint can cause serious health problems!"
                },
                {
                    question: "Which element makes bananas slightly radioactive?",
                    emoji: "🍌",
                    options: ["Yellow color", "Potassium", "Radioactivity", "Fruit energy"],
                    correct: 1,
                    hint: "It's naturally radioactive but completely safe to eat!",
                    explanation: "Potassium (K) has a tiny amount of natural radioactivity!"
                },
                {
                    question: "What element makes computer chips and solar panels work?",
                    emoji: "💻",
                    options: ["Technology", "Silicon", "Electricity", "Circuits"],
                    correct: 1,
                    hint: "It's made from sand and is a semiconductor!",
                    explanation: "Silicon (Si) is the foundation of all computer technology!"
                }
            ]
        };
        
        // Chemistry puzzles for different difficulties
        this.chemistryPuzzles = {
            easy: [
                { question: 'What do we call the tiny building blocks of everything?', options: ['Atoms', 'Blocks', 'Pieces', 'Dots'], correct: 0, emoji: '⚛️', hint: 'Everything is made of these invisible particles!' },
                { question: 'What gas do we breathe to stay alive?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 0, emoji: '🫁', hint: 'Plants make this gas during photosynthesis!' },
                { question: 'What happens when you mix baking soda and vinegar?', options: ['It fizzes', 'It turns blue', 'It gets hot', 'Nothing'], correct: 0, emoji: '🧪', hint: 'It makes bubbles of carbon dioxide gas!' },
                { question: 'What is water made of?', options: ['Hydrogen and oxygen', 'Salt and pepper', 'Sugar and spice', 'Air and light'], correct: 0, emoji: '💧', hint: 'H₂O means 2 hydrogen atoms and 1 oxygen atom!' },
                { question: 'What makes plants green?', options: ['Chlorophyll', 'Water', 'Soil', 'Sunlight'], correct: 0, emoji: '🌱', hint: 'This chemical helps plants make food from sunlight!' },
                { question: 'What happens to water when it gets very cold?', options: ['It becomes ice', 'It disappears', 'It turns into air', 'It changes color'], correct: 0, emoji: '🧊', hint: 'Water molecules slow down and stick together!' },
                { question: 'What do we breathe out that plants need?', options: ['Carbon dioxide', 'Oxygen', 'Water vapor', 'Nitrogen'], correct: 0, emoji: '🌿', hint: 'Plants use this gas to make their food!' },
                { question: 'What makes a balloon float?', options: ['Helium gas', 'Hot air', 'Magic', 'Being very light'], correct: 0, emoji: '🎈', hint: 'This gas is lighter than the air around us!' },
                { question: 'What happens when you put sugar in water?', options: ['It dissolves', 'It floats', 'It sinks', 'It changes color'], correct: 0, emoji: '🍯', hint: 'The sugar spreads out so you can\'t see it anymore!' },
                { question: 'What makes soap bubbles?', options: ['Soap mixed with water', 'Just water', 'Just soap', 'Air only'], correct: 0, emoji: '🫧', hint: 'Soap molecules help trap air in a thin water layer!' },
                { question: 'What do you get when you mix red and yellow paint?', options: ['Orange', 'Purple', 'Green', 'Blue'], correct: 0, emoji: '🎨', hint: 'Think about the colors of a sunset!' },
                { question: 'What makes bread rise when baking?', options: ['Yeast makes gas bubbles', 'Heat makes it bigger', 'Air gets trapped', 'Magic'], correct: 0, emoji: '🍞', hint: 'Tiny living things eat sugar and make gas!' },
                { question: 'Why does an apple turn brown when you cut it?', options: ['It reacts with air', 'It gets cold', 'Light makes it brown', 'It dries out'], correct: 0, emoji: '🍎', hint: 'Oxygen in the air changes the apple\'s chemicals!' }
            ],
            medium: [
                { question: 'What is the chemical symbol for gold?', options: ['Au', 'Go', 'Gd', 'Ag'], correct: 0, emoji: '🏆', hint: 'It comes from the Latin word "aurum"!' },
                { question: 'What type of change is melting ice?', options: ['Physical change', 'Chemical change', 'Nuclear change', 'Magical change'], correct: 0, emoji: '🧊', hint: 'The ice is still water, just in a different form!' },
                { question: 'What is the pH of pure water?', options: ['7', '1', '14', '0'], correct: 0, emoji: '💧', hint: 'This number means it\'s neither acidic nor basic!' },
                { question: 'What gas makes soda fizzy?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], correct: 0, emoji: '🥤', hint: 'It\'s the same gas we breathe out!' },
                { question: 'What is rust made of?', options: ['Iron oxide', 'Copper oxide', 'Pure iron', 'Water'], correct: 0, emoji: '🦀', hint: 'It forms when iron reacts with oxygen and water!' },
                { question: 'What makes fireworks have different colors?', options: ['Different metal elements', 'Different temperatures', 'Different amounts of gunpowder', 'Magic'], correct: 0, emoji: '🎆', hint: 'Each metal burns with its own special color!' },
                { question: 'Why does oil float on water?', options: ['Oil is less dense than water', 'Oil is magnetic', 'Water pushes oil up', 'Oil has air bubbles'], correct: 0, emoji: '🛢️', hint: 'Oil is lighter than the same amount of water!' },
                { question: 'What happens when you add salt to ice?', options: ['Ice melts at lower temperature', 'Ice gets colder', 'Ice turns blue', 'Nothing happens'], correct: 0, emoji: '🧂', hint: 'Salt disrupts the ice crystal structure!' },
                { question: 'What makes a candle flame yellow?', options: ['Tiny carbon particles glowing', 'Yellow wax', 'Special chemicals', 'Reflected light'], correct: 0, emoji: '🕯️', hint: 'Hot carbon bits glow yellow-orange!' },
                { question: 'Why does hydrogen peroxide bubble on a cut?', options: ['It reacts with blood enzymes', 'It\'s boiling', 'It\'s scared', 'Air gets trapped'], correct: 0, emoji: '🩹', hint: 'Enzymes in blood break it down into water and oxygen!' },
                { question: 'What makes the "new car smell"?', options: ['Chemicals from plastics and glues', 'Clean air', 'Special perfume', 'Metal components'], correct: 0, emoji: '🚗', hint: 'New materials release chemical vapors!' },
                { question: 'Why does copper turn green over time?', options: ['It oxidizes in air and moisture', 'It gets painted', 'Algae grows on it', 'It reflects green light'], correct: 0, emoji: '🗽', hint: 'Copper reacts with oxygen and water to form patina!' },
                { question: 'What makes diamonds so hard?', options: ['Carbon atoms in crystal structure', 'They\'re compressed coal', 'Magic crystal power', 'They\'re made of metal'], correct: 0, emoji: '💎', hint: 'Carbon atoms are arranged in the strongest pattern!' },
                { question: 'Why do onions make you cry?', options: ['They release sulfur compounds', 'They\'re too spicy', 'They\'re sad vegetables', 'Strong smell irritates eyes'], correct: 0, emoji: '🧅', hint: 'Cutting releases chemicals that react with your tears!' }
            ],
            hard: [
                { question: 'What is the most abundant element in the universe?', options: ['Hydrogen', 'Oxygen', 'Carbon', 'Iron'], correct: 0, emoji: '🌌', hint: 'It\'s the simplest element with just one proton!' },
                { question: 'What is a catalyst?', options: ['Speeds up reactions', 'Slows down reactions', 'Stops reactions', 'Changes colors'], correct: 0, emoji: '⚡', hint: 'It helps reactions happen faster without being used up!' },
                { question: 'What is the hardest natural substance?', options: ['Diamond', 'Steel', 'Rock', 'Ice'], correct: 0, emoji: '💎', hint: 'It\'s made of carbon atoms arranged in a crystal structure!' },
                { question: 'What happens at absolute zero temperature?', options: ['Atoms stop moving', 'Everything melts', 'Things explode', 'Colors change'], correct: 0, emoji: '🥶', hint: 'All molecular motion would theoretically cease!' },
                { question: 'What is the process plants use to make food?', options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Combustion'], correct: 0, emoji: '🌻', hint: 'They use sunlight, water, and carbon dioxide!' },
                { question: 'What makes glow sticks glow?', options: ['Chemical reaction produces light', 'Electricity', 'Tiny LED lights', 'Phosphorescent paint'], correct: 0, emoji: '🌟', hint: 'Chemicals mix and create light without heat!' },
                { question: 'Why does dry ice "smoke"?', options: ['It sublimates from solid to gas', 'It\'s on fire', 'It contains water vapor', 'It\'s melting normally'], correct: 0, emoji: '🧊', hint: 'It skips the liquid phase and goes straight to gas!' },
                { question: 'What element makes up most of the air we breathe?', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'], correct: 0, emoji: '🌬️', hint: 'It makes up about 78% of our atmosphere!' },
                { question: 'What causes bread to turn stale?', options: ['Starch molecules change structure', 'Water evaporates', 'Yeast dies', 'Air makes it hard'], correct: 0, emoji: '🍞', hint: 'The starch crystals rearrange and become less flexible!' },
                { question: 'Why does silver tarnish?', options: ['It reacts with sulfur compounds', 'It gets dirty', 'It oxidizes like rust', 'Light damages it'], correct: 0, emoji: '🥄', hint: 'Sulfur in the air forms a black layer on silver!' },
                { question: 'What makes popcorn pop?', options: ['Water inside turns to steam', 'Air expands when heated', 'Kernels have springs', 'Chemical reaction'], correct: 0, emoji: '🍿', hint: 'Tiny water droplets become steam and explode the kernel!' },
                { question: 'Why do antacids help with heartburn?', options: ['They neutralize acid', 'They cool the stomach', 'They coat the stomach', 'They absorb acid'], correct: 0, emoji: '💊', hint: 'Bases cancel out acids to make them neutral!' },
                { question: 'What makes food spoil?', options: ['Bacteria and enzymes break it down', 'Air makes it rot', 'Time weakens the food', 'Light damages it'], correct: 0, emoji: '🦠', hint: 'Tiny living things eat the food and change its chemistry!' },
                { question: 'Why does soap clean things?', options: ['It breaks surface tension of water', 'It dissolves everything', 'It kills all germs', 'It adds slippery coating'], correct: 0, emoji: '🧼', hint: 'Soap molecules grab onto both water and oil!' }
            ]
        };
        
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
                { word: 'HAT', emoji: '🎩', hint: 'You wear this on your head' },
                { word: 'BOX', emoji: '📦', hint: 'Container to store things' },
                { word: 'KEY', emoji: '🗝️', hint: 'Opens doors and locks' },
                { word: 'BED', emoji: '🛏️', hint: 'Where you sleep at night' },
                { word: 'TOY', emoji: '🧸', hint: 'Fun thing to play with' },
                { word: 'BAG', emoji: '🎒', hint: 'Carry things in this' },
                { word: 'ICE', emoji: '🧊', hint: 'Frozen water, very cold' },
                { word: 'PIE', emoji: '🥧', hint: 'Sweet dessert in a dish' },
                { word: 'FAN', emoji: '🪭', hint: 'Makes cool air blow' },
                { word: 'BOW', emoji: '🎀', hint: 'Pretty ribbon decoration' },
                { word: 'NET', emoji: '🥅', hint: 'Catches balls in sports' },
                { word: 'JAR', emoji: '🫙', hint: 'Glass container with a lid' },
                { word: 'PEN', emoji: '🖊️', hint: 'Write with ink using this' },
                { word: 'MAP', emoji: '🗺️', hint: 'Shows where places are' },
                { word: 'GUM', emoji: '🍬', hint: 'Chewy candy you can blow bubbles with' },
                { word: 'ANT', emoji: '🐜', hint: 'Tiny insect that works hard' },
                { word: 'COW', emoji: '🐄', hint: 'Farm animal that gives milk' },
                { word: 'FOX', emoji: '🦊', hint: 'Orange animal with a fluffy tail' },
                { word: 'BUG', emoji: '🐛', hint: 'Tiny crawling creature' },
                { word: 'FLY', emoji: '🪰', hint: 'Small insect that buzzes around' },
                { word: 'HEN', emoji: '🐓', hint: 'Female chicken that lays eggs' },
                { word: 'RAM', emoji: '🐏', hint: 'Male sheep with curly horns' },
                { word: 'OAK', emoji: '🌳', hint: 'Big strong tree with acorns' },
                { word: 'LOG', emoji: '🪵', hint: 'Piece of wood from a tree' },
                { word: 'MUD', emoji: '🟤', hint: 'Wet dirt that is sticky' },
                { word: 'DEW', emoji: '💧', hint: 'Water drops on morning grass' },
                { word: 'BAY', emoji: '🌊', hint: 'Place where water meets land' },
                { word: 'DAY', emoji: '🌅', hint: 'When the sun is shining' },
                { word: 'WAY', emoji: '🛤️', hint: 'Path you take to go somewhere' },
                { word: 'LAP', emoji: '🪑', hint: 'Space on your legs when sitting' },
                { word: 'TOP', emoji: '⬆️', hint: 'Highest part of something' },
                { word: 'ZOO', emoji: '🦓', hint: 'Place to see wild animals' },
                { word: 'WIG', emoji: '💇‍♀️', hint: 'Fake hair you can wear' },
                { word: 'WIN', emoji: '🏆', hint: 'Come first in a game' },
                { word: 'SIP', emoji: '🥤', hint: 'Drink a little bit slowly' },
                { word: 'HOP', emoji: '🐸', hint: 'Jump like a bunny does' },
                { word: 'DIP', emoji: '🍯', hint: 'Put something in liquid quickly' },
                { word: 'ZAP', emoji: '⚡', hint: 'Quick flash of electricity' },
                { word: 'ZIP', emoji: '🤐', hint: 'Close up a jacket or bag' }
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
                { word: 'FLOWER', emoji: '🌸', hint: 'Beautiful plant that blooms' },
                { word: 'DRAGON', emoji: '🐉', hint: 'Mythical creature that breathes fire' },
                { word: 'TURTLE', emoji: '🐢', hint: 'Slow reptile with a shell' },
                { word: 'MONKEY', emoji: '🐒', hint: 'Playful animal that swings on trees' },
                { word: 'LION', emoji: '🦁', hint: 'King of the jungle with a mane' },
                { word: 'RABBIT', emoji: '🐰', hint: 'Fluffy animal that hops around' },
                { word: 'COOKIE', emoji: '🍪', hint: 'Sweet round treat you can eat' },
                { word: 'ORANGE', emoji: '🍊', hint: 'Citrus fruit that is orange colored' },
                { word: 'BANANA', emoji: '🍌', hint: 'Yellow fruit that monkeys love' },
                { word: 'ROCKET', emoji: '🚀', hint: 'Vehicle that flies to space' },
                { word: 'TRAIN', emoji: '🚂', hint: 'Long vehicle that runs on tracks' },
                { word: 'OCEAN', emoji: '🌊', hint: 'Very large body of salt water' },
                { word: 'FOREST', emoji: '🌲', hint: 'Place with lots of trees' },
                { word: 'CIRCLE', emoji: '⭕', hint: 'Round shape with no corners' },
                { word: 'SQUARE', emoji: '⬜', hint: 'Shape with four equal sides' },
                { word: 'PLANET', emoji: '🪐', hint: 'Round object in space like Earth' },
                { word: 'DOCTOR', emoji: '👩‍⚕️', hint: 'Person who helps sick people' },
                { word: 'SCHOOL', emoji: '🏫', hint: 'Place where children learn' },
                { word: 'BRIDGE', emoji: '🌉', hint: 'Structure that goes over water' },
                { word: 'WINTER', emoji: '❄️', hint: 'Cold season with snow' },
                { word: 'SUMMER', emoji: '☀️', hint: 'Hot season for swimming' },
                { word: 'GARDEN', emoji: '🌺', hint: 'Place where flowers and plants grow' },
                { word: 'SPRING', emoji: '🌷', hint: 'Season when flowers bloom' },
                { word: 'AUTUMN', emoji: '🍂', hint: 'Fall season with colorful leaves' },
                { word: 'HAMMER', emoji: '🔨', hint: 'Tool used to hit nails' },
                { word: 'BUCKET', emoji: '🪣', hint: 'Container to carry water' },
                { word: 'LADDER', emoji: '🪜', hint: 'Climb this to reach high places' },
                { word: 'BUTTON', emoji: '🔘', hint: 'Round thing you press or sew on' },
                { word: 'CANDLE', emoji: '🕯️', hint: 'Wax stick that gives light' },
                { word: 'PURPLE', emoji: '🟣', hint: 'Color made from red and blue' },
                { word: 'YELLOW', emoji: '🟡', hint: 'Color of the sun and bananas' },
                { word: 'PURPLE', emoji: '🟣', hint: 'Color of grapes and violets' },
                { word: 'SILVER', emoji: '🥈', hint: 'Shiny gray metal color' },
                { word: 'GOLDEN', emoji: '🟨', hint: 'Color like gold and treasure' },
                { word: 'HELMET', emoji: '⛑️', hint: 'Hard hat that protects your head' },
                { word: 'ZIPPER', emoji: '🤐', hint: 'Metal teeth that close clothes' },
                { word: 'WALLET', emoji: '💳', hint: 'Small bag that holds money' },
                { word: 'PILLOW', emoji: '🛏️', hint: 'Soft thing you rest your head on' },
                { word: 'BLANKET', emoji: '🛌', hint: 'Keeps you warm in bed' },
                { word: 'CURTAIN', emoji: '🪟', hint: 'Fabric that covers windows' },
                { word: 'KITCHEN', emoji: '🍳', hint: 'Room where you cook food' },
                { word: 'BEDROOM', emoji: '🛏️', hint: 'Room where you sleep' },
                { word: 'DOORBELL', emoji: '🔔', hint: 'Button visitors press at your door' },
                { word: 'MAILBOX', emoji: '📫', hint: 'Box where letters are delivered' },
                { word: 'SIDEWALK', emoji: '🚶‍♂️', hint: 'Path for walking beside the road' },
                { word: 'BICYCLE', emoji: '🚲', hint: 'Two-wheeled vehicle you pedal' },
                { word: 'TOOLBOX', emoji: '🧰', hint: 'Container that holds tools' },
                { word: 'SUITCASE', emoji: '🧳', hint: 'Big bag for traveling clothes' },
                { word: 'BACKPACK', emoji: '🎒', hint: 'Bag you carry on your shoulders' },
                { word: 'NOTEBOOK', emoji: '📓', hint: 'Book with blank pages to write' }
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
                { word: 'HAMBURGER', emoji: '🍔', hint: 'Round meat sandwich with bun' },
                { word: 'HALLOWEEN', emoji: '🎃', hint: 'Spooky holiday in October' },
                { word: 'FRANKENSTEIN', emoji: '🧟‍♂️', hint: 'Green monster made by doctor' },
                { word: 'INVISIBLE', emoji: '👻', hint: 'Cannot be seen by eyes' },
                { word: 'MYSTERIOUS', emoji: '🔮', hint: 'Strange and puzzling' },
                { word: 'ADVENTURE', emoji: '🗺️', hint: 'Exciting journey or experience' },
                { word: 'WONDERFUL', emoji: '✨', hint: 'Amazing and fantastic' },
                { word: 'BEAUTIFUL', emoji: '🌺', hint: 'Very pretty to look at' },
                { word: 'CHOCOLATE', emoji: '🍫', hint: 'Sweet brown candy treat' },
                { word: 'FANTASTIC', emoji: '🎆', hint: 'Incredibly amazing and great' },
                { word: 'SUBMARINE', emoji: '🚙', hint: 'Vehicle that travels underwater' },
                { word: 'HELICOPTER', emoji: '🚁', hint: 'Flying machine with spinning blades' },
                { word: 'ASTRONAUT', emoji: '👨‍🚀', hint: 'Person who travels to space' },
                { word: 'TELESCOPE', emoji: '🔭', hint: 'Device to see far away stars' },
                { word: 'MICROSCOPE', emoji: '🔬', hint: 'Tool to see very tiny things' },
                { word: 'CALCULATOR', emoji: '🧮', hint: 'Machine that helps with math' },
                { word: 'PLAYGROUND', emoji: '🛝', hint: 'Fun place with swings and slides' },
                { word: 'BASKETBALL', emoji: '🏀', hint: 'Orange ball you bounce and shoot' },
                { word: 'WATERMELON', emoji: '🍉', hint: 'Big green fruit with red inside' },
                { word: 'STRAWBERRY', emoji: '🍓', hint: 'Small red fruit with tiny seeds' },
                { word: 'LIBRARIAN', emoji: '📚', hint: 'Person who helps in the library' },
                { word: 'CARPENTER', emoji: '🔨', hint: 'Person who builds with wood' },
                { word: 'MAGICIAN', emoji: '🎩', hint: 'Person who performs magic tricks' },
                { word: 'SCIENTIST', emoji: '👩‍🔬', hint: 'Person who studies how things work' },
                { word: 'RESTAURANT', emoji: '🍽️', hint: 'Place where you go to eat meals' },
                { word: 'SUPERMARKET', emoji: '🛒', hint: 'Big store where you buy food' },
                { word: 'PLAYGROUND', emoji: '🎠', hint: 'Fun place to play with friends' },
                { word: 'NEWSPAPER', emoji: '📰', hint: 'Papers with daily news stories' },
                { word: 'REFRIGERATOR', emoji: '🧊', hint: 'Cold appliance that keeps food fresh' },
                { word: 'CHAMPIONSHIP', emoji: '🏆', hint: 'Big contest to find the winner' },
                { word: 'TRANSPORTATION', emoji: '🚌', hint: 'Ways to travel from place to place' },
                { word: 'UNDERSTANDING', emoji: '💡', hint: 'Knowing what something means' },
                { word: 'CELEBRATION', emoji: '🎉', hint: 'Happy party for special occasions' },
                { word: 'IMAGINATION', emoji: '🌈', hint: 'Creating pictures in your mind' },
                { word: 'CONSTRUCTION', emoji: '🏗️', hint: 'Building something new' },
                { word: 'INVESTIGATION', emoji: '🔍', hint: 'Looking carefully to find clues' },
                { word: 'CONSTELLATION', emoji: '⭐', hint: 'Group of stars in the sky' },
                { word: 'NEIGHBORHOOD', emoji: '🏘️', hint: 'Area where you live with neighbors' },
                { word: 'THUNDERSTORM', emoji: '⛈️', hint: 'Loud rainy weather with lightning' },
                { word: 'PLAYGROUND', emoji: '🛝', hint: 'Fun outdoor area with swings' },
                { word: 'TOOTHBRUSH', emoji: '🪥', hint: 'Tool to clean your teeth' },
                { word: 'SUNGLASSES', emoji: '🕶️', hint: 'Dark glasses to protect from sun' },
                { word: 'SKATEBOARD', emoji: '🛹', hint: 'Board with wheels you ride on' },
                { word: 'BASKETBALL', emoji: '🏀', hint: 'Orange ball for shooting hoops' },
                { word: 'CHEESEBURGER', emoji: '🍔', hint: 'Hamburger with melted cheese' },
                { word: 'GRANDMOTHER', emoji: '👵', hint: 'Your parent\'s mother' },
                { word: 'GRANDFATHER', emoji: '👴', hint: 'Your parent\'s father' },
                { word: 'EMERGENCY', emoji: '🚨', hint: 'Urgent situation needing help' },
                { word: 'ENCYCLOPEDIA', emoji: '📚', hint: 'Big book with lots of facts' },
                { word: 'PHOTOGRAPH', emoji: '📷', hint: 'Picture taken with a camera' },
                { word: 'TEMPERATURE', emoji: '🌡️', hint: 'How hot or cold something is' },
                { word: 'VEGETABLES', emoji: '🥕', hint: 'Healthy foods like carrots' },
                { word: 'AUTOMOBILE', emoji: '🚗', hint: 'Another word for a car' },
                { word: 'PARACHUTE', emoji: '🪂', hint: 'Opens up to slow down falling' },
                { word: 'CATERPILLAR', emoji: '🐛', hint: 'Fuzzy bug that becomes butterfly' },
                { word: 'TRAMPOLINE', emoji: '🤸‍♂️', hint: 'Bouncy surface for jumping' },
                { word: 'XYLOPHONE', emoji: '🎵', hint: 'Musical instrument you hit with sticks' },
                { word: 'WATERSLIDE', emoji: '🏊‍♂️', hint: 'Slippery slide you go down fast' }
            ]
        };
        
        // Countries with flag images - HIGH QUALITY FLAGS
        this.countries = {
            easy: [
                { name: 'USA', flag: 'us.png', hint: 'Land of the free, home of the brave' },
                { name: 'CANADA', flag: 'ca.png', hint: 'Known for maple syrup and hockey' },
                { name: 'JAPAN', flag: 'jp.png', hint: 'Land of the rising sun' },
                { name: 'FRANCE', flag: 'fr.png', hint: 'Famous for the Eiffel Tower' },
                { name: 'ITALY', flag: 'it.png', hint: 'Boot-shaped country, famous for pizza' },
                { name: 'CHINA', flag: 'cn.png', hint: 'Has the Great Wall' },
                { name: 'SPAIN', flag: 'es.png', hint: 'Famous for flamenco dancing' },
                { name: 'EGYPT', flag: 'eg.png', hint: 'Home to ancient pyramids' },
                { name: 'BRAZIL', flag: 'br.png', hint: 'Largest country in South America' },
                { name: 'INDIA', flag: 'in.png', hint: 'Home to the Taj Mahal' },
                { name: 'GERMANY', flag: 'de.png', hint: 'Known for cars and Oktoberfest' },
                { name: 'RUSSIA', flag: 'ru.png', hint: 'Largest country in the world' },
                { name: 'MEXICO', flag: 'mx.png', hint: 'Famous for tacos and sombreros' },
                { name: 'UNITED KINGDOM', flag: 'gb.png', hint: 'Island nation with Big Ben' },
                { name: 'SOUTH KOREA', flag: 'kr.png', hint: 'Known for K-pop and kimchi' }
            ],
            medium: [
                { name: 'AUSTRALIA', flag: 'au.png', hint: 'Home to kangaroos and koalas' },
                { name: 'GREECE', flag: 'gr.png', hint: 'Birthplace of democracy and Olympics' },
                { name: 'TURKEY', flag: 'tr.png', hint: 'Bridge between Europe and Asia' },
                { name: 'THAILAND', flag: 'th.png', hint: 'Known for temples and spicy food' },
                { name: 'ARGENTINA', flag: 'ar.png', hint: 'Famous for tango dancing' },
                { name: 'POLAND', flag: 'pl.png', hint: 'Heart of Europe with medieval cities' },
                { name: 'CHILE', flag: 'cl.png', hint: 'Long, narrow country along Pacific coast' },
                { name: 'PERU', flag: 'pe.png', hint: 'Home to Machu Picchu and llamas' },
                { name: 'COLOMBIA', flag: 'co.png', hint: 'Known for coffee and emeralds' },
                { name: 'VIETNAM', flag: 'vn.png', hint: 'Famous for pho soup and motorcycles' },
                { name: 'PHILIPPINES', flag: 'ph.png', hint: 'Island nation with over 7,000 islands' },
                { name: 'MOROCCO', flag: 'ma.png', hint: 'Gateway to Africa with beautiful markets' },
                { name: 'KENYA', flag: 'ke.png', hint: 'Home to safari animals and Maasai people' },
                { name: 'NIGERIA', flag: 'ng.png', hint: 'Most populous country in Africa' },
                { name: 'ISRAEL', flag: 'il.png', hint: 'Holy land with ancient history' },
                { name: 'INDONESIA', flag: 'id.png', hint: 'Largest archipelago in the world' },
                { name: 'MALAYSIA', flag: 'my.png', hint: 'Twin towers and tropical rainforests' },
                { name: 'SINGAPORE', flag: 'sg.png', hint: 'Modern city-state in Southeast Asia' }
            ],
            hard: [
                { name: 'SWITZERLAND', flag: 'ch.png', hint: 'Neutral country famous for chocolate' },
                { name: 'NETHERLANDS', flag: 'nl.png', hint: 'Land of tulips and windmills' },
                { name: 'NORWAY', flag: 'no.png', hint: 'Land of fjords and northern lights' },
                { name: 'SWEDEN', flag: 'se.png', hint: 'Home to IKEA and meatballs' },
                { name: 'PORTUGAL', flag: 'pt.png', hint: 'Famous for explorers and pastries' },
                { name: 'IRELAND', flag: 'ie.png', hint: 'Emerald Isle with leprechauns' },
                { name: 'SOUTH AFRICA', flag: 'za.png', hint: 'Rainbow Nation at tip of Africa' },
                { name: 'NEW ZEALAND', flag: 'nz.png', hint: 'Island nation with hobbits and sheep' },
                { name: 'FINLAND', flag: 'fi.png', hint: 'Land of saunas and Santa Claus' },
                { name: 'DENMARK', flag: 'dk.png', hint: 'Home of LEGO and fairy tales' },
                { name: 'BELGIUM', flag: 'be.png', hint: 'Famous for waffles and chocolate' },
                { name: 'AUSTRIA', flag: 'at.png', hint: 'Land of Mozart and the Alps' },
                { name: 'CZECH REPUBLIC', flag: 'cz.png', hint: 'Heart of Europe with Prague castle' },
                { name: 'HUNGARY', flag: 'hu.png', hint: 'Known for thermal baths and goulash' },
                { name: 'CROATIA', flag: 'hr.png', hint: 'Beautiful coastline on Adriatic Sea' },
                { name: 'ROMANIA', flag: 'pt.png', hint: 'Home to Dracula legend and castles' },
                { name: 'BULGARIA', flag: 'bg.png', hint: 'Land of roses and yogurt' },
                { name: 'SERBIA', flag: 'rs.png', hint: 'Crossroads of Central and Balkan Europe' },
                { name: 'SLOVENIA', flag: 'si.png', hint: 'Alpine country with emerald river' },
                { name: 'SLOVAKIA', flag: 'sk.png', hint: 'Mountainous country in Central Europe' },
                { name: 'ESTONIA', flag: 'ee.png', hint: 'Digital pioneer in Northern Europe' },
                { name: 'LATVIA', flag: 'lv.png', hint: 'Baltic state with beautiful beaches' },
                { name: 'LITHUANIA', flag: 'lt.png', hint: 'Southernmost Baltic state' },
                { name: 'ICELAND', flag: 'is.png', hint: 'Land of fire and ice with geysers' },
                { name: 'LUXEMBOURG', flag: 'lu.png', hint: 'Small wealthy country in Europe' },
                { name: 'BANGLADESH', flag: 'bd.png', hint: 'Land of rivers and Bengal tigers' },
                { name: 'PAKISTAN', flag: 'pk.png', hint: 'Land of the pure with high mountains' },
                { name: 'NEPAL', flag: 'np.png', hint: 'Home to Mount Everest' },
                { name: 'SRI LANKA', flag: 'lk.png', hint: 'Pearl of the Indian Ocean' },
                { name: 'MYANMAR', flag: 'mm.png', hint: 'Land of golden pagodas' },
                { name: 'CAMBODIA', flag: 'kh.png', hint: 'Home to ancient Angkor Wat' },
                { name: 'LAOS', flag: 'la.png', hint: 'Landlocked country in Southeast Asia' },
                { name: 'MONGOLIA', flag: 'mn.png', hint: 'Land of nomads and vast steppes' },
                { name: 'KAZAKHSTAN', flag: 'kz.png', hint: 'Largest landlocked country' },
                { name: 'UZBEKISTAN', flag: 'uz.png', hint: 'Heart of the Silk Road' },
                { name: 'GEORGIA', flag: 'ge.png', hint: 'Crossroads of Europe and Asia' },
                { name: 'ARMENIA', flag: 'am.png', hint: 'First Christian nation in the world' },
                { name: 'AZERBAIJAN', flag: 'az.png', hint: 'Land of fire with oil reserves' },
                { name: 'JORDAN', flag: 'jo.png', hint: 'Desert kingdom with Petra ruins' },
                { name: 'LEBANON', flag: 'lb.png', hint: 'Cedar country in the Middle East' },
                { name: 'UAE', flag: 'ae.png', hint: 'Modern desert oasis with tall buildings' },
                { name: 'QATAR', flag: 'qa.png', hint: 'Rich peninsula nation' },
                { name: 'SAUDI ARABIA', flag: 'sa.png', hint: 'Birthplace of Islam with vast deserts' },
                { name: 'UKRAINE', flag: 'ua.png', hint: 'Largest country entirely in Europe' },
                { name: 'BELARUS', flag: 'by.png', hint: 'Land of forests and lakes' }
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
            case 'space':
                return this.generateSpacePuzzle(difficulty, seed);
            case 'physics':
                return this.generatePhysicsPuzzle(difficulty, seed);
            case 'chemistry':
                return this.generateChemistryPuzzle(difficulty, seed);
            case 'organicTable':
                return this.generateOrganicTablePuzzle(difficulty, seed);
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
        let problemSets, problemCount;
        
        // Define diverse problem sets for each difficulty
        switch(difficulty) {
            case 'easy':
                problemSets = [
                    [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
                    [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
                    [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7],
                    [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],
                    [5, 1], [5, 2], [5, 3], [5, 4], [5, 5],
                    [6, 1], [6, 2], [6, 3], [6, 4],
                    [7, 1], [7, 2], [7, 3],
                    [8, 1], [8, 2], [9, 1],
                    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]
                ];
                problemCount = 1;
                break;
            case 'medium':
                problemSets = [
                    // Single digit additions (sums 10-18)
                    [3, 7], [4, 6], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1],
                    [4, 7], [5, 6], [6, 5], [7, 4], [8, 3], [9, 2],
                    [5, 7], [6, 6], [7, 5], [8, 4], [9, 3],
                    [6, 7], [7, 6], [8, 5], [9, 4],
                    [7, 7], [8, 6], [9, 5],
                    [8, 7], [9, 6],
                    [8, 8], [9, 7],
                    [9, 8], [9, 9],
                    // Easy 2-digit additions
                    [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9],
                    [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [11, 8],
                    [12, 1], [12, 2], [12, 3], [12, 4], [12, 5], [12, 6], [12, 7],
                    [13, 1], [13, 2], [13, 3], [13, 4], [13, 5], [13, 6],
                    [14, 1], [14, 2], [14, 3], [14, 4], [14, 5],
                    [15, 1], [15, 2], [15, 3], [15, 4],
                    [20, 1], [20, 2], [20, 3], [20, 5], [20, 10]
                ];
                problemCount = 2;
                break;
            case 'hard':
                problemSets = [
                    // Advanced 2-digit additions
                    [15, 5], [15, 6], [15, 7], [15, 8], [15, 9], [15, 10], [15, 15],
                    [16, 4], [16, 5], [16, 6], [16, 7], [16, 8], [16, 9], [16, 10], [16, 14],
                    [17, 3], [17, 4], [17, 5], [17, 6], [17, 7], [17, 8], [17, 9], [17, 13],
                    [18, 2], [18, 3], [18, 4], [18, 5], [18, 6], [18, 7], [18, 12],
                    [19, 1], [19, 2], [19, 3], [19, 4], [19, 5], [19, 6], [19, 11],
                    [20, 5], [20, 6], [20, 7], [20, 8], [20, 9], [20, 10], [20, 15], [20, 20],
                    [21, 4], [21, 5], [21, 6], [21, 7], [21, 8], [21, 9], [21, 14], [21, 19],
                    [22, 3], [22, 4], [22, 5], [22, 6], [22, 7], [22, 8], [22, 13], [22, 18],
                    [23, 2], [23, 3], [23, 4], [23, 5], [23, 6], [23, 7], [23, 12], [23, 17],
                    [24, 1], [24, 2], [24, 3], [24, 4], [24, 5], [24, 6], [24, 11], [24, 16],
                    [25, 5], [25, 10], [25, 15], [25, 20], [25, 25],
                    [30, 5], [30, 10], [30, 15], [30, 20],
                    [35, 5], [35, 10], [35, 15],
                    [40, 5], [40, 10], [45, 5]
                ];
                problemCount = 3;
                break;
        }
        
        const problems = [];
        const visualEmojis = ['🍎', '🍊', '🍓', '🍇', '🍌', '🥕', '🍒', '🥝'];
        
        for (let i = 0; i < problemCount; i++) {
            // Select a problem from the appropriate set
            const problemIndex = Math.floor((seed * (i + 1) * 13) % problemSets.length);
            const [num1, num2] = problemSets[problemIndex];
            const answer = num1 + num2;
            
            // Select different emojis for variety
            const emoji1 = visualEmojis[Math.floor((seed * (i + 1) * 7) % visualEmojis.length)];
            const emoji2 = visualEmojis[Math.floor((seed * (i + 2) * 11) % visualEmojis.length)];
            
            problems.push({
                num1: num1,
                num2: num2,
                answer: answer,
                userAnswer: null,
                visualItems1: emoji1.repeat(num1),
                visualItems2: emoji2.repeat(num2)
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
        let problemSets, problemCount;
        
        // Define diverse subtraction problem sets for each difficulty
        switch(difficulty) {
            case 'easy':
                problemSets = [
                    // Basic subtraction within 10
                    [1, 0], [1, 1], [2, 0], [2, 1], [2, 2], [3, 0], [3, 1], [3, 2], [3, 3],
                    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5],
                    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
                    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7],
                    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8],
                    [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9],
                    [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]
                ];
                problemCount = 1;
                break;
            case 'medium':
                problemSets = [
                    // Subtraction within 20
                    [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10], [11, 11],
                    [12, 2], [12, 3], [12, 4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10], [12, 11], [12, 12],
                    [13, 3], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [13, 12], [13, 13],
                    [14, 4], [14, 5], [14, 6], [14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [14, 12], [14, 13], [14, 14],
                    [15, 5], [15, 6], [15, 7], [15, 8], [15, 9], [15, 10], [15, 11], [15, 12], [15, 13], [15, 14], [15, 15],
                    [16, 6], [16, 7], [16, 8], [16, 9], [16, 10], [16, 11], [16, 12], [16, 13], [16, 14], [16, 15], [16, 16],
                    [17, 7], [17, 8], [17, 9], [17, 10], [17, 11], [17, 12], [17, 13], [17, 14], [17, 15], [17, 16], [17, 17],
                    [18, 8], [18, 9], [18, 10], [18, 11], [18, 12], [18, 13], [18, 14], [18, 15], [18, 16], [18, 17], [18, 18],
                    [19, 9], [19, 10], [19, 11], [19, 12], [19, 13], [19, 14], [19, 15], [19, 16], [19, 17], [19, 18], [19, 19],
                    [20, 10], [20, 11], [20, 12], [20, 13], [20, 14], [20, 15], [20, 16], [20, 17], [20, 18], [20, 19], [20, 20]
                ];
                problemCount = 2;
                break;
            case 'hard':
                problemSets = [
                    // Advanced 2-digit subtraction
                    [25, 5], [25, 10], [25, 15], [25, 20], [25, 25], [30, 5], [30, 10], [30, 15], [30, 20], [30, 25], [30, 30],
                    [35, 5], [35, 10], [35, 15], [35, 20], [35, 25], [35, 30], [35, 35], [40, 5], [40, 10], [40, 15], [40, 20],
                    [40, 25], [40, 30], [40, 35], [40, 40], [45, 5], [45, 10], [45, 15], [45, 20], [45, 25], [45, 30],
                    [45, 35], [45, 40], [45, 45], [50, 10], [50, 15], [50, 20], [50, 25], [50, 30], [50, 35], [50, 40],
                    [50, 45], [50, 50], [21, 1], [21, 2], [21, 3], [21, 4], [21, 5], [21, 6], [21, 7], [21, 8], [21, 9],
                    [22, 2], [22, 3], [22, 4], [22, 5], [22, 6], [22, 7], [22, 8], [22, 9], [22, 10], [22, 11], [22, 12],
                    [23, 3], [23, 4], [23, 5], [23, 6], [23, 7], [23, 8], [23, 9], [23, 10], [23, 11], [23, 12], [23, 13],
                    [24, 4], [24, 5], [24, 6], [24, 7], [24, 8], [24, 9], [24, 10], [24, 11], [24, 12], [24, 13], [24, 14],
                    [26, 6], [26, 7], [26, 8], [26, 9], [26, 10], [26, 11], [26, 12], [26, 13], [26, 14], [26, 15], [26, 16],
                    [27, 7], [27, 8], [27, 9], [27, 10], [27, 11], [27, 12], [27, 13], [27, 14], [27, 15], [27, 16], [27, 17],
                    [28, 8], [28, 9], [28, 10], [28, 11], [28, 12], [28, 13], [28, 14], [28, 15], [28, 16], [28, 17], [28, 18],
                    [29, 9], [29, 10], [29, 11], [29, 12], [29, 13], [29, 14], [29, 15], [29, 16], [29, 17], [29, 18], [29, 19]
                ];
                problemCount = 3;
                break;
        }
        
        const problems = [];
        const visualEmojis = ['🟢', '🔵', '🟡', '🟣', '🟠', '⚫', '🔴', '⚪'];
        
        for (let i = 0; i < problemCount; i++) {
            // Select a problem from the appropriate set
            const problemIndex = Math.floor((seed * (i + 1) * 17) % problemSets.length);
            const [num1, num2] = problemSets[problemIndex];
            const answer = num1 - num2;
            
            // Select emoji for variety
            const emoji = visualEmojis[Math.floor((seed * (i + 1) * 5) % visualEmojis.length)];
            
            problems.push({
                num1: num1,
                num2: num2,
                answer: answer,
                userAnswer: null,
                visualItems: emoji.repeat(num1),
                removeItems: num2,
                emoji: emoji
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

    generateSpacePuzzle(difficulty, seed) {
        const puzzlesArray = this.spacePuzzles[difficulty] || this.spacePuzzles.easy;
        const selectedPuzzle = puzzlesArray[Math.floor((seed * 13) % puzzlesArray.length)];
        
        // Shuffle the options
        const shuffledOptions = [...selectedPuzzle.options];
        const correctAnswer = shuffledOptions[selectedPuzzle.correct];
        
        // Fisher-Yates shuffle
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // Find new position of correct answer
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            type: 'space',
            question: selectedPuzzle.question,
            options: shuffledOptions.map((option, index) => ({
                text: option,
                isCorrect: index === newCorrectIndex
            })),
            correctAnswer: correctAnswer,
            emoji: selectedPuzzle.emoji,
            hint: selectedPuzzle.hint,
            difficulty: difficulty
        };
    }

    generatePhysicsPuzzle(difficulty, seed) {
        const puzzlesArray = this.physicsPuzzles[difficulty] || this.physicsPuzzles.easy;
        const selectedPuzzle = puzzlesArray[Math.floor((seed * 17) % puzzlesArray.length)];
        
        // Shuffle the options
        const shuffledOptions = [...selectedPuzzle.options];
        const correctAnswer = shuffledOptions[selectedPuzzle.correct];
        
        // Fisher-Yates shuffle
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // Find new position of correct answer
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            type: 'physics',
            question: selectedPuzzle.question,
            options: shuffledOptions.map((option, index) => ({
                text: option,
                isCorrect: index === newCorrectIndex
            })),
            correctAnswer: correctAnswer,
            emoji: selectedPuzzle.emoji,
            hint: selectedPuzzle.hint,
            difficulty: difficulty
        };
    }

    generateChemistryPuzzle(difficulty, seed) {
        const puzzlesArray = this.chemistryPuzzles[difficulty] || this.chemistryPuzzles.easy;
        const selectedPuzzle = puzzlesArray[Math.floor((seed * 19) % puzzlesArray.length)];
        
        // Shuffle the options
        const shuffledOptions = [...selectedPuzzle.options];
        const correctAnswer = shuffledOptions[selectedPuzzle.correct];
        
        // Fisher-Yates shuffle
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // Find new position of correct answer
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            type: 'chemistry',
            question: selectedPuzzle.question,
            options: shuffledOptions.map((option, index) => ({
                text: option,
                isCorrect: index === newCorrectIndex
            })),
            correctAnswer: correctAnswer,
            emoji: selectedPuzzle.emoji,
            hint: selectedPuzzle.hint,
            difficulty: difficulty
        };
    }

    generateOrganicTablePuzzle(difficulty, seed) {
        const puzzlesArray = this.organicTablePuzzles[difficulty] || this.organicTablePuzzles.easy;
        const selectedPuzzle = puzzlesArray[Math.floor((seed * 23) % puzzlesArray.length)];
        
        // Shuffle the options
        const shuffledOptions = [...selectedPuzzle.options];
        const correctAnswer = shuffledOptions[selectedPuzzle.correct];
        
        // Fisher-Yates shuffle
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // Find new position of correct answer
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            type: 'organicTable',
            question: selectedPuzzle.question,
            options: shuffledOptions.map((option, index) => ({
                text: option,
                isCorrect: index === newCorrectIndex
            })),
            correctAnswer: correctAnswer,
            emoji: selectedPuzzle.emoji,
            hint: selectedPuzzle.hint,
            explanation: selectedPuzzle.explanation,
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
            case 'space':
                this.renderSciencePuzzle(puzzle, container);
                break;
            case 'physics':
                this.renderSciencePuzzle(puzzle, container);
                break;
            case 'chemistry':
                this.renderSciencePuzzle(puzzle, container);
                break;
            case 'organicTable':
                this.renderSciencePuzzle(puzzle, container);
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
        const flagImagePath = puzzle.flag ? `images/flags/${puzzle.flag}` : 'images/flags/default.png';
        
        container.innerHTML = `
            <div class="geography-container">
                <h3>🌍 Which country does this flag belong to?</h3>
                <div class="geography-game">
                    <div class="flag-display">
                        <img src="${flagImagePath}" 
                             alt="Flag of ${puzzle.country.name}" 
                             class="country-flag"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        />
                        <div class="flag-fallback" style="display: none; font-size: 8rem;">🏳️</div>
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
        const difficultyLabel = puzzle.difficulty.charAt(0).toUpperCase() + puzzle.difficulty.slice(1);
        
        container.innerHTML = `
            <div class="math-container">
                <h3>🧮 Addition Time! (${problemNumber}/${totalProblems}) - ${difficultyLabel}</h3>
                <div class="math-instruction">
                    <p>Count all the items together!</p>
                </div>
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
                    ${currentProblem.num1 === 0 || currentProblem.num2 === 0 ? 
                        '<div class="math-hint">💡 Adding zero means the number stays the same!</div>' : 
                        '<div class="math-hint">💡 Count the first group, then count the second group, then add them!</div>'
                    }
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
        
        // Create visual representation: show all items, then cross out some
        const allItems = '🟢'.repeat(currentProblem.num1);
        const remainingItems = '🟢'.repeat(currentProblem.answer);
        const crossedItems = '❌'.repeat(currentProblem.num2);
        
        container.innerHTML = `
            <div class="math-container">
                <h3>➖ Subtraction Time! (${problemNumber}/${totalProblems})</h3>
                <div class="math-problem">
                    <div class="visual-math">
                        <div class="math-group">
                            <div class="math-items">${allItems}</div>
                            <div class="math-number">${currentProblem.num1}</div>
                        </div>
                        <div class="math-operator">-</div>
                        <div class="math-group">
                            <div class="math-items subtract-items">Take away ${currentProblem.num2}</div>
                            <div class="math-number">${currentProblem.num2}</div>
                        </div>
                        <div class="math-equals">=</div>
                        <div class="math-answer">
                            <input type="number" class="math-input" min="0" max="50" placeholder="?">
                        </div>
                    </div>
                    <div class="subtraction-visual">
                        <p>📝 Start with ${currentProblem.num1} items, cross out ${currentProblem.num2}:</p>
                        <div class="visual-demonstration">
                            <div class="items-before">Before: ${allItems}</div>
                            <div class="items-crossed">After crossing out: ${remainingItems}${crossedItems}</div>
                            <div class="items-result">Items left: <strong>${currentProblem.answer}</strong></div>
                        </div>
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

    renderSciencePuzzle(puzzle, container) {
        const difficultyLabel = puzzle.difficulty.charAt(0).toUpperCase() + puzzle.difficulty.slice(1);
        const typeLabel = puzzle.type.charAt(0).toUpperCase() + puzzle.type.slice(1);
        
        container.innerHTML = `
            <div class="science-container">
                <h3>${puzzle.emoji} ${typeLabel} Quiz - ${difficultyLabel}</h3>
                <div class="science-game">
                    <div class="question-display">
                        <div class="question-emoji">${puzzle.emoji}</div>
                        <div class="question-text">${puzzle.question}</div>
                        <div class="question-hint">💡 ${puzzle.hint}</div>
                    </div>
                    <div class="science-options">
                        ${puzzle.options.map((option, index) => `
                            <button class="science-option" 
                                    data-option="${option.text}"
                                    data-correct="${option.isCorrect}">
                                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                                <span class="option-text">${option.text}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="science-feedback"></div>
            </div>
        `;
        
        // Disable submit button since science puzzles handle completion automatically
        const submitBtn = document.getElementById('submitAnswer');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.display = 'none'; // Hide the submit button for science puzzles
        }
        
        this.setupScienceListeners(puzzle, container);
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
                            this.playCorrectSound(); // Play success sound
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
                            this.playIncorrectSound(); // Play try-again sound
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
                    
                    // Add success animation and sound
                    this.playCorrectSound(); // Play success sound for correct placement
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
                    
                    // Success animation and sound
                    this.playCorrectSound(); // Play success sound for correct placement
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
        
        // Make tiles draggable and clickable
        letterTiles.forEach((tile, tileIndex) => {
            // Add draggable attribute if not already set
            tile.setAttribute('draggable', 'true');
            
            tile.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', tile.dataset.letter);
                e.dataTransfer.setData('tileIndex', tileIndex.toString());
                tile.classList.add('dragging');
            });
            
            tile.addEventListener('dragend', () => {
                tile.classList.remove('dragging');
            });
            
            // Click to place in first available slot
            tile.addEventListener('click', () => {
                if (tile.style.display === 'none') return; // Already used
                
                const emptySlot = Array.from(letterSlots).find(slot => 
                    !slot.textContent || slot.textContent.trim() === ''
                );
                if (emptySlot) {
                    emptySlot.textContent = tile.dataset.letter;
                    emptySlot.dataset.filled = 'true';
                    emptySlot.dataset.sourceTile = tileIndex.toString();
                    tile.style.display = 'none';
                    this.checkSpelling(puzzle, container);
                }
            });
        });
        
        // Make slots accept drops and clickable to remove
        letterSlots.forEach((slot, slotIndex) => {
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                if (!slot.textContent || slot.textContent.trim() === '') {
                    slot.classList.add('drag-over');
                }
            });
            
            slot.addEventListener('dragleave', (e) => {
                // Only remove if we're actually leaving the slot
                if (!slot.contains(e.relatedTarget)) {
                    slot.classList.remove('drag-over');
                }
            });
            
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                slot.classList.remove('drag-over');
                
                // Only drop if slot is empty
                if (slot.textContent && slot.textContent.trim() !== '') {
                    return; // Slot already occupied
                }
                
                const letter = e.dataTransfer.getData('text/plain');
                const tileIndex = e.dataTransfer.getData('tileIndex');
                
                if (letter && tileIndex) {
                    slot.textContent = letter;
                    slot.dataset.filled = 'true';
                    slot.dataset.sourceTile = tileIndex;
                    
                    // Hide the source tile
                    const sourceTile = letterTiles[parseInt(tileIndex)];
                    if (sourceTile) {
                        sourceTile.style.display = 'none';
                    }
                    
                    this.checkSpelling(puzzle, container);
                }
            });
            
            // Click on slot to remove letter and show tile again
            slot.addEventListener('click', () => {
                if (slot.textContent && slot.textContent.trim() !== '') {
                    const sourceTileIndex = slot.dataset.sourceTile;
                    if (sourceTileIndex) {
                        const sourceTile = letterTiles[parseInt(sourceTileIndex)];
                        if (sourceTile) {
                            sourceTile.style.display = 'block';
                        }
                    }
                    
                    slot.textContent = '';
                    slot.dataset.filled = 'false';
                    slot.dataset.sourceTile = '';
                    this.checkSpelling(puzzle, container);
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
                    this.playCorrectSound(); // Play happy spooky sound
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
                    this.playIncorrectSound(); // Play gentle try-again sound
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
        const letterTiles = container.querySelectorAll('.letter-tile');
        const feedback = container.querySelector('.spelling-feedback');
        
        // Count filled slots (slots with content)
        const filledSlots = Array.from(letterSlots).filter(slot => 
            slot.textContent && slot.textContent.trim() !== ''
        );
        
        if (filledSlots.length === puzzle.letters.length) {
            const userWord = Array.from(letterSlots).map(slot => 
                slot.textContent || ''
            ).join('');
            
            if (userWord === puzzle.word) {
                this.playCorrectSound(); // Play success sound
                feedback.innerHTML = `<div class="success">🎉 Perfect! You spelled "${puzzle.word}" correctly!</div>`;
                letterSlots.forEach(slot => {
                    if (slot.textContent) slot.classList.add('correct');
                });
                
                // Disable further interactions
                letterSlots.forEach(slot => slot.style.pointerEvents = 'none');
                letterTiles.forEach(tile => tile.style.pointerEvents = 'none');
                
                setTimeout(() => {
                    const event = new CustomEvent('puzzleComplete', { 
                        detail: { puzzle: puzzle, success: true } 
                    });
                    container.dispatchEvent(event);
                }, 1500);
            } else {
                this.playIncorrectSound(); // Play try-again sound
                feedback.innerHTML = `<div class="error">❌ Not quite right. Try again!</div>`;
                letterSlots.forEach(slot => {
                    if (slot.textContent) slot.classList.add('incorrect');
                });
                
                // Reset after a moment
                setTimeout(() => {
                    letterSlots.forEach(slot => {
                        slot.classList.remove('incorrect');
                        const sourceTileIndex = slot.dataset.sourceTile;
                        if (sourceTileIndex) {
                            const sourceTile = letterTiles[parseInt(sourceTileIndex)];
                            if (sourceTile) {
                                sourceTile.style.display = 'block';
                            }
                        }
                        slot.textContent = '';
                        slot.dataset.filled = 'false';
                        slot.dataset.sourceTile = '';
                    });
                    
                    feedback.innerHTML = '';
                }, 2000);
            }
        } else {
            // Clear any previous feedback if not all slots are filled
            feedback.innerHTML = '';
            letterSlots.forEach(slot => {
                slot.classList.remove('correct', 'incorrect');
            });
        }
    }

    setupMathListeners(puzzle, container, type) {
        const mathInput = container.querySelector('.math-input');
        const feedback = container.querySelector('.math-feedback');
        let hasAnswered = false; // Prevent multiple submissions
        
        // Remove any existing event listeners by cloning the element
        const newMathInput = mathInput.cloneNode(true);
        mathInput.parentNode.replaceChild(newMathInput, mathInput);
        
        // Add focus to the new input
        newMathInput.focus();
        
        // Handle input changes with debouncing
        let inputTimer;
        newMathInput.addEventListener('input', () => {
            clearTimeout(inputTimer);
            inputTimer = setTimeout(() => {
                if (hasAnswered) return; // Prevent multiple submissions
                
                const userAnswer = parseInt(newMathInput.value);
                const currentProblem = puzzle.problems[puzzle.currentProblem];
                
                if (!isNaN(userAnswer) && newMathInput.value.trim() !== '') {
                    if (userAnswer === currentProblem.answer) {
                        hasAnswered = true; // Mark as answered
                        this.playCorrectSound(); // Play happy spooky sound
                        feedback.innerHTML = `<div class="success">🎉 Correct! ${currentProblem.num1} ${type === 'addition' ? '+' : '-'} ${currentProblem.num2} = ${currentProblem.answer}</div>`;
                        newMathInput.disabled = true;
                        newMathInput.classList.add('correct');
                        
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
                    } else {
                        this.playIncorrectSound(); // Play gentle try-again sound
                        // Only show hints for significantly wrong answers
                        if (Math.abs(userAnswer - currentProblem.answer) > 5) {
                            feedback.innerHTML = `<div class="error">❌ That seems too ${userAnswer > currentProblem.answer ? 'high' : 'low'}. Try again!</div>`;
                        } else if (userAnswer !== currentProblem.answer) {
                            feedback.innerHTML = `<div class="error">❌ Not quite right. Try again!</div>`;
                        }
                        newMathInput.classList.add('incorrect');
                        
                        // Remove incorrect class after a moment
                        setTimeout(() => {
                            newMathInput.classList.remove('incorrect');
                            feedback.innerHTML = '';
                        }, 1500);
                    }
                } else {
                    // Clear feedback when input is empty or invalid
                    feedback.innerHTML = '';
                    newMathInput.classList.remove('correct', 'incorrect');
                }
            }, 300); // 300ms debounce delay
        });
        
        // Also handle Enter key press
        newMathInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !hasAnswered) {
                e.preventDefault();
                newMathInput.dispatchEvent(new Event('input'));
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

    // Event listeners for science puzzles (space, physics, chemistry)
    setupScienceListeners(puzzle, container) {
        const options = container.querySelectorAll('.science-option');
        const feedback = container.querySelector('.science-feedback');
        
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const isCorrect = option.dataset.correct === 'true';
                
                // Disable all options
                options.forEach(opt => opt.disabled = true);
                
                if (isCorrect) {
                    this.playCorrectSound(); // Play success sound
                    option.classList.add('correct');
                    
                    let encouragement = '';
                    switch(puzzle.type) {
                        case 'space':
                            encouragement = '🚀 Stellar! You\'re a space explorer!';
                            break;
                        case 'physics':
                            encouragement = '⚡ Fantastic! You understand physics!';
                            break;
                        case 'chemistry':
                            encouragement = '🧪 Excellent! You\'re a young scientist!';
                            break;
                        case 'organicTable':
                            encouragement = '⚛️ Amazing! You know your elements!';
                            break;
                    }
                    
                    feedback.innerHTML = `
                        <div class="success">
                            ${encouragement}
                            <br><strong>Correct Answer:</strong> ${puzzle.correctAnswer}
                        </div>
                    `;
                    
                    // Trigger completion after a short delay
                    setTimeout(() => {
                        const event = new CustomEvent('puzzleComplete', { 
                            detail: { puzzle: puzzle, success: true } 
                        });
                        container.dispatchEvent(event);
                    }, 1000);
                } else {
                    this.playIncorrectSound(); // Play try-again sound
                    option.classList.add('incorrect');
                    
                    // Show correct answer
                    const correctOption = Array.from(options).find(opt => opt.dataset.correct === 'true');
                    if (correctOption) {
                        correctOption.classList.add('correct');
                    }
                    
                    let encouragement = '';
                    switch(puzzle.type) {
                        case 'space':
                            encouragement = '🌟 Keep exploring! Science is about learning!';
                            break;
                        case 'physics':
                            encouragement = '🔬 Keep experimenting! Every mistake teaches us!';
                            break;
                        case 'chemistry':
                            encouragement = '⚗️ Keep mixing ideas! Discovery takes practice!';
                            break;
                        case 'organicTable':
                            encouragement = '🧪 Keep learning! Elements are everywhere!';
                            break;
                    }
                    
                    feedback.innerHTML = `
                        <div class="error">
                            ❌ Not quite right, but great try!
                            <br>${encouragement}
                            <br><strong>The correct answer is:</strong> ${puzzle.correctAnswer}
                        </div>
                    `;
                    
                    setTimeout(() => {
                        const event = new CustomEvent('puzzleComplete', { 
                            detail: { puzzle: puzzle, success: false } 
                        });
                        container.dispatchEvent(event);
                    }, 2500);
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
                
            case 'space':
            case 'physics':
            case 'chemistry':
            case 'organicTable':
                // Science puzzles are completed through event listeners
                return false;
                
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

    // Kid-friendly spooky sound effects
    playCorrectSound() {
        try {
            // Create audio context if it doesn't exist
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            // Happy spooky success sound - like friendly ghost chimes
            const oscillator1 = this.audioContext.createOscillator();
            const oscillator2 = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            // Connect nodes
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Set frequencies for a happy magical chord
            oscillator1.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
            oscillator2.frequency.setValueAtTime(659.25, this.audioContext.currentTime); // E5
            
            // Create a pleasant, magical envelope
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
            
            // Add some sparkle with frequency modulation
            oscillator1.frequency.linearRampToValueAtTime(587.33, this.audioContext.currentTime + 0.2); // D5
            oscillator2.frequency.linearRampToValueAtTime(783.99, this.audioContext.currentTime + 0.2); // G5
            
            oscillator1.type = 'sine';
            oscillator2.type = 'triangle';
            
            oscillator1.start(this.audioContext.currentTime);
            oscillator2.start(this.audioContext.currentTime);
            oscillator1.stop(this.audioContext.currentTime + 0.8);
            oscillator2.stop(this.audioContext.currentTime + 0.8);
            
        } catch (e) {
            console.log('Audio not available:', e);
        }
    }

    playIncorrectSound() {
        try {
            // Create audio context if it doesn't exist
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            // Gentle "try again" sound - like a friendly ghost saying "oops"
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Descending tone that's not scary, just encouraging
            oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
            oscillator.frequency.linearRampToValueAtTime(300, this.audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            
            oscillator.type = 'sine'; // Soft, gentle tone
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.4);
            
        } catch (e) {
            console.log('Audio not available:', e);
        }
    }
}

// Export for use in other files
window.HalloweenPuzzles = HalloweenPuzzles;


