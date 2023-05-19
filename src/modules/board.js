import { postData, getData } from './appi';

function Score(score, name) {
  this.score = score;
  this.user = name;
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

    displayScores = () => {
      const scoreBoard = document.querySelector('.scores');
      scoreBoard.innerHTML = '';
      this.scores.forEach((score) => {
        const scoreElement = document.createElement('li');
        scoreElement.textContent = `${score.user}:${score.score}`;
        scoreBoard.appendChild(scoreElement);
      });
    }
}
