// Module 2: Plant Protection - 100 questions (10 levels x 10 questions)
const MODULE2_QUESTIONS = {
    // Level 1: Pest Basics
    "module2_level1": [
        {
            "question": "What is a pest?",
            "type": "multiple_choice",
            "options": [
                {"text": "Organism that damages crops", "icon": "🐛", "isCorrect": true},
                {"text": "Helpful insect", "icon": "", "isCorrect": false},
                {"text": "Type of fertilizer", "icon": "", "isCorrect": false},
                {"text": "Farm tool", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pests are organisms that harm crops and reduce yields."
        },
        {
            "question": "What is a disease in plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Sickness caused by germs", "icon": "🦠", "isCorrect": true},
                {"text": "Lack of water", "icon": "", "isCorrect": false},
                {"text": "Too much sun", "icon": "", "isCorrect": false},
                {"text": "Old age", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plant diseases are caused by fungi, bacteria, or viruses."
        },
        {
            "question": "What is a pesticide?",
            "type": "multiple_choice",
            "options": [
                {"text": "Chemical to kill pests", "icon": "🧪", "isCorrect": true},
                {"text": "Plant food", "icon": "", "isCorrect": false},
                {"text": "Type of seed", "icon": "", "isCorrect": false},
                {"text": "Animal feed", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pesticides control or kill harmful organisms on crops."
        },
        {
            "question": "Insecticide kills:",
            "type": "multiple_choice",
            "options": [
                {"text": "Insects", "icon": "🐛", "isCorrect": true},
                {"text": "Weeds", "icon": "", "isCorrect": false},
                {"text": "Fungi", "icon": "", "isCorrect": false},
                {"text": "Rats", "icon": "", "isCorrect": false}
            ],
            "explanation": "Insecticides are chemicals that kill insect pests."
        },
        {
            "question": "Fungicide is used against:",
            "type": "multiple_choice",
            "options": [
                {"text": "Fungal diseases", "icon": "🍄", "isCorrect": true},
                {"text": "Insects", "icon": "", "isCorrect": false},
                {"text": "Weeds", "icon": "", "isCorrect": false},
                {"text": "Birds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Fungicides treat and prevent fungal infections in plants."
        },
        {
            "question": "Signs of pest damage include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Holes in leaves", "icon": "🕳️", "isCorrect": true},
                {"text": "Green healthy leaves", "icon": "", "isCorrect": false},
                {"text": "More flowers", "icon": "", "isCorrect": false},
                {"text": "Faster growth", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pests often chew holes or cause visible damage to plants."
        },
        {
            "question": "When should you check crops for pests?",
            "type": "multiple_choice",
            "options": [
                {"text": "Regularly throughout season", "icon": "👀", "isCorrect": true},
                {"text": "Only at harvest", "icon": "", "isCorrect": false},
                {"text": "Never", "icon": "", "isCorrect": false},
                {"text": "Only when planting", "icon": "", "isCorrect": false}
            ],
            "explanation": "Regular scouting helps catch pest problems early."
        },
        {
            "question": "Beneficial insects are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Insects that help farmers", "icon": "🐝", "isCorrect": true},
                {"text": "All flying insects", "icon": "", "isCorrect": false},
                {"text": "Insects that eat crops", "icon": "", "isCorrect": false},
                {"text": "Only bees", "icon": "", "isCorrect": false}
            ],
            "explanation": "Beneficial insects pollinate crops or eat pest insects."
        },
        {
            "question": "Ladybugs help farmers by eating:",
            "type": "multiple_choice",
            "options": [
                {"text": "Aphids", "icon": "🐞", "isCorrect": true},
                {"text": "Leaves", "icon": "", "isCorrect": false},
                {"text": "Seeds", "icon": "", "isCorrect": false},
                {"text": "Roots", "icon": "", "isCorrect": false}
            ],
            "explanation": "Ladybugs are natural predators of aphids and other pests."
        },
        {
            "question": "What causes plant wilting?",
            "type": "multiple_choice",
            "options": [
                {"text": "Pests, disease, or drought", "icon": "🥀", "isCorrect": true},
                {"text": "Too much water only", "icon": "", "isCorrect": false},
                {"text": "Perfect health", "icon": "", "isCorrect": false},
                {"text": "Fertilizer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wilting can be caused by many factors including pest damage."
        }
    ],

    // Level 2: Common Pests
    "module2_level2": [
        {
            "question": "Aphids damage plants by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sucking plant sap", "icon": "🐛", "isCorrect": true},
                {"text": "Eating roots", "icon": "", "isCorrect": false},
                {"text": "Cutting stems", "icon": "", "isCorrect": false},
                {"text": "Blocking sunlight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Aphids pierce leaves and stems to drink plant juices."
        },
        {
            "question": "Caterpillars are larvae of:",
            "type": "multiple_choice",
            "options": [
                {"text": "Butterflies and moths", "icon": "🦋", "isCorrect": true},
                {"text": "Beetles", "icon": "", "isCorrect": false},
                {"text": "Flies", "icon": "", "isCorrect": false},
                {"text": "Bees", "icon": "", "isCorrect": false}
            ],
            "explanation": "Caterpillars become butterflies or moths when adult."
        },
        {
            "question": "Stem borers attack:",
            "type": "multiple_choice",
            "options": [
                {"text": "Inside stems of plants", "icon": "🌿", "isCorrect": true},
                {"text": "Only leaves", "icon": "", "isCorrect": false},
                {"text": "Only roots", "icon": "", "isCorrect": false},
                {"text": "Only flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Stem borers tunnel inside stems and weaken plants."
        },
        {
            "question": "Grasshoppers cause damage by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Chewing leaves", "icon": "🦗", "isCorrect": true},
                {"text": "Sucking sap", "icon": "", "isCorrect": false},
                {"text": "Spreading disease", "icon": "", "isCorrect": false},
                {"text": "Eating roots only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Grasshoppers and locusts can eat entire crops quickly."
        },
        {
            "question": "Weevils are a type of:",
            "type": "multiple_choice",
            "options": [
                {"text": "Beetle", "icon": "🪲", "isCorrect": true},
                {"text": "Fly", "icon": "", "isCorrect": false},
                {"text": "Moth", "icon": "", "isCorrect": false},
                {"text": "Worm", "icon": "", "isCorrect": false}
            ],
            "explanation": "Weevils are beetles that often damage stored grains."
        },
        {
            "question": "Whiteflies look like:",
            "type": "multiple_choice",
            "options": [
                {"text": "Tiny white flying insects", "icon": "🪰", "isCorrect": true},
                {"text": "Large black beetles", "icon": "", "isCorrect": false},
                {"text": "Green caterpillars", "icon": "", "isCorrect": false},
                {"text": "Red spiders", "icon": "", "isCorrect": false}
            ],
            "explanation": "Whiteflies are small and cluster under leaves."
        },
        {
            "question": "Termites mostly damage:",
            "type": "multiple_choice",
            "options": [
                {"text": "Woody plants and structures", "icon": "🪵", "isCorrect": true},
                {"text": "Only leaves", "icon": "", "isCorrect": false},
                {"text": "Only flowers", "icon": "", "isCorrect": false},
                {"text": "Only seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Termites eat wood and can damage tree crops and buildings."
        },
        {
            "question": "Nematodes are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Tiny worms in soil", "icon": "🪱", "isCorrect": true},
                {"text": "Flying insects", "icon": "", "isCorrect": false},
                {"text": "Types of fungi", "icon": "", "isCorrect": false},
                {"text": "Bacteria", "icon": "", "isCorrect": false}
            ],
            "explanation": "Nematodes attack plant roots and cause stunting."
        },
        {
            "question": "Mites are related to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Spiders", "icon": "🕷️", "isCorrect": true},
                {"text": "Insects", "icon": "", "isCorrect": false},
                {"text": "Worms", "icon": "", "isCorrect": false},
                {"text": "Snails", "icon": "", "isCorrect": false}
            ],
            "explanation": "Mites have 8 legs like spiders, not 6 like insects."
        },
        {
            "question": "Slugs and snails prefer:",
            "type": "multiple_choice",
            "options": [
                {"text": "Moist, shady conditions", "icon": "🐌", "isCorrect": true},
                {"text": "Hot, dry weather", "icon": "", "isCorrect": false},
                {"text": "Bright sunlight", "icon": "", "isCorrect": false},
                {"text": "Frozen soil", "icon": "", "isCorrect": false}
            ],
            "explanation": "Slugs and snails come out in wet conditions and at night."
        }
    ],

    // Level 3: Plant Diseases
    "module2_level3": [
        {
            "question": "Fungal diseases spread by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Spores in air and water", "icon": "🍄", "isCorrect": true},
                {"text": "Only touch", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false},
                {"text": "Sound waves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Fungi produce tiny spores that travel by wind and rain."
        },
        {
            "question": "Powdery mildew looks like:",
            "type": "multiple_choice",
            "options": [
                {"text": "White powder on leaves", "icon": "⚪", "isCorrect": true},
                {"text": "Black spots", "icon": "", "isCorrect": false},
                {"text": "Yellow stripes", "icon": "", "isCorrect": false},
                {"text": "Holes in leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Powdery mildew appears as white dusty coating on leaves."
        },
        {
            "question": "Rust disease shows as:",
            "type": "multiple_choice",
            "options": [
                {"text": "Orange-brown spots", "icon": "🟠", "isCorrect": true},
                {"text": "Blue patches", "icon": "", "isCorrect": false},
                {"text": "Green lumps", "icon": "", "isCorrect": false},
                {"text": "White rings", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rust produces orange or brown pustules on leaves."
        },
        {
            "question": "Bacterial wilt causes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sudden plant collapse", "icon": "🥀", "isCorrect": true},
                {"text": "Only leaf spots", "icon": "", "isCorrect": false},
                {"text": "Taller growth", "icon": "", "isCorrect": false},
                {"text": "More flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bacteria block water flow causing plants to wilt and die."
        },
        {
            "question": "Viruses in plants are spread by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Insects and contaminated tools", "icon": "🦟", "isCorrect": true},
                {"text": "Wind only", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false},
                {"text": "Cold weather", "icon": "", "isCorrect": false}
            ],
            "explanation": "Many viruses are carried by aphids and spread by dirty tools."
        },
        {
            "question": "Mosaic virus symptoms include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Yellow-green mottled leaves", "icon": "🟡", "isCorrect": true},
                {"text": "Only brown leaves", "icon": "", "isCorrect": false},
                {"text": "Only wilting", "icon": "", "isCorrect": false},
                {"text": "Holes in leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Mosaic viruses cause patchy light and dark patterns on leaves."
        },
        {
            "question": "Root rot is caused by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Fungi in wet soil", "icon": "🦠", "isCorrect": true},
                {"text": "Too much sun", "icon": "", "isCorrect": false},
                {"text": "Dry conditions", "icon": "", "isCorrect": false},
                {"text": "Wind damage", "icon": "", "isCorrect": false}
            ],
            "explanation": "Root rot fungi thrive in waterlogged, poorly drained soil."
        },
        {
            "question": "Blight disease causes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Rapid browning and death", "icon": "💀", "isCorrect": true},
                {"text": "Slow growth only", "icon": "", "isCorrect": false},
                {"text": "More fruit", "icon": "", "isCorrect": false},
                {"text": "Greener leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Blight spreads quickly and can destroy entire crops."
        },
        {
            "question": "Damping off affects:",
            "type": "multiple_choice",
            "options": [
                {"text": "Young seedlings", "icon": "🌱", "isCorrect": true},
                {"text": "Only mature plants", "icon": "", "isCorrect": false},
                {"text": "Only roots", "icon": "", "isCorrect": false},
                {"text": "Only flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Damping off kills seedlings at soil level before they establish."
        },
        {
            "question": "Leaf spot diseases show:",
            "type": "multiple_choice",
            "options": [
                {"text": "Circular spots on leaves", "icon": "⭕", "isCorrect": true},
                {"text": "White powder", "icon": "", "isCorrect": false},
                {"text": "Curled leaves only", "icon": "", "isCorrect": false},
                {"text": "No visible signs", "icon": "", "isCorrect": false}
            ],
            "explanation": "Various fungi and bacteria cause distinct spots on leaves."
        }
    ],

    // Level 4: Pest Control Methods
    "module2_level4": [
        {
            "question": "Integrated Pest Management (IPM) uses:",
            "type": "multiple_choice",
            "options": [
                {"text": "Multiple control methods", "icon": "🔄", "isCorrect": true},
                {"text": "Only chemicals", "icon": "", "isCorrect": false},
                {"text": "Only traps", "icon": "", "isCorrect": false},
                {"text": "No action at all", "icon": "", "isCorrect": false}
            ],
            "explanation": "IPM combines cultural, biological, and chemical controls."
        },
        {
            "question": "Biological control uses:",
            "type": "multiple_choice",
            "options": [
                {"text": "Natural enemies of pests", "icon": "🐞", "isCorrect": true},
                {"text": "Strong chemicals", "icon": "", "isCorrect": false},
                {"text": "Fire", "icon": "", "isCorrect": false},
                {"text": "Flooding", "icon": "", "isCorrect": false}
            ],
            "explanation": "Predators, parasites, and pathogens can control pests naturally."
        },
        {
            "question": "Cultural control includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Crop rotation and sanitation", "icon": "🔄", "isCorrect": true},
                {"text": "Only spraying", "icon": "", "isCorrect": false},
                {"text": "Only trapping", "icon": "", "isCorrect": false},
                {"text": "Dancing in fields", "icon": "", "isCorrect": false}
            ],
            "explanation": "Good farming practices help prevent pest buildup."
        },
        {
            "question": "Physical control includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Hand-picking and traps", "icon": "✋", "isCorrect": true},
                {"text": "Only chemicals", "icon": "", "isCorrect": false},
                {"text": "Only fire", "icon": "", "isCorrect": false},
                {"text": "Prayer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Physical methods remove or exclude pests mechanically."
        },
        {
            "question": "Trap crops are used to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Attract pests away from main crop", "icon": "🪤", "isCorrect": true},
                {"text": "Catch fish", "icon": "", "isCorrect": false},
                {"text": "Provide shade", "icon": "", "isCorrect": false},
                {"text": "Feed animals", "icon": "", "isCorrect": false}
            ],
            "explanation": "Trap crops lure pests away from valuable crops."
        },
        {
            "question": "Pheromone traps attract pests using:",
            "type": "multiple_choice",
            "options": [
                {"text": "Scent signals", "icon": "👃", "isCorrect": true},
                {"text": "Bright colors", "icon": "", "isCorrect": false},
                {"text": "Food bait", "icon": "", "isCorrect": false},
                {"text": "Sound", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pheromones are chemical signals insects use to find mates."
        },
        {
            "question": "Resistant varieties are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Plants bred to fight pests", "icon": "💪", "isCorrect": true},
                {"text": "Plants that never grow", "icon": "", "isCorrect": false},
                {"text": "Weeds", "icon": "", "isCorrect": false},
                {"text": "Imported plants only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some crop varieties are naturally resistant to certain pests."
        },
        {
            "question": "Quarantine prevents:",
            "type": "multiple_choice",
            "options": [
                {"text": "Spread of pests to new areas", "icon": "🚫", "isCorrect": true},
                {"text": "Plant growth", "icon": "", "isCorrect": false},
                {"text": "Rain", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Quarantine stops pests from moving to pest-free regions."
        },
        {
            "question": "Crop rotation breaks:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pest life cycles", "icon": "🔄", "isCorrect": true},
                {"text": "Farmer's back", "icon": "", "isCorrect": false},
                {"text": "Seeds", "icon": "", "isCorrect": false},
                {"text": "Tools", "icon": "", "isCorrect": false}
            ],
            "explanation": "Changing crops disrupts pests that need specific hosts."
        },
        {
            "question": "Early planting can help avoid:",
            "type": "multiple_choice",
            "options": [
                {"text": "Peak pest seasons", "icon": "📅", "isCorrect": true},
                {"text": "Good harvests", "icon": "", "isCorrect": false},
                {"text": "Healthy plants", "icon": "", "isCorrect": false},
                {"text": "Rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Timing planting can help crops escape major pest attacks."
        }
    ],

    // Level 5: Safe Chemical Use
    "module2_level5": [
        {
            "question": "Always read pesticide:",
            "type": "multiple_choice",
            "options": [
                {"text": "Label instructions", "icon": "📋", "isCorrect": true},
                {"text": "Nothing", "icon": "", "isCorrect": false},
                {"text": "Only the price", "icon": "", "isCorrect": false},
                {"text": "Only the color", "icon": "", "isCorrect": false}
            ],
            "explanation": "Labels contain critical safety and application information."
        },
        {
            "question": "When spraying pesticides, wear:",
            "type": "multiple_choice",
            "options": [
                {"text": "Protective clothing", "icon": "🥽", "isCorrect": true},
                {"text": "Nothing special", "icon": "", "isCorrect": false},
                {"text": "Only sandals", "icon": "", "isCorrect": false},
                {"text": "Party clothes", "icon": "", "isCorrect": false}
            ],
            "explanation": "Gloves, mask, and coveralls protect from chemical exposure."
        },
        {
            "question": "After handling pesticides:",
            "type": "multiple_choice",
            "options": [
                {"text": "Wash hands thoroughly", "icon": "🧼", "isCorrect": true},
                {"text": "Eat immediately", "icon": "", "isCorrect": false},
                {"text": "Touch your face", "icon": "", "isCorrect": false},
                {"text": "Do nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Washing removes chemical residues and prevents poisoning."
        },
        {
            "question": "Store pesticides:",
            "type": "multiple_choice",
            "options": [
                {"text": "Away from food and children", "icon": "🔒", "isCorrect": true},
                {"text": "In the kitchen", "icon": "", "isCorrect": false},
                {"text": "Near food", "icon": "", "isCorrect": false},
                {"text": "In open containers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Safe storage prevents accidental poisoning and contamination."
        },
        {
            "question": "Empty pesticide containers should be:",
            "type": "multiple_choice",
            "options": [
                {"text": "Properly disposed of", "icon": "🗑️", "isCorrect": true},
                {"text": "Used for water", "icon": "", "isCorrect": false},
                {"text": "Used for food", "icon": "", "isCorrect": false},
                {"text": "Given to children", "icon": "", "isCorrect": false}
            ],
            "explanation": "Containers may have residues and should never be reused."
        },
        {
            "question": "Spray pesticides when there is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Little or no wind", "icon": "🌬️", "isCorrect": true},
                {"text": "Strong wind", "icon": "", "isCorrect": false},
                {"text": "Heavy rain", "icon": "", "isCorrect": false},
                {"text": "A storm", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wind causes spray drift to non-target areas."
        },
        {
            "question": "Pre-harvest interval is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Wait time before harvest", "icon": "⏰", "isCorrect": true},
                {"text": "Planting time", "icon": "", "isCorrect": false},
                {"text": "Selling time", "icon": "", "isCorrect": false},
                {"text": "Storage time", "icon": "", "isCorrect": false}
            ],
            "explanation": "This waiting period ensures chemicals break down before eating."
        },
        {
            "question": "Pesticide poisoning symptoms include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Dizziness and nausea", "icon": "🤢", "isCorrect": true},
                {"text": "Feeling great", "icon": "", "isCorrect": false},
                {"text": "More energy", "icon": "", "isCorrect": false},
                {"text": "Better vision", "icon": "", "isCorrect": false}
            ],
            "explanation": "Seek medical help if you feel sick after using pesticides."
        },
        {
            "question": "Mix pesticides with:",
            "type": "multiple_choice",
            "options": [
                {"text": "Clean water only", "icon": "💧", "isCorrect": true},
                {"text": "Food", "icon": "", "isCorrect": false},
                {"text": "Drinks", "icon": "", "isCorrect": false},
                {"text": "Oil always", "icon": "", "isCorrect": false}
            ],
            "explanation": "Follow label directions for proper mixing."
        },
        {
            "question": "Using more pesticide than needed:",
            "type": "multiple_choice",
            "options": [
                {"text": "Wastes money and harms environment", "icon": "💸", "isCorrect": true},
                {"text": "Is always better", "icon": "", "isCorrect": false},
                {"text": "Helps plants grow", "icon": "", "isCorrect": false},
                {"text": "Saves time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Follow recommended rates for safety and effectiveness."
        }
    ],

    // Level 6: Natural Pest Control
    "module2_level6": [
        {
            "question": "Neem oil comes from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Neem tree", "icon": "🌳", "isCorrect": true},
                {"text": "Corn", "icon": "", "isCorrect": false},
                {"text": "Grass", "icon": "", "isCorrect": false},
                {"text": "Rocks", "icon": "", "isCorrect": false}
            ],
            "explanation": "Neem is a tree whose products repel and kill many pests."
        },
        {
            "question": "Garlic spray repels:",
            "type": "multiple_choice",
            "options": [
                {"text": "Many insect pests", "icon": "🧄", "isCorrect": true},
                {"text": "Only vampires", "icon": "", "isCorrect": false},
                {"text": "Only birds", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Garlic's strong smell deters many soft-bodied insects."
        },
        {
            "question": "Chili pepper spray works by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Irritating pests", "icon": "🌶️", "isCorrect": true},
                {"text": "Feeding pests", "icon": "", "isCorrect": false},
                {"text": "Attracting pests", "icon": "", "isCorrect": false},
                {"text": "Cooling plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Hot peppers contain capsaicin which repels many insects."
        },
        {
            "question": "Ash can be used to control:",
            "type": "multiple_choice",
            "options": [
                {"text": "Slugs and snails", "icon": "🐌", "isCorrect": true},
                {"text": "Large animals", "icon": "", "isCorrect": false},
                {"text": "Birds only", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wood ash creates a barrier that slugs avoid crossing."
        },
        {
            "question": "Companion planting with marigolds:",
            "type": "multiple_choice",
            "options": [
                {"text": "Repels some pests", "icon": "🌼", "isCorrect": true},
                {"text": "Attracts all pests", "icon": "", "isCorrect": false},
                {"text": "Kills all plants", "icon": "", "isCorrect": false},
                {"text": "Does nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Marigolds release chemicals that repel nematodes and aphids."
        },
        {
            "question": "Soap spray kills pests by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Suffocating them", "icon": "🧴", "isCorrect": true},
                {"text": "Feeding them", "icon": "", "isCorrect": false},
                {"text": "Making them grow", "icon": "", "isCorrect": false},
                {"text": "Cleaning them", "icon": "", "isCorrect": false}
            ],
            "explanation": "Soap disrupts the breathing of soft-bodied insects."
        },
        {
            "question": "Tobacco dust controls:",
            "type": "multiple_choice",
            "options": [
                {"text": "Some sucking insects", "icon": "🍃", "isCorrect": true},
                {"text": "Only weeds", "icon": "", "isCorrect": false},
                {"text": "Only diseases", "icon": "", "isCorrect": false},
                {"text": "Large animals", "icon": "", "isCorrect": false}
            ],
            "explanation": "Nicotine in tobacco is toxic to many insect pests."
        },
        {
            "question": "Diatomaceous earth kills by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cutting insect bodies", "icon": "🪨", "isCorrect": true},
                {"text": "Poisoning", "icon": "", "isCorrect": false},
                {"text": "Freezing", "icon": "", "isCorrect": false},
                {"text": "Drowning", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sharp particles damage insect exoskeletons causing dehydration."
        },
        {
            "question": "Bacillus thuringiensis (Bt) is a:",
            "type": "multiple_choice",
            "options": [
                {"text": "Bacteria that kills caterpillars", "icon": "🦠", "isCorrect": true},
                {"text": "Chemical fertilizer", "icon": "", "isCorrect": false},
                {"text": "Type of weed", "icon": "", "isCorrect": false},
                {"text": "Vitamin", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bt is a natural pesticide safe for humans but deadly to caterpillars."
        },
        {
            "question": "Benefits of natural pesticides include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Less harm to environment", "icon": "🌍", "isCorrect": true},
                {"text": "They never work", "icon": "", "isCorrect": false},
                {"text": "They cost more always", "icon": "", "isCorrect": false},
                {"text": "They kill everything", "icon": "", "isCorrect": false}
            ],
            "explanation": "Natural methods are often safer for people and the environment."
        }
    ],

    // Level 7: Storage Pests
    "module2_level7": [
        {
            "question": "Storage pests attack:",
            "type": "multiple_choice",
            "options": [
                {"text": "Harvested and stored crops", "icon": "🏠", "isCorrect": true},
                {"text": "Only growing plants", "icon": "", "isCorrect": false},
                {"text": "Only seeds in field", "icon": "", "isCorrect": false},
                {"text": "Only wet crops", "icon": "", "isCorrect": false}
            ],
            "explanation": "Storage pests damage crops after harvest in stores and homes."
        },
        {
            "question": "Grain weevils damage:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cereals and grains", "icon": "🌾", "isCorrect": true},
                {"text": "Only vegetables", "icon": "", "isCorrect": false},
                {"text": "Only fruits", "icon": "", "isCorrect": false},
                {"text": "Only meat", "icon": "", "isCorrect": false}
            ],
            "explanation": "Weevils bore into and eat stored grains like maize and rice."
        },
        {
            "question": "Rodents in storage cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Eating and contamination", "icon": "🐀", "isCorrect": true},
                {"text": "Better preservation", "icon": "", "isCorrect": false},
                {"text": "Cleaner stores", "icon": "", "isCorrect": false},
                {"text": "No problems", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rats and mice eat food and leave droppings that spread disease."
        },
        {
            "question": "Proper drying before storage:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevents mold and pests", "icon": "☀️", "isCorrect": true},
                {"text": "Attracts more pests", "icon": "", "isCorrect": false},
                {"text": "Is not important", "icon": "", "isCorrect": false},
                {"text": "Spoils food faster", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dry grains are less attractive to pests and fungi."
        },
        {
            "question": "Hermetic storage means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Airtight containers", "icon": "🫙", "isCorrect": true},
                {"text": "Open air storage", "icon": "", "isCorrect": false},
                {"text": "Storage in water", "icon": "", "isCorrect": false},
                {"text": "Underground burial", "icon": "", "isCorrect": false}
            ],
            "explanation": "Airtight containers suffocate pests without chemicals."
        },
        {
            "question": "Signs of storage pest damage include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Holes and powder in grain", "icon": "🕳️", "isCorrect": true},
                {"text": "Heavier grain", "icon": "", "isCorrect": false},
                {"text": "Better quality", "icon": "", "isCorrect": false},
                {"text": "Shinier seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pest damage shows as holes, dust, and weight loss."
        },
        {
            "question": "Clean the store before use to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Remove old pests", "icon": "🧹", "isCorrect": true},
                {"text": "Make it dirty", "icon": "", "isCorrect": false},
                {"text": "Attract pests", "icon": "", "isCorrect": false},
                {"text": "Waste time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Old pest eggs and debris can infest new grain."
        },
        {
            "question": "PICS bags work by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cutting off oxygen", "icon": "🛍️", "isCorrect": true},
                {"text": "Adding chemicals", "icon": "", "isCorrect": false},
                {"text": "Keeping grain wet", "icon": "", "isCorrect": false},
                {"text": "Opening to air", "icon": "", "isCorrect": false}
            ],
            "explanation": "Purdue Improved Crop Storage bags are triple-layer airtight bags."
        },
        {
            "question": "Regular inspection of stored grain:",
            "type": "multiple_choice",
            "options": [
                {"text": "Catches problems early", "icon": "👀", "isCorrect": true},
                {"text": "Is waste of time", "icon": "", "isCorrect": false},
                {"text": "Damages grain", "icon": "", "isCorrect": false},
                {"text": "Attracts pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Check stored crops regularly to catch infestations early."
        },
        {
            "question": "Mixing grain with ash helps by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Filling spaces and deterring pests", "icon": "⚫", "isCorrect": true},
                {"text": "Feeding pests", "icon": "", "isCorrect": false},
                {"text": "Adding moisture", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Ash absorbs moisture and makes movement difficult for pests."
        }
    ],

    // Level 8: Disease Prevention
    "module2_level8": [
        {
            "question": "Use disease-free seeds to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent introducing disease", "icon": "🌱", "isCorrect": true},
                {"text": "Save money only", "icon": "", "isCorrect": false},
                {"text": "Grow faster", "icon": "", "isCorrect": false},
                {"text": "Get more pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Certified seeds are tested to be free of disease organisms."
        },
        {
            "question": "Good air circulation helps prevent:",
            "type": "multiple_choice",
            "options": [
                {"text": "Fungal diseases", "icon": "💨", "isCorrect": true},
                {"text": "All insects", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false},
                {"text": "Rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Air flow keeps plants dry and reduces fungal infections."
        },
        {
            "question": "Remove and destroy infected plants to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Stop disease spread", "icon": "🔥", "isCorrect": true},
                {"text": "Get more disease", "icon": "", "isCorrect": false},
                {"text": "Save them", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Diseased plants are sources of infection for healthy ones."
        },
        {
            "question": "Avoid overhead watering to prevent:",
            "type": "multiple_choice",
            "options": [
                {"text": "Leaf diseases", "icon": "💧", "isCorrect": true},
                {"text": "Root growth", "icon": "", "isCorrect": false},
                {"text": "Good health", "icon": "", "isCorrect": false},
                {"text": "Fruit formation", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wet leaves encourage fungal and bacterial infections."
        },
        {
            "question": "Tool sanitation means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cleaning tools between plants", "icon": "🔧", "isCorrect": true},
                {"text": "Leaving tools dirty", "icon": "", "isCorrect": false},
                {"text": "Throwing tools away", "icon": "", "isCorrect": false},
                {"text": "Buying new tools daily", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clean tools prevent spreading disease from plant to plant."
        },
        {
            "question": "Proper plant spacing prevents disease by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Improving air flow", "icon": "📏", "isCorrect": true},
                {"text": "Blocking sunlight", "icon": "", "isCorrect": false},
                {"text": "Wasting space", "icon": "", "isCorrect": false},
                {"text": "Crowding plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Space allows air movement and reduces disease spread."
        },
        {
            "question": "Grafting can help plants resist:",
            "type": "multiple_choice",
            "options": [
                {"text": "Soil-borne diseases", "icon": "🌱", "isCorrect": true},
                {"text": "All pests", "icon": "", "isCorrect": false},
                {"text": "Sunlight", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Resistant rootstocks protect susceptible varieties from soil diseases."
        },
        {
            "question": "Balanced nutrition helps plants:",
            "type": "multiple_choice",
            "options": [
                {"text": "Fight off diseases better", "icon": "💪", "isCorrect": true},
                {"text": "Get more diseases", "icon": "", "isCorrect": false},
                {"text": "Grow weaker", "icon": "", "isCorrect": false},
                {"text": "Attract pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Well-nourished plants have stronger immune responses."
        },
        {
            "question": "Raised beds help prevent:",
            "type": "multiple_choice",
            "options": [
                {"text": "Root diseases from wet soil", "icon": "📦", "isCorrect": true},
                {"text": "All insects", "icon": "", "isCorrect": false},
                {"text": "Sunlight damage", "icon": "", "isCorrect": false},
                {"text": "Harvesting", "icon": "", "isCorrect": false}
            ],
            "explanation": "Raised beds improve drainage and reduce root rot risk."
        },
        {
            "question": "Solarization uses sun to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Kill soil pathogens with heat", "icon": "☀️", "isCorrect": true},
                {"text": "Cool the soil", "icon": "", "isCorrect": false},
                {"text": "Add water", "icon": "", "isCorrect": false},
                {"text": "Grow weeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Covering soil with plastic traps heat to kill disease organisms."
        }
    ],

    // Level 9: Pest Resistance
    "module2_level9": [
        {
            "question": "Pesticide resistance happens when:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pests survive and reproduce", "icon": "🦠", "isCorrect": true},
                {"text": "Pests all die", "icon": "", "isCorrect": false},
                {"text": "Plants get stronger", "icon": "", "isCorrect": false},
                {"text": "Pesticides work better", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some pests survive pesticides and pass resistance to offspring."
        },
        {
            "question": "To slow resistance development:",
            "type": "multiple_choice",
            "options": [
                {"text": "Rotate different pesticides", "icon": "🔄", "isCorrect": true},
                {"text": "Use same pesticide always", "icon": "", "isCorrect": false},
                {"text": "Use more of same", "icon": "", "isCorrect": false},
                {"text": "Spray every day", "icon": "", "isCorrect": false}
            ],
            "explanation": "Different pesticides prevent one resistance type from dominating."
        },
        {
            "question": "Mode of action means:",
            "type": "multiple_choice",
            "options": [
                {"text": "How pesticide kills pests", "icon": "🎯", "isCorrect": true},
                {"text": "Pesticide color", "icon": "", "isCorrect": false},
                {"text": "Pesticide smell", "icon": "", "isCorrect": false},
                {"text": "Pesticide price", "icon": "", "isCorrect": false}
            ],
            "explanation": "Different pesticides work in different ways to kill pests."
        },
        {
            "question": "Using pesticides only when needed:",
            "type": "multiple_choice",
            "options": [
                {"text": "Slows resistance", "icon": "⏱️", "isCorrect": true},
                {"text": "Speeds resistance", "icon": "", "isCorrect": false},
                {"text": "Has no effect", "icon": "", "isCorrect": false},
                {"text": "Wastes time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Less pesticide use means less selection pressure for resistance."
        },
        {
            "question": "Refuge areas are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Untreated areas for susceptible pests", "icon": "🏕️", "isCorrect": true},
                {"text": "Storage buildings", "icon": "", "isCorrect": false},
                {"text": "Market places", "icon": "", "isCorrect": false},
                {"text": "Houses", "icon": "", "isCorrect": false}
            ],
            "explanation": "Refuges maintain susceptible pest populations to breed with resistant ones."
        },
        {
            "question": "Signs of pesticide resistance include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pesticide stops working", "icon": "❌", "isCorrect": true},
                {"text": "Pests all die quickly", "icon": "", "isCorrect": false},
                {"text": "Better crop yields", "icon": "", "isCorrect": false},
                {"text": "Cheaper pesticides", "icon": "", "isCorrect": false}
            ],
            "explanation": "When the usual dose no longer controls pests, resistance may exist."
        },
        {
            "question": "Cross-resistance means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Resistance to related pesticides", "icon": "🔗", "isCorrect": true},
                {"text": "Resistance to water", "icon": "", "isCorrect": false},
                {"text": "Resistance to sun", "icon": "", "isCorrect": false},
                {"text": "No resistance", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pests resistant to one pesticide may resist similar ones."
        },
        {
            "question": "Economic threshold is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pest level worth treating", "icon": "📊", "isCorrect": true},
                {"text": "Price of crops", "icon": "", "isCorrect": false},
                {"text": "Cost of seeds", "icon": "", "isCorrect": false},
                {"text": "Farmer's salary", "icon": "", "isCorrect": false}
            ],
            "explanation": "Only spray when pest damage would cost more than treatment."
        },
        {
            "question": "Alternating pesticide groups helps by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Preventing resistance buildup", "icon": "🔄", "isCorrect": true},
                {"text": "Killing all pests forever", "icon": "", "isCorrect": false},
                {"text": "Making pests stronger", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Different chemical groups attack pests differently."
        },
        {
            "question": "Tank mixing different pesticides:",
            "type": "multiple_choice",
            "options": [
                {"text": "May help or cause problems", "icon": "⚠️", "isCorrect": true},
                {"text": "Is always good", "icon": "", "isCorrect": false},
                {"text": "Is always bad", "icon": "", "isCorrect": false},
                {"text": "Has no effect", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some combinations work well, others may be dangerous or ineffective."
        }
    ],

    // Level 10: Advanced Protection
    "module2_level10": [
        {
            "question": "Scout fields to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Monitor pest populations", "icon": "🔍", "isCorrect": true},
                {"text": "Find lost items", "icon": "", "isCorrect": false},
                {"text": "Count weeds only", "icon": "", "isCorrect": false},
                {"text": "Measure rainfall", "icon": "", "isCorrect": false}
            ],
            "explanation": "Regular scouting helps make informed pest control decisions."
        },
        {
            "question": "Action threshold is when:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pest control is needed", "icon": "🚨", "isCorrect": true},
                {"text": "Harvest begins", "icon": "", "isCorrect": false},
                {"text": "Planting starts", "icon": "", "isCorrect": false},
                {"text": "Rain falls", "icon": "", "isCorrect": false}
            ],
            "explanation": "The point when pest numbers require management action."
        },
        {
            "question": "Record keeping helps farmers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Learn from past pest problems", "icon": "📝", "isCorrect": true},
                {"text": "Forget everything", "icon": "", "isCorrect": false},
                {"text": "Waste time", "icon": "", "isCorrect": false},
                {"text": "Confuse themselves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Good records show what worked and what didn't over seasons."
        },
        {
            "question": "Climate affects pests because:",
            "type": "multiple_choice",
            "options": [
                {"text": "Temperature affects pest life cycles", "icon": "🌡️", "isCorrect": true},
                {"text": "Pests don't care about weather", "icon": "", "isCorrect": false},
                {"text": "Rain kills all pests", "icon": "", "isCorrect": false},
                {"text": "Cold makes pests stronger", "icon": "", "isCorrect": false}
            ],
            "explanation": "Weather conditions influence pest survival and reproduction."
        },
        {
            "question": "Push-pull technology uses:",
            "type": "multiple_choice",
            "options": [
                {"text": "Repellent and trap plants together", "icon": "↔️", "isCorrect": true},
                {"text": "Only chemicals", "icon": "", "isCorrect": false},
                {"text": "Only traps", "icon": "", "isCorrect": false},
                {"text": "Heavy machinery", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants push pests away from crops and pull them to traps."
        },
        {
            "question": "Precision agriculture helps with:",
            "type": "multiple_choice",
            "options": [
                {"text": "Targeted pest control", "icon": "🎯", "isCorrect": true},
                {"text": "Random spraying", "icon": "", "isCorrect": false},
                {"text": "More chemical use", "icon": "", "isCorrect": false},
                {"text": "Guessing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Technology helps apply treatments only where needed."
        },
        {
            "question": "Sterile insect technique releases:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sterile males to reduce populations", "icon": "🧬", "isCorrect": true},
                {"text": "More pests", "icon": "", "isCorrect": false},
                {"text": "Chemicals", "icon": "", "isCorrect": false},
                {"text": "Seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sterile males mate but produce no offspring, reducing populations."
        },
        {
            "question": "Organic certification requires:",
            "type": "multiple_choice",
            "options": [
                {"text": "No synthetic pesticides", "icon": "🌿", "isCorrect": true},
                {"text": "More chemicals", "icon": "", "isCorrect": false},
                {"text": "Cheaper products", "icon": "", "isCorrect": false},
                {"text": "Ignoring pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Organic farmers use only approved natural pest control methods."
        },
        {
            "question": "Early warning systems help predict:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pest outbreaks", "icon": "⚠️", "isCorrect": true},
                {"text": "Market prices only", "icon": "", "isCorrect": false},
                {"text": "Nothing useful", "icon": "", "isCorrect": false},
                {"text": "Weather only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Monitoring systems alert farmers to prepare for pest problems."
        },
        {
            "question": "Sustainable pest management aims to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Control pests with minimal harm", "icon": "♻️", "isCorrect": true},
                {"text": "Kill everything", "icon": "", "isCorrect": false},
                {"text": "Use maximum chemicals", "icon": "", "isCorrect": false},
                {"text": "Ignore all pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Balance pest control with environmental and health protection."
        }
    ]
};

// Make available globally
window.MODULE2_QUESTIONS = MODULE2_QUESTIONS;
