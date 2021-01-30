import { useOperationDispatch, useOperationState } from "../context/operation";
import { Dispatch, EventCodes, State } from "../context/operation/types";

export const useValidateClick = (event: EventCodes, value?: string) => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const runValidators = (
    handleClick: (dispatch: Dispatch, state: State) => void
  ): void => {
    if (isValidPress(state, dispatch, event, value))
      handleClick(dispatch, state);
  };

  return runValidators;
};

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
