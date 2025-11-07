// Roulette.js - Demon Roulette for GigaSquad Demonlist

// Define probabilities for each demon (in percentages)
const demonProbabilities = [
    { name: "Abyss of Darkness", percentage: 1 },
    { name: "Acheron", percentage: 2 },
    { name: "Silent Clubstep", percentage: 2 },
    { name: "Firework", percentage: 5 },
    { name: "Slaughterhouse", percentage: 8 },
    { name: "KOCMOC", percentage: 3 },
    { name: "LIMBO", percentage: 10 },
    { name: "Cognition", percentage: 15 },
    { name: "Aerial Gleam", percentage: 20 },
    { name: "Sakupen Circles", percentage: 34 }
];

// Function to populate probability list for roulette
function populateProbabilityList() {
    const probabilityList = document.getElementById('probabilityList');
    probabilityList.innerHTML = '';
    
    demonProbabilities.forEach(item => {
        const probabilityItem = document.createElement('div');
        probabilityItem.className = 'probability-item';
        
        probabilityItem.innerHTML = `
            <div class="demon-name">${item.name}</div>
            <div class="demon-percentage">${item.percentage}%</div>
        `;
        
        probabilityList.appendChild(probabilityItem);
    });
}

// Function to select a random demon based on probabilities
function selectRandomDemon() {
    let cumulative = 0;
    const cumulativeProbabilities = demonProbabilities.map(demon => {
        cumulative += demon.percentage;
        return { 
            name: demon.name, 
            cumulative: cumulative,
            percentage: demon.percentage
        };
    });

    const random = Math.random() * 100;
    
    for (let i = 0; i < cumulativeProbabilities.length; i++) {
        if (random <= cumulativeProbabilities[i].cumulative) {
            return {
                name: cumulativeProbabilities[i].name,
                percentage: cumulativeProbabilities[i].percentage
            };
        }
    }
    
    return {
        name: cumulativeProbabilities[cumulativeProbabilities.length - 1].name,
        percentage: cumulativeProbabilities[cumulativeProbabilities.length - 1].percentage
    };
}

// Function to spin the roulette
function spinRoulette() {
    const spinButton = document.getElementById('spinButton');
    const rouletteWheel = document.getElementById('rouletteWheel');
    const rouletteResult = document.getElementById('rouletteResult');
    
    spinButton.disabled = true;
    spinButton.textContent = 'Крутится...';
    
    rouletteWheel.style.transform = 'rotate(0deg)';
    
    const fullRotations = 5;
    const randomAngle = Math.random() * 360;
    const totalRotation = fullRotations * 360 + randomAngle;
    
    rouletteWheel.style.transform = `rotate(${totalRotation}deg)`;
    
    setTimeout(() => {
        const selectedDemon = selectRandomDemon();
        
        rouletteResult.innerHTML = `
            <p>Выпал демон:</p>
            <div class="selected-demon">${selectedDemon.name}</div>
            <div class="selected-percentage">Вероятность выпадения: ${selectedDemon.percentage}%</div>
        `;
        
        spinButton.disabled = false;
        spinButton.textContent = 'Крутить рулетку!';
    }, 3000);
}

// Initialize roulette
function initRoulette() {
    const spinButton = document.getElementById('spinButton');
    spinButton.addEventListener('click', spinRoulette);
    populateProbabilityList();
}
