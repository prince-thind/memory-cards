import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import images from './components/images';
import InfoBar from './components/InfoBar';
import _ from 'loadsh';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');
  const [characterArr, setCharacterArr] = useState(initCharacterArr());

  function initCharacterArr() {
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      arr.push({ src: images[i], key: i });
    }
    return arr;
  }

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score >= characterArr.length) {
      setGameStatus('won');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (signal === 'reset') {
      setScore(0);
      setGameStatus('running');
      return;
    }
    if (signal === 'shuffle') {
      setCharacterArr(_.shuffle(characterArr));
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">Memory Cards</h1>
        <h2 className="status-bar bar">
          Score: {score} | BestScore: {bestScore}
          <button
            className="reset-button"
            onClick={() => {
              gameSub('reset');
            }}
          >
            Reset
          </button>
        </h2>
        <InfoBar gameStatus={gameStatus} setGameStatus={setGameStatus} />
      </header>
      <GameBoard
        characterArr={characterArr}
        gameStatus={gameStatus}
        gameSub={gameSub}
      />
    </div>
  );
}

export default App;
