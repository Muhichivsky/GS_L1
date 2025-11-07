// script.js

const levels = [
  { name: 'Bloodbath', difficulty: 'extreme', rating: 9.5, position: 1 },
  { name: 'Slaughterhouse', difficulty: 'extreme', rating: 9.8, position: 2 },
  { name: 'Theory of Everything 2', difficulty: 'hard', rating: 8.5, position: 3 },
  { name: 'Hexagon Force', difficulty: 'normal', rating: 7.9, position: 4 },
  { name: 'Stereo Madness', difficulty: 'easy', rating: 6.5, position: 5 },
  { name: 'Clubstep', difficulty: 'hard', rating: 8.2, position: 6 },
  { name: 'Time Machine', difficulty: 'normal', rating: 7.3, position: 7 },
  { name: 'Blast Processing', difficulty: 'hard', rating: 8.0, position: 8 }
];

const levelListElement = document.getElementById('levels');
const difficultyFilter = document.getElementById('difficulty');
const sortFilter = document.getElementById('sort');

// Функция для создания элемента списка для уровня
function createLevelItem(level) {
  const li = document.createElement('li');
  li.classList.add(`difficulty-${level.difficulty}`);

  const nameSpan = document.createElement('span');
  nameSpan.textContent = `${level.position}. ${level.name}`;

  const ratingSpan = document.createElement('span');
  ratingSpan.textContent = `Rating: ${level.rating}`;

  const positionSpan = document.createElement('span');
  positionSpan.classList.add('position');
  positionSpan.textContent = `Position: ${level.position}`;

  li.appendChild(nameSpan);
  li.appendChild(ratingSpan);
  li.appendChild(positionSpan);

  return li;
}

// Функция для обновления списка уровней в зависимости от выбранных фильтров
function updateLevelList() {
  const selectedDifficulty = difficultyFilter.value;
  const selectedSort = sortFilter.value;
  levelListElement.innerHTML = ''; // Очищаем текущий список

  let filteredLevels = levels.filter(level => {
    return selectedDifficulty === 'all' || level.difficulty === selectedDifficulty;
  });

  // Сортировка уровней
  if (selectedSort === 'rating') {
    filteredLevels.sort((a, b) => b.rating - a.rating); // Сортировка по рейтингу (по убыванию)
  } else if (selectedSort === 'position') {
    filteredLevels.sort((a, b) => a.position - b.position); // Сортировка по позиции (по возрастанию)
  }

  // Добавление уровней в список
  filteredLevels.forEach(level => {
    const levelItem = createLevelItem(level);
    levelListElement.appendChild(levelItem);
  });
}

// Первоначальное обновление списка уровней
updateLevelList();

// Обработчик событий для фильтров
difficultyFilter.addEventListener('change', updateLevelList);
sortFilter.addEventListener('change', updateLevelList);
