import { State } from "../types";

export const appendOperation = ({ operation }: State, payload: string[]) => {
  return operation.concat(trimZeros(payload));
};

const trimZeros = (payload: string[]) => {
  return payload.map(num => {
    if (num.includes(".")) return num.replace(/\.?0+$/, "");
    return num;
  });
};
