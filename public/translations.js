// Translation system for English and Hindi
const translations = {
    en: {
        // Home page
        'site.title': 'Astro Girija',
        'site.url': 'astrogirija.in',
        'site.tagline': 'Discover your life path through Lo Shu Grid Numerology',
        'site.description': 'Ancient wisdom for modern living.',
        'dob.label': 'Enter Your Date of Birth',
        'dob.button': 'Calculate My Grid',
        'language.toggle': 'EN | हिंदी',

        // Navigation
        'nav.home': 'Home',
        'nav.grid': 'Grid',
        'nav.learn': 'Learn',
        'nav.match': 'Match',
        'nav.more': 'More',

        // Sections
        'section.study': 'Study Material',
        'section.compatibility': 'Compatibility',
        'section.predictions': 'Predictions',
        'section.guidance': 'Guidance',

        // Study Material
        'study.grid': 'Lo Shu Grid',
        'study.grid.desc': 'View your complete 3×3 grid with all numbers',
        'study.numbers': 'Present & Missing Numbers',
        'study.numbers.desc': 'Understand numbers 1-9 and what\'s missing in your chart',
        'study.repetitions': 'Repetitions',
        'study.repetitions.desc': 'Impact of numbers appearing 2x, 3x, or 4x+ times',
        'study.remedies': 'Remedies & Mantras',
        'study.remedies.desc': 'Solutions, gemstones, and powerful mantras',

        // Compatibility
        'compat.combinations': 'Driver-Conductor Combinations',
        'compat.combinations.desc': 'Your personality and destiny compatibility',
        'compat.all': 'All 81 Combinations',
        'compat.all.desc': 'Relationship & professional compatibility analysis',
        'compat.lucky': 'Lucky / Bad / Neutral Numbers',
        'compat.lucky.desc': 'Find your favorable and unfavorable numbers',

        // Predictions
        'pred.monthly': 'Monthly & Yearly Forecast',
        'pred.monthly.desc': 'Your personal predictions for 2026',
        'pred.lifearea': 'Life-Area Predictions',
        'pred.lifearea.desc': 'Planes, arrows, and pattern analysis',

        // Guidance
        'guide.learning': 'Complete Learning Hub',
        'guide.learning.desc': 'Tutorials, meanings, and comprehensive guides',
        'guide.guidelines': 'Life Guidelines',
        'guide.guidelines.desc': 'Do\'s and don\'ts based on your numbers',
        'guide.name': 'Name Numerology',
        'guide.name.desc': 'Calculate and analyze your name number',
        'guide.discovery': 'Self-Discovery',
        'guide.discovery.desc': 'Learn how to make and read Lo Shu Grids',

        // Predictions page
        'pred.universal': 'Universal Energy 2026',
        'pred.universal.number': 'Universal Year Number',
        'pred.personal': 'Your Personal Year 2026',
        'pred.personal.number': 'Personal Year',
        'pred.next': 'Next Month Forecast',
        'pred.monthly.full': 'Monthly Forecast 2026',
        'pred.monthly.desc.full': 'Your personal month number for each month of 2026',
        'pred.understanding': 'Understanding Your 2026',
        'pred.calculated': 'How This Was Calculated',
        'pred.impact': 'Universal Year Impact',
        'pred.guidance': 'Personal Year Guidance',
        'pred.cycles': 'Monthly Cycles',
        'pred.no.dob': 'Please enter your date of birth first',
        'pred.go.home': 'Go to Home',
        'pred.enter.dob': 'Enter Date of Birth',
        'pred.enter.dob.desc': 'To see your personalized predictions, please select your date of birth',
        'pred.select.date': 'Select Date',

        // Personal Year Meanings
        'year.1.title': 'New Beginnings',
        'year.1.desc': 'A year of fresh starts, independence, and leadership. Time to take initiative and start new projects.',
        'year.2.title': 'Cooperation & Balance',
        'year.2.desc': 'Focus on partnerships, diplomacy, and patience. Build relationships and work with others.',
        'year.3.title': 'Creativity & Expression',
        'year.3.desc': 'Express yourself creatively. A social year full of joy, communication, and artistic pursuits.',
        'year.4.title': 'Foundation & Hard Work',
        'year.4.desc': 'Build solid foundations. Discipline, organization, and practical efforts bring success.',
        'year.5.title': 'Change & Freedom',
        'year.5.desc': 'Embrace change and adventure. Travel, variety, and personal freedom are highlighted.',
        'year.6.title': 'Responsibility & Love',
        'year.6.desc': 'Focus on family, home, and relationships. Take responsibility and nurture others.',
        'year.7.title': 'Spirituality & Reflection',
        'year.7.desc': 'Inner growth and spiritual development. Time for study, introspection, and wisdom.',
        'year.8.title': 'Abundance & Power',
        'year.8.desc': 'Material success and achievement. Business, finance, and recognition come into focus.',
        'year.9.title': 'Completion & Transformation',
        'year.9.desc': 'End of a cycle. Let go, forgive, and prepare for new beginnings. Humanitarian efforts.',

        // Quick Access
        'quick.access': 'Quick Access',
        'quick.grid': 'My Grid',
        'quick.predictions': 'Predictions',
        'quick.compatibility': 'Compatibility',
        'quick.learn': 'Learn More',
    },

    hi: {
        // Home page
        'site.title': 'एस्ट्रो गिरिजा',
        'site.url': 'astrogirija.in',
        'site.tagline': 'लो शू ग्रिड न्यूमेरोलॉजी के माध्यम से अपना जीवन पथ खोजें',
        'site.description': 'आधुनिक जीवन के लिए प्राचीन ज्ञान।',
        'dob.label': 'अपनी जन्म तिथि दर्ज करें',
        'dob.button': 'मेरा ग्रिड बनाएं',
        'language.toggle': 'EN | हिंदी',

        // Navigation
        'nav.home': 'होम',
        'nav.grid': 'ग्रिड',
        'nav.learn': 'सीखें',
        'nav.match': 'मैच',
        'nav.more': 'अधिक',

        // Sections
        'section.study': 'अध्ययन सामग्री',
        'section.compatibility': 'अनुकूलता',
        'section.predictions': 'भविष्यवाणियां',
        'section.guidance': 'मार्गदर्शन',

        // Study Material
        'study.grid': 'लो शू ग्रिड',
        'study.grid.desc': 'सभी संख्याओं के साथ अपना संपूर्ण 3×3 ग्रिड देखें',
        'study.numbers': 'उपस्थित और अनुपस्थित संख्याएं',
        'study.numbers.desc': '1-9 संख्याओं को समझें और आपके चार्ट में क्या गायब है',
        'study.repetitions': 'पुनरावृत्ति',
        'study.repetitions.desc': '2x, 3x, या 4x+ बार दिखने वाली संख्याओं का प्रभाव',
        'study.remedies': 'उपाय और मंत्र',
        'study.remedies.desc': 'समाधान, रत्न और शक्तिशाली मंत्र',

        // Compatibility
        'compat.combinations': 'ड्राइवर-कंडक्टर संयोजन',
        'compat.combinations.desc': 'आपका व्यक्तित्व और भाग्य अनुकूलता',
        'compat.all': 'सभी 81 संयोजन',
        'compat.all.desc': 'संबंध और पेशेवर अनुकूलता विश्लेषण',
        'compat.lucky': 'भाग्यशाली / खराब / तटस्थ संख्याएं',
        'compat.lucky.desc': 'अपनी अनुकूल और प्रतिकूल संख्याएं खोजें',

        // Predictions
        'pred.monthly': 'मासिक और वार्षिक पूर्वानुमान',
        'pred.monthly.desc': '2026 के लिए आपकी व्यक्तिगत भविष्यवाणियां',
        'pred.lifearea': 'जीवन-क्षेत्र भविष्यवाणियां',
        'pred.lifearea.desc': 'प्लेन्स, तीर और पैटर्न विश्लेषण',

        // Guidance
        'guide.learning': 'पूर्ण सीखने का केंद्र',
        'guide.learning.desc': 'ट्यूटोरियल, अर्थ और व्यापक गाइड',
        'guide.guidelines': 'जीवन दिशानिर्देश',
        'guide.guidelines.desc': 'आपकी संख्याओं के आधार पर करें और न करें',
        'guide.name': 'नाम अंकशास्त्र',
        'guide.name.desc': 'अपने नाम की संख्या की गणना और विश्लेषण करें',
        'guide.discovery': 'आत्म-खोज',
        'guide.discovery.desc': 'लो शू ग्रिड बनाना और पढ़ना सीखें',

        // Predictions page
        'pred.universal': 'सार्वभौमिक ऊर्जा 2026',
        'pred.universal.number': 'सार्वभौमिक वर्ष संख्या',
        'pred.personal': 'आपका व्यक्तिगत वर्ष 2026',
        'pred.personal.number': 'व्यक्तिगत वर्ष',
        'pred.next': 'अगले महीने का पूर्वानुमान',
        'pred.monthly.full': 'मासिक पूर्वानुमान 2026',
        'pred.monthly.desc.full': '2026 के प्रत्येक महीने के लिए आपकी व्यक्तिगत महीने की संख्या',
        'pred.understanding': 'अपने 2026 को समझना',
        'pred.calculated': 'यह कैसे गणना की गई',
        'pred.impact': 'सार्वभौमिक वर्ष प्रभाव',
        'pred.guidance': 'व्यक्तिगत वर्ष मार्गदर्शन',
        'pred.cycles': 'मासिक चक्र',
        'pred.no.dob': 'कृपया पहले अपनी जन्म तिथि दर्ज करें',
        'pred.go.home': 'होम पर जाएं',
        'pred.enter.dob': 'जन्म तिथि दर्ज करें',
        'pred.enter.dob.desc': 'अपनी व्यक्तिगत भविष्यवाणियां देखने के लिए, कृपया अपनी जन्म तिथि चुनें',
        'pred.select.date': 'तिथि चुनें',

        // Personal Year Meanings (Hindi)
        'year.1.title': 'नई शुरुआत',
        'year.1.desc': 'नई शुरुआत, स्वतंत्रता और नेतृत्व का वर्ष। पहल करने और नई परियोजनाएं शुरू करने का समय।',
        'year.2.title': 'सहयोग और संतुलन',
        'year.2.desc': 'साझेदारी, कूटनीति और धैर्य पर ध्यान दें। संबंध बनाएं और दूसरों के साथ काम करें।',
        'year.3.title': 'रचनात्मकता और अभिव्यक्ति',
        'year.3.desc': 'अपने आप को रचनात्मक रूप से व्यक्त करें। खुशी, संचार और कलात्मक गतिविधियों से भरा सामाजिक वर्ष।',
        'year.4.title': 'नींव और कड़ी मेहनत',
        'year.4.desc': 'मजबूत नींव बनाएं। अनुशासन, संगठन और व्यावहारिक प्रयास सफलता लाते हैं।',
        'year.5.title': 'परिवर्तन और स्वतंत्रता',
        'year.5.desc': 'परिवर्तन और साहसिक कार्य को अपनाएं। यात्रा, विविधता और व्यक्तिगत स्वतंत्रता पर जोर।',
        'year.6.title': 'जिम्मेदारी और प्यार',
        'year.6.desc': 'परिवार, घर और रिश्तों पर ध्यान दें। जिम्मेदारी लें और दूसरों का पालन-पोषण करें।',
        'year.7.title': 'आध्यात्मिकता और चिंतन',
        'year.7.desc': 'आंतरिक विकास और आध्यात्मिक विकास। अध्ययन, आत्मनिरीक्षण और ज्ञान का समय।',
        'year.8.title': 'प्रचुरता और शक्ति',
        'year.8.desc': 'भौतिक सफलता और उपलब्धि। व्यवसाय, वित्त और मान्यता पर ध्यान।',
        'year.9.title': 'समापन और परिवर्तन',
        'year.9.desc': 'एक चक्र का अंत। जाने दें, माफ करें, और नई शुरुआत के लिए तैयार रहें। मानवीय प्रयास।',

        // Quick Access
        'quick.access': 'त्वरित पहुंच',
        'quick.grid': 'मेरा ग्रिड',
        'quick.predictions': 'भविष्यवाणियां',
        'quick.compatibility': 'अनुकूलता',
        'quick.learn': 'और जानें',
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Translation function
function t(key) {
    return translations[currentLang][key] || key;
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('language', currentLang);
    location.reload(); // Reload to apply translations
}

// Get current language
function getCurrentLanguage() {
    return currentLang;
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        location.reload();
    }
}
