import React from 'react';
import CharacterCard from './CharacterCard';
import _ from 'loadsh';

function GameBoard(props) {
  const shuffledArray = _.shuffle(props.characterArrays);

  return (
    <React.Fragment>
      <WinBar gameStatus={props.gameStatus} />
      <LoseBar gameStatus={props.gameStatus} setGameStatus={props.setGameStatus} />

      <div className="gameboard">
        {shuffledArray.map((e) => {
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

function LoseBar(props) {
  if (props.gameStatus !== 'lost') {
    return null;
  }
  return (
    <div className="reset-bar">
      <span className="lost-bar">You Lost</span>
    </div>
  );
}

function WinBar(props) {
  if (props.gameStatus !== 'won') {
    return null;
  }
  return <div className="win-bar">You Won!</div>;
}

export default GameBoard;
