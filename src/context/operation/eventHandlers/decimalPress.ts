import { State, OperationValidator } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress = (state: State): State => {
  let currentNumber = appendCurrentNumber(state, ".");
  if (isLeadingDecimal(state)) currentNumber = prependZero();

  return {
    ...state,
    previousEvent: "DECIMAL",
    currentNumber,
    validations: [invalidateOperator],
  };
};

const isLeadingDecimal = ({ currentNumber }: State) => {
  if (!currentNumber) return true;
  return false;
};

const prependZero = () => {
  return "0.";
};

const invalidateOperator: OperationValidator = ({ event }) => {
  if (event === "OPERATOR" || event === "EQUALS") return false;
  return true;
};
