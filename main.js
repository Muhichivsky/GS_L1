// main.js - Main application logic

// Function to switch between tabs
function switchTab(tabName) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    if (tabName === 'demonlist' && document.getElementById('demonlist').children.length === 0) {
        populateDemonlist();
    } else if (tabName === 'leaderboard' && document.getElementById('leaderboard').children.length === 0) {
        populateLeaderboard();
    } else if (tabName === 'roulette' && document.getElementById('probabilityList').children.length === 0) {
        initRoulette();
    }
}

// Initialize the page
window.onload = function() {
    populateDemonlist();
    initRoulette();
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLevelDetails();
        }
    });
};
