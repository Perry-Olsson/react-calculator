import { State } from "../types";
import { restorOperatorState } from "../utils/restoreOperatorValidations";

export const handleClearPress = (state: State): State => {
  const [validations, operationUpdates] = restorOperatorState(state);

  return {
    ...state,
    previousEvent: "CLEAR",
    currentNumber: "",
    validations,
    operationUpdates,
  };
};
