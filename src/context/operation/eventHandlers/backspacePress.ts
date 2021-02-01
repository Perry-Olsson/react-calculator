import { State } from "../types";
import { restorOperatorState } from "../utils/restoreOperatorValidations";
import { decimalUpdates, decimalValidations } from "./decimalPress";
import { numberUpdates, numberValidations } from "./numberPress";

export const handleBackspacePress = (state: State): State => {
  return restorePreviousState(state);
};

const restorePreviousState = (state: State): State => {
  const length = state.currentNumber.length;
  let validations, operationUpdates;

  if (length === 1)
    [validations, operationUpdates] = restorOperatorState(state);
  else if (state.currentNumber[length - 2] === ".")
    [validations, operationUpdates] = [decimalValidations, decimalUpdates];
  else [validations, operationUpdates] = [numberValidations, numberUpdates];

  return {
    ...state,
    previousEvent: "BACKSPACE",
    currentNumber: state.currentNumber.slice(0, -1),
    validations,
    operationUpdates,
  };
};
