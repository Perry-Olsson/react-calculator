import { State } from "./context/operation/types";

export const initialOperationState: State = {
  operation: [],
  previousEvent: "",
  currentNumber: "",
  textBox: { height: 0, width: 0 },
};
