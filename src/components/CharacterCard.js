import React, { useEffect, useState } from 'react';

function CharacterCard(props) {
  const [clickedStatus, setClickedStatus] = useState(false);

  useEffect(() => {
    if (props.gameStatus === 'lost') {
      setClickedStatus(false);
    }
  }, [props.gameStatus]);

  function handleClick(e) {
    if (clickedStatus || props.gameStatus === 'lost') {
      props.updateGameStatus('lost');
    } else {
      setClickedStatus(true);
      props.updateGameStatus('increment');
    }
  }

  return (
      <div className="character" onClick={handleClick}>
        {props.name}
      </div>
  );
}

export default CharacterCard;
