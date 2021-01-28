import { ActionHandler, NumberPress } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleNumberPress: ActionHandler<NumberPress> = (
  state,
  action
) => ({
  ...state,
  previousOperation: "DIGIT",
  currentNumber: appendCurrentNumber(state, action),
});
