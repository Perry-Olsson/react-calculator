import { State } from "../types";

export const handleSignPress = (state: State): State => {
  const currentNumber = toggleSign(state.currentNumber);

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
