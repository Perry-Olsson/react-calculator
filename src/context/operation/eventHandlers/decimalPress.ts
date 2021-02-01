import { State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress = (state: State): State => {
  let currentNumber = appendCurrentNumber(state, ".");
  if (isLeadingDecimal(state)) currentNumber = prependZero();

  return {
    ...state,
    currentNumber,
    validations: [],
    operationUpdates: [],
  };
};

const isLeadingDecimal = ({ currentNumber }: State) => {
  if (!currentNumber) return true;
  return false;
};

const prependZero = () => {
  return "0.";
};
