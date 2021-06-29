import React from 'react';
import uniqid from 'uniqid';
import CharacterCard from './CharacterCard';
import _ from 'loadsh';

let characterArrays = [];
for (let i = 0; i < 12; i++) {
  characterArrays.push({ name: 'char' + i, key: uniqid() });
}



function GameBoard(props) {
    characterArrays=_.shuffle(characterArrays);

  return (
    <div className="gameBoard">
      {characterArrays.map((e) => {
        return (
          <CharacterCard
            key={e.key}
            name={e.name}
            gameStatus={props.gameStatus}
            updateGameStatus={props.updateGameStatus}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
