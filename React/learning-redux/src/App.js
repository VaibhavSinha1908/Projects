import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, IsLoggedIn } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLoggedIn);
  console.log(isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello!</h1>
      <h3>Counter : {counter}</h3>
      <p>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(2))}>-</button>
      </p>
      <div>
        {isLogged ? (
          <h3>valuable information I should see!</h3>
        ) : (
          "Secure Information"
        )}
        <div>
          <button onClick={() => dispatch(IsLoggedIn(true))}>LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default App;
