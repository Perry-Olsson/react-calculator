import { Action, State } from "./types";

export const operationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NUMBER_PRESS":
      return { ...state, currentNumber: action.payload };
    case "OPERATOR_PRESS":
      if (state.currentNumber !== null)
        return {
          operation: state.operation.concat([
            action.payload,
            state.currentNumber,
          ]),
          previousOperation: action.payload,
          currentNumber: null,
        };
      else
        return {
          ...state,
          operation: state.operation.map((item, i, arr) =>
            i === arr.length - 1 ? action.payload : item
          ),
        };
  }
};
