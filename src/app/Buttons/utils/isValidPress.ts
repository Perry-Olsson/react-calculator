import { Dispatch, EventCodes, State } from "../../../context/operation/types";

export const isValidPress = (
  state: State,
  dispatch: Dispatch,
  event: EventCodes,
  value?: string
): boolean => {
  if (isInvalidOnNoNumber(state, event)) return false;
  for (const validator of state.validations) {
    if (!validator({ state, dispatch, event, value })) return false;
  }
  return true;
};

const isInvalidOnNoNumber = (
  { currentNumber, operation }: State,
  event: EventCodes
): boolean => {
  if (
    currentNumber ||
    event === "ALL_CLEAR" ||
    event === "DECIMAL" ||
    event === "DIGIT" ||
    (event === "OPERATOR" && operation.length)
  )
    return false;
  return true;
};
