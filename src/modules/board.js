import { postData, getData } from './appi';

function Score(playerScore, PlayerName) {
  this.score = playerScore;
  this.name = PlayerName;
}

export default class Board {
  constructor() {
    this.scores = [];
  }

    addPlayerScore = (score, name) => {
      const newScore = new Score(score, name);
      postData(newScore);
    }

    getScores = async () => {
      const scores = await getData();
      this.scores = scores;
    }

    displayScore = () => {
      const scoreBoard = document.querySelector('.scores');
      scoreBoard.innerHTML = '';
      this.scores.forEach((score) => {
        const scoreElement = document.createElement('li');
        scoreElement.textContent = `${score.user}:${score.score}`;
        scoreBoard.appendChild(scoreElement);
      });
    }
}
