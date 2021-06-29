import './App.css';
import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard.js';
import images from './components/images.js';
import uniqid from 'uniqid';

let characterArrays = [];
for (let i = 0; i <= 11; i++) {
  characterArrays.push({ src: images[i], key: uniqid() });
}

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score >= characterArrays.length) {
      setGameStatus('won');
    }
  }, [score, bestScore]);

  useEffect(() => {
    if (gameStatus === 'lost') {
      setScore(0);
    }
  }, [gameStatus]);

  function gameSub(signal) {
    if (signal === 'lost') {
      setGameStatus('lost');
      return;
    }
    if (signal === 'increment') {
      setScore(score + 1);
      return;
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">Memory Cards</h1>
        <h2 className="heading-intro">Goal: Click on every card only once</h2>
        <h3 className="status-bar">
          BestScore: {bestScore} Score: {score}
        </h3>
      </header>
      <GameBoard
        characterArrays={characterArrays}
        gameStatus={gameStatus}
        gameSub={gameSub}
        setGameStatus={setGameStatus}
      />
    </div>
  );
}

export default App;
