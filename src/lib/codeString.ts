export const codeString: string = `import React, { useReducer } from "react";

interface State {
  count: number;
}

enum Types {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

type Action = { type: Types.INCREMENT } | { type: Types.DECREMENT };

const reducer = (state: State, action: Action) => {
  const { INCREMENT, DECREMENT } = Types;
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialState: State = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = Types;
  return (
    <>
      <p>Counter:</p>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
    </>
  );
};

export default Counter;`;
