import { State } from "../types";
import { clearPreviousAnswer } from "./clearPreviousAnswer";

export const appendCurrentNumber = (state: State, value: string): string => {
  const currentNumber = `${clearPreviousAnswer(state)}${value}`;

  return currentNumber;
};
