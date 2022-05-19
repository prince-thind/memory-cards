import { useState, useEffect } from "react";
import _ from "lodash";
import uniqid from "uniqid";

import GameBoard from "./components/GameBoard";
import icons from "./lib/icons";
import InfoBar from "./components/InfoBar";
import Status from "./components/Status";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("running");
  const [characterArr, setCharacterArr] = useState(initCharacterArr());

  useEffect(() => {
    gameSub("shuffle");
  }, []);

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
        <Status gameStatus={gameStatus} setGameStatus={setGameStatus} gameSub={gameSub} />
      </header>
      <GameBoard
        characterArr={characterArr}
        gameStatus={gameStatus}
        gameSub={gameSub}
      />
      <footer className="footer">Copyright &copy; Prince Thind</footer>
    </div>
  );

  function gameSub(signal) {
    switch (signal) {
      case "shuffle":
        setCharacterArr((characterArr) => _.shuffle(characterArr));
        return;
      case "increment":
        setScore((score) => score + 1);
        return;
      case "lost":
        setGameStatus("lost");
        setScore(0);
        return;
      case "reset":
        setScore(0);
        setGameStatus("running");
        setCharacterArr((characterArr) => _.shuffle(characterArr));
        return;

      default:
        return;
    }
  }
  function initCharacterArr() {
    let arr = [];
    for (let i = 0; i < icons.length; i++) {
      arr.push({ icon: icons[i], key: uniqid(), name: icons[i].iconName });
    }
    return arr;
  }
}

export default App;
