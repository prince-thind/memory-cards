import React, { useEffect, useState } from 'react';

function CharacterCard(props) {
  const [clickedStatus, setClickedStatus] = useState(false);

  useEffect(() => {
    if (props.gameStatus !== 'running') {
      setClickedStatus(false);
    }
  }, [props.gameStatus]);

  function handleClick(e) {
    if (props.gameStatus !== 'running') {
      return;
    }
    if (clickedStatus === true) {
      props.gameSub('lost');
    } else {
      setClickedStatus(true);
      props.gameSub('increment');
    }
  }

  return (
    <div className="character" onClick={handleClick}>
      <img src={props.src} alt="Error fetching images" className="character-img" />
    </div>
  );
}

export default CharacterCard;
