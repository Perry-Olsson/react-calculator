import { isValidPress } from "../app/Buttons/utils/isValidPress";
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
