import { ActionHandler, OperatorPress } from "../../types";

export const updateOperation: ActionHandler<OperatorPress> = (
  state,
  action
) => {
  return {
    operation: state.operation.concat([state.currentNumber, action.payload]),
    previousOperation: action.payload,
    currentNumber: "",
  };
};
