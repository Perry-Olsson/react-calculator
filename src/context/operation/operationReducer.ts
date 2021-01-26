import { Action, State } from "./types";
import {
  handleAllClearPress,
  handleClearPress,
  handleNumberPress,
  handleOperatorPress,
} from "./utils";

export const operationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NUMBER_PRESS":
      return handleNumberPress(state, action);
    case "OPERATOR_PRESS":
      return handleOperatorPress(state, action);
    case "ALL_CLEAR_PRESS":
      return handleAllClearPress();
    case "CLEAR_PRESS":
      return handleClearPress(state);
  }
};
