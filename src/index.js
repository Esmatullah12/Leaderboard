import './style.css';
import Board from './modules/board';

const board = new Board();

const scoreForm = document.querySelector('.score-from');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.querySelector('.refresh-btn');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = name.value;
  const playerScore = score.value;
  board.addPlayerScore(playerScore, playerName);
  name.value = '';
  score.value = '';
});

const relaodSocre = async () => {
  await board.getScores();
  board.displayScores();
};

refresh.addEventListener('click', () => {
  relaodSocre();
});

window.onload = async () => {
  relaodSocre();
};