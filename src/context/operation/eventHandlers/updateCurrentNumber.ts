import { ActionHandler, UpdateCurrentNumber } from "../types";

export const handleUpdateCurrentNumber: ActionHandler<UpdateCurrentNumber> = (
  state,
  action
) => {
  return {
    ...state,
    currentNumber: action.payload,
  };
};
