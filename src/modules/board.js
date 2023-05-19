import { postData, getData } from './appi';

const Score = (score, name) => ({
  score,
  user: name,
});

export default class Board {
  constructor() {
    this.scores = [];
  }

    addPlayerScore = (score, name) => {
      const newScore = Score(score, name);
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

        scoreElement.innerHTML = `<p>${score.user}:</p>
                                    <p>${score.score}</p>`;
        scoreBoard.appendChild(scoreElement);
      });
    }
}
