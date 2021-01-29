import { State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress = (state: State): State => {
  let currentNumber = appendCurrentNumber(state, ".");
  if (isLeadingDecimal(state)) currentNumber = prependZero(currentNumber);

  return {
    ...state,
    previousEvent: "DECIMAL",
    currentNumber,
  };
};

//TODO
const isLeadingDecimal = ({ previousEvent }: State) => {
  if (previousEvent === "DIGIT") return false;
  return true;
};

const prependZero = (currentNumber: string) => {
  if (currentNumber[0] === "-") return "-0.";
  return "0.";
};
