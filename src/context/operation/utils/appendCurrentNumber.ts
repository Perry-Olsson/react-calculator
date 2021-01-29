import { DecimalPress, NumberPress, State } from "../types";

export const appendCurrentNumber = (
  state: State,
  action: NumDecimal
): string => {
  const currentNumber = clearPreviousAnswer(state, action);

  return currentNumber;
};

const clearPreviousAnswer = (
  { previousEvent, currentNumber }: State,
  action: NumDecimal
) => {
  return previousEvent === "CHAINED_OPERATOR"
    ? action.payload
    : `${currentNumber}${action.payload}`;
};

type NumDecimal = NumberPress | DecimalPress;
