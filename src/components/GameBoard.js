import React from "react";
import CharacterCard from "./CharacterCard";

function GameBoard(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default GameBoard;
