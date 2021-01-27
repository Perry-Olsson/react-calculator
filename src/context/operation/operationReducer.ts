import { Action, State } from "./types";
import {
  handleAllClearPress,
  handleBackspacePress,
  handleClearPress,
  handleEqualsPress,
  handleNumberPress,
  handleOperatorPress,
} from "./operationHandlers";

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
    case "BACKSPACE_PRESS":
      return handleBackspacePress(state);
    case "EQUALS_PRESS":
      return handleEqualsPress(state);
  }
};
