import { initialOperationState } from "../../../constants";
import { ActionHandler, NumberPress, OperatorPress, State } from "../types";
import {
  appendOperation,
  changeOperator,
  appendCurrentNumber,
  updateOperation,
} from "./helpers";

export const handleNumberPress: ActionHandler<NumberPress> = (state, action) =>
  appendCurrentNumber(state, action);

export const handleOperatorPress: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  if (state.currentNumber) return updateOperation(state, action);
  else return changeOperator(state, action);
};

export const handleAllClearPress = (): State => initialOperationState;

export const handleClearPress = (state: State): State => ({
  ...state,
  currentNumber: "",
});

export const handleBackspacePress = (state: State): State => ({
  ...state,
  currentNumber: state.currentNumber.slice(0, -1),
});

export const handleEqualsPress = (state: State): State => ({
  operation: appendOperation(state, [state.currentNumber, "=", "answer"]),
  previousOperation: "=",
  currentNumber: "answer",
});
