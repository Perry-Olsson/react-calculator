import { State } from "../types";
import { restorOperatorState } from "../utils";

export const handleClearPress = (state: State): State => {
  const [validations, operationUpdates] = restorOperatorState(state);

  return {
    ...state,
    currentNumber: "",
    validations,
    operationUpdates,
  };
};
