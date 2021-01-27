import { State } from "../types";

export const handleBackspacePress = (state: State): State => ({
  ...state,
  currentNumber: state.currentNumber.slice(0, -1),
});
