import { useEffect, useReducer, useState } from "react";

function WorkShop() {
  //   const [count, setCount] = useState(0);
  // count is a 'getter' - read only
  // setCount is a 'setter' - update count
  const [title, setTitle] = useState("");
  const [override, setOverride] = useState(0);
  const [count, dispatch] = useReducer((count, action) => {
    switch (action.type) {
      case "INCREMENT":
        return count + 1;
      case "DECREMENT":
        return count - 1;
      case "MULTIPLY_BY_7":
        return count * 7;
      case "OVERRIDE":
        return Number(action.data);
      default:
        throw Error("BAD ACTION");
    }
  }, 0);

  useEffect(() => {
    if (count > 9000) {
      setTitle("OVER 9000!!!!");
    } else {
      setTitle("");
    }
  }, [count]);
  // the array at the end, [] - is the 'dependency array'
  // an empty dependency array = "Only run the code in this useEffect on first load, and never again"

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const multiplyBySeven = () => {
  //     setCount(count * 7);
  //   };

  return (
    <div>
      <h1>{title}</h1>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MULTIPLY_BY_7" });
        }}
      >
        X 7
      </button>
      <div>
        <input
          value={override}
          onChange={(event) => setOverride(event.target.value)}
          type="number"
        />
        <button
          onClick={() => {
            dispatch({ type: "OVERRIDE", data: override });
          }}
        >
          OVERRIDE
        </button>
      </div>
    </div>
  );
}

export default WorkShop;
