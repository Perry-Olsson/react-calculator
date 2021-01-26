import { State } from "../../types";

export const appendOperation = (state: State, payload: string[]) => {
  return state.operation.concat(payload);
};
