import { updateState } from "../actionCreators";
import { OperationUpdater, OperationValidator, State } from "../types";

export const handleSignPress = (state: State): State => {
  const currentNumber = toggleSign(state.currentNumber);

  return {
    ...state,
    previousEvent: "SIGN",
    currentNumber,
    validations: [...state.validations, isValidWithOnlySign],
    operationUpdates: [addZeroBeforeLeadingDecimal],
  };
};

const toggleSign = (currentNumber: string): string => {
  return currentNumber[0] === "-"
    ? currentNumber.slice(1)
    : `-${currentNumber}`;
};

const isValidWithOnlySign: OperationValidator = ({
  state,
  button: event,
  value,
}) => {
  if (
    state.currentNumber.length > 1 ||
    (event === "DIGIT" && value !== "0") ||
    event === "DECIMAL"
  ) {
    return true;
  }
  return false;
};

const addZeroBeforeLeadingDecimal: OperationUpdater = (
  { state, button: event },
  dispatch
) => {
  if (event === "DECIMAL" && state.currentNumber.length === 1)
    dispatch(updateState({ ...state, currentNumber: "-0" }));
  return false;
};
