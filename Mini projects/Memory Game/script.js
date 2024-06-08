const cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
let cardsChosen = [];
let cardsChosenId = [];
let cardsMatched = [];

function createBoard() {
    const gameBoard = document.getElementById('gameBoard');
    cardsArray.forEach((card, index) => {
        const div = document.createElement('div');
        div.innerHTML = card;
        div.classList.add('card');
        div.setAttribute('data-id', index);
        div.addEventListener('click', flipCard);
        gameBoard.appendChild(div);
    });
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId]);
    cardsChosenId.push(cardId);
    this.classList.add('flipped');
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const [firstCard, secondCard] = cardsChosenId;
    const cards = document.querySelectorAll('.card');
    if (cardsChosen[0] === cardsChosen[1] && firstCard !== secondCard) {
        cardsMatched.push(cardsChosen[0]);
        cards[firstCard].classList.add('matched');
        cards[secondCard].classList.add('matched');
    } else {
        cards[firstCard].classList.remove('flipped');
        cards[secondCard].classList.remove('flipped');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsMatched.length === cardsArray.length / 2) {
        alert('Congratulations! You win!');
    }
}

function restartGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    cardsMatched = [];
    createBoard();
}

createBoard();
