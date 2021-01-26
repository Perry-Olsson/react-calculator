import { ActionHandler, OperatorPress } from "../../types";
import { appendOperation } from "./appendOperation";

export const updateOperation: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  const isInitialOperation = state.operation.length ? false : true;

  return {
    operation: appendOperation(state, [state.currentNumber, action.payload]),
    previousOperation: isInitialOperation
      ? "INITIAL_OPERATOR"
      : "CHAINED_OPERATOR",
    currentNumber: isInitialOperation ? "" : "answer",
  };
};
