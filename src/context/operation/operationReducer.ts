import { Action, State } from "./types";
import {
  handleAllClearPress,
  handleBackspacePress,
  handleClearPress,
  handleDecimalPress,
  handleEqualsPress,
  handleNumberPress,
  handleOperatorPress,
  handleUpdateState,
} from "./eventHandlers";
import { handleSignPress } from "./eventHandlers/signPress";

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
    case "DECIMAL_PRESS":
      return handleDecimalPress(state);
    case "SIGN_PRESS":
      return handleSignPress(state);
    case "UPDATE_STATE":
      return handleUpdateState(action);
  }
};
