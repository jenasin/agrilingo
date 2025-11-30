// AgroLinguo - Main Questions Loader
// This file combines all question modules

(function() {
    function initQuestions() {
        // Check if at least first 3 modules are loaded (the English ones)
        if (window.MODULE1_QUESTIONS &&
            window.MODULE2_QUESTIONS &&
            window.MODULE3_QUESTIONS) {

            window.ALL_QUESTIONS = {
                1: window.MODULE1_QUESTIONS,   // Soil & Basics
                2: window.MODULE2_QUESTIONS,   // Plant Protection
                3: window.MODULE3_QUESTIONS,   // Harvest & Sales
                4: window.MODULE4_QUESTIONS || {},  // Irrigation
                5: window.MODULE5_QUESTIONS || {},  // Farm Machinery
                6: window.MODULE6_QUESTIONS || {},  // Ecology
                7: window.MODULE7_QUESTIONS || {},  // Livestock
                8: window.MODULE8_QUESTIONS || {},  // Fertilization
                9: window.MODULE9_QUESTIONS || {},  // Weather & Climate
                10: window.MODULE10_QUESTIONS || {} // Specialty Crops
            };

            console.log('AgroLinguo: Modules loaded!');
            console.log('Total modules:', Object.keys(window.ALL_QUESTIONS).length);

            let totalQuestions = 0;
            for (const moduleId in window.ALL_QUESTIONS) {
                for (const level in window.ALL_QUESTIONS[moduleId]) {
                    if (Array.isArray(window.ALL_QUESTIONS[moduleId][level])) {
                        totalQuestions += window.ALL_QUESTIONS[moduleId][level].length;
                    }
                }
            }
            console.log('Total questions:', totalQuestions);
            return true;
        }
        return false;
    }

    if (!initQuestions()) {
        window.addEventListener('DOMContentLoaded', function() {
            if (!window.ALL_QUESTIONS) {
                const checkModules = function() {
                    if (!initQuestions()) {
                        setTimeout(checkModules, 50);
                    }
                };
                checkModules();
            }
        });
    }
})();

function getQuestions(moduleId, level) {
    const key = `module${moduleId}_level${level}`;
    if (window.ALL_QUESTIONS && window.ALL_QUESTIONS[moduleId] && window.ALL_QUESTIONS[moduleId][key]) {
        return window.ALL_QUESTIONS[moduleId][key];
    }
    return [];
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
