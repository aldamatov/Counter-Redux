import "./styles.css";
import { useState } from "react";
import * as actions from "./actions";
import store from "./store";

export default function App() {
  const [state, setState] = useState("");
  const handleIncrement = () => {
    setState(!state);
    store.dispatch({
      type: actions.increment
    });
  };
  const handleDecrement = () => {
    setState(!state);
    store.dispatch({
      type: actions.decerement
    });
  };
  const reset = () => {
    setState(!state);
    store.dispatch({
      type: actions.reset
    });
  };
  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <h1>{store.getState()}</h1>
      </div>
      <div className="buttons">
        <button className="btn decrease" onClick={handleDecrement}>
          Decrease
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
        <button className="btn increase" onClick={handleIncrement}>
          Increase
        </button>
      </div>
    </div>
  );
}
