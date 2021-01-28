import { ActionHandler, OperatorPress, State } from "../types";
import { appendOperation, changeOperator } from "../utils";

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  if (isOperatorChange(state)) return changeOperator(state, action);
  else return updateOperation(state, action);
};

export const isOperatorChange = ({
  previousOperation,
  currentNumber,
}: State) => {
  if (
    previousOperation === "CHAINED_OPERATOR" ||
    previousOperation === "INITIAL_OPERATOR" ||
    (previousOperation === "BACKSPACE" && !currentNumber)
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

  const payload = [state.currentNumber, action.payload];

  return {
    ...state,
    operation: appendOperation(state, payload),
    previousOperation,
    currentNumber: isInitialOperation ? "" : "answer",
  };
};
