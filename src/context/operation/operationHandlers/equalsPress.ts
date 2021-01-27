import { State } from "../types";
import { appendOperation } from "../utils";

export const handleEqualsPress = (state: State): State => ({
  ...state,
  operation: appendOperation(state, [state.currentNumber, "=", "answer"]),
  previousOperation: "EQUALS",
  currentNumber: "answer",
});
