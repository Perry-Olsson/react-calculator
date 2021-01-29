import { ActionHandler, OperatorPress, State } from "../types";
import { appendOperation, changeOperator } from "../utils";

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  if (isOperatorChange(state)) return changeOperator(state, action);
  else return updateOperation(state, action);
};

const isOperatorChange = ({ previousEvent, currentNumber }: State) => {
  if (
    previousEvent === "CHAINED_OPERATOR" ||
    previousEvent === "INITIAL_OPERATOR" ||
    ((previousEvent === "BACKSPACE" || previousEvent === "SIGN") &&
      !currentNumber)
  )
    return true;
  else return false;
};

const updateOperation: ActionHandler<OperatorPress> = (state, action) => {
  const isInitialOperation = state.operation.length ? false : true;

  const previousEvent = isInitialOperation
    ? "INITIAL_OPERATOR"
    : "CHAINED_OPERATOR";

  const payload = [state.currentNumber, action.payload];

  return {
    ...state,
    operation: appendOperation(state, payload),
    previousEvent,
    currentNumber: isInitialOperation ? "" : "answer",
  };
};
