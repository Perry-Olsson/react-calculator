import { State } from "../types";

export const clearPreviousAnswer = ({
  previousEvent,
  currentNumber,
}: State) => {
  if (previousEvent === "CHAINED_OPERATOR") return "";
  else return currentNumber;
};
