import { NumberPress, State } from "../../types";

export const appendCurrentNumber = (
  state: State,
  action: NumberPress
): State => {
  if (state.previousOperation === "CHAINED_OPERATOR")
    return {
      ...state,
      currentNumber: action.payload,
      previousOperation: "DIGIT",
    };

  return {
    ...state,
    currentNumber: `${state.currentNumber}${action.payload}`,
  };
};
