import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import images from "./components/images";
import InfoBar from "./components/InfoBar";
import _ from "loadsh";
import uniqid from "uniqid";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("running");
  const [characterArr, setCharacterArr] = useState(initCharacterArr());

  function initCharacterArr() {
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      arr.push({ src: images[i], key: uniqid() });
    }
    return arr;
  }

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score >= characterArr.length) {
      setGameStatus("won");
    }
  }, [score, bestScore, characterArr]);

  // useEffect(() => {
  //   if (gameStatus === 'lost') {
  //     setScore(0);
  //   }
  // }, [gameStatus]);

  function gameSub(signal) {
    if (signal === "lost") {
      setGameStatus("lost");
      setScore(0);
      return;
    }
    if (signal === "increment") {
      setScore((score) => score + 1);
      return;
    }
    if (signal === "reset") {
      setScore(0);
      setGameStatus("running");
      return;
    }
    if (signal === "shuffle") {
      setCharacterArr((characterArr) => _.shuffle(characterArr));
      return;
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">Memory Cards</h1>
        <h2 className="status-bar bar">
         BestScore: {bestScore} <div>Score: {score}  </div>
          <button
            className="reset-button"
            onClick={() => {
              gameSub("reset");
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
