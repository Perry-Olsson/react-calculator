import { State } from "../types";

export const handleBackspacePress = (state: State): State => ({
  ...state,
  previousEvent: "BACKSPACE",
  currentNumber: state.currentNumber.slice(0, -1),
  validations: [],
});
