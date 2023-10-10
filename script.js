// JavaScript code for the Tic-Tac-Toe game
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            return gameBoard[a];
        }
    }

    if (!gameBoard.includes('')) {
        gameOver = true;
        return 'T';
    }

    return null;
}

function handleCellClick(e) {
    const cellIndex = e.target.id;
    if (gameBoard[cellIndex] === '' && !gameOver) {
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        const winner = checkWinner();
        if (winner) {
            if (winner === 'T') {
                result.textContent = "It's a Tie!";
            } else {
                result.textContent = `${winner} Wins!`;
            }
            result.classList.remove('hidden');
            resetButton.classList.remove('hidden');
        }
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    cells.forEach(cell => cell.textContent = '');
    result.textContent = '';
    result.classList.add('hidden');
    resetButton.classList.add('hidden');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
