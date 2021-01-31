import { State } from "../types";

export const handleClearPress = (state: State): State => ({
  ...state,
  previousEvent: "CLEAR",
  currentNumber: "",
  validations: [],
});
