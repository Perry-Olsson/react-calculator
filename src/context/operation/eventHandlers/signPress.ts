import { updateState } from "../actionCreators";
import { OperationUpdater, OperationValidator, State } from "../types";
import { restorePreviousState } from "../utils";
import { percentUpdates } from "./percentPress";

export const handleSignPress = (state: State): State => {
  const currentNumber = toggleSign(state.currentNumber);
  let [validations, operationUpdates] = getValidationsAndUpdates(
    state,
    currentNumber
  );

  if (currentNumber.includes("%"))
    operationUpdates = operationUpdates.concat(percentUpdates);

  return {
    ...state,
    currentNumber,
    validations,
    operationUpdates,
  };
};

const toggleSign = (currentNumber: string): string => {
  return currentNumber[0] === "-"
    ? currentNumber.slice(1)
    : `-${currentNumber}`;
};

const getValidationsAndUpdates = (
  state: State,
  currentNumber: string
): [OperationValidator[], OperationUpdater[]] => {
  if (currentNumber[0] === "-") return [signValidations, signUpdates];
  else return restorePreviousState(state);
};

const isValidWithOnlySign: OperationValidator = ({
  state,
  button: event,
  value,
}) => {
  if (
    state.currentNumber.length > 1 ||
    (event === "DIGIT" && value !== "0") ||
    event === "DECIMAL" ||
    event === "SIGN" ||
    event === "BACKSPACE" ||
    event === "CLEAR"
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

const signValidations = [isValidWithOnlySign];
const signUpdates = [addZeroBeforeLeadingDecimal];
