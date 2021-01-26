import { ActionHandler, NumberPress, OperatorPress, State } from "../types";
import { changeOperator, updateOperation } from "./helpers";

export const handleNumberPress: ActionHandler<NumberPress> = (
  state,
  action
) => {
  return {
    ...state,
    currentNumber: `${state.currentNumber}${action.payload}`,
  };
};

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  if (state.currentNumber) return updateOperation(state, action);
  else return changeOperator(state, action);
};

export const handleAllClearPress = (): State => {
  return {
    operation: [],
    previousOperation: "",
    currentNumber: "",
  };
};

export const handleClearPress = (state: State): State => {
  return {
    ...state,
    currentNumber: "",
  };
};
