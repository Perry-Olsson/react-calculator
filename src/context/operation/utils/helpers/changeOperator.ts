import { ActionHandler, OperatorPress } from "../../types";

export const changeOperator: ActionHandler<OperatorPress> = (state, action) => {
  return {
    ...state,
    operation: state.operation.map((item, i, arr) =>
      i === arr.length - 1 ? action.payload : item
    ),
  };
};
