import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";

export default function Counter() {
  let [counterNumber, servCounterNumber] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counterNumber} />
      <div className="counter__buttons-container">
        <button
          onClick={() => servCounterNumber(++counterNumber)}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={() =>
            servCounterNumber(--counterNumber && counterNumber > 0)
          }
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
