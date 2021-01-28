import { allClearPress } from "../../../context/operation";
import { Dispatch, State } from "../../../context/operation/types";

export const clearAllAfterEquals = (
  { previousOperation }: State,
  dispatch: Dispatch
) => {
  if (previousOperation === "EQUALS") dispatch(allClearPress());
};
