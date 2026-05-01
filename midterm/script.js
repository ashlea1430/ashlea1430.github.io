const heroStats = {
    'Marcel': {
        durability: '70%', offense: '48%', effects: '100%', difficulty: '30%',
        quote: '"Alas, to be feared is better than to be loved."',
        fullStory: "Marcel is a scion of the prestigious House Paxley. Unlike his brothers who focused on magic, Marcel discovered the power of capturing souls through his camera.",
        lore: { fullname: "Marcel Paxley", alias: "Soul Photographer", internal: "marcel", birthday: "June 9", origin: "Castle Aberleen", age: "21", gender: "Male", species: "Human", lane: "Roam", affiliation: "House Paxley", abilities: "Dark Magic" }
    },
    'Xavier': {
        durability: '35%', offense: '75%', effects: '70%', difficulty: '45%',
        quote: '"Higher-ups? Just a bunch of hypocrites."',
        fullStory: "A former Arbiter of Light, Xavier chose to defy the church when he saw the corruption within. He now wanders as a member of the Forsaken Light.",
        lore: {
            fullname: "Xavier",
            alias: "• Defier of Light<br>• Arbiter of Light",
            internal: "xavier",
            birthday: "October 12 (Libra)",
            origin: "Lumina City, Moniyan Empire",
            age: "28",
            gender: "Male",
            species: "Human, half-elf",
            lane: "Mid Lane / Roam",
            affiliation: "<span style='color:#e9c46a'>• Forsaken Light</span><br><span style='color:#e9c46a'>• Monastery of Light</span>",
            abilities: "Mystic magic:<br>• Fires <span style='color:#e9c46a'>mystic bullets</span><br>• Summons <span style='color:#e9c46a'>mystic barriers</span><br>• Unleashes <span style='color:#e9c46a'>powerful beam</span>"
        }
    },
    'Obsidia': {
        durability: '20%', offense: '85%', effects: '10%', difficulty: '35%',
        quote: '"To kill is to survive, to conquer is to thrive."',
        fullStory: "Born in the Abyss, Obsidia is a Dark Elf who rose to become a sovereign. Her bone-chilling magic makes her a nightmare on the battlefield.",
        lore: {
            fullname: "Obsidia",
            alias: "• Sovereign of Dark's End<br>• Sovereign of the Abyss",
            internal: "shenyuan",
            birthday: "November 13 (Scorpio)",
            origin: "Night Palace, <span style='color:#e9c46a'>Abyss</span>",
            age: "more than thousands",
            gender: "Female",
            species: "Dark Elf",
            lane: "Gold Lane",
            affiliation: "The Abyss",
            abilities: "Abyssal Bone"
        }
    },
    'Zetian': {
        durability: '35%', offense: '85%', effects: '55%', difficulty: '20%',
        quote: ' "Rule with strength and conviction, blossom with grace and compassion."',
        fullStory: "The rightful ruler of the Cadia Riverlands, Zetian balances the cosmic forces of Yin and Yang to maintain absolute order.",
        lore: {
            fullname: "Wu Zetian",
            alias: "• Celestial Empress<br>• Empress Wu<br>• Lady Wu",
            internal: "wuzetian",
            birthday: "February 17 (Aquarius)",
            origin: "<span style='color:#e9c46a'>Cadia Riverlands</span>",
            age: "1300 or more ",
            gender: "Female",
            species: "Human",
            lane: "Mid Lane / Roam ",
            affiliation: "<span style='color:#e9c46a'>Oriental Fighters</span>",
            abilities: "Imperial Phoenix Power"
        }
    },
    'Lukas': {
        durability: '80%', offense: '50%', effects: '60%', difficulty: '40%',
        quote: '"I do miss the old days, but this new generation sure is full of spirit."',
        fullStory: "Lukas hides a primal secret: he is a Lycan. In the gladiatorial pits, he learned to control the beast within to fight for justice.",
        lore: {
            fullname: "Lukas",
            alias: "Beast of Light",
            internal: "Lukas",
            birthday: "June 1 (Gemini)",
            origin: "<span style='color:#e9c46a'>Lumina City, Moniyan Empire</span>",
            age: "More than 1000",
            gender: "Male",
            species: "Sacred Beast",
            lane: "Exp Lane / Jungler",
            affiliation: "Moniyan",
            abilities: "<span style='color:#e9c46a'>Transform into Sacred Beast</span>"
        }
    },
    'Kalea': {
        durability: '80%', offense: '40%', effects: '80%', difficulty: '70%',
        quote: '"The fists that breaks waves, can also be the gentle touch that heals others."',
        fullStory: "Kalea is a daughter of the Vonetis Sea who communicates with ancient sea serpents to protect her hidden tides.",
        lore: {
            fullname: "Kalea",
            alias: "Surging Wave",
            internal: "Baolishaonv",
            birthday: "December 2 (Sagittarius)",
            origin: "Solari Isle, <span style='color:#e9c46a'>Vonetis Sea</span>",
            age: "1000",
            gender: "Female",
            species: "Sea-dweller",
            lane: "Exp Lane / Roam",
            affiliation: "Vonetis Sea",
            abilities: "manipulating combat terrain through Water Zones"
        }
    },
    'Suyou': {
        durability: '60%', offense: '60%', effects: '50%', difficulty: '75%',
        quote: '"The Immortal One chose me to vanquish the shadows that plague this world."',
        fullStory: "A master of the Ritual Blade, Suyou walks the line between the mortal realm and the spirit world wearing the Mask of the Immortal.",
        lore: {
            fullname: "Suyou",
            alias: "Mask of the Immortal",
            internal: "kaijiacike",
            birthday: "October 23 (Scorpio)",
            origin: "Zhu'an, Cadia Riverlands",
            age: "Between 18-22", gender: "Male",
            species: "Human",
            lane: "Exp Lane / Jungler",
            affiliation: "Cadia Riverlands",
            abilities: "Ritual Blade"
        }
    },
    'Sora': {
        durability: '65%', offense: '60%', effects: '50%', difficulty: '55%',
        quote: '"Walking the line between the sky and the blade."',
        fullStory: "Sora is an exorcist from Zhu'an who specializes in high-speed combat. By focusing his chi into his blade, he can literally walk on the air, striking from angles no one expects.",
        lore: {
            fullname: "Sora",
            alias: "Shifting Cloud",
            internal: "cirrus",
            birthday: "June 16 (Gemini)",
            origin: "The Oasis, Agelta Drylands",
            age: "Between 14-16",
            gender: "Male",
            species: "Human",
            lane: "Exp Lane / Jungle",
            affiliation: "Nature Spirits",
            abilities: "Mystic Magic"
        }
    }
};

const heroSkills = {
    'Marcel': { passive: 'Platinum Snap', s1: 'Framed Moment', s2: 'Tracking Shot', ult: 'Golden Hour' },
    'Xavier': { passive: 'Transcendence', s1: 'Infinite Extension', s2: 'Mystic Field', ult: 'Dawning Light' },
    'Obsidia': { passive: 'Return to Bone', s1: 'Abyssal Bone Needle', s2: 'Phantom Shadowmeld', ult: 'Hunt of Bone' },
    'Zetian': { passive: 'Celestial Armament', s1: 'Phoenix Strike', s2: 'Phoenix Descent', ult: 'Fury of the Phoenix' },
    'Lukas': { passive: 'Hero\'s Resolve', s1: 'Flash Combo', s2: 'Flash Step', ult: 'Unleash the Beast' },
    'Kalea': { passive: 'Surge of Life', s1: 'Wavebreaker', s2: 'Tidal Strike', ult: 'Tsunami Slam' },
    'Suyou': { passive: 'Transient Immortal', s1: 'Blade Surge', s2: 'Soul Sever', ult: 'Evil Queller' },
    'Sora': { passive: 'Mystic Surge', s1: 'Sundering Strike', s2: 'Windstride', ult: 'Windstride' }
};

function switchTab(tabName) {
    document.querySelectorAll('.nav-tab-item').forEach(tab => tab.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById('home-view').style.display = (tabName === 'home') ? 'block' : 'none';
    document.getElementById('story-view').style.display = (tabName === 'story') ? 'block' : 'none';
}

function updateBanner(name, role, imgSrc) {
    const img = document.getElementById('bannerImg');
    img.style.opacity = '0';
    document.querySelectorAll('.artwork-item').forEach(item => item.classList.remove('selected'));
    const selectedItem = document.getElementById('item-' + name);
    if (selectedItem) selectedItem.classList.add('selected');

    setTimeout(() => {
        img.src = imgSrc;
        const data = heroStats[name];
        const skills = heroSkills[name];

        document.getElementById('bannerName').innerText = name;
        document.getElementById('bannerRole').innerText = role;
        document.getElementById('bannerQuote').innerText = data.quote;
        document.getElementById('modalHeroName').innerText = name + " - Profile";

        // Skill updates
        document.getElementById('box-passive').innerText = skills.passive;
        document.getElementById('box-s1').innerText = skills.s1;
        document.getElementById('box-s2').innerText = skills.s2;
        document.getElementById('box-ult').innerText = skills.ult;

        // Attribute bars
        document.getElementById('bar-durability').style.width = data.durability;
        document.getElementById('bar-offense').style.width = data.offense;
        document.getElementById('bar-effects').style.width = data.effects;
        document.getElementById('bar-difficulty').style.width = data.difficulty;

        // Update Big Box Story using innerHTML to support custom styles
        document.getElementById('story-title').innerText = name + "'s Tale";
        document.getElementById('story-body').innerText = data.fullStory;
        document.getElementById('story-alias').innerHTML = data.lore.alias;
        document.getElementById('story-origin').innerHTML = data.lore.origin;
        document.getElementById('story-affiliation').innerHTML = data.lore.affiliation;

        // Update Modal using innerHTML to support <br> and <span>
        document.getElementById('info-fullname').innerHTML = data.lore.fullname;
        document.getElementById('info-species').innerHTML = data.lore.species;
        document.getElementById('info-alias').innerHTML = data.lore.alias;
        document.getElementById('info-internal').innerHTML = data.lore.internal;
        document.getElementById('info-birthday').innerHTML = data.lore.birthday;
        document.getElementById('info-origin').innerHTML = data.lore.origin;
        document.getElementById('info-age').innerHTML = data.lore.age;
        document.getElementById('info-gender').innerHTML = data.lore.gender;
        document.getElementById('info-occupation').innerHTML = data.lore.lane;
        document.getElementById('info-affiliation').innerHTML = data.lore.affiliation;
        document.getElementById('info-abilities').innerHTML = data.lore.abilities;

        img.style.opacity = '1';
    }, 300);
}

window.onload = () => {
    updateBanner('Marcel', 'Support', 'https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_2_1_60_2/100_dd980a8816698f1503cdb76201d17dd0.png');
};
