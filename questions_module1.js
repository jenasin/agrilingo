// Module 1: Soil & Basics - 100 questions (10 levels x 10 questions)
const MODULE1_QUESTIONS = {
    // Level 1: Plant Basics
    "module1_level1": [
        {
            "question": "What part of plant makes food?",
            "type": "multiple_choice",
            "options": [
                {"text": "Stem", "icon": "", "isCorrect": false},
                {"text": "Root", "icon": "", "isCorrect": false},
                {"text": "Flower", "icon": "", "isCorrect": false},
                {"text": "Leaf", "icon": "🍃", "isCorrect": true}
            ],
            "explanation": "Leaves make food through photosynthesis using sunlight."
        },
        {
            "question": "What do plants need to grow?",
            "type": "multiple_choice",
            "options": [
                {"text": "Sand", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "💧", "isCorrect": true},
                {"text": "Stone", "icon": "", "isCorrect": false},
                {"text": "Plastic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants need water, sunlight, and nutrients to grow."
        },
        {
            "question": "Which crop is a root crop?",
            "type": "multiple_choice",
            "options": [
                {"text": "Maize", "icon": "", "isCorrect": false},
                {"text": "Cassava", "icon": "🥔", "isCorrect": true},
                {"text": "Beans", "icon": "", "isCorrect": false},
                {"text": "Rice", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cassava is a root crop - we eat the root part."
        },
        {
            "question": "Good soil color is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Dark brown", "icon": "🟤", "isCorrect": true},
                {"text": "Blue", "icon": "", "isCorrect": false},
                {"text": "White", "icon": "", "isCorrect": false},
                {"text": "Red", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dark brown soil is rich in organic matter and nutrients."
        },
        {
            "question": "Which animal gives milk?",
            "type": "multiple_choice",
            "options": [
                {"text": "Chicken", "icon": "", "isCorrect": false},
                {"text": "Cow", "icon": "🐄", "isCorrect": true},
                {"text": "Rabbit", "icon": "", "isCorrect": false},
                {"text": "Fish", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cows provide milk for drinking and making dairy products."
        },
        {
            "question": "Which seed is used for rice?",
            "type": "multiple_choice",
            "options": [
                {"text": "Coffee", "icon": "", "isCorrect": false},
                {"text": "Palm kernel", "icon": "", "isCorrect": false},
                {"text": "Cocoa", "icon": "", "isCorrect": false},
                {"text": "Paddy", "icon": "🌾", "isCorrect": true}
            ],
            "explanation": "Paddy is the rice seed before processing."
        },
        {
            "question": "First step before planting?",
            "type": "multiple_choice",
            "options": [
                {"text": "Harvesting", "icon": "", "isCorrect": false},
                {"text": "Selling", "icon": "", "isCorrect": false},
                {"text": "Cooking", "icon": "", "isCorrect": false},
                {"text": "Land clearing", "icon": "🌿", "isCorrect": true}
            ],
            "explanation": "Clear the land of weeds and debris before planting."
        },
        {
            "question": "Cutlass is used for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sleeping", "icon": "", "isCorrect": false},
                {"text": "Drawing", "icon": "", "isCorrect": false},
                {"text": "Cutting weeds", "icon": "🔪", "isCorrect": true},
                {"text": "Cooking", "icon": "", "isCorrect": false}
            ],
            "explanation": "A cutlass (machete) is used to cut weeds and clear land."
        },
        {
            "question": "Which animal gives eggs?",
            "type": "multiple_choice",
            "options": [
                {"text": "Goat", "icon": "", "isCorrect": false},
                {"text": "Chicken", "icon": "🐔", "isCorrect": true},
                {"text": "Cow", "icon": "", "isCorrect": false},
                {"text": "Sheep", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chickens lay eggs that we can eat or hatch."
        },
        {
            "question": "What improves soil fertility?",
            "type": "multiple_choice",
            "options": [
                {"text": "Plastic", "icon": "", "isCorrect": false},
                {"text": "Ash", "icon": "", "isCorrect": false},
                {"text": "Compost", "icon": "🌱", "isCorrect": true},
                {"text": "Metal", "icon": "", "isCorrect": false}
            ],
            "explanation": "Compost adds nutrients and improves soil structure."
        }
    ],

    // Level 2: Soil Types
    "module1_level2": [
        {
            "question": "What is the best soil for farming?",
            "type": "multiple_choice",
            "options": [
                {"text": "Sandy soil", "icon": "", "isCorrect": false},
                {"text": "Clay soil", "icon": "", "isCorrect": false},
                {"text": "Loamy soil", "icon": "🌱", "isCorrect": true},
                {"text": "Rocky soil", "icon": "", "isCorrect": false}
            ],
            "explanation": "Loamy soil has the best mix of sand, silt, and clay."
        },
        {
            "question": "Sandy soil drains water:",
            "type": "multiple_choice",
            "options": [
                {"text": "Very slowly", "icon": "", "isCorrect": false},
                {"text": "Very quickly", "icon": "💨", "isCorrect": true},
                {"text": "Not at all", "icon": "", "isCorrect": false},
                {"text": "Only at night", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sandy soil has large particles that let water drain fast."
        },
        {
            "question": "Clay soil feels:",
            "type": "multiple_choice",
            "options": [
                {"text": "Gritty", "icon": "", "isCorrect": false},
                {"text": "Smooth and sticky", "icon": "✋", "isCorrect": true},
                {"text": "Dry and dusty", "icon": "", "isCorrect": false},
                {"text": "Like sand", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clay soil has tiny particles that feel smooth and sticky when wet."
        },
        {
            "question": "What makes soil dark?",
            "type": "multiple_choice",
            "options": [
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Organic matter", "icon": "🍂", "isCorrect": true},
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Decomposed plants and animals make soil dark and rich."
        },
        {
            "question": "Tool for pest control?",
            "type": "multiple_choice",
            "options": [
                {"text": "Pillow", "icon": "", "isCorrect": false},
                {"text": "Bucket", "icon": "", "isCorrect": false},
                {"text": "Lamp", "icon": "", "isCorrect": false},
                {"text": "Sprayer", "icon": "💦", "isCorrect": true}
            ],
            "explanation": "A sprayer applies pesticides to control pests."
        },
        {
            "question": "Machine for ploughing:",
            "type": "multiple_choice",
            "options": [
                {"text": "Motorbike", "icon": "", "isCorrect": false},
                {"text": "Bike", "icon": "", "isCorrect": false},
                {"text": "Wheelbarrow", "icon": "", "isCorrect": false},
                {"text": "Tractor", "icon": "🚜", "isCorrect": true}
            ],
            "explanation": "Tractors pull ploughs to turn and prepare soil."
        },
        {
            "question": "Soil pH measures:",
            "type": "multiple_choice",
            "options": [
                {"text": "Soil color", "icon": "", "isCorrect": false},
                {"text": "Acid or alkaline level", "icon": "🧪", "isCorrect": true},
                {"text": "Soil weight", "icon": "", "isCorrect": false},
                {"text": "Soil temperature", "icon": "", "isCorrect": false}
            ],
            "explanation": "pH tells us if soil is acidic, neutral, or alkaline."
        },
        {
            "question": "Most plants grow best in pH:",
            "type": "multiple_choice",
            "options": [
                {"text": "1-3 (very acidic)", "icon": "", "isCorrect": false},
                {"text": "6-7 (neutral)", "icon": "✅", "isCorrect": true},
                {"text": "10-14 (very alkaline)", "icon": "", "isCorrect": false},
                {"text": "0 (no pH)", "icon": "", "isCorrect": false}
            ],
            "explanation": "Most crops prefer slightly acidic to neutral soil (pH 6-7)."
        },
        {
            "question": "Earthworms in soil are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Harmful pests", "icon": "", "isCorrect": false},
                {"text": "Good for soil", "icon": "🪱", "isCorrect": true},
                {"text": "Dangerous", "icon": "", "isCorrect": false},
                {"text": "Useless", "icon": "", "isCorrect": false}
            ],
            "explanation": "Earthworms aerate soil and create natural fertilizer."
        },
        {
            "question": "Topsoil is the:",
            "type": "multiple_choice",
            "options": [
                {"text": "Bottom layer", "icon": "", "isCorrect": false},
                {"text": "Top layer", "icon": "⬆️", "isCorrect": true},
                {"text": "Middle layer", "icon": "", "isCorrect": false},
                {"text": "Rocky layer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Topsoil is the nutrient-rich upper layer where plants grow."
        }
    ],

    // Level 3: Seeds and Planting
    "module1_level3": [
        {
            "question": "Best time to plant seeds?",
            "type": "multiple_choice",
            "options": [
                {"text": "Dry season only", "icon": "", "isCorrect": false},
                {"text": "Start of rainy season", "icon": "🌧️", "isCorrect": true},
                {"text": "Any time", "icon": "", "isCorrect": false},
                {"text": "Winter only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Planting at the start of rains ensures water for germination."
        },
        {
            "question": "What is germination?",
            "type": "multiple_choice",
            "options": [
                {"text": "Seed dying", "icon": "", "isCorrect": false},
                {"text": "Seed sprouting", "icon": "🌱", "isCorrect": true},
                {"text": "Seed drying", "icon": "", "isCorrect": false},
                {"text": "Seed sleeping", "icon": "", "isCorrect": false}
            ],
            "explanation": "Germination is when a seed starts to grow into a plant."
        },
        {
            "question": "Seeds need what to germinate?",
            "type": "multiple_choice",
            "options": [
                {"text": "Only sunlight", "icon": "", "isCorrect": false},
                {"text": "Water, warmth, air", "icon": "💧", "isCorrect": true},
                {"text": "Only soil", "icon": "", "isCorrect": false},
                {"text": "Only darkness", "icon": "", "isCorrect": false}
            ],
            "explanation": "Seeds need moisture, warmth, and oxygen to sprout."
        },
        {
            "question": "Seed spacing is important because:",
            "type": "multiple_choice",
            "options": [
                {"text": "It looks nice", "icon": "", "isCorrect": false},
                {"text": "Plants need room to grow", "icon": "📏", "isCorrect": true},
                {"text": "Farmers like counting", "icon": "", "isCorrect": false},
                {"text": "Seeds are expensive", "icon": "", "isCorrect": false}
            ],
            "explanation": "Proper spacing prevents competition for nutrients and light."
        },
        {
            "question": "What is a seedbed?",
            "type": "multiple_choice",
            "options": [
                {"text": "A bed for sleeping", "icon": "", "isCorrect": false},
                {"text": "Prepared soil for seeds", "icon": "🛏️", "isCorrect": true},
                {"text": "A type of seed", "icon": "", "isCorrect": false},
                {"text": "A farming tool", "icon": "", "isCorrect": false}
            ],
            "explanation": "A seedbed is specially prepared soil for starting seeds."
        },
        {
            "question": "Hybrid seeds are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Always bad", "icon": "", "isCorrect": false},
                {"text": "Bred for better yields", "icon": "🌟", "isCorrect": true},
                {"text": "Wild seeds", "icon": "", "isCorrect": false},
                {"text": "Dead seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Hybrid seeds are developed to produce more or resist disease."
        },
        {
            "question": "How deep to plant small seeds?",
            "type": "multiple_choice",
            "options": [
                {"text": "Very deep (30cm)", "icon": "", "isCorrect": false},
                {"text": "Shallow (1-2cm)", "icon": "📐", "isCorrect": true},
                {"text": "On top of soil", "icon": "", "isCorrect": false},
                {"text": "Under rocks", "icon": "", "isCorrect": false}
            ],
            "explanation": "Small seeds should be planted shallowly to reach sunlight."
        },
        {
            "question": "What is transplanting?",
            "type": "multiple_choice",
            "options": [
                {"text": "Removing plants", "icon": "", "isCorrect": false},
                {"text": "Moving seedlings to field", "icon": "🔄", "isCorrect": true},
                {"text": "Cutting plants", "icon": "", "isCorrect": false},
                {"text": "Watering plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Transplanting moves young plants from nursery to main field."
        },
        {
            "question": "Store seeds in:",
            "type": "multiple_choice",
            "options": [
                {"text": "Wet place", "icon": "", "isCorrect": false},
                {"text": "Cool, dry place", "icon": "🏠", "isCorrect": true},
                {"text": "Hot sun", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Seeds stay viable longer when stored cool and dry."
        },
        {
            "question": "What is seed dormancy?",
            "type": "multiple_choice",
            "options": [
                {"text": "Seed is dead", "icon": "", "isCorrect": false},
                {"text": "Seed is resting", "icon": "😴", "isCorrect": true},
                {"text": "Seed is growing", "icon": "", "isCorrect": false},
                {"text": "Seed is rotting", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dormant seeds are alive but waiting for right conditions."
        }
    ],

    // Level 4: Water and Plants
    "module1_level4": [
        {
            "question": "Plants take in water through:",
            "type": "multiple_choice",
            "options": [
                {"text": "Leaves only", "icon": "", "isCorrect": false},
                {"text": "Roots", "icon": "🌿", "isCorrect": true},
                {"text": "Flowers", "icon": "", "isCorrect": false},
                {"text": "Stem only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Roots absorb water and nutrients from the soil."
        },
        {
            "question": "Overwatering can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Faster growth", "icon": "", "isCorrect": false},
                {"text": "Root rot", "icon": "🦠", "isCorrect": true},
                {"text": "Stronger plants", "icon": "", "isCorrect": false},
                {"text": "More flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Too much water drowns roots and causes disease."
        },
        {
            "question": "Best time to water plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Hot afternoon", "icon": "", "isCorrect": false},
                {"text": "Early morning", "icon": "🌅", "isCorrect": true},
                {"text": "Midnight", "icon": "", "isCorrect": false},
                {"text": "During rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Morning watering reduces evaporation and disease."
        },
        {
            "question": "Wilting means plants need:",
            "type": "multiple_choice",
            "options": [
                {"text": "Less water", "icon": "", "isCorrect": false},
                {"text": "More water", "icon": "💧", "isCorrect": true},
                {"text": "More sun", "icon": "", "isCorrect": false},
                {"text": "More fertilizer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wilting shows plants have lost water and need irrigation."
        },
        {
            "question": "Mulching helps by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Adding pests", "icon": "", "isCorrect": false},
                {"text": "Keeping soil moist", "icon": "🍂", "isCorrect": true},
                {"text": "Removing nutrients", "icon": "", "isCorrect": false},
                {"text": "Blocking roots", "icon": "", "isCorrect": false}
            ],
            "explanation": "Mulch covers soil to reduce water evaporation."
        },
        {
            "question": "Drought-resistant crops include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Rice", "icon": "", "isCorrect": false},
                {"text": "Sorghum", "icon": "🌾", "isCorrect": true},
                {"text": "Water lily", "icon": "", "isCorrect": false},
                {"text": "Lettuce", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sorghum and millet survive with little water."
        },
        {
            "question": "Waterlogged soil lacks:",
            "type": "multiple_choice",
            "options": [
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Oxygen", "icon": "💨", "isCorrect": true},
                {"text": "Soil", "icon": "", "isCorrect": false},
                {"text": "Color", "icon": "", "isCorrect": false}
            ],
            "explanation": "Flooded soil has no air spaces for root breathing."
        },
        {
            "question": "Rainwater harvesting means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Praying for rain", "icon": "", "isCorrect": false},
                {"text": "Collecting rainwater", "icon": "🌧️", "isCorrect": true},
                {"text": "Stopping rain", "icon": "", "isCorrect": false},
                {"text": "Measuring rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Collecting rain in tanks saves water for dry times."
        },
        {
            "question": "Drip irrigation saves:",
            "type": "multiple_choice",
            "options": [
                {"text": "Seeds", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "💧", "isCorrect": true},
                {"text": "Tools", "icon": "", "isCorrect": false},
                {"text": "Land", "icon": "", "isCorrect": false}
            ],
            "explanation": "Drip systems deliver water directly to roots with less waste."
        },
        {
            "question": "Signs of water stress:",
            "type": "multiple_choice",
            "options": [
                {"text": "Green leaves", "icon": "", "isCorrect": false},
                {"text": "Curling leaves", "icon": "🍂", "isCorrect": true},
                {"text": "Fast growth", "icon": "", "isCorrect": false},
                {"text": "More flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Leaves curl and yellow when plants lack water."
        }
    ],

    // Level 5: Sunlight and Growth
    "module1_level5": [
        {
            "question": "Plants use sunlight to make:",
            "type": "multiple_choice",
            "options": [
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Food (sugar)", "icon": "☀️", "isCorrect": true},
                {"text": "Soil", "icon": "", "isCorrect": false},
                {"text": "Air", "icon": "", "isCorrect": false}
            ],
            "explanation": "Photosynthesis converts sunlight into plant food."
        },
        {
            "question": "Green color in leaves comes from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Chlorophyll", "icon": "🍃", "isCorrect": true},
                {"text": "Soil", "icon": "", "isCorrect": false},
                {"text": "Fertilizer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chlorophyll is the green pigment that captures light."
        },
        {
            "question": "Shade-loving plants grow well:",
            "type": "multiple_choice",
            "options": [
                {"text": "In full sun", "icon": "", "isCorrect": false},
                {"text": "Under trees", "icon": "🌳", "isCorrect": true},
                {"text": "In desert", "icon": "", "isCorrect": false},
                {"text": "On mountains", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some plants prefer filtered light under tree canopy."
        },
        {
            "question": "Too much sun can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Faster growth", "icon": "", "isCorrect": false},
                {"text": "Leaf burn", "icon": "🔥", "isCorrect": true},
                {"text": "More water", "icon": "", "isCorrect": false},
                {"text": "Darker leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Intense sun can scorch and damage plant leaves."
        },
        {
            "question": "Plants grow towards:",
            "type": "multiple_choice",
            "options": [
                {"text": "Darkness", "icon": "", "isCorrect": false},
                {"text": "Light", "icon": "☀️", "isCorrect": true},
                {"text": "Wind", "icon": "", "isCorrect": false},
                {"text": "Sound", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants bend toward light source to maximize photosynthesis."
        },
        {
            "question": "How many hours of sun do most crops need?",
            "type": "multiple_choice",
            "options": [
                {"text": "1-2 hours", "icon": "", "isCorrect": false},
                {"text": "6-8 hours", "icon": "⏰", "isCorrect": true},
                {"text": "24 hours", "icon": "", "isCorrect": false},
                {"text": "0 hours", "icon": "", "isCorrect": false}
            ],
            "explanation": "Most vegetables need 6-8 hours of direct sunlight."
        },
        {
            "question": "Photosynthesis happens in:",
            "type": "multiple_choice",
            "options": [
                {"text": "Roots", "icon": "", "isCorrect": false},
                {"text": "Leaves", "icon": "🍃", "isCorrect": true},
                {"text": "Soil", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Leaves contain chlorophyll where photosynthesis occurs."
        },
        {
            "question": "Plants release what during photosynthesis?",
            "type": "multiple_choice",
            "options": [
                {"text": "Carbon dioxide", "icon": "", "isCorrect": false},
                {"text": "Oxygen", "icon": "💨", "isCorrect": true},
                {"text": "Nitrogen", "icon": "", "isCorrect": false},
                {"text": "Smoke", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants produce oxygen as a byproduct of making food."
        },
        {
            "question": "Yellow leaves often mean:",
            "type": "multiple_choice",
            "options": [
                {"text": "Too much light", "icon": "", "isCorrect": false},
                {"text": "Lack of nutrients", "icon": "🟡", "isCorrect": true},
                {"text": "Too much water", "icon": "", "isCorrect": false},
                {"text": "Perfect health", "icon": "", "isCorrect": false}
            ],
            "explanation": "Yellowing can indicate nitrogen or iron deficiency."
        },
        {
            "question": "Intercropping uses sunlight by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Blocking all light", "icon": "", "isCorrect": false},
                {"text": "Growing different heights together", "icon": "📊", "isCorrect": true},
                {"text": "Using artificial light", "icon": "", "isCorrect": false},
                {"text": "Growing at night", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tall and short crops together use light at different levels."
        }
    ],

    // Level 6: Nutrients and Fertilizer
    "module1_level6": [
        {
            "question": "Plants need nitrogen (N) for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Root growth", "icon": "", "isCorrect": false},
                {"text": "Leaf growth", "icon": "🍃", "isCorrect": true},
                {"text": "Flower color", "icon": "", "isCorrect": false},
                {"text": "Seed size", "icon": "", "isCorrect": false}
            ],
            "explanation": "Nitrogen promotes green, leafy growth."
        },
        {
            "question": "Phosphorus (P) helps with:",
            "type": "multiple_choice",
            "options": [
                {"text": "Leaf color", "icon": "", "isCorrect": false},
                {"text": "Root development", "icon": "🌱", "isCorrect": true},
                {"text": "Stem height", "icon": "", "isCorrect": false},
                {"text": "Weed control", "icon": "", "isCorrect": false}
            ],
            "explanation": "Phosphorus is essential for strong root systems."
        },
        {
            "question": "Potassium (K) improves:",
            "type": "multiple_choice",
            "options": [
                {"text": "Leaf size", "icon": "", "isCorrect": false},
                {"text": "Disease resistance", "icon": "🛡️", "isCorrect": true},
                {"text": "Weed growth", "icon": "", "isCorrect": false},
                {"text": "Soil color", "icon": "", "isCorrect": false}
            ],
            "explanation": "Potassium strengthens plants against disease and stress."
        },
        {
            "question": "NPK on fertilizer bags means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Brand name", "icon": "", "isCorrect": false},
                {"text": "Nitrogen, Phosphorus, Potassium", "icon": "🧪", "isCorrect": true},
                {"text": "Weight of bag", "icon": "", "isCorrect": false},
                {"text": "Expiry date", "icon": "", "isCorrect": false}
            ],
            "explanation": "NPK shows the percentage of three main nutrients."
        },
        {
            "question": "Organic fertilizer comes from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Factories only", "icon": "", "isCorrect": false},
                {"text": "Living things", "icon": "🐄", "isCorrect": true},
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Plastic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Organic fertilizers are made from animal or plant matter."
        },
        {
            "question": "Too much fertilizer can:",
            "type": "multiple_choice",
            "options": [
                {"text": "Always help plants", "icon": "", "isCorrect": false},
                {"text": "Burn plants", "icon": "🔥", "isCorrect": true},
                {"text": "Make plants blue", "icon": "", "isCorrect": false},
                {"text": "Kill all weeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Excess fertilizer damages roots and can kill plants."
        },
        {
            "question": "Green manure is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Green-colored fertilizer", "icon": "", "isCorrect": false},
                {"text": "Plants plowed into soil", "icon": "🌿", "isCorrect": true},
                {"text": "Moldy food", "icon": "", "isCorrect": false},
                {"text": "Green paint", "icon": "", "isCorrect": false}
            ],
            "explanation": "Growing and plowing in plants adds organic matter to soil."
        },
        {
            "question": "Legumes help soil by adding:",
            "type": "multiple_choice",
            "options": [
                {"text": "Salt", "icon": "", "isCorrect": false},
                {"text": "Nitrogen", "icon": "🫘", "isCorrect": true},
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Beans and peas fix nitrogen from air into soil."
        },
        {
            "question": "Best time to apply fertilizer:",
            "type": "multiple_choice",
            "options": [
                {"text": "After harvest", "icon": "", "isCorrect": false},
                {"text": "Before or during planting", "icon": "🌱", "isCorrect": true},
                {"text": "In winter", "icon": "", "isCorrect": false},
                {"text": "Never", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants need nutrients most when actively growing."
        },
        {
            "question": "Foliar feeding means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Feeding roots", "icon": "", "isCorrect": false},
                {"text": "Spraying nutrients on leaves", "icon": "🍃", "isCorrect": true},
                {"text": "Feeding animals", "icon": "", "isCorrect": false},
                {"text": "Adding water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Leaves can absorb liquid nutrients directly."
        }
    ],

    // Level 7: Weeds and Control
    "module1_level7": [
        {
            "question": "Weeds compete with crops for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Air only", "icon": "", "isCorrect": false},
                {"text": "Water, light, nutrients", "icon": "⚔️", "isCorrect": true},
                {"text": "Nothing", "icon": "", "isCorrect": false},
                {"text": "Farmers' attention", "icon": "", "isCorrect": false}
            ],
            "explanation": "Weeds steal resources that crops need to grow."
        },
        {
            "question": "Hand weeding is best for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Large farms only", "icon": "", "isCorrect": false},
                {"text": "Small areas", "icon": "✋", "isCorrect": true},
                {"text": "Desert farming", "icon": "", "isCorrect": false},
                {"text": "Underwater farms", "icon": "", "isCorrect": false}
            ],
            "explanation": "Hand weeding works well for gardens and small plots."
        },
        {
            "question": "Mulching prevents weeds by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Poisoning them", "icon": "", "isCorrect": false},
                {"text": "Blocking sunlight", "icon": "🌑", "isCorrect": true},
                {"text": "Freezing them", "icon": "", "isCorrect": false},
                {"text": "Feeding them", "icon": "", "isCorrect": false}
            ],
            "explanation": "Mulch covers soil so weed seeds can't get light to grow."
        },
        {
            "question": "Herbicide is used to kill:",
            "type": "multiple_choice",
            "options": [
                {"text": "Insects", "icon": "", "isCorrect": false},
                {"text": "Weeds", "icon": "🧴", "isCorrect": true},
                {"text": "Animals", "icon": "", "isCorrect": false},
                {"text": "Crops", "icon": "", "isCorrect": false}
            ],
            "explanation": "Herbicides are chemicals that kill unwanted plants."
        },
        {
            "question": "Best time to weed is when:",
            "type": "multiple_choice",
            "options": [
                {"text": "Weeds are large", "icon": "", "isCorrect": false},
                {"text": "Weeds are small", "icon": "🌱", "isCorrect": true},
                {"text": "Crops are dying", "icon": "", "isCorrect": false},
                {"text": "After harvest", "icon": "", "isCorrect": false}
            ],
            "explanation": "Young weeds are easier to remove and cause less damage."
        },
        {
            "question": "Crop rotation helps control weeds by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Killing all plants", "icon": "", "isCorrect": false},
                {"text": "Breaking weed cycles", "icon": "🔄", "isCorrect": true},
                {"text": "Adding more weeds", "icon": "", "isCorrect": false},
                {"text": "Using chemicals", "icon": "", "isCorrect": false}
            ],
            "explanation": "Different crops disrupt weed growth patterns."
        },
        {
            "question": "A hoe is used for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Watering", "icon": "", "isCorrect": false},
                {"text": "Weeding and tilling", "icon": "🔧", "isCorrect": true},
                {"text": "Harvesting fruit", "icon": "", "isCorrect": false},
                {"text": "Planting seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "A hoe cuts weeds and loosens topsoil."
        },
        {
            "question": "Cover crops help by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Attracting weeds", "icon": "", "isCorrect": false},
                {"text": "Smothering weeds", "icon": "🌿", "isCorrect": true},
                {"text": "Growing weeds", "icon": "", "isCorrect": false},
                {"text": "Eating weeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dense cover crops outcompete and shade out weeds."
        },
        {
            "question": "Perennial weeds are hard to control because:",
            "type": "multiple_choice",
            "options": [
                {"text": "They are small", "icon": "", "isCorrect": false},
                {"text": "They regrow from roots", "icon": "🌱", "isCorrect": true},
                {"text": "They only grow once", "icon": "", "isCorrect": false},
                {"text": "They are useful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Perennial weeds survive and regrow from underground parts."
        },
        {
            "question": "Some weeds can be used as:",
            "type": "multiple_choice",
            "options": [
                {"text": "Building material", "icon": "", "isCorrect": false},
                {"text": "Medicine or food", "icon": "🌿", "isCorrect": true},
                {"text": "Fuel for cars", "icon": "", "isCorrect": false},
                {"text": "Nothing at all", "icon": "", "isCorrect": false}
            ],
            "explanation": "Many weeds have medicinal or nutritional value."
        }
    ],

    // Level 8: Crop Planning
    "module1_level8": [
        {
            "question": "Crop rotation means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Spinning crops", "icon": "", "isCorrect": false},
                {"text": "Growing different crops each season", "icon": "🔄", "isCorrect": true},
                {"text": "Harvesting at night", "icon": "", "isCorrect": false},
                {"text": "Planting upside down", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rotating crops prevents soil depletion and disease buildup."
        },
        {
            "question": "Monoculture is growing:",
            "type": "multiple_choice",
            "options": [
                {"text": "Many different crops", "icon": "", "isCorrect": false},
                {"text": "One crop only", "icon": "🌽", "isCorrect": true},
                {"text": "No crops", "icon": "", "isCorrect": false},
                {"text": "Wild plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Monoculture means growing only one type of crop."
        },
        {
            "question": "Intercropping benefits include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Using more chemicals", "icon": "", "isCorrect": false},
                {"text": "Better use of space", "icon": "📊", "isCorrect": true},
                {"text": "More weeds", "icon": "", "isCorrect": false},
                {"text": "Slower growth", "icon": "", "isCorrect": false}
            ],
            "explanation": "Growing crops together maximizes land use and diversity."
        },
        {
            "question": "A cash crop is grown for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Animal feed only", "icon": "", "isCorrect": false},
                {"text": "Selling for money", "icon": "💰", "isCorrect": true},
                {"text": "Decoration", "icon": "", "isCorrect": false},
                {"text": "Burning", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cash crops are sold for income rather than personal use."
        },
        {
            "question": "Food crops are grown for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Export only", "icon": "", "isCorrect": false},
                {"text": "Family consumption", "icon": "🍽️", "isCorrect": true},
                {"text": "Factories", "icon": "", "isCorrect": false},
                {"text": "Burning", "icon": "", "isCorrect": false}
            ],
            "explanation": "Food crops feed the farmer's family first."
        },
        {
            "question": "Fallow land is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Always planted", "icon": "", "isCorrect": false},
                {"text": "Resting without crops", "icon": "😴", "isCorrect": true},
                {"text": "Covered in water", "icon": "", "isCorrect": false},
                {"text": "Full of buildings", "icon": "", "isCorrect": false}
            ],
            "explanation": "Fallow periods let soil recover nutrients naturally."
        },
        {
            "question": "Growing season depends on:",
            "type": "multiple_choice",
            "options": [
                {"text": "Farmer's mood", "icon": "", "isCorrect": false},
                {"text": "Climate and weather", "icon": "🌤️", "isCorrect": true},
                {"text": "Crop color", "icon": "", "isCorrect": false},
                {"text": "Market prices", "icon": "", "isCorrect": false}
            ],
            "explanation": "Temperature and rainfall determine when crops can grow."
        },
        {
            "question": "Succession planting means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Planting once only", "icon": "", "isCorrect": false},
                {"text": "Planting in stages", "icon": "📅", "isCorrect": true},
                {"text": "Never planting", "icon": "", "isCorrect": false},
                {"text": "Planting underwater", "icon": "", "isCorrect": false}
            ],
            "explanation": "Staggered planting ensures continuous harvest."
        },
        {
            "question": "Companion planting uses:",
            "type": "multiple_choice",
            "options": [
                {"text": "Random plant combinations", "icon": "", "isCorrect": false},
                {"text": "Plants that help each other", "icon": "🤝", "isCorrect": true},
                {"text": "Only one plant type", "icon": "", "isCorrect": false},
                {"text": "Artificial plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some plants grown together protect or benefit each other."
        },
        {
            "question": "A farm calendar helps with:",
            "type": "multiple_choice",
            "options": [
                {"text": "Decorating the farm", "icon": "", "isCorrect": false},
                {"text": "Planning activities", "icon": "📆", "isCorrect": true},
                {"text": "Counting animals", "icon": "", "isCorrect": false},
                {"text": "Selling products", "icon": "", "isCorrect": false}
            ],
            "explanation": "A calendar schedules planting, care, and harvest times."
        }
    ],

    // Level 9: Soil Conservation
    "module1_level9": [
        {
            "question": "Soil erosion is caused by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Too many crops", "icon": "", "isCorrect": false},
                {"text": "Wind and water", "icon": "💨", "isCorrect": true},
                {"text": "Darkness", "icon": "", "isCorrect": false},
                {"text": "Cold weather", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wind and water carry away topsoil if unprotected."
        },
        {
            "question": "Contour plowing follows:",
            "type": "multiple_choice",
            "options": [
                {"text": "Straight lines", "icon": "", "isCorrect": false},
                {"text": "Hill curves", "icon": "🏔️", "isCorrect": true},
                {"text": "Rivers", "icon": "", "isCorrect": false},
                {"text": "Roads", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plowing along contours slows water runoff on slopes."
        },
        {
            "question": "Terracing is used on:",
            "type": "multiple_choice",
            "options": [
                {"text": "Flat land", "icon": "", "isCorrect": false},
                {"text": "Hillsides", "icon": "🏔️", "isCorrect": true},
                {"text": "Underwater", "icon": "", "isCorrect": false},
                {"text": "Rooftops", "icon": "", "isCorrect": false}
            ],
            "explanation": "Terraces create flat steps on slopes to hold soil."
        },
        {
            "question": "Trees prevent erosion by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Blocking sun", "icon": "", "isCorrect": false},
                {"text": "Holding soil with roots", "icon": "🌳", "isCorrect": true},
                {"text": "Adding water", "icon": "", "isCorrect": false},
                {"text": "Making shade", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tree roots bind soil particles and prevent washing away."
        },
        {
            "question": "Windbreaks are rows of:",
            "type": "multiple_choice",
            "options": [
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Trees or shrubs", "icon": "🌲", "isCorrect": true},
                {"text": "Fences", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Lines of trees slow wind and protect crops and soil."
        },
        {
            "question": "Overgrazing causes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Better grass", "icon": "", "isCorrect": false},
                {"text": "Bare soil and erosion", "icon": "🐄", "isCorrect": true},
                {"text": "More trees", "icon": "", "isCorrect": false},
                {"text": "Healthier animals", "icon": "", "isCorrect": false}
            ],
            "explanation": "Too many animals destroy grass cover and expose soil."
        },
        {
            "question": "Grass strips help by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Looking pretty", "icon": "", "isCorrect": false},
                {"text": "Slowing water flow", "icon": "🌿", "isCorrect": true},
                {"text": "Attracting pests", "icon": "", "isCorrect": false},
                {"text": "Increasing weeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Grass strips filter runoff and trap sediment."
        },
        {
            "question": "No-till farming protects:",
            "type": "multiple_choice",
            "options": [
                {"text": "Farm buildings", "icon": "", "isCorrect": false},
                {"text": "Soil structure", "icon": "🌱", "isCorrect": true},
                {"text": "Farm animals", "icon": "", "isCorrect": false},
                {"text": "Market prices", "icon": "", "isCorrect": false}
            ],
            "explanation": "Not plowing keeps soil intact and organisms alive."
        },
        {
            "question": "Deforestation leads to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Better farming", "icon": "", "isCorrect": false},
                {"text": "More erosion", "icon": "🌧️", "isCorrect": true},
                {"text": "Stronger soil", "icon": "", "isCorrect": false},
                {"text": "More rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Removing trees exposes soil to rain and wind damage."
        },
        {
            "question": "Healthy soil has:",
            "type": "multiple_choice",
            "options": [
                {"text": "No living things", "icon": "", "isCorrect": false},
                {"text": "Many organisms", "icon": "🪱", "isCorrect": true},
                {"text": "Only rocks", "icon": "", "isCorrect": false},
                {"text": "Lots of plastic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Billions of organisms in healthy soil help plants grow."
        }
    ],

    // Level 10: Advanced Soil Management
    "module1_level10": [
        {
            "question": "Soil testing reveals:",
            "type": "multiple_choice",
            "options": [
                {"text": "Soil age", "icon": "", "isCorrect": false},
                {"text": "Nutrient levels and pH", "icon": "🧪", "isCorrect": true},
                {"text": "Soil color only", "icon": "", "isCorrect": false},
                {"text": "Weather forecast", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tests show what nutrients soil has or needs."
        },
        {
            "question": "Soil amendment means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Removing soil", "icon": "", "isCorrect": false},
                {"text": "Adding materials to improve soil", "icon": "➕", "isCorrect": true},
                {"text": "Painting soil", "icon": "", "isCorrect": false},
                {"text": "Selling soil", "icon": "", "isCorrect": false}
            ],
            "explanation": "Amendments like compost or lime improve soil quality."
        },
        {
            "question": "Lime is added to soil to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Add color", "icon": "", "isCorrect": false},
                {"text": "Reduce acidity", "icon": "⬆️", "isCorrect": true},
                {"text": "Add nitrogen", "icon": "", "isCorrect": false},
                {"text": "Kill plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Lime raises pH in acidic soils for better crop growth."
        },
        {
            "question": "Soil compaction is bad because:",
            "type": "multiple_choice",
            "options": [
                {"text": "Soil gets too soft", "icon": "", "isCorrect": false},
                {"text": "Roots can't penetrate", "icon": "🚫", "isCorrect": true},
                {"text": "Soil becomes too wet", "icon": "", "isCorrect": false},
                {"text": "Weeds grow better", "icon": "", "isCorrect": false}
            ],
            "explanation": "Compacted soil blocks root growth and water movement."
        },
        {
            "question": "Biochar helps soil by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Adding salt", "icon": "", "isCorrect": false},
                {"text": "Holding nutrients and water", "icon": "🔥", "isCorrect": true},
                {"text": "Removing all life", "icon": "", "isCorrect": false},
                {"text": "Making soil white", "icon": "", "isCorrect": false}
            ],
            "explanation": "Charcoal-like biochar stores nutrients and improves structure."
        },
        {
            "question": "Mycorrhizae are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Harmful bacteria", "icon": "", "isCorrect": false},
                {"text": "Beneficial fungi with roots", "icon": "🍄", "isCorrect": true},
                {"text": "Type of fertilizer", "icon": "", "isCorrect": false},
                {"text": "Weed seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "These fungi partner with roots to share nutrients."
        },
        {
            "question": "Soil salinity means too much:",
            "type": "multiple_choice",
            "options": [
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Salt", "icon": "🧂", "isCorrect": true},
                {"text": "Nitrogen", "icon": "", "isCorrect": false},
                {"text": "Organic matter", "icon": "", "isCorrect": false}
            ],
            "explanation": "High salt levels damage plants and reduce yields."
        },
        {
            "question": "Vermiculture uses:",
            "type": "multiple_choice",
            "options": [
                {"text": "Chemicals", "icon": "", "isCorrect": false},
                {"text": "Worms to make compost", "icon": "🪱", "isCorrect": true},
                {"text": "Fire", "icon": "", "isCorrect": false},
                {"text": "Machines", "icon": "", "isCorrect": false}
            ],
            "explanation": "Worms break down organic matter into rich fertilizer."
        },
        {
            "question": "Soil structure refers to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Soil color", "icon": "", "isCorrect": false},
                {"text": "How particles are arranged", "icon": "🔬", "isCorrect": true},
                {"text": "Soil temperature", "icon": "", "isCorrect": false},
                {"text": "Soil smell", "icon": "", "isCorrect": false}
            ],
            "explanation": "Structure affects water flow, aeration, and root growth."
        },
        {
            "question": "Sustainable soil management means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Using only chemicals", "icon": "", "isCorrect": false},
                {"text": "Keeping soil healthy for future", "icon": "♻️", "isCorrect": true},
                {"text": "Maximizing short-term yields", "icon": "", "isCorrect": false},
                {"text": "Never farming", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sustainable practices maintain soil health long-term."
        }
    ]
};

// Make available globally
window.MODULE1_QUESTIONS = MODULE1_QUESTIONS;
