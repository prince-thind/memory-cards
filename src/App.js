import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard.js';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');

  function updateBestScore(score) {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  function incrementScore() {
    setScore(score + 1);
  }

  function updateGameStatus(status) {
    if (status === 'lost') {
      setGameStatus('lost');
    }
    if (score === 12) {
      setGameStatus('won');
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">Memory Cards</h1>
        <h2 className="heading-intro">Goal: Click on every card only once</h2>
      </header>
      <GameBoard
        bestScore={bestScore}
        score={score}
        gameStatus={gameStatus}
        updateBestScore={updateBestScore}
        incrementScore={incrementScore}
        updateGameStatus={updateGameStatus}
      />
    </div>
  );
}

export default App;
