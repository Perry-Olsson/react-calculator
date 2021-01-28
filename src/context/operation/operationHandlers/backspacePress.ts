import { State } from "../types";

export const handleBackspacePress = (state: State): State => ({
  ...state,
  previousOperation: "BACKSPACE",
  currentNumber: state.currentNumber.slice(0, -1),
});
