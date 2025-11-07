// LevelDetails.js - Functions for level details modal

// Function to open level details
function openLevelDetails(levelId) {
    const level = getLevelById(levelId);
    if (!level) return;
    
    const modal = document.createElement('div');
    modal.className = 'level-details-modal';
    modal.id = 'levelDetailsModal';
    
    const victorsHTML = level.victors.map(victor => `
        <div class="victor-card">
            <div class="victor-name">${victor.name}</div>
            <a href="${victor.video}" class="victor-link" target="_blank">Смотреть прохождение</a>
        </div>
    `).join('');
    
    modal.innerHTML = `
        <div class="level-details-content">
            <button class="close-button" onclick="closeLevelDetails()">×</button>
            
            <div class="level-details-header">
                <h2>${level.name}</h2>
                <p>Позиция в списке: #${level.id}</p>
            </div>
            
            <div class="level-details-stats">
                <div class="stat-item">
                    <div class="stat-value">${level.gdId}</div>
                    <div class="stat-label">ID уровня</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${level.points}</div>
                    <div class="stat-label">Очки</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${level.creator}</div>
                    <div class="stat-label">Создатель</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${level.length}</div>
                    <div class="stat-label">Длина</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${level.difficulty}</div>
                    <div class="stat-label">Сложность</div>
                </div>
            </div>
            
            <div class="level-description">
                <h3>Описание</h3>
                <p>${level.description}</p>
            </div>
            
            <div class="victors-section">
                <h3>Прошли уровень (${level.victors.length})</h3>
                ${victorsHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLevelDetails();
        }
    });
}

// Function to close level details
function closeLevelDetails() {
    const modal = document.getElementById('levelDetailsModal');
    if (modal) {
        modal.remove();
    }
}
