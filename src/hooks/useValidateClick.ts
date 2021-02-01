import { useOperationDispatch, useOperationState } from "../context/operation";
import { Dispatch, ButtonCodes, State } from "../context/operation/types";

export const useValidateClick = (button: ButtonCodes, value?: string) => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const validateClick = (
    handleClick: (dispatch: Dispatch, state: State) => void
  ): void => {
    if (isValidAndNeedsUpdate(state, dispatch, button, value))
      handleClick(dispatch, state);
  };

  return validateClick;
};

export const isValidAndNeedsUpdate = (
  state: State,
  dispatch: Dispatch,
  button: ButtonCodes,
  value?: string
): boolean => {
  let handleClick = true;
  const operationData = { state, button, value };

  if (isInvalidOnNoNumber(state, button)) return false;

  for (const isValid of state.validations) {
    if (!isValid(operationData)) return false;
  }

  for (const updater of state.operationUpdates) {
    const clickHandled = updater(operationData, dispatch);
    if (clickHandled) handleClick = false;
  }

  return handleClick;
};

const isInvalidOnNoNumber = (
  { currentNumber, operation }: State,
  event: ButtonCodes
): boolean => {
  if (
    currentNumber ||
    event === "ALL_CLEAR" ||
    event === "DECIMAL" ||
    event === "DIGIT" ||
    event === "SIGN" ||
    (event === "OPERATOR" && operation.length)
  )
    return false;
  return true;
};
