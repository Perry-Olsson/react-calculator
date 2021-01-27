import { NumberPress, State } from "../types";

export const appendCurrentNumber = (
  state: State,
  action: NumberPress
): State => {
  const currentNumber = clearPreviousAnswer(state, action);

  return {
    ...state,
    currentNumber,
    previousOperation: "DIGIT",
  };
};

const clearPreviousAnswer = (state: State, action: NumberPress) => {
  return state.previousOperation === "CHAINED_OPERATOR"
    ? action.payload
    : `${state.currentNumber}${action.payload}`;
};
