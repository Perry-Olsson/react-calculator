import { OperationUpdater, OperationValidator, State } from "../types";
import {
  operatorUpdates,
  operatorValidations,
} from "../eventHandlers/operatorPress";

export const restorOperatorState = (
  state: State
): [OperationValidator[], OperationUpdater[]] => {
  if (state.operation.length) return [operatorValidations, operatorUpdates];
  return [[], []];
};
