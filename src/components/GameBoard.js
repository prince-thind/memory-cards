import React from 'react';
import CharacterCard from './CharacterCard';

function GameBoard(props) {
  return (
    <React.Fragment>
      <div className="gameboard">
        {props.characterArr.map((e) => {
          return (
            <CharacterCard
              key={e.key}
              name={e.name}
              gameStatus={props.gameStatus}
              gameSub={props.gameSub}
              src={e.src}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default GameBoard;
