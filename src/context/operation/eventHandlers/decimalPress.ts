import { allClearPress } from "../actionCreators";
import { OperationUpdater, State } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleDecimalPress = (state: State): State => {
  let currentNumber = appendCurrentNumber(state, ".");
  if (isLeadingDecimal(state)) currentNumber = prependZero();

  return {
    ...state,
    currentNumber,
    validations: decimalValidations,
    operationUpdates: decimalUpdates,
  };
};

const isLeadingDecimal = ({ currentNumber }: State) => {
  if (!currentNumber) return true;
  return false;
};

const prependZero = () => {
  return "0.";
};

const removeLeadingZero: OperationUpdater = ({ button, state }, dispatch) => {
  if (button === "BACKSPACE" && state.currentNumber === "0.") {
    dispatch(allClearPress());
    return true; //click handled
  }
  return false;
};

export const decimalValidations = [];
export const decimalUpdates: OperationUpdater[] = [removeLeadingZero];
