import { OperationUpdater, OperationValidator, State } from "../types";
import {
  decimalUpdates,
  decimalValidations,
} from "../eventHandlers/decimalPress";
import { numberUpdates, numberValidations } from "../eventHandlers/numberPress";
import { operatorUpdates, operatorValidations } from "../eventHandlers";

export const restorePreviousState = (
  state: State,
  decimalIndex = 1
): [OperationValidator[], OperationUpdater[]] => {
  const length = state.currentNumber.length;

  if (length === 1) return restorOperatorState(state);
  else if (state.currentNumber[length - decimalIndex] === ".")
    return [decimalValidations, decimalUpdates];
  else return [numberValidations, numberUpdates];
};

export const restorOperatorState = (
  state: State
): [OperationValidator[], OperationUpdater[]] => {
  if (state.operation.length) return [operatorValidations, operatorUpdates];
  return [[], []];
};
