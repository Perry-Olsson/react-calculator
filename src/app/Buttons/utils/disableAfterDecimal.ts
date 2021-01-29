import { State } from "../../../context/operation/types";

export const disableAfterDecimal = (
  state: State,
  handleClick: (state: State) => void
) => {
  if (state.previousEvent !== "DECIMAL") handleClick(state);
};
