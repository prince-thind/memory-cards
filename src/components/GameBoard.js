import React from "react";
import CharacterCard from "./CharacterCard";

function GameBoard(props) {
  return (
    <main>
      <div className="gameboard">
        {props.characterArr.map((character) => {
          return (
            <CharacterCard
              key={character.key}
              name={character.name}
              gameStatus={props.gameStatus}
              gameSub={props.gameSub}
              icon={character.icon}
            />
          );
        })}
      </div>
    </main>
  );
}

export default GameBoard;
