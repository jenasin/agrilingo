// Module 3: Harvest & Sales - 100 questions (10 levels x 10 questions)
const MODULE3_QUESTIONS = {
    // Level 1: Harvest Basics
    "module3_level1": [
        {
            "question": "When is the best time to harvest crops?",
            "type": "multiple_choice",
            "options": [
                {"text": "When fully mature", "icon": "🌾", "isCorrect": true},
                {"text": "When still green", "icon": "", "isCorrect": false},
                {"text": "During heavy rain", "icon": "", "isCorrect": false},
                {"text": "At midnight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Harvest when crops reach full maturity for best quality and yield."
        },
        {
            "question": "Signs that maize is ready for harvest:",
            "type": "multiple_choice",
            "options": [
                {"text": "Dry husks and hard kernels", "icon": "🌽", "isCorrect": true},
                {"text": "Green leaves everywhere", "icon": "", "isCorrect": false},
                {"text": "Soft white kernels", "icon": "", "isCorrect": false},
                {"text": "Flowers blooming", "icon": "", "isCorrect": false}
            ],
            "explanation": "Mature maize has brown dry husks and hard, dented kernels."
        },
        {
            "question": "Harvesting too early causes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Lower yields and quality", "icon": "📉", "isCorrect": true},
                {"text": "Better taste", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false},
                {"text": "Longer storage", "icon": "", "isCorrect": false}
            ],
            "explanation": "Immature crops have less weight and poorer nutritional value."
        },
        {
            "question": "Harvesting too late can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Crop losses to weather and pests", "icon": "⚠️", "isCorrect": true},
                {"text": "Better quality", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false},
                {"text": "More growth", "icon": "", "isCorrect": false}
            ],
            "explanation": "Delayed harvest risks damage from rain, birds, and shattering."
        },
        {
            "question": "A sickle is used for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cutting grain crops", "icon": "🔪", "isCorrect": true},
                {"text": "Watering plants", "icon": "", "isCorrect": false},
                {"text": "Planting seeds", "icon": "", "isCorrect": false},
                {"text": "Spraying chemicals", "icon": "", "isCorrect": false}
            ],
            "explanation": "A sickle is a curved blade for cutting cereals by hand."
        },
        {
            "question": "Best time of day to harvest vegetables:",
            "type": "multiple_choice",
            "options": [
                {"text": "Early morning", "icon": "🌅", "isCorrect": true},
                {"text": "Hot afternoon", "icon": "", "isCorrect": false},
                {"text": "Late night", "icon": "", "isCorrect": false},
                {"text": "During rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Morning harvest keeps vegetables cool and fresh longer."
        },
        {
            "question": "Handle harvested crops carefully to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent bruising and damage", "icon": "🤲", "isCorrect": true},
                {"text": "Make them dirty", "icon": "", "isCorrect": false},
                {"text": "Break them faster", "icon": "", "isCorrect": false},
                {"text": "Add weight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Gentle handling prevents wounds that cause spoilage."
        },
        {
            "question": "Threshing separates:",
            "type": "multiple_choice",
            "options": [
                {"text": "Grain from stalks", "icon": "🌾", "isCorrect": true},
                {"text": "Water from soil", "icon": "", "isCorrect": false},
                {"text": "Leaves from roots", "icon": "", "isCorrect": false},
                {"text": "Seeds from fruit", "icon": "", "isCorrect": false}
            ],
            "explanation": "Threshing removes grain kernels from the plant material."
        },
        {
            "question": "Winnowing removes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Chaff and debris from grain", "icon": "💨", "isCorrect": true},
                {"text": "Water from crops", "icon": "", "isCorrect": false},
                {"text": "Color from seeds", "icon": "", "isCorrect": false},
                {"text": "Taste from food", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wind or air blows away light chaff leaving heavier grain."
        },
        {
            "question": "Post-harvest losses happen after:",
            "type": "multiple_choice",
            "options": [
                {"text": "Crops are harvested", "icon": "📦", "isCorrect": true},
                {"text": "Seeds are planted", "icon": "", "isCorrect": false},
                {"text": "Rain falls", "icon": "", "isCorrect": false},
                {"text": "Sun shines", "icon": "", "isCorrect": false}
            ],
            "explanation": "Losses from poor handling, storage, or transport after harvest."
        }
    ],

    // Level 2: Drying and Curing
    "module3_level2": [
        {
            "question": "Why dry grains before storage?",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent mold and pests", "icon": "☀️", "isCorrect": true},
                {"text": "Add weight", "icon": "", "isCorrect": false},
                {"text": "Change color", "icon": "", "isCorrect": false},
                {"text": "Make them wet", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dry grains below 13% moisture resist mold and insects."
        },
        {
            "question": "Safe moisture level for grain storage:",
            "type": "multiple_choice",
            "options": [
                {"text": "12-14%", "icon": "💧", "isCorrect": true},
                {"text": "50-60%", "icon": "", "isCorrect": false},
                {"text": "80-90%", "icon": "", "isCorrect": false},
                {"text": "0%", "icon": "", "isCorrect": false}
            ],
            "explanation": "Grain should be dried to 12-14% moisture for safe storage."
        },
        {
            "question": "Sun drying is done by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Spreading crops in sunlight", "icon": "☀️", "isCorrect": true},
                {"text": "Putting in water", "icon": "", "isCorrect": false},
                {"text": "Storing in dark room", "icon": "", "isCorrect": false},
                {"text": "Covering with plastic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Spread grain thinly on clean surfaces under the sun."
        },
        {
            "question": "Turn grain during drying to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Dry evenly", "icon": "🔄", "isCorrect": true},
                {"text": "Add moisture", "icon": "", "isCorrect": false},
                {"text": "Make it wet", "icon": "", "isCorrect": false},
                {"text": "Waste time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Turning ensures all grain dries uniformly."
        },
        {
            "question": "Curing onions and garlic means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Drying outer layers", "icon": "🧅", "isCorrect": true},
                {"text": "Adding water", "icon": "", "isCorrect": false},
                {"text": "Peeling them", "icon": "", "isCorrect": false},
                {"text": "Cooking them", "icon": "", "isCorrect": false}
            ],
            "explanation": "Curing dries and toughens outer skin for longer storage."
        },
        {
            "question": "Over-drying grain can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cracking and breakage", "icon": "💔", "isCorrect": true},
                {"text": "Better quality", "icon": "", "isCorrect": false},
                {"text": "More weight", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false}
            ],
            "explanation": "Too dry grain becomes brittle and breaks during handling."
        },
        {
            "question": "Moisture meter measures:",
            "type": "multiple_choice",
            "options": [
                {"text": "Water content in grain", "icon": "📊", "isCorrect": true},
                {"text": "Grain color", "icon": "", "isCorrect": false},
                {"text": "Grain taste", "icon": "", "isCorrect": false},
                {"text": "Grain age", "icon": "", "isCorrect": false}
            ],
            "explanation": "This tool tells if grain is dry enough for storage."
        },
        {
            "question": "Protect drying grain from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Rain and animals", "icon": "🌧️", "isCorrect": true},
                {"text": "Sunlight", "icon": "", "isCorrect": false},
                {"text": "Air", "icon": "", "isCorrect": false},
                {"text": "Wind", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cover grain if rain threatens and protect from birds and animals."
        },
        {
            "question": "Drying on tarpaulin is better than:",
            "type": "multiple_choice",
            "options": [
                {"text": "Bare ground", "icon": "🏕️", "isCorrect": true},
                {"text": "Clean surface", "icon": "", "isCorrect": false},
                {"text": "Raised platform", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tarpaulins keep grain clean and away from soil moisture."
        },
        {
            "question": "Mechanical dryers use:",
            "type": "multiple_choice",
            "options": [
                {"text": "Heated air", "icon": "🔥", "isCorrect": true},
                {"text": "Cold water", "icon": "", "isCorrect": false},
                {"text": "Moonlight", "icon": "", "isCorrect": false},
                {"text": "Music", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dryers blow warm air through grain for faster, controlled drying."
        }
    ],

    // Level 3: Storage Methods
    "module3_level3": [
        {
            "question": "Good storage protects crops from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Pests, moisture, and theft", "icon": "🔒", "isCorrect": true},
                {"text": "Good prices", "icon": "", "isCorrect": false},
                {"text": "Buyers", "icon": "", "isCorrect": false},
                {"text": "Sunlight only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Storage should keep crops safe from all types of losses."
        },
        {
            "question": "Traditional granaries are made of:",
            "type": "multiple_choice",
            "options": [
                {"text": "Local materials like mud and thatch", "icon": "🏠", "isCorrect": true},
                {"text": "Only steel", "icon": "", "isCorrect": false},
                {"text": "Only glass", "icon": "", "isCorrect": false},
                {"text": "Only plastic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Traditional stores use locally available materials."
        },
        {
            "question": "Metal silos are good because they:",
            "type": "multiple_choice",
            "options": [
                {"text": "Keep out pests and moisture", "icon": "🗄️", "isCorrect": true},
                {"text": "Let in rain", "icon": "", "isCorrect": false},
                {"text": "Attract insects", "icon": "", "isCorrect": false},
                {"text": "Are always free", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sealed metal silos provide excellent protection."
        },
        {
            "question": "Before storing new grain, you should:",
            "type": "multiple_choice",
            "options": [
                {"text": "Clean the storage facility", "icon": "🧹", "isCorrect": true},
                {"text": "Add old grain first", "icon": "", "isCorrect": false},
                {"text": "Leave it dirty", "icon": "", "isCorrect": false},
                {"text": "Add water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clean stores remove old pests and disease sources."
        },
        {
            "question": "FIFO in storage means:",
            "type": "multiple_choice",
            "options": [
                {"text": "First In, First Out", "icon": "📦", "isCorrect": true},
                {"text": "Fast In, Fast Out", "icon": "", "isCorrect": false},
                {"text": "Free In, Free Out", "icon": "", "isCorrect": false},
                {"text": "Find In, Find Out", "icon": "", "isCorrect": false}
            ],
            "explanation": "Use older stock first to prevent spoilage."
        },
        {
            "question": "Hermetic bags work by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Blocking oxygen", "icon": "🛍️", "isCorrect": true},
                {"text": "Adding chemicals", "icon": "", "isCorrect": false},
                {"text": "Letting in air", "icon": "", "isCorrect": false},
                {"text": "Adding water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Airtight bags suffocate pests without chemicals."
        },
        {
            "question": "Store grain away from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Walls and floor", "icon": "📏", "isCorrect": true},
                {"text": "Clean containers", "icon": "", "isCorrect": false},
                {"text": "Dry conditions", "icon": "", "isCorrect": false},
                {"text": "Good ventilation", "icon": "", "isCorrect": false}
            ],
            "explanation": "Space allows air circulation and easier inspection."
        },
        {
            "question": "Check stored grain regularly for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Signs of pests or moisture", "icon": "👀", "isCorrect": true},
                {"text": "Nothing", "icon": "", "isCorrect": false},
                {"text": "Color changes only", "icon": "", "isCorrect": false},
                {"text": "Weight gain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Regular inspection catches problems before major losses."
        },
        {
            "question": "Cold storage is used for:",
            "type": "multiple_choice",
            "options": [
                {"text": "Perishable crops like vegetables", "icon": "❄️", "isCorrect": true},
                {"text": "Dry grains only", "icon": "", "isCorrect": false},
                {"text": "Heating crops", "icon": "", "isCorrect": false},
                {"text": "Drying crops", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cold temperatures slow decay of fresh produce."
        },
        {
            "question": "Ventilation in storage helps:",
            "type": "multiple_choice",
            "options": [
                {"text": "Control temperature and moisture", "icon": "💨", "isCorrect": true},
                {"text": "Add pests", "icon": "", "isCorrect": false},
                {"text": "Increase heat", "icon": "", "isCorrect": false},
                {"text": "Add water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Air movement prevents hot spots and condensation."
        }
    ],

    // Level 4: Quality and Grading
    "module3_level4": [
        {
            "question": "Grading crops means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sorting by quality", "icon": "⭐", "isCorrect": true},
                {"text": "Mixing all together", "icon": "", "isCorrect": false},
                {"text": "Adding chemicals", "icon": "", "isCorrect": false},
                {"text": "Changing color", "icon": "", "isCorrect": false}
            ],
            "explanation": "Grading separates produce into quality categories."
        },
        {
            "question": "Why grade crops before selling?",
            "type": "multiple_choice",
            "options": [
                {"text": "Get better prices for quality", "icon": "💰", "isCorrect": true},
                {"text": "Waste time", "icon": "", "isCorrect": false},
                {"text": "Hide bad produce", "icon": "", "isCorrect": false},
                {"text": "Confuse buyers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Higher grades command higher prices in the market."
        },
        {
            "question": "Quality factors include:",
            "type": "multiple_choice",
            "options": [
                {"text": "Size, color, and damage", "icon": "📋", "isCorrect": true},
                {"text": "Only weight", "icon": "", "isCorrect": false},
                {"text": "Only color", "icon": "", "isCorrect": false},
                {"text": "Only name", "icon": "", "isCorrect": false}
            ],
            "explanation": "Multiple factors determine overall produce quality."
        },
        {
            "question": "Foreign matter in grain includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Stones, sticks, and chaff", "icon": "🪨", "isCorrect": true},
                {"text": "Only grain", "icon": "", "isCorrect": false},
                {"text": "Only water", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Remove all non-grain materials before selling."
        },
        {
            "question": "Broken grains reduce quality because:",
            "type": "multiple_choice",
            "options": [
                {"text": "They spoil faster", "icon": "💔", "isCorrect": true},
                {"text": "They taste better", "icon": "", "isCorrect": false},
                {"text": "Buyers prefer them", "icon": "", "isCorrect": false},
                {"text": "They weigh more", "icon": "", "isCorrect": false}
            ],
            "explanation": "Broken grains are more susceptible to pests and mold."
        },
        {
            "question": "Aflatoxin is a:",
            "type": "multiple_choice",
            "options": [
                {"text": "Dangerous mold poison", "icon": "☠️", "isCorrect": true},
                {"text": "Helpful nutrient", "icon": "", "isCorrect": false},
                {"text": "Type of fertilizer", "icon": "", "isCorrect": false},
                {"text": "Good bacteria", "icon": "", "isCorrect": false}
            ],
            "explanation": "Aflatoxin from mold can cause serious illness."
        },
        {
            "question": "Discolored grain may indicate:",
            "type": "multiple_choice",
            "options": [
                {"text": "Disease or poor storage", "icon": "🔴", "isCorrect": true},
                {"text": "Best quality", "icon": "", "isCorrect": false},
                {"text": "Higher value", "icon": "", "isCorrect": false},
                {"text": "Better taste", "icon": "", "isCorrect": false}
            ],
            "explanation": "Off-color often means mold, disease, or heat damage."
        },
        {
            "question": "Standard weights and measures ensure:",
            "type": "multiple_choice",
            "options": [
                {"text": "Fair trading", "icon": "⚖️", "isCorrect": true},
                {"text": "Cheating buyers", "icon": "", "isCorrect": false},
                {"text": "Confusion", "icon": "", "isCorrect": false},
                {"text": "Lower prices", "icon": "", "isCorrect": false}
            ],
            "explanation": "Accurate measurement protects both buyer and seller."
        },
        {
            "question": "Sampling grain means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Testing a small portion", "icon": "🧪", "isCorrect": true},
                {"text": "Taking everything", "icon": "", "isCorrect": false},
                {"text": "Ignoring quality", "icon": "", "isCorrect": false},
                {"text": "Adding water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Samples represent the whole batch for quality testing."
        },
        {
            "question": "Certification marks show:",
            "type": "multiple_choice",
            "options": [
                {"text": "Product meets standards", "icon": "✅", "isCorrect": true},
                {"text": "Product is fake", "icon": "", "isCorrect": false},
                {"text": "Low quality", "icon": "", "isCorrect": false},
                {"text": "Nothing important", "icon": "", "isCorrect": false}
            ],
            "explanation": "Official marks verify quality claims to buyers."
        }
    ],

    // Level 5: Market Knowledge
    "module3_level5": [
        {
            "question": "Market price depends on:",
            "type": "multiple_choice",
            "options": [
                {"text": "Supply and demand", "icon": "📈", "isCorrect": true},
                {"text": "Only weather", "icon": "", "isCorrect": false},
                {"text": "Only color", "icon": "", "isCorrect": false},
                {"text": "Only location", "icon": "", "isCorrect": false}
            ],
            "explanation": "Prices rise when demand exceeds supply and fall when supply is high."
        },
        {
            "question": "Prices are usually lowest:",
            "type": "multiple_choice",
            "options": [
                {"text": "Right after harvest", "icon": "📉", "isCorrect": true},
                {"text": "Before planting", "icon": "", "isCorrect": false},
                {"text": "During shortage", "icon": "", "isCorrect": false},
                {"text": "In dry season", "icon": "", "isCorrect": false}
            ],
            "explanation": "High supply at harvest time pushes prices down."
        },
        {
            "question": "Market information helps farmers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Make better selling decisions", "icon": "📱", "isCorrect": true},
                {"text": "Stay confused", "icon": "", "isCorrect": false},
                {"text": "Lose money", "icon": "", "isCorrect": false},
                {"text": "Avoid markets", "icon": "", "isCorrect": false}
            ],
            "explanation": "Knowing prices helps decide when and where to sell."
        },
        {
            "question": "A middleman is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Trader between farmer and buyer", "icon": "🤝", "isCorrect": true},
                {"text": "Government official", "icon": "", "isCorrect": false},
                {"text": "Farm worker", "icon": "", "isCorrect": false},
                {"text": "Bank manager", "icon": "", "isCorrect": false}
            ],
            "explanation": "Middlemen buy from farmers and sell to consumers or processors."
        },
        {
            "question": "Selling directly to consumers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Can give higher prices", "icon": "💵", "isCorrect": true},
                {"text": "Always gives less money", "icon": "", "isCorrect": false},
                {"text": "Is illegal", "icon": "", "isCorrect": false},
                {"text": "Is impossible", "icon": "", "isCorrect": false}
            ],
            "explanation": "Direct sales eliminate middleman costs but require more effort."
        },
        {
            "question": "Contract farming means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Agreement to sell to specific buyer", "icon": "📝", "isCorrect": true},
                {"text": "Selling to anyone", "icon": "", "isCorrect": false},
                {"text": "Not selling at all", "icon": "", "isCorrect": false},
                {"text": "Giving crops away", "icon": "", "isCorrect": false}
            ],
            "explanation": "Contracts guarantee a buyer and often a price before harvest."
        },
        {
            "question": "Farmer cooperatives help by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Bargaining for better prices", "icon": "👥", "isCorrect": true},
                {"text": "Keeping farmers apart", "icon": "", "isCorrect": false},
                {"text": "Reducing quality", "icon": "", "isCorrect": false},
                {"text": "Adding costs only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Groups have more power to negotiate with buyers."
        },
        {
            "question": "Seasonal price changes are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Normal and predictable", "icon": "📅", "isCorrect": true},
                {"text": "Always surprising", "icon": "", "isCorrect": false},
                {"text": "Never happen", "icon": "", "isCorrect": false},
                {"text": "Illegal", "icon": "", "isCorrect": false}
            ],
            "explanation": "Prices follow patterns based on harvest times and demand."
        },
        {
            "question": "Export markets can offer:",
            "type": "multiple_choice",
            "options": [
                {"text": "Higher prices but strict standards", "icon": "🌍", "isCorrect": true},
                {"text": "Lower prices always", "icon": "", "isCorrect": false},
                {"text": "No requirements", "icon": "", "isCorrect": false},
                {"text": "Free shipping", "icon": "", "isCorrect": false}
            ],
            "explanation": "International markets pay well but demand high quality."
        },
        {
            "question": "Spot price means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Current market price", "icon": "💲", "isCorrect": true},
                {"text": "Future price", "icon": "", "isCorrect": false},
                {"text": "Yesterday's price", "icon": "", "isCorrect": false},
                {"text": "Fixed price forever", "icon": "", "isCorrect": false}
            ],
            "explanation": "Spot price is what you can get right now in the market."
        }
    ],

    // Level 6: Value Addition
    "module3_level6": [
        {
            "question": "Value addition means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Processing to increase worth", "icon": "⬆️", "isCorrect": true},
                {"text": "Selling raw only", "icon": "", "isCorrect": false},
                {"text": "Reducing quality", "icon": "", "isCorrect": false},
                {"text": "Adding water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Processing transforms raw products into higher-value goods."
        },
        {
            "question": "Milling grain into flour is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Value addition", "icon": "🌾", "isCorrect": true},
                {"text": "Value reduction", "icon": "", "isCorrect": false},
                {"text": "Wasting grain", "icon": "", "isCorrect": false},
                {"text": "Not processing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Flour sells for more than whole grain."
        },
        {
            "question": "Drying fruits adds value by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Extending shelf life", "icon": "🍎", "isCorrect": true},
                {"text": "Making them rot faster", "icon": "", "isCorrect": false},
                {"text": "Reducing taste", "icon": "", "isCorrect": false},
                {"text": "Adding weight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dried fruits last longer and can be sold year-round."
        },
        {
            "question": "Packaging helps products by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Protecting and attracting buyers", "icon": "📦", "isCorrect": true},
                {"text": "Making them invisible", "icon": "", "isCorrect": false},
                {"text": "Adding dirt", "icon": "", "isCorrect": false},
                {"text": "Reducing value", "icon": "", "isCorrect": false}
            ],
            "explanation": "Good packaging protects quality and builds brand image."
        },
        {
            "question": "Making jam from fruit is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Food processing", "icon": "🍓", "isCorrect": true},
                {"text": "Farming", "icon": "", "isCorrect": false},
                {"text": "Harvesting", "icon": "", "isCorrect": false},
                {"text": "Planting", "icon": "", "isCorrect": false}
            ],
            "explanation": "Processing turns fresh fruit into preserved product."
        },
        {
            "question": "Branding your product helps:",
            "type": "multiple_choice",
            "options": [
                {"text": "Build customer loyalty", "icon": "🏷️", "isCorrect": true},
                {"text": "Confuse customers", "icon": "", "isCorrect": false},
                {"text": "Hide quality", "icon": "", "isCorrect": false},
                {"text": "Reduce sales", "icon": "", "isCorrect": false}
            ],
            "explanation": "Brands help customers recognize and trust your products."
        },
        {
            "question": "Oil extraction from seeds is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Value addition", "icon": "🫒", "isCorrect": true},
                {"text": "Value reduction", "icon": "", "isCorrect": false},
                {"text": "Wasting seeds", "icon": "", "isCorrect": false},
                {"text": "Not processing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Oil sells for much more than raw seeds."
        },
        {
            "question": "Cleaning and sorting adds value by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Improving appearance and quality", "icon": "✨", "isCorrect": true},
                {"text": "Adding dirt", "icon": "", "isCorrect": false},
                {"text": "Mixing grades", "icon": "", "isCorrect": false},
                {"text": "Wasting time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clean, sorted products command premium prices."
        },
        {
            "question": "Organic certification adds value because:",
            "type": "multiple_choice",
            "options": [
                {"text": "Some buyers pay more for organic", "icon": "🌿", "isCorrect": true},
                {"text": "It reduces quality", "icon": "", "isCorrect": false},
                {"text": "It is free", "icon": "", "isCorrect": false},
                {"text": "Nobody wants organic", "icon": "", "isCorrect": false}
            ],
            "explanation": "Organic products often sell at premium prices."
        },
        {
            "question": "By-products from processing can be:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sold or used as animal feed", "icon": "🐄", "isCorrect": true},
                {"text": "Only thrown away", "icon": "", "isCorrect": false},
                {"text": "Ignored always", "icon": "", "isCorrect": false},
                {"text": "Never useful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Waste products often have value as feed or other uses."
        }
    ],

    // Level 7: Transport and Logistics
    "module3_level7": [
        {
            "question": "Good transport reduces:",
            "type": "multiple_choice",
            "options": [
                {"text": "Post-harvest losses", "icon": "🚛", "isCorrect": true},
                {"text": "Crop quality", "icon": "", "isCorrect": false},
                {"text": "Farm income", "icon": "", "isCorrect": false},
                {"text": "Market access", "icon": "", "isCorrect": false}
            ],
            "explanation": "Proper transport protects produce from damage and spoilage."
        },
        {
            "question": "Load vehicles carefully to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent crushing and damage", "icon": "📦", "isCorrect": true},
                {"text": "Break more produce", "icon": "", "isCorrect": false},
                {"text": "Waste space", "icon": "", "isCorrect": false},
                {"text": "Slow delivery", "icon": "", "isCorrect": false}
            ],
            "explanation": "Careful loading prevents physical damage during transport."
        },
        {
            "question": "Transport perishables in:",
            "type": "multiple_choice",
            "options": [
                {"text": "Cool conditions if possible", "icon": "❄️", "isCorrect": true},
                {"text": "Hot sun always", "icon": "", "isCorrect": false},
                {"text": "Wet containers", "icon": "", "isCorrect": false},
                {"text": "Open trucks in rain", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cool temperatures slow decay of fresh produce."
        },
        {
            "question": "Ventilation during transport helps:",
            "type": "multiple_choice",
            "options": [
                {"text": "Remove heat and gases", "icon": "💨", "isCorrect": true},
                {"text": "Add moisture", "icon": "", "isCorrect": false},
                {"text": "Increase rotting", "icon": "", "isCorrect": false},
                {"text": "Add pests", "icon": "", "isCorrect": false}
            ],
            "explanation": "Air flow prevents heat buildup and removes ripening gases."
        },
        {
            "question": "Use clean containers to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent contamination", "icon": "🧼", "isCorrect": true},
                {"text": "Add diseases", "icon": "", "isCorrect": false},
                {"text": "Reduce quality", "icon": "", "isCorrect": false},
                {"text": "Save time", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clean containers prevent spread of disease and contamination."
        },
        {
            "question": "Transport costs should be:",
            "type": "multiple_choice",
            "options": [
                {"text": "Calculated in selling price", "icon": "🧮", "isCorrect": true},
                {"text": "Ignored", "icon": "", "isCorrect": false},
                {"text": "Unknown", "icon": "", "isCorrect": false},
                {"text": "Zero always", "icon": "", "isCorrect": false}
            ],
            "explanation": "Know your costs to ensure profitable sales."
        },
        {
            "question": "Timing deliveries is important because:",
            "type": "multiple_choice",
            "options": [
                {"text": "Markets have peak buying times", "icon": "⏰", "isCorrect": true},
                {"text": "It doesn't matter when", "icon": "", "isCorrect": false},
                {"text": "Night is always best", "icon": "", "isCorrect": false},
                {"text": "Buyers are always available", "icon": "", "isCorrect": false}
            ],
            "explanation": "Arrive when buyers are active and produce is freshest."
        },
        {
            "question": "Stacking produce too high can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Crushing of bottom layers", "icon": "📚", "isCorrect": true},
                {"text": "Better quality", "icon": "", "isCorrect": false},
                {"text": "Less damage", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false}
            ],
            "explanation": "Weight from above crushes and damages lower produce."
        },
        {
            "question": "Documentation for transport includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Receipts and permits", "icon": "📄", "isCorrect": true},
                {"text": "Nothing needed", "icon": "", "isCorrect": false},
                {"text": "Only photos", "icon": "", "isCorrect": false},
                {"text": "Only money", "icon": "", "isCorrect": false}
            ],
            "explanation": "Proper paperwork helps with payments and legal requirements."
        },
        {
            "question": "Road conditions affect:",
            "type": "multiple_choice",
            "options": [
                {"text": "Transport time and damage", "icon": "🛣️", "isCorrect": true},
                {"text": "Crop color only", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false},
                {"text": "Weather only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bad roads cause delays and physical damage to produce."
        }
    ],

    // Level 8: Business Skills
    "module3_level8": [
        {
            "question": "Farm records help you:",
            "type": "multiple_choice",
            "options": [
                {"text": "Track costs and profits", "icon": "📊", "isCorrect": true},
                {"text": "Forget everything", "icon": "", "isCorrect": false},
                {"text": "Waste paper", "icon": "", "isCorrect": false},
                {"text": "Confuse yourself", "icon": "", "isCorrect": false}
            ],
            "explanation": "Records show what works and helps plan for future."
        },
        {
            "question": "Profit equals:",
            "type": "multiple_choice",
            "options": [
                {"text": "Income minus costs", "icon": "💰", "isCorrect": true},
                {"text": "Income only", "icon": "", "isCorrect": false},
                {"text": "Costs only", "icon": "", "isCorrect": false},
                {"text": "Sales volume", "icon": "", "isCorrect": false}
            ],
            "explanation": "Profit is what remains after paying all expenses."
        },
        {
            "question": "Break-even means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Costs equal income", "icon": "⚖️", "isCorrect": true},
                {"text": "Making profit", "icon": "", "isCorrect": false},
                {"text": "Losing money", "icon": "", "isCorrect": false},
                {"text": "Stopping farming", "icon": "", "isCorrect": false}
            ],
            "explanation": "At break-even you cover costs but make no profit."
        },
        {
            "question": "Negotiation skills help farmers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Get better prices", "icon": "🤝", "isCorrect": true},
                {"text": "Always lose", "icon": "", "isCorrect": false},
                {"text": "Avoid selling", "icon": "", "isCorrect": false},
                {"text": "Give products free", "icon": "", "isCorrect": false}
            ],
            "explanation": "Good negotiators secure fair prices for their produce."
        },
        {
            "question": "A business plan includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Goals, costs, and strategies", "icon": "📋", "isCorrect": true},
                {"text": "Only dreams", "icon": "", "isCorrect": false},
                {"text": "Only problems", "icon": "", "isCorrect": false},
                {"text": "Nothing useful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plans guide decisions and help get loans."
        },
        {
            "question": "Cash flow means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Money coming in and going out", "icon": "💵", "isCorrect": true},
                {"text": "Only expenses", "icon": "", "isCorrect": false},
                {"text": "Only income", "icon": "", "isCorrect": false},
                {"text": "Bank balance only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Managing when money comes and goes prevents shortages."
        },
        {
            "question": "Diversifying income means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Having multiple income sources", "icon": "🔄", "isCorrect": true},
                {"text": "Only one crop", "icon": "", "isCorrect": false},
                {"text": "No income", "icon": "", "isCorrect": false},
                {"text": "Spending more", "icon": "", "isCorrect": false}
            ],
            "explanation": "Multiple products reduce risk if one fails."
        },
        {
            "question": "Credit from input suppliers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Can help but has costs", "icon": "💳", "isCorrect": true},
                {"text": "Is always free", "icon": "", "isCorrect": false},
                {"text": "Never has interest", "icon": "", "isCorrect": false},
                {"text": "Should be ignored", "icon": "", "isCorrect": false}
            ],
            "explanation": "Understand terms and costs before taking credit."
        },
        {
            "question": "Customer relationships help by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Creating repeat buyers", "icon": "🤗", "isCorrect": true},
                {"text": "Losing customers", "icon": "", "isCorrect": false},
                {"text": "Reducing sales", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Good relationships lead to loyal, returning customers."
        },
        {
            "question": "Savings help farmers:",
            "type": "multiple_choice",
            "options": [
                {"text": "Handle emergencies and invest", "icon": "🏦", "isCorrect": true},
                {"text": "Spend more", "icon": "", "isCorrect": false},
                {"text": "Stay poor", "icon": "", "isCorrect": false},
                {"text": "Avoid planning", "icon": "", "isCorrect": false}
            ],
            "explanation": "Savings provide security and capital for improvements."
        }
    ],

    // Level 9: Food Safety
    "module3_level9": [
        {
            "question": "Food safety ensures:",
            "type": "multiple_choice",
            "options": [
                {"text": "Food won't make people sick", "icon": "🛡️", "isCorrect": true},
                {"text": "Food is expensive", "icon": "", "isCorrect": false},
                {"text": "Food looks pretty", "icon": "", "isCorrect": false},
                {"text": "Food is cheap", "icon": "", "isCorrect": false}
            ],
            "explanation": "Safe food is free from harmful contamination."
        },
        {
            "question": "Wash hands when handling food to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Prevent spreading germs", "icon": "🧼", "isCorrect": true},
                {"text": "Waste water", "icon": "", "isCorrect": false},
                {"text": "Cool hands", "icon": "", "isCorrect": false},
                {"text": "Look clean", "icon": "", "isCorrect": false}
            ],
            "explanation": "Clean hands prevent transferring bacteria to food."
        },
        {
            "question": "Pesticide residues are controlled by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Following pre-harvest intervals", "icon": "⏰", "isCorrect": true},
                {"text": "Spraying more", "icon": "", "isCorrect": false},
                {"text": "Ignoring labels", "icon": "", "isCorrect": false},
                {"text": "Harvesting immediately", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wait the required time after spraying before harvest."
        },
        {
            "question": "Contaminated water can cause:",
            "type": "multiple_choice",
            "options": [
                {"text": "Foodborne illness", "icon": "🦠", "isCorrect": true},
                {"text": "Better taste", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false},
                {"text": "Longer storage", "icon": "", "isCorrect": false}
            ],
            "explanation": "Use clean water for washing produce."
        },
        {
            "question": "Cold chain means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Keeping food cold throughout", "icon": "❄️", "isCorrect": true},
                {"text": "Metal chains", "icon": "", "isCorrect": false},
                {"text": "Freezing everything", "icon": "", "isCorrect": false},
                {"text": "Ice jewelry", "icon": "", "isCorrect": false}
            ],
            "explanation": "Continuous refrigeration from harvest to consumer."
        },
        {
            "question": "Traceability helps:",
            "type": "multiple_choice",
            "options": [
                {"text": "Track food from farm to table", "icon": "🔍", "isCorrect": true},
                {"text": "Hide sources", "icon": "", "isCorrect": false},
                {"text": "Confuse buyers", "icon": "", "isCorrect": false},
                {"text": "Nothing useful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tracing helps find and fix problems if illness occurs."
        },
        {
            "question": "Maximum residue limits (MRLs) are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Safe pesticide levels in food", "icon": "📏", "isCorrect": true},
                {"text": "Minimum amounts needed", "icon": "", "isCorrect": false},
                {"text": "Unimportant numbers", "icon": "", "isCorrect": false},
                {"text": "Marketing terms", "icon": "", "isCorrect": false}
            ],
            "explanation": "MRLs define acceptable pesticide levels for safety."
        },
        {
            "question": "Proper storage temperature prevents:",
            "type": "multiple_choice",
            "options": [
                {"text": "Bacterial growth", "icon": "🌡️", "isCorrect": true},
                {"text": "Better taste", "icon": "", "isCorrect": false},
                {"text": "Higher prices", "icon": "", "isCorrect": false},
                {"text": "Longer life always", "icon": "", "isCorrect": false}
            ],
            "explanation": "Correct temperatures slow or stop harmful bacteria."
        },
        {
            "question": "Cross-contamination happens when:",
            "type": "multiple_choice",
            "options": [
                {"text": "Germs spread between foods", "icon": "↔️", "isCorrect": true},
                {"text": "Food is crossed out", "icon": "", "isCorrect": false},
                {"text": "Food is combined", "icon": "", "isCorrect": false},
                {"text": "Food is sold", "icon": "", "isCorrect": false}
            ],
            "explanation": "Keep raw and ready-to-eat foods separate."
        },
        {
            "question": "Good Agricultural Practices (GAP) ensure:",
            "type": "multiple_choice",
            "options": [
                {"text": "Safe and quality production", "icon": "✅", "isCorrect": true},
                {"text": "Faster farming only", "icon": "", "isCorrect": false},
                {"text": "Cheaper food", "icon": "", "isCorrect": false},
                {"text": "Less work", "icon": "", "isCorrect": false}
            ],
            "explanation": "GAP standards cover safety throughout production."
        }
    ],

    // Level 10: Advanced Marketing
    "module3_level10": [
        {
            "question": "Marketing mix includes:",
            "type": "multiple_choice",
            "options": [
                {"text": "Product, price, place, promotion", "icon": "4️⃣", "isCorrect": true},
                {"text": "Only price", "icon": "", "isCorrect": false},
                {"text": "Only product", "icon": "", "isCorrect": false},
                {"text": "Only selling", "icon": "", "isCorrect": false}
            ],
            "explanation": "The 4 Ps are key elements of marketing strategy."
        },
        {
            "question": "Target market is:",
            "type": "multiple_choice",
            "options": [
                {"text": "Specific customers you want to reach", "icon": "🎯", "isCorrect": true},
                {"text": "Everyone in the world", "icon": "", "isCorrect": false},
                {"text": "Other farmers", "icon": "", "isCorrect": false},
                {"text": "No one specific", "icon": "", "isCorrect": false}
            ],
            "explanation": "Focus on customers most likely to buy your products."
        },
        {
            "question": "Product differentiation means:",
            "type": "multiple_choice",
            "options": [
                {"text": "Making your product stand out", "icon": "⭐", "isCorrect": true},
                {"text": "Copying others exactly", "icon": "", "isCorrect": false},
                {"text": "Hiding your product", "icon": "", "isCorrect": false},
                {"text": "Lowering quality", "icon": "", "isCorrect": false}
            ],
            "explanation": "Unique features help your product compete."
        },
        {
            "question": "Market research helps understand:",
            "type": "multiple_choice",
            "options": [
                {"text": "What customers want", "icon": "📊", "isCorrect": true},
                {"text": "What you like only", "icon": "", "isCorrect": false},
                {"text": "Past weather", "icon": "", "isCorrect": false},
                {"text": "Nothing useful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Research reveals customer needs and market trends."
        },
        {
            "question": "E-commerce allows farmers to:",
            "type": "multiple_choice",
            "options": [
                {"text": "Sell online to wider markets", "icon": "💻", "isCorrect": true},
                {"text": "Only buy online", "icon": "", "isCorrect": false},
                {"text": "Avoid all sales", "icon": "", "isCorrect": false},
                {"text": "Stop farming", "icon": "", "isCorrect": false}
            ],
            "explanation": "Online platforms connect farmers with distant buyers."
        },
        {
            "question": "Social media helps marketing by:",
            "type": "multiple_choice",
            "options": [
                {"text": "Reaching customers directly", "icon": "📱", "isCorrect": true},
                {"text": "Wasting time always", "icon": "", "isCorrect": false},
                {"text": "Hiding products", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Social platforms are low-cost ways to promote products."
        },
        {
            "question": "Niche markets are:",
            "type": "multiple_choice",
            "options": [
                {"text": "Specialized smaller markets", "icon": "🎯", "isCorrect": true},
                {"text": "The biggest markets", "icon": "", "isCorrect": false},
                {"text": "Free markets", "icon": "", "isCorrect": false},
                {"text": "Government markets", "icon": "", "isCorrect": false}
            ],
            "explanation": "Niche markets have specific demands and often pay premiums."
        },
        {
            "question": "Competitive advantage comes from:",
            "type": "multiple_choice",
            "options": [
                {"text": "Being better in some way", "icon": "🏆", "isCorrect": true},
                {"text": "Copying competitors exactly", "icon": "", "isCorrect": false},
                {"text": "Ignoring the market", "icon": "", "isCorrect": false},
                {"text": "Selling less", "icon": "", "isCorrect": false}
            ],
            "explanation": "Advantages can be quality, price, service, or uniqueness."
        },
        {
            "question": "Customer feedback helps:",
            "type": "multiple_choice",
            "options": [
                {"text": "Improve products and service", "icon": "📝", "isCorrect": true},
                {"text": "Ignore problems", "icon": "", "isCorrect": false},
                {"text": "Reduce quality", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "Listen to customers to meet their needs better."
        },
        {
            "question": "Long-term business success requires:",
            "type": "multiple_choice",
            "options": [
                {"text": "Quality, trust, and adaptation", "icon": "🌟", "isCorrect": true},
                {"text": "Cheating customers", "icon": "", "isCorrect": false},
                {"text": "Never changing", "icon": "", "isCorrect": false},
                {"text": "Ignoring trends", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sustainable success comes from consistent quality and trust."
        }
    ]
};

// Make available globally
window.MODULE3_QUESTIONS = MODULE3_QUESTIONS;
