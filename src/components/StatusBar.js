function InfoBar(props) {
    if (props.gameStatus === 'lost') {
      return (
          <div className="lost-bar bar">You Lost</div>
      );
    } else if (props.gameStatus === 'won') {
      return <div className="win-bar bar">You Won!</div>;
    } else return null;
  }

  export default InfoBar;