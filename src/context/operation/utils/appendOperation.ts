import { State } from "../types";

export const appendOperation = (state: State, payload: string[]) => {
  return state.operation.concat(trimZeros(payload));
};

const trimZeros = (payload: string[]) => {
  return payload.map(num => {
    if (num.includes(".")) return num.replace(/\.?0+$/, "");
    return num;
  });
};
