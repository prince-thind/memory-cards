import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function InfoBar({ bestScore, score, gameSub }) {
  return (
    <h2 className="status-bar bar">
      BestScore: {bestScore} <div>Score: {score} </div>
      <button
        className="reset-button"
        onClick={() => {
          gameSub("reset");
        }}
      >
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </h2>
  );
}

export default InfoBar;
