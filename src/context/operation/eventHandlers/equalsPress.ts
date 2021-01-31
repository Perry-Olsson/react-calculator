import { allClearPress, updateState } from "../actionCreators";
import { OperationValidator, State } from "../types";
import { appendOperation } from "../utils";

export const handleEqualsPress = (state: State): State => ({
  ...state,
  operation: appendOperation(state, [state.currentNumber, "=", "answer"]),
  previousEvent: "EQUALS",
  currentNumber: "answer",
  validations: [
    ...state.validations,
    runAllClearOnDigitClick,
    runPreviousCalculationOnEquals,
  ],
});

const runAllClearOnDigitClick: OperationValidator = ({ event, dispatch }) => {
  if (event === "DIGIT" || event === "DECIMAL") dispatch(allClearPress());
  return true;
};

const runPreviousCalculationOnEquals: OperationValidator = ({
  state,
  event,
  dispatch,
}) => {
  if (event === "EQUALS")
    dispatch(
      updateState({
        ...state,
        operation: [
          state.currentNumber,
          state.operation[state.operation.length - 4],
        ],
        currentNumber: state.operation[state.operation.length - 3],
      })
    );
  return true;
};
