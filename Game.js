const gameContainer = document.querySelector('.game-container');
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Unique values for matching
let gameCards = [...cardValues, ...cardValues]; // Double the values to create pairs
let flippedCards = [];
let matchedCards = [];
let isGameOver = false;

// Shuffle the cards
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Create cards and append to the game container
function createCards() {
  shuffleArray(gameCards).forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${value}</div>
      </div>
    `;
    card.addEventListener('click', () => flipCard(card, value));
    gameContainer.appendChild(card);
  });
}

// Flip a card when clicked
function flipCard(card, value) {
  if (flippedCards.length === 2 || card.classList.contains('flipped') || isGameOver) {
    return; // Ignore clicks if there are already 2 flipped cards or game is over
  }

  card.classList.add('flipped');
  flippedCards.push({ card, value });

  // If 2 cards are flipped, check for a match
  if (flippedCards.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

// Check if the flipped cards match
function checkForMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (firstCard.value === secondCard.value) {
    matchedCards.push(firstCard, secondCard);
    flippedCards = [];
    if (matchedCards.length === gameCards.length) {
      alert("You win!");
      isGameOver = true;
    }
  } else {
    firstCard.card.classList.remove('flipped');
    secondCard.card.classList.remove('flipped');
    flippedCards = [];
  }
}

// Start the game
createCards();
