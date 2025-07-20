const heroes = [
    {
        id: 'arlott',
        name: "Arlott",
        image: "https://pxiolune.github.io/mlbbaizen/images/arlott.png",
        build: "Warrior Boots, Bloodlust Axe, Dominance Ice",
        combo: "Arlott + Khufra",
        counters: "Valir, Kaja, Edith"
    },
    {
        id: 'tigreal',
        name: "Tigreal",
        image: "https://pxiolune.github.io/mlbbaizen/tigreal.png",
        build: "Courage Mask, Antique Cuirass, Immortality",
        combo: "Tigreal + Yve",
        counters: "Esmeralda, Chou, Baxia"
    },
    {
        id: 'gord',
        name: "Gord",
        image: "https://pxiolune.github.io/mlbbaizen/gord.png",
        build: "Arcane Boots, Genius Wand, Glowing Wand",
        combo: "Gord + Tigreal",
        counters: "Lancelot, Natalia, Hayabusa"
    }
    // Bu yerga yana boshqa qahramonlar qo‘shamiz!
];

function displayHeroes(filteredHeroes) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = "";

    filteredHeroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}" />
            <h2>${hero.name}</h2>
            <p><strong>Sborka:</strong> ${hero.build}</p>
            <p><strong>Combo:</strong> ${hero.combo}</p>
            <p><strong>Counterlar:</strong> ${hero.counters}</p>
        `;
        container.appendChild(card);
    });
}

function searchHero() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = heroes.filter(h => h.name.toLowerCase().includes(query));
    displayHeroes(filtered);
}

// Dastlab hammasini ko‘rsat
displayHeroes(heroes);
