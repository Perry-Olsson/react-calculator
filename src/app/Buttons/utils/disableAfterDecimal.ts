import { State } from "../../../context/operation/types";

export const disableIfInvalid = (
  state: State,
  handleClick: (state: State) => void
) => {
  const lastIndex = state.currentNumber.length - 1;

  if (
    state.currentNumber[lastIndex] !== "." &&
    state.currentNumber[lastIndex] !== "-"
  )
    handleClick(state);
};
