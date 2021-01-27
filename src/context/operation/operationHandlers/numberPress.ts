import { ActionHandler, NumberPress } from "../types";
import { appendCurrentNumber } from "../utils";

export const handleNumberPress: ActionHandler<NumberPress> = (state, action) =>
  appendCurrentNumber(state, action);
