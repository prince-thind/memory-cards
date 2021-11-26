import { useState, useEffect } from "react";
import _ from "loadsh";
import uniqid from "uniqid";

import GameBoard from "./components/GameBoard";
import icons from "./lib/icons";
import InfoBar from "./components/InfoBar";
import StatusBar from "./components/StatusBar";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("running");
  const [characterArr, setCharacterArr] = useState(initCharacterArr());

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score >= characterArr.length) {
      setGameStatus("won");
    }
  }, [score, bestScore, characterArr]);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Memory Cards</h1>
        <InfoBar bestScore={bestScore} score={score} gameSub={gameSub} />
        <StatusBar gameStatus={gameStatus} setGameStatus={setGameStatus} />
      </header>
      <GameBoard
        characterArr={characterArr}
        gameStatus={gameStatus}
        gameSub={gameSub}
      />
    </div>
  );

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

  function initCharacterArr() {
    let arr = [];
    for (let i = 0; i < icons.length; i++) {
      arr.push({ icon: icons[i], key: uniqid() });
    }
    return arr;
  }
}

export default App;
