import { ActionHandler, NumberPress } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleNumberPress: ActionHandler<NumberPress> = (
  state,
  action
) => ({
  ...state,
  previousEvent: "DIGIT",
  currentNumber: appendCurrentNumber(state, action),
});
