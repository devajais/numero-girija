// Shared Lo Shu Grid utilities

function calculateLoShuChart(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const day = dob.getDate();
    const month = dob.getMonth() + 1;
    const year = dob.getFullYear();

    // Extract all digits from day, month, year
    const dayDigits = String(day).split('').map(Number).filter(d => d !== 0);
    const monthDigits = String(month).split('').map(Number).filter(d => d !== 0);
    const yearDigits = String(year).split('').map(Number).filter(d => d !== 0);

    // Calculate Driver Number (sum of day digits)
    let driver = dayDigits.reduce((sum, d) => sum + d, 0);
    while (driver > 9) {
        driver = String(driver).split('').reduce((sum, d) => sum + parseInt(d), 0);
    }

    // Calculate Conductor Number (sum of all DOB digits)
    const allDigits = [...dayDigits, ...monthDigits, ...yearDigits];
    let conductor = allDigits.reduce((sum, d) => sum + d, 0);
    while (conductor > 9) {
        conductor = String(conductor).split('').reduce((sum, d) => sum + parseInt(d), 0);
    }

    // Combine all numbers to place in grid
    const numbersToPlace = [...dayDigits, ...monthDigits, ...yearDigits, driver, conductor];

    // Count frequency (ignore zeros)
    const frequency = {};
    for (let i = 1; i <= 9; i++) {
        frequency[i] = 0;
    }
    numbersToPlace.forEach(digit => {
        if (digit >= 1 && digit <= 9) {
            frequency[digit]++;
        }
    });

    return { frequency, driver, conductor, day, month, year };
}

function getPlanetName(number) {
    const planets = {
        1: "Sun", 2: "Moon", 3: "Jupiter", 4: "Rahu",
        5: "Mercury", 6: "Venus", 7: "Ketu", 8: "Saturn", 9: "Mars"
    };
    return planets[number] || "";
}

function getNumberMeaning(number) {
    const meanings = {
        1: { aspect: "Career/Water", desc: "Leadership, independence, ambition. Father figure." },
        2: { aspect: "Marriage/Earth", desc: "Emotions, intuition, relationships. Mother figure." },
        3: { aspect: "Family/Wood", desc: "Wisdom, knowledge, growth. Teachers & expansion." },
        4: { aspect: "Wealth/Wood", desc: "Materialism, obstacles, foreign connections." },
        5: { aspect: "Self/Earth", desc: "Communication, intelligence, business acumen." },
        6: { aspect: "Travel/Metal", desc: "Love, beauty, luxury. Relationships & creativity." },
        7: { aspect: "Children/Metal", desc: "Spirituality, detachment, mysticism. Past life." },
        8: { aspect: "Knowledge/Earth", desc: "Discipline, hard work, karma. Responsibilities." },
        9: { aspect: "Fame/Fire", desc: "Energy, courage, action. Strength & determination." }
    };
    return meanings[number] || { aspect: "", desc: "" };
}

function getMissingNumbers(frequency) {
    const missing = [];
    for (let i = 1; i <= 9; i++) {
        if (frequency[i] === 0) {
            missing.push(i);
        }
    }
    return missing;
}

function getCombinationMeaning(frequency) {
    const meanings = [];

    // Horizontal planes
    if (frequency[4] > 0 && frequency[9] > 0 && frequency[2] > 0) {
        meanings.push("Mental Plane (4-9-2): Strong analytical and thinking abilities");
    }
    if (frequency[3] > 0 && frequency[5] > 0 && frequency[7] > 0) {
        meanings.push("Emotional Plane (3-5-7): Balanced emotions and good communication");
    }
    if (frequency[8] > 0 && frequency[1] > 0 && frequency[6] > 0) {
        meanings.push("Practical Plane (8-1-6): Grounded, practical approach to life");
    }

    // Vertical lines
    if (frequency[4] > 0 && frequency[3] > 0 && frequency[8] > 0) {
        meanings.push("Thought Line (4-3-8): Excellent planning abilities");
    }
    if (frequency[9] > 0 && frequency[5] > 0 && frequency[1] > 0) {
        meanings.push("Will Power Line (9-5-1): Strong determination");
    }
    if (frequency[2] > 0 && frequency[7] > 0 && frequency[6] > 0) {
        meanings.push("Action Line (2-7-6): Good at implementing plans");
    }

    // Diagonal lines
    if (frequency[4] > 0 && frequency[5] > 0 && frequency[6] > 0) {
        meanings.push("Golden Line (4-5-6): Material success and wealth");
    }
    if (frequency[2] > 0 && frequency[5] > 0 && frequency[8] > 0) {
        meanings.push("Silver Line (2-5-8): Balanced life and good fortune");
    }

    return meanings;
}

// 2026 Predictions
function calculateUniversalYear(year) {
    let sum = String(year).split('').reduce((s, d) => s + parseInt(d), 0);
    while (sum > 9) {
        sum = String(sum).split('').reduce((s, d) => s + parseInt(d), 0);
    }
    return sum;
}

function calculatePersonalYear(day, month, universalYear) {
    const daySum = String(day).split('').reduce((s, d) => s + parseInt(d), 0);
    const monthSum = String(month).split('').reduce((s, d) => s + parseInt(d), 0);

    let personalYear = daySum + monthSum + universalYear;
    while (personalYear > 9) {
        personalYear = String(personalYear).split('').reduce((s, d) => s + parseInt(d), 0);
    }
    return personalYear;
}

function calculatePersonalMonth(personalYear, monthNumber) {
    let result = personalYear + monthNumber;
    while (result > 9) {
        result = String(result).split('').reduce((s, d) => s + parseInt(d), 0);
    }
    return result;
}

function getPersonalYearMeaning(yearNumber) {
    const meanings = {
        1: { title: "New Beginnings", desc: "High energy, new career starts, independence. Time for leadership." },
        2: { title: "Cooperation", desc: "Collaboration, emotional sensitivity, slow progress. Focus on relationships." },
        3: { title: "Expansion", desc: "Creativity, social networking, growth. Time to enjoy life." },
        4: { title: "Foundation", desc: "Hard work, stability, discipline. Focus on building solid foundations." },
        5: { title: "Change", desc: "Sudden changes, travel, breaking routines. Embrace flexibility." },
        6: { title: "Responsibility", desc: "Family responsibility, home, luxury. Time for nurturing." },
        7: { title: "Spirituality", desc: "Introspection, learning, spiritual growth. Time for inner work." },
        8: { title: "Achievement", desc: "Material success, financial power, karma. Focus on career." },
        9: { title: "Completion", desc: "Ending cycles, letting go, philanthropy. Time for closure." }
    };
    return meanings[yearNumber] || { title: "", desc: "" };
}

function getMonthName(monthNumber) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNumber - 1] || '';
}
