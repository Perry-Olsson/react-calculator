import { State } from "../../../context/operation/types";

export const disableAfterDecimal = (
  state: State,
  handleClick: (state: State) => void
) => {
  if (state.previousOperation !== "DECIMAL") handleClick(state);
};
