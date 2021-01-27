import { State } from "../types";

export const handleClearPress = (state: State): State => ({
  ...state,
  currentNumber: "",
});
