import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function Status(props) {
  if (props.gameStatus === "lost") {
    return (
      <section className="status-modal">
        <div className="status lost">
          <div>You Lost</div>
          <button
            className="reset-button"
            onClick={() => {
              props.gameSub("reset");
            }}
          >
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>
      </section>
    );
  }

  if (props.gameStatus === "won") {
    return (
      <section className="status-modal">
        <div className="status win">
          <div>You Won!</div>
          <button
            className="reset-button"
            onClick={() => {
              props.gameSub("reset");
            }}
          >
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>
      </section>
    );
  }
  return null;
}

export default Status;
