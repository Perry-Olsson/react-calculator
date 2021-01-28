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
    previousOperation: "DECIMAL",
    currentNumber,
  };
};

const isLeadingDecimal = ({ previousOperation }: State) => {
  if (previousOperation === "DIGIT") return false;
  return true;
};

const prependZero = (currentNumber: string) => {
  return `0${currentNumber}`;
};
