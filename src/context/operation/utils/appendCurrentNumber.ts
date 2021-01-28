import { DecimalPress, NumberPress, State } from "../types";

export const appendCurrentNumber = (
  state: State,
  action: NumDecimal
): string => {
  const currentNumber = clearPreviousAnswer(state, action);

  return currentNumber;
};

const clearPreviousAnswer = (state: State, action: NumDecimal) => {
  return state.previousOperation === "CHAINED_OPERATOR"
    ? action.payload
    : `${state.currentNumber}${action.payload}`;
};

type NumDecimal = NumberPress | DecimalPress;
