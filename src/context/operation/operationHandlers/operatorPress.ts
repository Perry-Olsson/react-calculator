import { ActionHandler, OperationCodes, OperatorPress } from "../types";
import { appendOperation, changeOperator } from "../utils";

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  if (isOperatorChange(state.previousOperation))
    return changeOperator(state, action);
  else return updateOperation(state, action);
};

export const isOperatorChange = (previousOperation: OperationCodes) => {
  if (
    previousOperation === "CHAINED_OPERATOR" ||
    previousOperation === "INITIAL_OPERATOR"
  )
    return true;
  else return false;
};

export const updateOperation: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  const isInitialOperation = state.operation.length ? false : true;

  const previousOperation = isInitialOperation
    ? "INITIAL_OPERATOR"
    : "CHAINED_OPERATOR";

  return {
    operation: appendOperation(state, [state.currentNumber, action.payload]),
    previousOperation,
    currentNumber: isInitialOperation ? "" : "answer",
  };
};
