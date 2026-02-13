// Global Search Functionality for Learners

// Search index for all content
const searchIndex = {
    // Study Material
    'lo shu grid': { url: '/grid', title: 'Lo Shu Grid', description: 'View your complete 3×3 grid' },
    'grid': { url: '/grid', title: 'Lo Shu Grid', description: 'View your complete 3×3 grid' },
    'numbers': { url: '/learn/number-meanings', title: 'Number Meanings', description: 'Understand numbers 1-9' },
    'missing numbers': { url: '/learn/missing-numbers', title: 'Missing Numbers', description: 'Problems and remedies' },
    'remedies': { url: '/learn/missing-numbers', title: 'Remedies & Mantras', description: 'Solutions and mantras' },
    'mantras': { url: '/learn/missing-numbers', title: 'Remedies & Mantras', description: 'Powerful mantras' },
    'repetitions': { url: '/learn/repetitive-numbers', title: 'Repetitive Numbers', description: '2x, 3x, 4x+ impacts' },
    'repetitive': { url: '/learn/repetitive-numbers', title: 'Repetitive Numbers', description: '2x, 3x, 4x+ impacts' },

    // Compatibility
    'compatibility': { url: '/compatibility', title: 'Compatibility', description: 'Driver-Conductor analysis' },
    'driver': { url: '/compatibility', title: 'Driver Number', description: 'Personality analysis' },
    'conductor': { url: '/compatibility', title: 'Conductor Number', description: 'Destiny analysis' },
    'combinations': { url: '/compatibility/combinations', title: 'All 81 Combinations', description: 'All pairs analysis' },
    'lucky numbers': { url: '/compatibility/lucky-numbers', title: 'Lucky Numbers', description: 'Favorable numbers' },

    // Predictions
    'predictions': { url: '/predictions', title: 'Predictions', description: '2026 forecast' },
    'forecast': { url: '/predictions', title: 'Yearly Forecast', description: 'Monthly & yearly predictions' },
    'monthly': { url: '/predictions', title: 'Monthly Forecast', description: '2026 monthly predictions' },
    'personal year': { url: '/predictions', title: 'Personal Year', description: 'Your 2026 journey' },
    'analysis': { url: '/analysis', title: 'Life Analysis', description: 'Planes and arrows' },
    'planes': { url: '/analysis', title: 'Planes Analysis', description: 'Life area patterns' },
    'arrows': { url: '/analysis', title: 'Arrows Analysis', description: 'Pattern analysis' },

    // Guidance
    'learn': { url: '/learn', title: 'Learning Hub', description: 'Complete tutorials' },
    'guidelines': { url: '/guidance/dos-donts', title: 'Life Guidelines', description: "Do's and don'ts" },
    'dos donts': { url: '/guidance/dos-donts', title: 'Life Guidelines', description: "Do's and don'ts" },
    'name numerology': { url: '/name-numerology', title: 'Name Numerology', description: 'Calculate name number' },
    'name': { url: '/name-numerology', title: 'Name Numerology', description: 'Name analysis' },
    'making grid': { url: '/learn/making-grid', title: 'Make Your Grid', description: 'Learn to create grids' },

    // Numbers
    '1': { url: '/learn/number-meanings', title: 'Number 1 - Sun', description: 'Leadership, independence' },
    '2': { url: '/learn/number-meanings', title: 'Number 2 - Moon', description: 'Emotions, intuition' },
    '3': { url: '/learn/number-meanings', title: 'Number 3 - Jupiter', description: 'Communication, creativity' },
    '4': { url: '/learn/number-meanings', title: 'Number 4 - Rahu', description: 'Discipline, hard work' },
    '5': { url: '/learn/number-meanings', title: 'Number 5 - Mercury', description: 'Change, freedom' },
    '6': { url: '/learn/number-meanings', title: 'Number 6 - Venus', description: 'Love, responsibility' },
    '7': { url: '/learn/number-meanings', title: 'Number 7 - Ketu', description: 'Spirituality, wisdom' },
    '8': { url: '/learn/number-meanings', title: 'Number 8 - Saturn', description: 'Power, abundance' },
    '9': { url: '/learn/number-meanings', title: 'Number 9 - Mars', description: 'Completion, courage' },

    // Planets
    'sun': { url: '/learn/number-meanings', title: 'Number 1 - Sun', description: 'Leadership number' },
    'moon': { url: '/learn/number-meanings', title: 'Number 2 - Moon', description: 'Emotional number' },
    'jupiter': { url: '/learn/number-meanings', title: 'Number 3 - Jupiter', description: 'Creative number' },
    'rahu': { url: '/learn/number-meanings', title: 'Number 4 - Rahu', description: 'Discipline number' },
    'mercury': { url: '/learn/number-meanings', title: 'Number 5 - Mercury', description: 'Change number' },
    'venus': { url: '/learn/number-meanings', title: 'Number 6 - Venus', description: 'Love number' },
    'ketu': { url: '/learn/number-meanings', title: 'Number 7 - Ketu', description: 'Spiritual number' },
    'saturn': { url: '/learn/number-meanings', title: 'Number 8 - Saturn', description: 'Power number' },
    'mars': { url: '/learn/number-meanings', title: 'Number 9 - Mars', description: 'Completion number' },
};

// Create search bar component
function createSearchBar() {
    const searchHTML = `
        <div class="search-container" style="position: relative; margin-bottom: 24px;">
            <input
                type="text"
                id="globalSearch"
                placeholder="Search anything... (e.g., 'lucky numbers', 'remedies', 'number 5')"
                style="
                    width: 100%;
                    padding: 16px 48px 16px 16px;
                    border: 2px solid #e8e8e8;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #000000;
                    background: #ffffff;
                    transition: all 0.2s;
                "
            />
            <svg
                style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); pointer-events: none;"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                stroke-width="2"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <div id="searchResults" style="display: none; position: absolute; top: 100%; left: 0; right: 0; background: #ffffff; border: 2px solid #000000; border-radius: 12px; margin-top: 8px; max-height: 400px; overflow-y: auto; z-index: 1000; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);"></div>
        </div>
    `;

    return searchHTML;
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    // Focus effect
    searchInput.onfocus = () => {
        searchInput.style.borderColor = '#000000';
        searchInput.style.background = '#fafafa';
    };

    searchInput.onblur = () => {
        setTimeout(() => {
            searchInput.style.borderColor = '#e8e8e8';
            searchInput.style.background = '#ffffff';
            searchResults.style.display = 'none';
        }, 200);
    };

    // Search on input
    searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Search through index
        const results = [];
        for (const [keyword, data] of Object.entries(searchIndex)) {
            if (keyword.includes(query) || data.title.toLowerCase().includes(query) || data.description.toLowerCase().includes(query)) {
                if (!results.find(r => r.url === data.url)) {
                    results.push(data);
                }
            }
        }

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div style="padding: 20px; text-align: center; color: #666;">
                    <p style="font-weight: 600; margin-bottom: 8px;">No results found</p>
                    <p style="font-size: 0.85rem;">Try searching for: numbers, remedies, compatibility, predictions</p>
                </div>
            `;
            searchResults.style.display = 'block';
            return;
        }

        // Display results
        let html = '<div style="padding: 12px;">';
        results.slice(0, 6).forEach(result => {
            html += `
                <a href="${result.url}" style="
                    display: block;
                    padding: 14px;
                    text-decoration: none;
                    color: inherit;
                    border-radius: 10px;
                    margin-bottom: 8px;
                    transition: all 0.2s;
                    border: 1px solid transparent;
                " onmouseover="this.style.background='#fafafa'; this.style.borderColor='#e8e8e8';" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent';">
                    <div style="font-weight: 700; color: #000000; margin-bottom: 4px; font-size: 0.95rem;">${result.title}</div>
                    <div style="font-size: 0.85rem; color: #666; font-weight: 500;">${result.description}</div>
                </a>
            `;
        });
        html += '</div>';

        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
    };
}

// Add search bar to page
function addSearchToPage(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = createSearchBar() + container.innerHTML;
        setTimeout(() => initializeSearch(), 100);
    }
}
