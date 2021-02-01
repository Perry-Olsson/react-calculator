import { State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress = (state: State): State => {
  let currentNumber = appendCurrentNumber(state, ".");
  if (isLeadingDecimal(state)) currentNumber = prependZero();

  return {
    ...state,
    currentNumber,
    validations: decimalValidations,
    operationUpdates: decimalUpdates,
  };
};

const isLeadingDecimal = ({ currentNumber }: State) => {
  if (!currentNumber) return true;
  return false;
};

const prependZero = () => {
  return "0.";
};

export const decimalValidations = [];
export const decimalUpdates = [];
