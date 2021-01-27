import { ActionHandler, OperationCodes, OperatorPress } from "../types";
import { changeOperator, updateOperation } from "../utils";

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
