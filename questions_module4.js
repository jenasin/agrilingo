// Module 4: Fun Farm Facts - 100 questions for kids (10 levels x 10 questions)
const MODULE4_QUESTIONS = {
    // Level 1: Amazing Animals
    "module4_level1": [
        {
            "question": "How many eggs can a chicken lay in one year?",
            "type": "multiple_choice",
            "options": [
                {"text": "About 300 eggs!", "icon": "🥚", "isCorrect": true},
                {"text": "Only 10 eggs", "icon": "", "isCorrect": false},
                {"text": "1000 eggs", "icon": "", "isCorrect": false},
                {"text": "No eggs", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wow! A healthy hen can lay about 300 eggs per year - almost one every day!"
        },
        {
            "question": "How much milk does a cow make each day?",
            "type": "multiple_choice",
            "options": [
                {"text": "About 25 liters", "icon": "🥛", "isCorrect": true},
                {"text": "1 cup", "icon": "", "isCorrect": false},
                {"text": "100 liters", "icon": "", "isCorrect": false},
                {"text": "No milk", "icon": "", "isCorrect": false}
            ],
            "explanation": "A dairy cow makes about 25 liters of milk every day - that's 100 glasses!"
        },
        {
            "question": "What sound does a pig make?",
            "type": "multiple_choice",
            "options": [
                {"text": "Oink oink!", "icon": "🐷", "isCorrect": true},
                {"text": "Moo!", "icon": "", "isCorrect": false},
                {"text": "Woof!", "icon": "", "isCorrect": false},
                {"text": "Meow!", "icon": "", "isCorrect": false}
            ],
            "explanation": "Pigs say 'oink oink!' They are very smart animals that can learn tricks!"
        },
        {
            "question": "What do sheep give us?",
            "type": "multiple_choice",
            "options": [
                {"text": "Wool for warm clothes", "icon": "🐑", "isCorrect": true},
                {"text": "Feathers", "icon": "", "isCorrect": false},
                {"text": "Honey", "icon": "", "isCorrect": false},
                {"text": "Eggs", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sheep give us soft wool! We use it to make sweaters, blankets, and socks."
        },
        {
            "question": "How do bees help plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "They spread pollen to make flowers grow", "icon": "🐝", "isCorrect": true},
                {"text": "They eat the plants", "icon": "", "isCorrect": false},
                {"text": "They water the plants", "icon": "", "isCorrect": false},
                {"text": "They don't help", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bees are super helpers! They carry pollen from flower to flower so plants can make fruits and seeds."
        },
        {
            "question": "What baby animal is called a 'chick'?",
            "type": "multiple_choice",
            "options": [
                {"text": "Baby chicken", "icon": "🐤", "isCorrect": true},
                {"text": "Baby cow", "icon": "", "isCorrect": false},
                {"text": "Baby pig", "icon": "", "isCorrect": false},
                {"text": "Baby horse", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby chicken is called a chick! They are fluffy and yellow when they hatch."
        },
        {
            "question": "What do horses eat?",
            "type": "multiple_choice",
            "options": [
                {"text": "Hay and grass", "icon": "🐴", "isCorrect": true},
                {"text": "Pizza", "icon": "", "isCorrect": false},
                {"text": "Ice cream", "icon": "", "isCorrect": false},
                {"text": "Meat", "icon": "", "isCorrect": false}
            ],
            "explanation": "Horses love to eat hay and fresh grass! They also enjoy apples and carrots as treats."
        },
        {
            "question": "How many stomachs does a cow have?",
            "type": "multiple_choice",
            "options": [
                {"text": "Four stomachs!", "icon": "🐄", "isCorrect": true},
                {"text": "One stomach", "icon": "", "isCorrect": false},
                {"text": "Ten stomachs", "icon": "", "isCorrect": false},
                {"text": "No stomach", "icon": "", "isCorrect": false}
            ],
            "explanation": "Amazing! Cows have 4 stomachs to help them digest grass. That's why they chew so much!"
        },
        {
            "question": "What do ducks have on their feet?",
            "type": "multiple_choice",
            "options": [
                {"text": "Webbed feet for swimming", "icon": "🦆", "isCorrect": true},
                {"text": "Shoes", "icon": "", "isCorrect": false},
                {"text": "Claws like a cat", "icon": "", "isCorrect": false},
                {"text": "Hooves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Ducks have webbed feet like flippers! This helps them swim fast in the water."
        },
        {
            "question": "What is a baby goat called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A kid", "icon": "🐐", "isCorrect": true},
                {"text": "A puppy", "icon": "", "isCorrect": false},
                {"text": "A calf", "icon": "", "isCorrect": false},
                {"text": "A lamb", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby goat is called a kid - just like you! Kids are very playful and love to jump."
        }
    ],

    // Level 2: Plant Power
    "module4_level2": [
        {
            "question": "What do plants need to grow?",
            "type": "multiple_choice",
            "options": [
                {"text": "Sun, water, and soil", "icon": "🌱", "isCorrect": true},
                {"text": "Only darkness", "icon": "", "isCorrect": false},
                {"text": "Ice and snow", "icon": "", "isCorrect": false},
                {"text": "Nothing at all", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants need sunshine, water, and good soil to grow big and strong!"
        },
        {
            "question": "What part of the plant grows underground?",
            "type": "multiple_choice",
            "options": [
                {"text": "The roots", "icon": "🌿", "isCorrect": true},
                {"text": "The flower", "icon": "", "isCorrect": false},
                {"text": "The leaves", "icon": "", "isCorrect": false},
                {"text": "The fruit", "icon": "", "isCorrect": false}
            ],
            "explanation": "Roots grow under the ground. They drink up water and hold the plant in place!"
        },
        {
            "question": "What color do most leaves turn in autumn?",
            "type": "multiple_choice",
            "options": [
                {"text": "Red, orange, and yellow", "icon": "🍂", "isCorrect": true},
                {"text": "Blue", "icon": "", "isCorrect": false},
                {"text": "Purple", "icon": "", "isCorrect": false},
                {"text": "Pink", "icon": "", "isCorrect": false}
            ],
            "explanation": "In autumn, leaves change to beautiful red, orange, and yellow colors before falling!"
        },
        {
            "question": "Where do apples grow?",
            "type": "multiple_choice",
            "options": [
                {"text": "On trees", "icon": "🍎", "isCorrect": true},
                {"text": "Under the ground", "icon": "", "isCorrect": false},
                {"text": "In the water", "icon": "", "isCorrect": false},
                {"text": "On bushes", "icon": "", "isCorrect": false}
            ],
            "explanation": "Apples grow on apple trees! One tree can grow hundreds of apples each year."
        },
        {
            "question": "What grows from a seed?",
            "type": "multiple_choice",
            "options": [
                {"text": "A new plant", "icon": "🌱", "isCorrect": true},
                {"text": "A rock", "icon": "", "isCorrect": false},
                {"text": "An animal", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Seeds are like magic! Put them in soil, add water, and a new plant grows!"
        },
        {
            "question": "What vegetable is orange and grows underground?",
            "type": "multiple_choice",
            "options": [
                {"text": "Carrot", "icon": "🥕", "isCorrect": true},
                {"text": "Tomato", "icon": "", "isCorrect": false},
                {"text": "Lettuce", "icon": "", "isCorrect": false},
                {"text": "Pea", "icon": "", "isCorrect": false}
            ],
            "explanation": "Carrots are orange and grow underground! Rabbits love them, and they help you see better!"
        },
        {
            "question": "What makes plants green?",
            "type": "multiple_choice",
            "options": [
                {"text": "A special thing called chlorophyll", "icon": "🍃", "isCorrect": true},
                {"text": "Green paint", "icon": "", "isCorrect": false},
                {"text": "Green water", "icon": "", "isCorrect": false},
                {"text": "Green sunlight", "icon": "", "isCorrect": false}
            ],
            "explanation": "Plants have chlorophyll inside them - it makes them green and helps them make food from sunlight!"
        },
        {
            "question": "How long does it take corn to grow?",
            "type": "multiple_choice",
            "options": [
                {"text": "About 3 months", "icon": "🌽", "isCorrect": true},
                {"text": "One day", "icon": "", "isCorrect": false},
                {"text": "10 years", "icon": "", "isCorrect": false},
                {"text": "One hour", "icon": "", "isCorrect": false}
            ],
            "explanation": "Corn takes about 3 months to grow from a tiny seed to a tall plant with yummy corn!"
        },
        {
            "question": "What fruit grows on vines?",
            "type": "multiple_choice",
            "options": [
                {"text": "Grapes", "icon": "🍇", "isCorrect": true},
                {"text": "Oranges", "icon": "", "isCorrect": false},
                {"text": "Bananas", "icon": "", "isCorrect": false},
                {"text": "Coconuts", "icon": "", "isCorrect": false}
            ],
            "explanation": "Grapes grow on vines that climb and spread. We use them to make juice and raisins!"
        },
        {
            "question": "What do flowers turn into?",
            "type": "multiple_choice",
            "options": [
                {"text": "Fruits with seeds inside", "icon": "🌸", "isCorrect": true},
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Water", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false}
            ],
            "explanation": "After bees visit flowers, they turn into fruits! The fruits have seeds to grow new plants."
        }
    ],

    // Level 3: Farm Food
    "module4_level3": [
        {
            "question": "Where does bread come from?",
            "type": "multiple_choice",
            "options": [
                {"text": "Wheat grown on farms", "icon": "🍞", "isCorrect": true},
                {"text": "Trees", "icon": "", "isCorrect": false},
                {"text": "The ocean", "icon": "", "isCorrect": false},
                {"text": "Mountains", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bread is made from wheat! Farmers grow wheat, then it's turned into flour to make bread."
        },
        {
            "question": "What animal gives us bacon?",
            "type": "multiple_choice",
            "options": [
                {"text": "Pig", "icon": "🥓", "isCorrect": true},
                {"text": "Chicken", "icon": "", "isCorrect": false},
                {"text": "Cow", "icon": "", "isCorrect": false},
                {"text": "Fish", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bacon comes from pigs! Pigs also give us ham and pork chops."
        },
        {
            "question": "What is cheese made from?",
            "type": "multiple_choice",
            "options": [
                {"text": "Milk", "icon": "🧀", "isCorrect": true},
                {"text": "Eggs", "icon": "", "isCorrect": false},
                {"text": "Wheat", "icon": "", "isCorrect": false},
                {"text": "Corn", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cheese is made from milk! It takes about 10 liters of milk to make 1 kg of cheese."
        },
        {
            "question": "Where does orange juice come from?",
            "type": "multiple_choice",
            "options": [
                {"text": "Oranges squeezed from trees", "icon": "🍊", "isCorrect": true},
                {"text": "Orange cows", "icon": "", "isCorrect": false},
                {"text": "The store makes it", "icon": "", "isCorrect": false},
                {"text": "Orange rocks", "icon": "", "isCorrect": false}
            ],
            "explanation": "Orange juice comes from real oranges! Farmers grow orange trees and squeeze the fruit."
        },
        {
            "question": "What makes honey?",
            "type": "multiple_choice",
            "options": [
                {"text": "Bees", "icon": "🍯", "isCorrect": true},
                {"text": "Bears", "icon": "", "isCorrect": false},
                {"text": "Flowers", "icon": "", "isCorrect": false},
                {"text": "Farmers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bees make honey! They collect nectar from flowers and turn it into sweet honey in their hive."
        },
        {
            "question": "Where do french fries come from?",
            "type": "multiple_choice",
            "options": [
                {"text": "Potatoes from the ground", "icon": "🍟", "isCorrect": true},
                {"text": "France only", "icon": "", "isCorrect": false},
                {"text": "Trees", "icon": "", "isCorrect": false},
                {"text": "The sky", "icon": "", "isCorrect": false}
            ],
            "explanation": "French fries are made from potatoes! Potatoes grow underground and farmers dig them up."
        },
        {
            "question": "What is butter made from?",
            "type": "multiple_choice",
            "options": [
                {"text": "Cream from milk", "icon": "🧈", "isCorrect": true},
                {"text": "Yellow paint", "icon": "", "isCorrect": false},
                {"text": "Bananas", "icon": "", "isCorrect": false},
                {"text": "Sunshine", "icon": "", "isCorrect": false}
            ],
            "explanation": "Butter is made by shaking cream (the fatty part of milk) until it becomes solid!"
        },
        {
            "question": "Where does rice grow?",
            "type": "multiple_choice",
            "options": [
                {"text": "In wet, flooded fields", "icon": "🍚", "isCorrect": true},
                {"text": "On mountains", "icon": "", "isCorrect": false},
                {"text": "In the desert", "icon": "", "isCorrect": false},
                {"text": "Under ice", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rice grows in flooded fields called paddies. Rice plants love lots of water!"
        },
        {
            "question": "What animal gives us eggs for breakfast?",
            "type": "multiple_choice",
            "options": [
                {"text": "Chickens", "icon": "🍳", "isCorrect": true},
                {"text": "Dogs", "icon": "", "isCorrect": false},
                {"text": "Cats", "icon": "", "isCorrect": false},
                {"text": "Horses", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chickens lay eggs every day! We eat them scrambled, fried, or boiled for breakfast."
        },
        {
            "question": "What is popcorn made from?",
            "type": "multiple_choice",
            "options": [
                {"text": "A special kind of corn", "icon": "🍿", "isCorrect": true},
                {"text": "Rice", "icon": "", "isCorrect": false},
                {"text": "Wheat", "icon": "", "isCorrect": false},
                {"text": "Potatoes", "icon": "", "isCorrect": false}
            ],
            "explanation": "Popcorn is made from a special corn! When you heat it, water inside makes it POP!"
        }
    ],

    // Level 4: Seasons on the Farm
    "module4_level4": [
        {
            "question": "What do farmers do in spring?",
            "type": "multiple_choice",
            "options": [
                {"text": "Plant seeds", "icon": "🌱", "isCorrect": true},
                {"text": "Build snowmen", "icon": "", "isCorrect": false},
                {"text": "Go swimming", "icon": "", "isCorrect": false},
                {"text": "Rake leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Spring is planting time! Farmers put seeds in the warm soil so crops can grow."
        },
        {
            "question": "When do farmers harvest most crops?",
            "type": "multiple_choice",
            "options": [
                {"text": "In autumn/fall", "icon": "🍂", "isCorrect": true},
                {"text": "In winter", "icon": "", "isCorrect": false},
                {"text": "At midnight", "icon": "", "isCorrect": false},
                {"text": "Never", "icon": "", "isCorrect": false}
            ],
            "explanation": "Autumn is harvest time! Crops are ripe and ready to be picked and stored."
        },
        {
            "question": "What helps plants grow in summer?",
            "type": "multiple_choice",
            "options": [
                {"text": "Lots of sunshine", "icon": "☀️", "isCorrect": true},
                {"text": "Snow", "icon": "", "isCorrect": false},
                {"text": "Darkness", "icon": "", "isCorrect": false},
                {"text": "Ice", "icon": "", "isCorrect": false}
            ],
            "explanation": "Summer brings long sunny days! Plants use sunlight to grow big and make food."
        },
        {
            "question": "What do some animals do in winter?",
            "type": "multiple_choice",
            "options": [
                {"text": "Stay in warm barns", "icon": "🏠", "isCorrect": true},
                {"text": "Go to the beach", "icon": "", "isCorrect": false},
                {"text": "Fly away", "icon": "", "isCorrect": false},
                {"text": "Plant seeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farm animals stay warm in barns during winter! Farmers give them extra food and bedding."
        },
        {
            "question": "What falls from the sky to water plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Rain", "icon": "🌧️", "isCorrect": true},
                {"text": "Candy", "icon": "", "isCorrect": false},
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Leaves", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rain is nature's sprinkler! It gives plants the water they need to grow."
        },
        {
            "question": "Why do farmers wake up early?",
            "type": "multiple_choice",
            "options": [
                {"text": "Animals need feeding and care", "icon": "🌅", "isCorrect": true},
                {"text": "To watch TV", "icon": "", "isCorrect": false},
                {"text": "No reason", "icon": "", "isCorrect": false},
                {"text": "To play video games", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farmers wake up early to feed animals, milk cows, and collect eggs. Animals are hungry in the morning!"
        },
        {
            "question": "What season comes after summer?",
            "type": "multiple_choice",
            "options": [
                {"text": "Autumn/Fall", "icon": "🍁", "isCorrect": true},
                {"text": "Winter", "icon": "", "isCorrect": false},
                {"text": "Spring", "icon": "", "isCorrect": false},
                {"text": "More summer", "icon": "", "isCorrect": false}
            ],
            "explanation": "Autumn comes after summer! Leaves change colors and farmers harvest their crops."
        },
        {
            "question": "What do plants do in winter?",
            "type": "multiple_choice",
            "options": [
                {"text": "Rest and sleep", "icon": "❄️", "isCorrect": true},
                {"text": "Grow faster", "icon": "", "isCorrect": false},
                {"text": "Make more flowers", "icon": "", "isCorrect": false},
                {"text": "Turn blue", "icon": "", "isCorrect": false}
            ],
            "explanation": "Many plants rest in winter. Trees lose leaves and wait for warm spring to grow again."
        },
        {
            "question": "What melts in spring to give water to farms?",
            "type": "multiple_choice",
            "options": [
                {"text": "Snow and ice", "icon": "💧", "isCorrect": true},
                {"text": "Rocks", "icon": "", "isCorrect": false},
                {"text": "Trees", "icon": "", "isCorrect": false},
                {"text": "Houses", "icon": "", "isCorrect": false}
            ],
            "explanation": "When snow melts in spring, it turns into water! This helps fill rivers and water the soil."
        },
        {
            "question": "How many seasons are there in a year?",
            "type": "multiple_choice",
            "options": [
                {"text": "Four: spring, summer, fall, winter", "icon": "🌈", "isCorrect": true},
                {"text": "Two", "icon": "", "isCorrect": false},
                {"text": "Ten", "icon": "", "isCorrect": false},
                {"text": "One", "icon": "", "isCorrect": false}
            ],
            "explanation": "There are 4 seasons! Spring, Summer, Autumn (Fall), and Winter - each is special for farming."
        }
    ],

    // Level 5: Farm Tools
    "module4_level5": [
        {
            "question": "What machine helps farmers plow fields?",
            "type": "multiple_choice",
            "options": [
                {"text": "Tractor", "icon": "🚜", "isCorrect": true},
                {"text": "Car", "icon": "", "isCorrect": false},
                {"text": "Airplane", "icon": "", "isCorrect": false},
                {"text": "Bicycle", "icon": "", "isCorrect": false}
            ],
            "explanation": "Tractors are super strong! They pull plows, plant seeds, and do heavy work on farms."
        },
        {
            "question": "What do farmers use to water plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Hose or sprinkler", "icon": "💦", "isCorrect": true},
                {"text": "Hammer", "icon": "", "isCorrect": false},
                {"text": "Scissors", "icon": "", "isCorrect": false},
                {"text": "Paintbrush", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farmers use hoses, sprinklers, or special irrigation systems to give plants water!"
        },
        {
            "question": "What is a scarecrow for?",
            "type": "multiple_choice",
            "options": [
                {"text": "To scare birds away from crops", "icon": "🎃", "isCorrect": true},
                {"text": "To plant seeds", "icon": "", "isCorrect": false},
                {"text": "To milk cows", "icon": "", "isCorrect": false},
                {"text": "For decoration only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Scarecrows look like people to scare birds! Birds might eat seeds and crops without them."
        },
        {
            "question": "What tool do farmers use to dig soil?",
            "type": "multiple_choice",
            "options": [
                {"text": "Shovel", "icon": "🔧", "isCorrect": true},
                {"text": "Fork and knife", "icon": "", "isCorrect": false},
                {"text": "Pencil", "icon": "", "isCorrect": false},
                {"text": "Book", "icon": "", "isCorrect": false}
            ],
            "explanation": "A shovel helps dig holes in the soil for planting trees and plants!"
        },
        {
            "question": "What carries harvested crops?",
            "type": "multiple_choice",
            "options": [
                {"text": "Wheelbarrow or cart", "icon": "🛒", "isCorrect": true},
                {"text": "Skateboard", "icon": "", "isCorrect": false},
                {"text": "Kite", "icon": "", "isCorrect": false},
                {"text": "Balloon", "icon": "", "isCorrect": false}
            ],
            "explanation": "Wheelbarrows and carts help farmers carry heavy vegetables and fruits!"
        },
        {
            "question": "What machine harvests wheat?",
            "type": "multiple_choice",
            "options": [
                {"text": "Combine harvester", "icon": "🌾", "isCorrect": true},
                {"text": "Vacuum cleaner", "icon": "", "isCorrect": false},
                {"text": "Washing machine", "icon": "", "isCorrect": false},
                {"text": "Refrigerator", "icon": "", "isCorrect": false}
            ],
            "explanation": "A combine harvester cuts wheat, separates the grain, and collects it - all at once!"
        },
        {
            "question": "What keeps animals inside the farm?",
            "type": "multiple_choice",
            "options": [
                {"text": "Fence", "icon": "🏠", "isCorrect": true},
                {"text": "Rope only", "icon": "", "isCorrect": false},
                {"text": "Nothing", "icon": "", "isCorrect": false},
                {"text": "A song", "icon": "", "isCorrect": false}
            ],
            "explanation": "Fences keep animals safe inside the farm and protect crops from animals getting in!"
        },
        {
            "question": "Where do farmers store hay?",
            "type": "multiple_choice",
            "options": [
                {"text": "In a barn", "icon": "🏚️", "isCorrect": true},
                {"text": "In the ocean", "icon": "", "isCorrect": false},
                {"text": "On the roof", "icon": "", "isCorrect": false},
                {"text": "In a tree", "icon": "", "isCorrect": false}
            ],
            "explanation": "Barns store hay, tools, and sometimes animals! They keep everything dry and safe."
        },
        {
            "question": "What do farmers wear to protect their hands?",
            "type": "multiple_choice",
            "options": [
                {"text": "Gloves", "icon": "🧤", "isCorrect": true},
                {"text": "Socks", "icon": "", "isCorrect": false},
                {"text": "Hats", "icon": "", "isCorrect": false},
                {"text": "Glasses", "icon": "", "isCorrect": false}
            ],
            "explanation": "Gloves protect farmers' hands from thorns, dirt, and blisters when working!"
        },
        {
            "question": "What gives light in the barn at night?",
            "type": "multiple_choice",
            "options": [
                {"text": "Electric lights or lanterns", "icon": "💡", "isCorrect": true},
                {"text": "The moon only", "icon": "", "isCorrect": false},
                {"text": "Candles from cows", "icon": "", "isCorrect": false},
                {"text": "Fireflies only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farmers use lights so they can care for animals and work in the barn when it's dark!"
        }
    ],

    // Level 6: Water and Soil
    "module4_level6": [
        {
            "question": "Why is water important for plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Plants drink water to live and grow", "icon": "💧", "isCorrect": true},
                {"text": "Plants like to swim", "icon": "", "isCorrect": false},
                {"text": "Water makes plants blue", "icon": "", "isCorrect": false},
                {"text": "Plants don't need water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Just like you, plants need to drink water! Water travels from roots to leaves."
        },
        {
            "question": "What color is healthy soil?",
            "type": "multiple_choice",
            "options": [
                {"text": "Dark brown or black", "icon": "🟤", "isCorrect": true},
                {"text": "Bright blue", "icon": "", "isCorrect": false},
                {"text": "Pink", "icon": "", "isCorrect": false},
                {"text": "White", "icon": "", "isCorrect": false}
            ],
            "explanation": "Dark soil is healthy soil! It has lots of nutrients that help plants grow strong."
        },
        {
            "question": "What lives in the soil and helps plants?",
            "type": "multiple_choice",
            "options": [
                {"text": "Earthworms", "icon": "🪱", "isCorrect": true},
                {"text": "Fish", "icon": "", "isCorrect": false},
                {"text": "Birds", "icon": "", "isCorrect": false},
                {"text": "Butterflies", "icon": "", "isCorrect": false}
            ],
            "explanation": "Earthworms are soil heroes! They dig tunnels that let air and water reach plant roots."
        },
        {
            "question": "Where do plant roots get water from?",
            "type": "multiple_choice",
            "options": [
                {"text": "From the soil", "icon": "🌿", "isCorrect": true},
                {"text": "From the sky", "icon": "", "isCorrect": false},
                {"text": "From the sun", "icon": "", "isCorrect": false},
                {"text": "From other plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Roots drink water from the soil! That's why we water the ground, not the leaves."
        },
        {
            "question": "What happens if plants get too much water?",
            "type": "multiple_choice",
            "options": [
                {"text": "Their roots can rot", "icon": "😢", "isCorrect": true},
                {"text": "They grow super big", "icon": "", "isCorrect": false},
                {"text": "They turn into fish", "icon": "", "isCorrect": false},
                {"text": "They fly away", "icon": "", "isCorrect": false}
            ],
            "explanation": "Too much water can drown plant roots! Plants need the right amount - not too much, not too little."
        },
        {
            "question": "What is compost?",
            "type": "multiple_choice",
            "options": [
                {"text": "Old plants turned into plant food", "icon": "🍂", "isCorrect": true},
                {"text": "Candy for plants", "icon": "", "isCorrect": false},
                {"text": "Colored water", "icon": "", "isCorrect": false},
                {"text": "A type of bug", "icon": "", "isCorrect": false}
            ],
            "explanation": "Compost is made from old leaves and food scraps! It becomes super healthy food for plants."
        },
        {
            "question": "Why do farmers rotate crops?",
            "type": "multiple_choice",
            "options": [
                {"text": "To keep soil healthy", "icon": "🔄", "isCorrect": true},
                {"text": "For fun", "icon": "", "isCorrect": false},
                {"text": "To confuse plants", "icon": "", "isCorrect": false},
                {"text": "No reason", "icon": "", "isCorrect": false}
            ],
            "explanation": "Growing different plants each year keeps soil healthy! Each plant uses different nutrients."
        },
        {
            "question": "What does rain do for the farm?",
            "type": "multiple_choice",
            "options": [
                {"text": "Gives plants free water", "icon": "🌧️", "isCorrect": true},
                {"text": "Makes plants sad", "icon": "", "isCorrect": false},
                {"text": "Washes away all plants", "icon": "", "isCorrect": false},
                {"text": "Nothing helpful", "icon": "", "isCorrect": false}
            ],
            "explanation": "Rain is free water from the sky! It fills rivers, ponds, and waters all the plants."
        },
        {
            "question": "What is irrigation?",
            "type": "multiple_choice",
            "options": [
                {"text": "A way to bring water to plants", "icon": "💦", "isCorrect": true},
                {"text": "A type of plant", "icon": "", "isCorrect": false},
                {"text": "A farm animal", "icon": "", "isCorrect": false},
                {"text": "A kind of food", "icon": "", "isCorrect": false}
            ],
            "explanation": "Irrigation brings water to crops through pipes, sprinklers, or channels when there's no rain!"
        },
        {
            "question": "What makes soil sandy?",
            "type": "multiple_choice",
            "options": [
                {"text": "Tiny pieces of rock", "icon": "🏖️", "isCorrect": true},
                {"text": "Beach vacations", "icon": "", "isCorrect": false},
                {"text": "Sugar", "icon": "", "isCorrect": false},
                {"text": "Salt", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sandy soil has lots of tiny rock pieces! Water drains through it quickly."
        }
    ],

    // Level 7: Farm Helpers
    "module4_level7": [
        {
            "question": "How do dogs help on farms?",
            "type": "multiple_choice",
            "options": [
                {"text": "They herd sheep and guard animals", "icon": "🐕", "isCorrect": true},
                {"text": "They plant seeds", "icon": "", "isCorrect": false},
                {"text": "They milk cows", "icon": "", "isCorrect": false},
                {"text": "They drive tractors", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farm dogs are amazing helpers! They keep sheep together and protect animals from danger."
        },
        {
            "question": "What do cats do on farms?",
            "type": "multiple_choice",
            "options": [
                {"text": "Catch mice that eat grain", "icon": "🐱", "isCorrect": true},
                {"text": "Lay eggs", "icon": "", "isCorrect": false},
                {"text": "Give milk", "icon": "", "isCorrect": false},
                {"text": "Pull plows", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farm cats catch mice! Mice can eat stored grain, so cats help protect the food."
        },
        {
            "question": "How do ladybugs help farmers?",
            "type": "multiple_choice",
            "options": [
                {"text": "They eat pests that harm plants", "icon": "🐞", "isCorrect": true},
                {"text": "They water plants", "icon": "", "isCorrect": false},
                {"text": "They plant seeds", "icon": "", "isCorrect": false},
                {"text": "They make honey", "icon": "", "isCorrect": false}
            ],
            "explanation": "Ladybugs eat aphids and other tiny bugs that damage plants! They're nature's pest control."
        },
        {
            "question": "Why are bees important to farms?",
            "type": "multiple_choice",
            "options": [
                {"text": "They pollinate flowers so fruit grows", "icon": "🐝", "isCorrect": true},
                {"text": "They eat weeds", "icon": "", "isCorrect": false},
                {"text": "They give milk", "icon": "", "isCorrect": false},
                {"text": "They dig holes", "icon": "", "isCorrect": false}
            ],
            "explanation": "Bees are super important! Without them carrying pollen, many fruits and vegetables wouldn't grow."
        },
        {
            "question": "What can horses do on a farm?",
            "type": "multiple_choice",
            "options": [
                {"text": "Pull carts and carry people", "icon": "🐴", "isCorrect": true},
                {"text": "Fly to other farms", "icon": "", "isCorrect": false},
                {"text": "Lay eggs", "icon": "", "isCorrect": false},
                {"text": "Swim underwater", "icon": "", "isCorrect": false}
            ],
            "explanation": "Horses are strong helpers! They can pull heavy loads and help farmers travel around big farms."
        },
        {
            "question": "How do birds help gardens?",
            "type": "multiple_choice",
            "options": [
                {"text": "They eat insects that harm plants", "icon": "🐦", "isCorrect": true},
                {"text": "They water plants", "icon": "", "isCorrect": false},
                {"text": "They pull weeds", "icon": "", "isCorrect": false},
                {"text": "They plant seeds only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Birds eat lots of insects! Some also spread seeds and help new plants grow in new places."
        },
        {
            "question": "What do butterflies help with?",
            "type": "multiple_choice",
            "options": [
                {"text": "Pollinating flowers", "icon": "🦋", "isCorrect": true},
                {"text": "Digging soil", "icon": "", "isCorrect": false},
                {"text": "Watering plants", "icon": "", "isCorrect": false},
                {"text": "Milking cows", "icon": "", "isCorrect": false}
            ],
            "explanation": "Butterflies visit flowers and spread pollen just like bees! They help plants make seeds."
        },
        {
            "question": "Why do some farmers keep ducks?",
            "type": "multiple_choice",
            "options": [
                {"text": "They eat slugs and give eggs", "icon": "🦆", "isCorrect": true},
                {"text": "They guard the farm", "icon": "", "isCorrect": false},
                {"text": "They give milk", "icon": "", "isCorrect": false},
                {"text": "They catch mice", "icon": "", "isCorrect": false}
            ],
            "explanation": "Ducks eat slimy slugs and snails that damage plants! Plus they lay yummy eggs."
        },
        {
            "question": "How do goats help clear land?",
            "type": "multiple_choice",
            "options": [
                {"text": "They eat weeds and bushes", "icon": "🐐", "isCorrect": true},
                {"text": "They use tractors", "icon": "", "isCorrect": false},
                {"text": "They dig with shovels", "icon": "", "isCorrect": false},
                {"text": "They bark at weeds", "icon": "", "isCorrect": false}
            ],
            "explanation": "Goats love to eat! They munch on weeds, bushes, and plants that other animals won't eat."
        },
        {
            "question": "What do donkeys help with on farms?",
            "type": "multiple_choice",
            "options": [
                {"text": "Carrying heavy loads", "icon": "🫏", "isCorrect": true},
                {"text": "Flying messages", "icon": "", "isCorrect": false},
                {"text": "Swimming", "icon": "", "isCorrect": false},
                {"text": "Cooking food", "icon": "", "isCorrect": false}
            ],
            "explanation": "Donkeys are super strong! They can carry heavy bags up steep hills where tractors can't go."
        }
    ],

    // Level 8: Farm Babies
    "module4_level8": [
        {
            "question": "What is a baby cow called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A calf", "icon": "🐄", "isCorrect": true},
                {"text": "A puppy", "icon": "", "isCorrect": false},
                {"text": "A kitten", "icon": "", "isCorrect": false},
                {"text": "A chick", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby cow is called a calf! Calves drink milk from their mothers until they're big enough to eat grass."
        },
        {
            "question": "What is a baby sheep called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A lamb", "icon": "🐑", "isCorrect": true},
                {"text": "A foal", "icon": "", "isCorrect": false},
                {"text": "A calf", "icon": "", "isCorrect": false},
                {"text": "A piglet", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby sheep is called a lamb! They're soft and fluffy and love to jump and play."
        },
        {
            "question": "What is a baby pig called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A piglet", "icon": "🐷", "isCorrect": true},
                {"text": "A lamb", "icon": "", "isCorrect": false},
                {"text": "A calf", "icon": "", "isCorrect": false},
                {"text": "A chick", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby pig is called a piglet! Mother pigs can have 10-12 piglets at once!"
        },
        {
            "question": "What is a baby horse called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A foal", "icon": "🐴", "isCorrect": true},
                {"text": "A calf", "icon": "", "isCorrect": false},
                {"text": "A lamb", "icon": "", "isCorrect": false},
                {"text": "A puppy", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby horse is called a foal! Foals can stand up and walk within an hour of being born!"
        },
        {
            "question": "What is a baby duck called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A duckling", "icon": "🦆", "isCorrect": true},
                {"text": "A chick", "icon": "", "isCorrect": false},
                {"text": "A puppy", "icon": "", "isCorrect": false},
                {"text": "A kitten", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby duck is called a duckling! They follow their mother in a cute line and can swim right away."
        },
        {
            "question": "How do chicks hatch?",
            "type": "multiple_choice",
            "options": [
                {"text": "They break out of eggs", "icon": "🐣", "isCorrect": true},
                {"text": "They appear by magic", "icon": "", "isCorrect": false},
                {"text": "From the store", "icon": "", "isCorrect": false},
                {"text": "From flowers", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chicks grow inside eggs for 21 days, then use a special tooth to crack the shell and come out!"
        },
        {
            "question": "What do baby animals drink from their mothers?",
            "type": "multiple_choice",
            "options": [
                {"text": "Milk", "icon": "🍼", "isCorrect": true},
                {"text": "Juice", "icon": "", "isCorrect": false},
                {"text": "Water only", "icon": "", "isCorrect": false},
                {"text": "Soda", "icon": "", "isCorrect": false}
            ],
            "explanation": "Baby mammals drink their mother's milk! It has everything they need to grow big and strong."
        },
        {
            "question": "What is a baby turkey called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A poult", "icon": "🦃", "isCorrect": true},
                {"text": "A chick", "icon": "", "isCorrect": false},
                {"text": "A calf", "icon": "", "isCorrect": false},
                {"text": "A lamb", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby turkey is called a poult! They're small and fuzzy when they hatch."
        },
        {
            "question": "What is a baby rabbit called?",
            "type": "multiple_choice",
            "options": [
                {"text": "A kit or bunny", "icon": "🐰", "isCorrect": true},
                {"text": "A puppy", "icon": "", "isCorrect": false},
                {"text": "A lamb", "icon": "", "isCorrect": false},
                {"text": "A calf", "icon": "", "isCorrect": false}
            ],
            "explanation": "A baby rabbit is called a kit or bunny! Mother rabbits can have 4-12 babies at once."
        },
        {
            "question": "Where do hen eggs need to be to hatch?",
            "type": "multiple_choice",
            "options": [
                {"text": "Warm and cozy", "icon": "🥚", "isCorrect": true},
                {"text": "In the freezer", "icon": "", "isCorrect": false},
                {"text": "In water", "icon": "", "isCorrect": false},
                {"text": "In the dark only", "icon": "", "isCorrect": false}
            ],
            "explanation": "Eggs need to stay warm (about 38°C) for 21 days. The mother hen sits on them to keep them cozy!"
        }
    ],

    // Level 9: Farm Safety
    "module4_level9": [
        {
            "question": "Why should you wash hands after touching animals?",
            "type": "multiple_choice",
            "options": [
                {"text": "To wash away germs", "icon": "🧼", "isCorrect": true},
                {"text": "Animals don't like clean hands", "icon": "", "isCorrect": false},
                {"text": "To make hands colorful", "icon": "", "isCorrect": false},
                {"text": "No reason", "icon": "", "isCorrect": false}
            ],
            "explanation": "Animals can carry germs you can't see! Washing hands keeps you healthy and safe."
        },
        {
            "question": "What should you wear on a sunny farm day?",
            "type": "multiple_choice",
            "options": [
                {"text": "A hat and sunscreen", "icon": "👒", "isCorrect": true},
                {"text": "A winter coat", "icon": "", "isCorrect": false},
                {"text": "Nothing special", "icon": "", "isCorrect": false},
                {"text": "Rain boots only", "icon": "", "isCorrect": false}
            ],
            "explanation": "The sun can be very strong! A hat and sunscreen protect your skin from getting burned."
        },
        {
            "question": "Should you run near farm animals?",
            "type": "multiple_choice",
            "options": [
                {"text": "No, walk slowly and calmly", "icon": "🚶", "isCorrect": true},
                {"text": "Yes, always run fast", "icon": "", "isCorrect": false},
                {"text": "Yes, they like races", "icon": "", "isCorrect": false},
                {"text": "Only run at night", "icon": "", "isCorrect": false}
            ],
            "explanation": "Running can scare animals! Walk calmly and quietly so animals feel safe around you."
        },
        {
            "question": "Why wear boots on the farm?",
            "type": "multiple_choice",
            "options": [
                {"text": "To protect feet from mud and sharp things", "icon": "👢", "isCorrect": true},
                {"text": "Boots look cool", "icon": "", "isCorrect": false},
                {"text": "Animals like boots", "icon": "", "isCorrect": false},
                {"text": "No reason", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farms can be muddy with sharp tools! Boots keep your feet dry and protected."
        },
        {
            "question": "Is it safe to eat fruit straight from the plant?",
            "type": "multiple_choice",
            "options": [
                {"text": "Wash it first to remove dirt", "icon": "🍎", "isCorrect": true},
                {"text": "Yes, always eat it dirty", "icon": "", "isCorrect": false},
                {"text": "Never eat fruit", "icon": "", "isCorrect": false},
                {"text": "Only eat it at night", "icon": "", "isCorrect": false}
            ],
            "explanation": "Always wash fruits and vegetables! They might have dirt, bugs, or spray on them."
        },
        {
            "question": "What should you do if you see a big farm machine?",
            "type": "multiple_choice",
            "options": [
                {"text": "Stay far away from it", "icon": "🚜", "isCorrect": true},
                {"text": "Climb on it", "icon": "", "isCorrect": false},
                {"text": "Touch the wheels", "icon": "", "isCorrect": false},
                {"text": "Stand behind it", "icon": "", "isCorrect": false}
            ],
            "explanation": "Farm machines are big and powerful! Stay away unless an adult says it's safe."
        },
        {
            "question": "Why should you drink water on hot farm days?",
            "type": "multiple_choice",
            "options": [
                {"text": "To stay healthy and not get sick", "icon": "💧", "isCorrect": true},
                {"text": "Water tastes good only", "icon": "", "isCorrect": false},
                {"text": "No reason to drink water", "icon": "", "isCorrect": false},
                {"text": "To water the plants", "icon": "", "isCorrect": false}
            ],
            "explanation": "Hot days make you sweat! Drinking water keeps your body cool and healthy."
        },
        {
            "question": "Should you pet animals you don't know?",
            "type": "multiple_choice",
            "options": [
                {"text": "Ask the farmer first", "icon": "🙋", "isCorrect": true},
                {"text": "Pet all animals always", "icon": "", "isCorrect": false},
                {"text": "Never be near animals", "icon": "", "isCorrect": false},
                {"text": "Only pet them at night", "icon": "", "isCorrect": false}
            ],
            "explanation": "Some animals might be scared or grumpy! Always ask the farmer if it's safe to pet them."
        },
        {
            "question": "What should you do if you find a sharp tool?",
            "type": "multiple_choice",
            "options": [
                {"text": "Tell an adult right away", "icon": "⚠️", "isCorrect": true},
                {"text": "Play with it", "icon": "", "isCorrect": false},
                {"text": "Hide it", "icon": "", "isCorrect": false},
                {"text": "Throw it", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sharp tools can hurt you! Always tell a grown-up if you find one so they can put it away safely."
        },
        {
            "question": "Why close gates on the farm?",
            "type": "multiple_choice",
            "options": [
                {"text": "So animals don't escape", "icon": "🚪", "isCorrect": true},
                {"text": "Gates like being closed", "icon": "", "isCorrect": false},
                {"text": "No reason", "icon": "", "isCorrect": false},
                {"text": "To keep the sun out", "icon": "", "isCorrect": false}
            ],
            "explanation": "If gates are left open, animals might run away and get lost or hurt! Always close gates behind you."
        }
    ],

    // Level 10: Farm Fun Facts
    "module4_level10": [
        {
            "question": "Can pigs swim?",
            "type": "multiple_choice",
            "options": [
                {"text": "Yes, pigs are good swimmers!", "icon": "🐷", "isCorrect": true},
                {"text": "No, pigs can't swim", "icon": "", "isCorrect": false},
                {"text": "Only baby pigs swim", "icon": "", "isCorrect": false},
                {"text": "Pigs hate water", "icon": "", "isCorrect": false}
            ],
            "explanation": "Surprise! Pigs are excellent swimmers! They love water to cool off on hot days."
        },
        {
            "question": "Do chickens have teeth?",
            "type": "multiple_choice",
            "options": [
                {"text": "No, they swallow small stones to grind food", "icon": "🐔", "isCorrect": true},
                {"text": "Yes, lots of teeth", "icon": "", "isCorrect": false},
                {"text": "Only baby chickens have teeth", "icon": "", "isCorrect": false},
                {"text": "They have 100 teeth", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chickens don't have teeth! They swallow tiny stones that grind up food in their tummy."
        },
        {
            "question": "Can cows walk upstairs?",
            "type": "multiple_choice",
            "options": [
                {"text": "Yes, but they can't walk down!", "icon": "🐄", "isCorrect": true},
                {"text": "No, cows can't climb", "icon": "", "isCorrect": false},
                {"text": "Cows love stairs", "icon": "", "isCorrect": false},
                {"text": "Cows can only jump", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cows can walk up stairs but not down! Their knees don't bend the right way to go down stairs."
        },
        {
            "question": "How long can a chicken live?",
            "type": "multiple_choice",
            "options": [
                {"text": "Up to 10 years or more", "icon": "🐓", "isCorrect": true},
                {"text": "Only 1 week", "icon": "", "isCorrect": false},
                {"text": "100 years", "icon": "", "isCorrect": false},
                {"text": "1 day", "icon": "", "isCorrect": false}
            ],
            "explanation": "Chickens can live up to 10 years or even longer! The oldest chicken lived to be 22 years old!"
        },
        {
            "question": "Do goats eat everything?",
            "type": "multiple_choice",
            "options": [
                {"text": "No, but they taste everything with their lips", "icon": "🐐", "isCorrect": true},
                {"text": "Yes, even metal", "icon": "", "isCorrect": false},
                {"text": "They only eat grass", "icon": "", "isCorrect": false},
                {"text": "They never eat", "icon": "", "isCorrect": false}
            ],
            "explanation": "Goats don't really eat everything! They're curious and taste things with their lips to learn about them."
        },
        {
            "question": "Can horses sleep standing up?",
            "type": "multiple_choice",
            "options": [
                {"text": "Yes, horses can sleep standing!", "icon": "🐴", "isCorrect": true},
                {"text": "No, horses only lie down", "icon": "", "isCorrect": false},
                {"text": "Horses never sleep", "icon": "", "isCorrect": false},
                {"text": "Horses sleep underwater", "icon": "", "isCorrect": false}
            ],
            "explanation": "Horses have special legs that lock in place! They can nap while standing up, but lie down for deep sleep."
        },
        {
            "question": "How far can a rooster's crow be heard?",
            "type": "multiple_choice",
            "options": [
                {"text": "Up to 2 kilometers away!", "icon": "🐓", "isCorrect": true},
                {"text": "Only 1 meter", "icon": "", "isCorrect": false},
                {"text": "Around the whole world", "icon": "", "isCorrect": false},
                {"text": "Roosters are silent", "icon": "", "isCorrect": false}
            ],
            "explanation": "Cock-a-doodle-doo! A rooster's crow is so loud it can be heard 2 km away! That's why they're great alarm clocks!"
        },
        {
            "question": "Do sheep recognize faces?",
            "type": "multiple_choice",
            "options": [
                {"text": "Yes, they remember up to 50 faces!", "icon": "🐑", "isCorrect": true},
                {"text": "No, sheep can't see", "icon": "", "isCorrect": false},
                {"text": "Only for 1 minute", "icon": "", "isCorrect": false},
                {"text": "Sheep are blind", "icon": "", "isCorrect": false}
            ],
            "explanation": "Sheep are smarter than you think! They can remember and recognize up to 50 different sheep and human faces!"
        },
        {
            "question": "What is special about a duck's quack?",
            "type": "multiple_choice",
            "options": [
                {"text": "It doesn't echo!", "icon": "🦆", "isCorrect": true},
                {"text": "It's very quiet", "icon": "", "isCorrect": false},
                {"text": "Ducks can't quack", "icon": "", "isCorrect": false},
                {"text": "It sounds like a cow", "icon": "", "isCorrect": false}
            ],
            "explanation": "A duck's quack doesn't make an echo! Scientists aren't sure why. Try testing it sometime!"
        },
        {
            "question": "How much does the biggest pumpkin ever weigh?",
            "type": "multiple_choice",
            "options": [
                {"text": "Over 1000 kg - heavier than a car!", "icon": "🎃", "isCorrect": true},
                {"text": "1 kg", "icon": "", "isCorrect": false},
                {"text": "100 grams", "icon": "", "isCorrect": false},
                {"text": "Pumpkins don't weigh anything", "icon": "", "isCorrect": false}
            ],
            "explanation": "The world record pumpkin weighs over 1000 kg! That's heavier than a small car! Giant pumpkins are amazing!"
        }
    ]
};

// Make available globally
window.MODULE4_QUESTIONS = MODULE4_QUESTIONS;
