import { State } from "../types";

export const appendCurrentNumber = (state: State, value: string): string => {
  const currentNumber = `${state.currentNumber}${value}`;

  return currentNumber;
};
