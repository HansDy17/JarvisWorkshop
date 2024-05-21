document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('is-flipped');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        displayCheckIcon(firstCard);
        displayCheckIcon(secondCard);

        matchedPairs++;
        if (matchedPairs === cards.length / 2) {
            setTimeout(showCongratulations, 500);
        }

        resetBoard();
    }

    function displayCheckIcon(card) {
        const backFace = card.querySelector('.card-face.face-back');
        const checkIcon = document.createElement('img');
        checkIcon.src = '/myMemoryGame/assets/images/check.png';
        checkIcon.alt = 'Matched';
        checkIcon.classList.add('check-icon');
        backFace.appendChild(checkIcon);
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('is-flipped');
            secondCard.classList.remove('is-flipped');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function shuffle() {
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            const cardsInRow = Array.from(row.querySelectorAll('.col'));
            cardsInRow.forEach(card => row.appendChild(card));
            cardsInRow.sort(() => Math.random() - 0.5);
            cardsInRow.forEach(card => row.appendChild(card));
        });
    }
    

    function showCongratulations() {
        alert('Congratulations! You have matched all the pairs!');
    }

    function resetGame() {
        matchedPairs = 0;
        cards.forEach(card => {
            card.classList.remove('is-flipped');
            const backFace = card.querySelector('.card-face.face-back');
            const checkIcon = backFace.querySelector('.check-icon');
            if (checkIcon) {
                checkIcon.remove();
            }
            card.addEventListener('click', flipCard);
        });
        resetBoard();
        shuffle();
    }

    (function initializeGame() {
        cards.forEach(card => {
            card.addEventListener('click', flipCard);
        });
        shuffle();
    })();

    document.querySelector('.top-right-button').addEventListener('click', resetGame);
});
