import { State } from "../types";
import { restorePreviousState } from "../utils";

export const handleBackspacePress = (state: State): State => {
  const [validations, operationUpdates] = restorePreviousState(state, 2);
  return {
    ...state,
    previousEvent: "BACKSPACE",
    currentNumber: state.currentNumber.slice(0, -1),
    validations,
    operationUpdates,
  };
};
