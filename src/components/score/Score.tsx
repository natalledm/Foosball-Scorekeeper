import { useState } from "react";
import Goals from "./Goals";

export default function Score() {
  const [player1Goals, setPlayer1Goals] = useState<number>(0);
  const [player2Goals, setPlayer2Goals] = useState<number>(0);

  const onPlayer1Goal = () => {
    setPlayer1Goals(player1Goals + 1);
  };

  const onPlayer2Goal = () => {
    setPlayer2Goals(player2Goals + 1);
  };

  const onReset = () => {
    setPlayer1Goals(0);
    setPlayer2Goals(0);
  };

  return (
    <section>
      <Goals player1={player1Goals} player2={player2Goals} />
      <div>
        <p>Use the buttons to keep score</p>
        <div className="maxScore-container">
          <label htmlFor="max" className="label is-medium is-inline">
            Max score:
          </label>
          <div className="select is-rounded">
            <select name="max" className="max" id="max">
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="9">9</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="max" className="label is-medium mt-3 mb-3">
            Play by 2?
          </label>
          {/* <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="answer"
                value="yes"
                className="playBy2Yes"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="answer"
                value="no"
                className="playBy2No"
                checked
              />
              No
            </label>
          </div> */}
        </div>
      </div>
      <div>
        <button
          className="p1Button button is-primary mr-2"
          onClick={onPlayer1Goal}
        >
          +1 Player One
        </button>
        <button
          className="p2Button button is-info mr-2"
          onClick={onPlayer2Goal}
        >
          +1 Player Two
        </button>
        <button className="reset button is-danger mr-2" onClick={onReset}>
          Reset
        </button>
      </div>
    </section>
  );
}
