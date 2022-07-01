import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "60%",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid salmon",
        borderRadius: "10px",
      }}
    >
      <h2>Counter {counter.value}</h2>
      <div>
        <button
          style={{
            padding: "5px",
            margin: "5px",
            border: "1px solid cyan",
            borderRadius: "10px",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <button
          style={{
            padding: "5px",
            margin: "5px",
            border: "1px solid salmon",
            borderRadius: "10px",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button>

        <button
          style={{
            padding: "5px",
            margin: "5px",
            border: "1px solid palegreen",
            borderRadius: "10px",
          }}
          onClick={() => dispatch(incrementByAmount({ value: 5 }))}
        >
          Increment By Amount +
        </button>
      </div>
    </div>
  );
};

export default Counter;
