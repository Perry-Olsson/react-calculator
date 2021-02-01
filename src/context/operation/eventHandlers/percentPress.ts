import { clearPress, operatorPress } from "..";
import { OperationUpdater, State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handlePercentPress = (state: State): State => {
  return {
    ...state,
    currentNumber: appendCurrentNumber(state, "%"),
    validations: percentValidations,
    operationUpdates: percentUpdates,
  };
};

const runOperationOnDigitOrDecimal: OperationUpdater = (
  { button, value },
  dispatch
) => {
  if ((button === "DIGIT" && value !== "0") || button === "DECIMAL") {
    dispatch(operatorPress("of"));
    dispatch(clearPress());
  }
  return false;
};

const substituteXWithOf: OperationUpdater = ({ button, value }, dispatch) => {
  if (button === "OPERATOR" && value === "x") {
    dispatch(operatorPress("of"));
    return true;
  }
  return false;
};

export const percentValidations = [];
export const percentUpdates = [runOperationOnDigitOrDecimal, substituteXWithOf];
