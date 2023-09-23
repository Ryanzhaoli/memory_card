import "../App.css";
import Prompt from "./prompt";

export default function Game(props) {
  function gameOver() {
    props.updateBestScore();
    props.start();
  }

  function update(choice) {
    if (choice) {
      if (props.seenPkmn.includes(props.currPokemon)) {
        props.incrementScore();
      } else {
        gameOver();
      }
    } else {
      if (!props.seenPkmn.includes(props.currPokemon)) {
        props.incrementScore();
        props.updateSeenPkmn();
      } else {
        gameOver();
      }
    }
    props.randomPokemon();;
  }

  return (
    <main >
      <div className="gameSpace e-flex justify-content-around align-items-center">
        <p>{props.currPokemon}</p>
        <Prompt update={update} />
      </div>
    </main>
  );
}
