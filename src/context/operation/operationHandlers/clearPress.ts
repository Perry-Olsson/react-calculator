import { State } from "../types";

export const handleClearPress = (state: State): State => ({
  ...state,
  previousOperation: "CLEAR",
  currentNumber: "",
});
