import { clearPress, updateState } from "..";
import {
  ActionHandler,
  OperationUpdater,
  OperationValidator,
  OperatorPress,
  State,
} from "../types";
import { appendOperation } from "../utils";

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  return updateOperation(state, action);
};

const updateOperation: ActionHandler<OperatorPress> = (state, action) => {
  const payload = [state.currentNumber, action.payload];

  const currentNumber = state.operation.length > 1 ? "answer" : "";

  return {
    ...state,
    operation: appendOperation(state, payload),
    currentNumber,
    validations: operatorValidations,
    operationUpdates: operatorUpdates,
  };
};

const invalidateButtons: OperationValidator = ({ button: event }) => {
  if (event === "EQUALS" || event === "BACKSPACE") return false;
  return true;
};

const runClear: OperationUpdater = ({ button: event }, dispatch) => {
  if (event === "DIGIT" || event === "DECIMAL" || event === "SIGN")
    dispatch(clearPress());
  return false;
};

export const operatorChange: OperationUpdater = (
  { state, button: event, value },
  dispatch
) => {
  if (event === "OPERATOR") {
    const updatedState = changeOperator(state, value as string);

    dispatch(updateState(updatedState));
    return true;
  } else return false;
};

const changeOperator = (state: State, operator: string) => {
  return {
    ...state,
    operation: state.operation.map((operand, i, operation) =>
      i === operation.length - 1 ? operator : operand
    ),
  };
};

export const operatorValidations = [invalidateButtons];
export const operatorUpdates = [runClear, operatorChange];
