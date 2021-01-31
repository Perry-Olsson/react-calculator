import { updateState } from "../actionCreators";
import { Dispatch, EventCodes, OperationValidator, State } from "../types";

export const handleSignPress = (state: State): State => {
  const currentNumber = toggleSign(state.currentNumber);

  return {
    ...state,
    previousEvent: "SIGN",
    currentNumber,
    validations: [...state.validations, isValidWithOnlySign],
  };
};

const toggleSign = (currentNumber: string): string => {
  return currentNumber[0] === "-"
    ? currentNumber.slice(1)
    : `-${currentNumber}`;
};

const isValidWithOnlySign: OperationValidator = ({
  state,
  event,
  dispatch,
  value,
}) => {
  if (
    state.currentNumber.length > 1 ||
    (event === "DIGIT" && value !== "0") ||
    event === "DECIMAL"
  ) {
    addZeroBeforeLeadingDecimal(event, state, dispatch);
    return true;
  }
  return false;
};

const addZeroBeforeLeadingDecimal = (
  event: EventCodes,
  state: State,
  dispatch: Dispatch
): void => {
  if (event === "DECIMAL" && state.currentNumber.length === 1)
    dispatch(updateState(state));
};
