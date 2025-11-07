// Demonlist.js - Data and functions for demonlist

const demonlist = [
    {
        id: 1,
        name: "Abyss of Darkness",
        gdId: 123456,
        points: 1000,
        creator: "ViPriN",
        description: "Extreme demon with complex wave and ship sequences. Known for its difficult timings and tight spaces.",
        length: "2:45",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Viprin", video: "https://youtube.com/watch?v=abc123" },
            { name: "Zoink", video: "https://youtube.com/watch?v=def456" },
            { name: "Riot", video: "https://youtube.com/watch?v=ghi789" }
        ]
    },
    {
        id: 2,
        name: "Acheron",
        gdId: 789012,
        points: 950,
        creator: "Ryamu",
        description: "One of the hardest levels in the game with insane wave challenges and memory sections.",
        length: "1:52",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Zoink", video: "https://youtube.com/watch?v=jkl012" },
            { name: "Sunix", video: "https://youtube.com/watch?v=mno345" }
        ]
    },
    {
        id: 3,
        name: "Silent Clubstep",
        gdId: 345678,
        points: 900,
        creator: "TheRealSailent",
        description: "A remake of Clubstep with much harder gameplay and invisible sections.",
        length: "2:15",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Sunix", video: "https://youtube.com/watch?v=pqr678" },
            { name: "Riot", video: "https://youtube.com/watch?v=stu901" },
            { name: "Viprin", video: "https://youtube.com/watch?v=vwx234" }
        ]
    },
    {
        id: 4,
        name: "Firework",
        gdId: 901234,
        points: 850,
        creator: "Endevvor",
        description: "Fast-paced level with intense ship and UFO sections. Features colorful effects.",
        length: "1:38",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Trick", video: "https://youtube.com/watch?v=yza567" },
            { name: "Zoink", video: "https://youtube.com/watch?v=bcd890" }
        ]
    },
    {
        id: 5,
        name: "Slaughterhouse",
        gdId: 567890,
        points: 800,
        creator: "IcedCave",
        description: "Notorious for its difficult wave parts and tight spaces. Considered one of the hardest levels.",
        length: "2:02",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Zoink", video: "https://youtube.com/watch?v=efg123" },
            { name: "Riot", video: "https://youtube.com/watch?v=hij456" }
        ]
    },
    {
        id: 6,
        name: "KOCMOC",
        gdId: 234567,
        points: 750,
        creator: "Viprin",
        description: "Long and challenging level with varied gameplay and multiple difficult sections.",
        length: "3:15",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Sunix", video: "https://youtube.com/watch?v=klm789" }
        ]
    },
    {
        id: 7,
        name: "LIMBO",
        gdId: 890123,
        points: 700,
        creator: "MindCap",
        description: "Atmospheric level with unique gameplay mechanics and challenging timings.",
        length: "2:28",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Zoink", video: "https://youtube.com/watch?v=nop012" },
            { name: "Viprin", video: "https://youtube.com/watch?v=qrs345" }
        ]
    },
    {
        id: 8,
        name: "Cognition",
        gdId: 456789,
        points: 650,
        creator: "Endevvor",
        description: "Memory-based level with complex patterns and difficult wave sequences.",
        length: "1:55",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Riot", video: "https://youtube.com/watch?v=tuv678" }
        ]
    },
    {
        id: 9,
        name: "Aerial Gleam",
        gdId: 123789,
        points: 600,
        creator: "Metalface221",
        description: "Beautifully decorated level with challenging ship and UFO gameplay.",
        length: "2:10",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Trick", video: "https://youtube.com/watch?v=wxy901" },
            { name: "Sunix", video: "https://youtube.com/watch?v=zab234" }
        ]
    },
    {
        id: 10,
        name: "Sakupen Circles",
        gdId: 678901,
        points: 550,
        creator: "Noobas",
        description: "Classic circle-based level with tight wave and ship sections.",
        length: "1:45",
        difficulty: "Extreme Demon",
        victors: [
            { name: "Zoink", video: "https://youtube.com/watch?v=cde567" },
            { name: "Riot", video: "https://youtube.com/watch?v=fgh890" }
        ]
    }
];

// Function to populate demonlist
function populateDemonlist() {
    const demonlistContainer = document.getElementById('demonlist');
    demonlistContainer.innerHTML = '';
    
    demonlist.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = `level-card ${level.id <= 3 ? 'top-3' : ''} level-${level.id}`;
        levelCard.onclick = () => openLevelDetails(level.id);
        
        const victorsHTML = level.victors.map(victor => 
            `<div class="victor"><a href="${victor.video}" target="_blank">${victor.name}</a></div>`
        ).join('');
        
        levelCard.innerHTML = `
            <div class="level-header">
                <div class="level-position">#${level.id}</div>
                <div class="level-name">${level.name}</div>
                <div class="level-id">ID: ${level.gdId}</div>
                <div class="level-points">${level.points} pts</div>
            </div>
            <div class="victors">
                ${victorsHTML}
            </div>
        `;
        
        demonlistContainer.appendChild(levelCard);
    });
}

// Function to get level by ID
function getLevelById(id) {
    return demonlist.find(level => level.id === id);
}
