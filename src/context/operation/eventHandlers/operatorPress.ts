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
    previousEvent === "OPERATOR" ||
    ((previousEvent === "BACKSPACE" || previousEvent === "SIGN") &&
      !currentNumber)
  )
    return true;
  else return false;
};

const updateOperation: ActionHandler<OperatorPress> = (state, action) => {
  const payload = [state.currentNumber, action.payload];

  const currentNumber = state.operation.length > 1 ? "answer" : "";

  return {
    ...state,
    operation: appendOperation(state, payload),
    previousEvent: "OPERATOR",
    currentNumber,
  };
};
