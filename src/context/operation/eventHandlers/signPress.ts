import { State } from "../types";
import { clearPreviousAnswer } from "../utils";

export const handleSignPress = (state: State): State => {
  const currentNumber = toggleSign(clearPreviousAnswer(state));

  return {
    ...state,
    previousEvent: "SIGN",
    currentNumber,
  };
};

const toggleSign = (currentNumber: string): string => {
  return currentNumber[0] === "-"
    ? currentNumber.slice(1)
    : `-${currentNumber}`;
};
