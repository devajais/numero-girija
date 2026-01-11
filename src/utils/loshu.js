// Lo Shu Chart Calculator

// The Lo Shu Grid positions (traditional magic square)
// 4 9 2
// 3 5 7
// 8 1 6

export function calculateLoShuChart(dateOfBirth) {
  // Extract all digits from the date
  const digits = dateOfBirth.replace(/\D/g, '').split('').map(Number);

  // Count frequency of each digit (1-9), 0 is ignored in Lo Shu
  const frequency = {};
  for (let i = 1; i <= 9; i++) {
    frequency[i] = 0;
  }

  digits.forEach(digit => {
    if (digit >= 1 && digit <= 9) {
      frequency[digit]++;
    }
  });

  return frequency;
}

export function getMissingNumbers(frequency) {
  const missing = [];
  for (let i = 1; i <= 9; i++) {
    if (frequency[i] === 0) {
      missing.push(i);
    }
  }
  return missing;
}

export function getNumberDescription(number) {
  const descriptions = {
    1: "Sun - Leadership, independence, ambition. Represents father, ego, and self-confidence.",
    2: "Moon - Emotions, intuition, relationships. Represents mother, mind, and imagination.",
    3: "Jupiter - Wisdom, knowledge, growth. Represents teachers, expansion, and optimism.",
    4: "Rahu - Materialism, illusion, confusion. Represents obstacles, unexpected events, and foreign connections.",
    5: "Mercury - Communication, intelligence, business. Represents thinking, speech, and versatility.",
    6: "Venus - Love, beauty, luxury. Represents relationships, creativity, and comforts.",
    7: "Ketu - Spirituality, detachment, mysticism. Represents past life, intuition, and liberation.",
    8: "Saturn - Discipline, hard work, delays. Represents karma, responsibilities, and perseverance.",
    9: "Mars - Energy, courage, action. Represents strength, aggression, and determination."
  };

  return descriptions[number] || "";
}

export function getNumberMeaningForMissing(number) {
  const meanings = {
    1: "May lack self-confidence, leadership qualities, or relationship with father may be weak.",
    2: "May lack emotional balance, intuition, or relationship with mother may be affected.",
    3: "May lack wisdom, proper guidance, or educational growth may be limited.",
    4: "Generally positive - fewer obstacles, less confusion, and materialistic challenges.",
    5: "May lack communication skills, business acumen, or intellectual sharpness.",
    6: "May lack luxury, comfort, or face challenges in relationships and creativity.",
    7: "May lack spiritual inclination, intuition, or detachment from material world.",
    8: "Less karmic burdens, fewer delays, but may also lack discipline and perseverance.",
    9: "May lack courage, energy, or ability to take strong actions."
  };

  return meanings[number] || "";
}

export function getCombinationMeaning(frequency) {
  const meanings = [];

  // Check for specific patterns and combinations

  // Horizontal lines
  if (frequency[4] > 0 && frequency[9] > 0 && frequency[2] > 0) {
    meanings.push("Mental Plane Active (4-9-2): Strong thinking, planning, and analytical abilities.");
  }

  if (frequency[3] > 0 && frequency[5] > 0 && frequency[7] > 0) {
    meanings.push("Emotional Plane Active (3-5-7): Balanced emotions, good communication, spiritual inclination.");
  }

  if (frequency[8] > 0 && frequency[1] > 0 && frequency[6] > 0) {
    meanings.push("Practical Plane Active (8-1-6): Good with material world, practical approach, grounded.");
  }

  // Vertical lines
  if (frequency[4] > 0 && frequency[3] > 0 && frequency[8] > 0) {
    meanings.push("Thought Line Active (4-3-8): Excellent thinking and planning abilities.");
  }

  if (frequency[9] > 0 && frequency[5] > 0 && frequency[1] > 0) {
    meanings.push("Will Power Line Active (9-5-1): Strong determination and willpower.");
  }

  if (frequency[2] > 0 && frequency[7] > 0 && frequency[6] > 0) {
    meanings.push("Action Line Active (2-7-6): Good at implementing plans and taking action.");
  }

  // Diagonal lines
  if (frequency[4] > 0 && frequency[5] > 0 && frequency[6] > 0) {
    meanings.push("Golden Line Active (4-5-6): Excellent for material success and wealth.");
  }

  if (frequency[2] > 0 && frequency[5] > 0 && frequency[8] > 0) {
    meanings.push("Silver Line Active (2-5-8): Balanced life, good fortune, and stability.");
  }

  // Single number patterns
  if (frequency[5] >= 3) {
    meanings.push("Mercury Dominance: Excellent communication and business skills.");
  }

  if (frequency[1] >= 3) {
    meanings.push("Sun Dominance: Strong leadership and ego, may need to balance pride.");
  }

  if (frequency[8] >= 2) {
    meanings.push("Saturn Influence: Hard work pays off, but patience required.");
  }

  return meanings;
}

export function calculateNextYearNumber(dateOfBirth, currentYear) {
  // Calculate personal year number
  const dob = new Date(dateOfBirth);
  const birthDay = dob.getDate();
  const birthMonth = dob.getMonth() + 1;

  // Personal Year = Birth Day + Birth Month + Current Year (all reduced to single digit)
  const daySum = String(birthDay).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const monthSum = String(birthMonth).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const yearSum = String(currentYear).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

  let personalYear = daySum + monthSum + yearSum;

  // Reduce to single digit
  while (personalYear > 9) {
    personalYear = String(personalYear).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  return personalYear;
}

export function getPersonalYearMeaning(yearNumber) {
  const meanings = {
    1: "New Beginnings - Time to start new projects, ventures, and take leadership roles.",
    2: "Cooperation - Focus on relationships, partnerships, and patience. Growth through collaboration.",
    3: "Creativity - Year of expression, creativity, and social activities. Time to enjoy life.",
    4: "Foundation - Hard work, building strong foundations, and practical matters. Focus on stability.",
    5: "Change - Year of changes, travel, freedom, and new experiences. Embrace flexibility.",
    6: "Responsibility - Focus on family, home, and responsibilities. Time for nurturing relationships.",
    7: "Spirituality - Inner growth, learning, and spiritual development. Time for introspection.",
    8: "Achievement - Material success, recognition, and rewards for past efforts. Focus on career.",
    9: "Completion - Ending cycles, letting go, and preparing for new beginnings. Time for closure."
  };

  return meanings[yearNumber] || "";
}
