import { ActionHandler, DecimalPress, State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress: ActionHandler<DecimalPress> = (
  state,
  action
) => {
  let currentNumber = appendCurrentNumber(state, action);
  if (isLeadingDecimal(state)) currentNumber = prependZero(currentNumber);

  return {
    ...state,
    previousEvent: "DECIMAL",
    currentNumber,
  };
};

const isLeadingDecimal = ({ previousEvent }: State) => {
  if (previousEvent === "DIGIT") return false;
  return true;
};

const prependZero = (currentNumber: string) => {
  return `0${currentNumber}`;
};
