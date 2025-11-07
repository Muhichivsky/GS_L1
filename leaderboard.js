// Leaderboard.js - Data and functions for leaderboard

const leaderboard = [
    { nickname: "Zoink", points: 4850 },
    { nickname: "Sunix", points: 4200 },
    { nickname: "Riot", points: 4000 },
    { nickname: "Viprin", points: 3800 },
    { nickname: "Trick", points: 3200 },
    { nickname: "npesta", points: 2800 },
    { nickname: "SpaceUK", points: 2500 },
    { nickname: "Doggie", points: 2300 },
    { nickname: "Cursed", points: 2100 },
    { nickname: "Gboy", points: 1900 }
];

// Function to populate leaderboard
function populateLeaderboard() {
    const leaderboardContainer = document.getElementById('leaderboard');
    leaderboardContainer.innerHTML = '';
    
    leaderboard.forEach((player, index) => {
        const rank = index + 1;
        const playerCard = document.createElement('div');
        playerCard.className = `player-card ${rank <= 3 ? 'top-3' : ''} player-${rank}`;
        
        playerCard.innerHTML = `
            <div class="player-header">
                <div class="player-rank">#${rank}</div>
                <div class="player-name">${player.nickname}</div>
                <div class="player-points">${player.points} pts</div>
            </div>
        `;
        
        leaderboardContainer.appendChild(playerCard);
    });
}
