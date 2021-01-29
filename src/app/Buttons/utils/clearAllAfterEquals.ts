import { allClearPress } from "../../../context/operation";
import { Dispatch, State } from "../../../context/operation/types";

export const clearAllAfterEquals = (
  { previousEvent }: State,
  dispatch: Dispatch
) => {
  if (previousEvent === "EQUALS") dispatch(allClearPress());
};
