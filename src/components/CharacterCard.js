import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function CharacterCard(props) {
  const [clickedStatus, setClickedStatus] = useState(false);

  useEffect(() => {
    if (props.gameStatus !== "running") {
      setClickedStatus(false);
    }
  }, [props.gameStatus]);

  function handleClick(e) {
    if (props.gameStatus !== "running") return;

    if (clickedStatus === true) {
      props.gameSub("lost");
    } else {
      setClickedStatus(true);
      props.gameSub("increment");
      props.gameSub("shuffle");
    }
  }
  return (
    <div onClick={handleClick} title={props.name}>
      <FontAwesomeIcon icon={props.icon} className="character" />
    </div>
  );
}

export default CharacterCard;
