import { OperationUpdater, OperationValidator, State } from "../types";
import { numberUpdates, numberValidations } from "../eventHandlers/numberPress";
import {
  decimalUpdates,
  decimalValidations,
  operatorUpdates,
  operatorValidations,
} from "../eventHandlers";

export const restorePreviousState = (
  state: State
): [OperationValidator[], OperationUpdater[]] => {
  const length = state.currentNumber.length;

  if (length === 1) return restorOperatorState(state);
  else if (state.currentNumber[state.currentNumber.length - 2] === ".")
    return [decimalValidations, decimalUpdates];
  else return [numberValidations, numberUpdates];
};

export const restorOperatorState = (
  state: State
): [OperationValidator[], OperationUpdater[]] => {
  if (state.operation.length) return [operatorValidations, operatorUpdates];
  return [[], []];
};
