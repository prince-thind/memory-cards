import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard.js';

function ResetButton(props) {
  if (props.gameStatus !== 'lost') {
    return null;
  }
  return (
    <button
      className="reset-button"
      onClick={() => {
        props.setGameStatus('running');
      }}
    >
      Reset
    </button>
  );
}

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score >= 12) {
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
        <ResetButton gameStatus={gameStatus} setGameStatus={setGameStatus} />
      </header>
      <p>{gameStatus}</p>
      <GameBoard gameStatus={gameStatus} updateGameStatus={gameSub} />
    </div>
  );
}

export default App;
