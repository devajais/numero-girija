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
    const numbersToPlace = [...dayDigits, ...monthDigits, ...yearDigits, ...(dayDigits.length > 1 ? [driver] : []), conductor];

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

    // Build grid structure - map each position (1-9) to the numbers it contains
    const grid = {};
    for (let i = 1; i <= 9; i++) {
        grid[i] = [];
    }

    // Place all numbers (including driver and conductor) in their respective grid positions
    numbersToPlace.forEach(digit => {
        if (digit >= 1 && digit <= 9) {
            grid[digit].push(digit);
        }
    });

    return { frequency, grid, driver, conductor, day, month, year };
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

// NEW FUNCTIONS FOR EXTENDED FEATURES

// Repetitive Numbers
function getRepetitiveNumberMeaning(number, count) {
    if (count < 2) return null;

    const key = count >= 4 ? '4x' : `${count}x`;

    // This would ideally load from /src/data/numbers/repetitive-meanings.json
    // For now, return basic structure
    return {
        number: number,
        count: count,
        multiplier: key
    };
}

// Driver-Conductor Compatibility
function getDriverConductorKey(driver, conductor) {
    return `${driver}-${conductor}`;
}

function getCompatibilityType(driver, conductor) {
    // Friendly combinations
    const friendly = {
        '1': [1, 2, 3, 9],
        '2': [1, 2, 3, 6, 9],
        '3': [1, 2, 3, 6, 9],
        '4': [1, 2, 5, 6],
        '5': [1, 2, 3, 5, 6, 9],
        '6': [2, 3, 5, 6, 9],
        '7': [1, 2, 4, 7],
        '8': [1, 3, 5, 6],
        '9': [1, 2, 3, 6, 9]
    };

    // Opposite combinations
    const opposite = {
        '1': [4, 7, 8],
        '2': [4, 7, 8],
        '3': [4, 7, 8],
        '4': [7, 8, 9],
        '5': [8],
        '6': [7, 8],
        '7': [8, 9],
        '8': [4, 7, 9],
        '9': [4, 7, 8]
    };

    if (friendly[driver]?.includes(conductor)) return 'friendly';
    if (opposite[driver]?.includes(conductor)) return 'opposite';
    return 'neutral';
}

function getCompatibilityScore(driver, conductor) {
    const type = getCompatibilityType(driver, conductor);
    if (type === 'friendly') return driver === conductor ? 9 : 8;
    if (type === 'opposite') return 3;
    return 6;
}

// Lucky Numbers
function getLuckyNumbers(driverNumber) {
    const luckyMap = {
        1: [1, 2, 3, 9],
        2: [1, 2, 3, 6, 9],
        3: [1, 2, 3, 6, 9],
        4: [1, 2, 5, 6],
        5: [1, 2, 3, 5, 6, 9],
        6: [2, 3, 5, 6, 9],
        7: [1, 2, 4, 7],
        8: [1, 3, 5, 6],
        9: [1, 2, 3, 6, 9]
    };
    return luckyMap[driverNumber] || [];
}

function getBadNumbers(driverNumber) {
    const badMap = {
        1: [4, 7, 8],
        2: [4, 7, 8],
        3: [4, 7, 8],
        4: [7, 8, 9],
        5: [8],
        6: [7, 8],
        7: [8, 9],
        8: [4, 7, 9],
        9: [4, 7, 8]
    };
    return badMap[driverNumber] || [];
}

function getNeutralNumbers(driverNumber) {
    const lucky = getLuckyNumbers(driverNumber);
    const bad = getBadNumbers(driverNumber);
    const neutral = [];

    for (let i = 1; i <= 9; i++) {
        if (!lucky.includes(i) && !bad.includes(i)) {
            neutral.push(i);
        }
    }
    return neutral;
}

// Name Numerology - Chaldean System
function calculateNameNumber(name, system = 'chaldean') {
    const chaldeanValues = {
        'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
        'B': 2, 'K': 2, 'R': 2,
        'C': 3, 'G': 3, 'L': 3, 'S': 3,
        'D': 4, 'M': 4, 'T': 4,
        'E': 5, 'H': 5, 'N': 5, 'X': 5,
        'U': 6, 'V': 6, 'W': 6,
        'O': 7, 'Z': 7,
        'F': 8, 'P': 8
    };

    const pythagoreanValues = {
        'A': 1, 'J': 1, 'S': 1,
        'B': 2, 'K': 2, 'T': 2,
        'C': 3, 'L': 3, 'U': 3,
        'D': 4, 'M': 4, 'V': 4,
        'E': 5, 'N': 5, 'W': 5,
        'F': 6, 'O': 6, 'X': 6,
        'G': 7, 'P': 7, 'Y': 7,
        'H': 8, 'Q': 8, 'Z': 8,
        'I': 9, 'R': 9
    };

    const values = system === 'pythagorean' ? pythagoreanValues : chaldeanValues;
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

    let sum = 0;
    for (let char of cleanName) {
        sum += values[char] || 0;
    }

    // Reduce to single digit
    while (sum > 9) {
        sum = String(sum).split('').reduce((s, d) => s + parseInt(d), 0);
    }

    return sum;
}

function getNameCompatibility(nameNumber, driver, conductor) {
    // Check if name number is compatible with driver-conductor combination
    const luckyForDriver = getLuckyNumbers(driver);
    const luckyForConductor = getLuckyNumbers(conductor);

    const compatibleWithDriver = luckyForDriver.includes(nameNumber);
    const compatibleWithConductor = luckyForConductor.includes(nameNumber);

    if (compatibleWithDriver && compatibleWithConductor) {
        return { status: 'excellent', message: 'Your name is highly compatible with both your Driver and Conductor numbers!' };
    } else if (compatibleWithDriver || compatibleWithConductor) {
        return { status: 'good', message: 'Your name is compatible with your core numbers.' };
    } else {
        return { status: 'neutral', message: 'Your name has neutral compatibility. Consider name correction for better results.' };
    }
}

function getNameImprovementSuggestions(name, system, currentDriver) {
    const suggestions = [];
    const currentNumber = calculateNameNumber(name, system);

    // Letter mappings for values 1, 3, 5
    const letterMap = system === 'chaldean' ? {
        1: ['A', 'I', 'J', 'Q', 'Y'],
        3: ['C', 'G', 'L', 'S'],
        5: ['E', 'H', 'N', 'X']
    } : {
        1: ['A', 'J', 'S'],
        3: ['C', 'L', 'U'],
        5: ['E', 'N', 'W']
    };

    // Get lucky numbers for driver
    const luckyNums = getLuckyNumbers(currentDriver);

    // Test adding each beneficial letter
    [1, 3, 5].forEach(targetValue => {
        const letters = letterMap[targetValue];

        letters.forEach(letter => {
            // Try adding at beginning
            const newNameStart = letter + name;
            const newNumberStart = calculateNameNumber(newNameStart, system);

            if (newNumberStart !== currentNumber) {
                suggestions.push({
                    letter: letter,
                    letterValue: targetValue,
                    position: 'prefix',
                    newName: newNameStart,
                    oldNumber: currentNumber,
                    newNumber: newNumberStart,
                    compatible: luckyNums.includes(newNumberStart)
                });
            }

            // Try adding at end
            const newNameEnd = name + letter;
            const newNumberEnd = calculateNameNumber(newNameEnd, system);

            if (newNumberEnd !== currentNumber && newNumberEnd !== newNumberStart) {
                suggestions.push({
                    letter: letter,
                    letterValue: targetValue,
                    position: 'suffix',
                    newName: newNameEnd,
                    oldNumber: currentNumber,
                    newNumber: newNumberEnd,
                    compatible: luckyNums.includes(newNumberEnd)
                });
            }
        });
    });

    // Sort by compatibility first, then by letter value
    suggestions.sort((a, b) => {
        if (a.compatible && !b.compatible) return -1;
        if (!a.compatible && b.compatible) return 1;
        return a.letterValue - b.letterValue;
    });

    return suggestions.slice(0, 6); // Return top 6 suggestions
}

// Career Insights
function getCareerTendency(driver, conductor) {
    const key = `${driver}-${conductor}`;
    // This would load from career-tendencies.json
    return key;
}

// Predictions - Extended
function calculateYearlyForecast(dob, targetYear) {
    const dobDate = new Date(dob);
    const day = dobDate.getDate();
    const month = dobDate.getMonth() + 1;

    const universalYear = calculateUniversalYear(targetYear);
    const personalYear = calculatePersonalYear(day, month, universalYear);

    return {
        year: targetYear,
        universalYear: universalYear,
        personalYear: personalYear,
        meaning: getPersonalYearMeaning(personalYear)
    };
}

function calculateFiveYearForecast(dob, startYear) {
    const forecasts = [];
    for (let i = 0; i < 5; i++) {
        forecasts.push(calculateYearlyForecast(dob, startYear + i));
    }
    return forecasts;
}

function calculateDetailedMonthly(dob, year, month) {
    const dobDate = new Date(dob);
    const day = dobDate.getDate();
    const birthMonth = dobDate.getMonth() + 1;

    const universalYear = calculateUniversalYear(year);
    const personalYear = calculatePersonalYear(day, birthMonth, universalYear);
    const personalMonth = calculatePersonalMonth(personalYear, month);

    return {
        year: year,
        month: month,
        monthName: getMonthName(month),
        personalYear: personalYear,
        personalMonth: personalMonth,
        meaning: getPersonalYearMeaning(personalMonth)
    };
}

// Remedies
function getMissingNumberInfo(number) {
    // This would load from missing-remedies.json
    return {
        number: number,
        planet: getPlanetName(number)
    };
}

// Plane Analysis
function getPlaneAnalysis(frequency) {
    const planes = {
        mental: { numbers: [4, 9, 2], name: 'Mental Plane', strength: 0 },
        emotional: { numbers: [3, 5, 7], name: 'Emotional Plane', strength: 0 },
        practical: { numbers: [8, 1, 6], name: 'Practical Plane', strength: 0 }
    };

    for (let planeName in planes) {
        const plane = planes[planeName];
        plane.strength = plane.numbers.reduce((sum, num) => sum + frequency[num], 0);
        plane.complete = plane.numbers.every(num => frequency[num] > 0);
    }

    return planes;
}

// Arrow Analysis
function getArrows(frequency) {
    const arrows = [];

    // Positive Arrows (all three positions filled)
    if (frequency[4] > 0 && frequency[9] > 0 && frequency[2] > 0) {
        arrows.push({ type: 'positive', name: 'Mental Arrow', description: 'Strong analytical and thinking abilities' });
    }
    if (frequency[3] > 0 && frequency[5] > 0 && frequency[7] > 0) {
        arrows.push({ type: 'positive', name: 'Emotional Arrow', description: 'Balanced emotions and good communication' });
    }
    if (frequency[8] > 0 && frequency[1] > 0 && frequency[6] > 0) {
        arrows.push({ type: 'positive', name: 'Practical Arrow', description: 'Grounded, practical approach to life' });
    }
    if (frequency[4] > 0 && frequency[3] > 0 && frequency[8] > 0) {
        arrows.push({ type: 'positive', name: 'Thought Arrow', description: 'Excellent planning abilities' });
    }
    if (frequency[9] > 0 && frequency[5] > 0 && frequency[1] > 0) {
        arrows.push({ type: 'positive', name: 'Will Power Arrow', description: 'Strong determination and willpower' });
    }
    if (frequency[2] > 0 && frequency[7] > 0 && frequency[6] > 0) {
        arrows.push({ type: 'positive', name: 'Action Arrow', description: 'Good at implementing plans and taking action' });
    }
    if (frequency[4] > 0 && frequency[5] > 0 && frequency[6] > 0) {
        arrows.push({ type: 'positive', name: 'Golden Arrow', description: 'Material success and wealth potential' });
    }
    if (frequency[2] > 0 && frequency[5] > 0 && frequency[8] > 0) {
        arrows.push({ type: 'positive', name: 'Silver Arrow', description: 'Balanced life and good fortune' });
    }

    // Negative Arrows (all three positions empty)
    if (frequency[4] === 0 && frequency[9] === 0 && frequency[2] === 0) {
        arrows.push({ type: 'negative', name: 'Confusion Arrow', description: 'Mental confusion and poor memory' });
    }
    if (frequency[3] === 0 && frequency[5] === 0 && frequency[7] === 0) {
        arrows.push({ type: 'negative', name: 'Emotional Sensitivity Arrow', description: 'Extreme emotional sensitivity' });
    }
    if (frequency[8] === 0 && frequency[1] === 0 && frequency[6] === 0) {
        arrows.push({ type: 'negative', name: 'Frustration Arrow', description: 'Practical difficulties and frustrations' });
    }

    return arrows;
}
