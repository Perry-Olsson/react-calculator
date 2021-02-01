import { initialOperationState } from "../../../constants";
import { allClearPress, updateState } from "../actionCreators";
import { OperationUpdater, OperationValidator, State } from "../types";
import { appendOperation } from "../utils";

export const handleEqualsPress = (state: State): State => ({
  ...state,
  operation: appendOperation(state, [state.currentNumber, "=", "answer"]),
  currentNumber: "answer",
  validations: equalsValidations,
  operationUpdates: equalsUpdates,
});

const invalidateButtons: OperationValidator = ({ button, value }) => {
  if (button === "BACKSPACE" || (button === "DIGIT" && value === "0"))
    return false;
  return true;
};

const runAllClear: OperationUpdater = ({ button: event }, dispatch) => {
  let clickHandled = false;
  if (
    event === "DIGIT" ||
    event === "DECIMAL" ||
    event === "CLEAR" ||
    event === "SIGN"
  )
    dispatch(allClearPress());
  if (event === "CLEAR") clickHandled = true;

  return clickHandled;
};

const runPreviousCalculationOnEquals: OperationUpdater = (
  { state, button },
  dispatch
) => {
  if (button === "EQUALS") {
    const operation = getPreviousAnswerAndOperater(state);
    const currentNumber = getLastOperand(state);

    dispatch(
      updateState({
        ...state,
        operation,
        currentNumber,
      })
    );
  }
  return false;
};

const runOperatorOnAnswer: OperationUpdater = ({ state, button }, dispatch) => {
  if (button === "OPERATOR") {
    dispatch(
      updateState({
        ...initialOperationState,
        currentNumber: state.currentNumber,
      })
    );
  }
  return false;
};

const getPreviousAnswerAndOperater = ({
  currentNumber,
  operation,
}: State): string[] => {
  return [currentNumber, operation[operation.length - 4]];
};

const getLastOperand = ({ operation }: State): string => {
  return operation[operation.length - 3];
};

export const equalsValidations = [invalidateButtons];
export const equalsUpdates = [
  runAllClear,
  runPreviousCalculationOnEquals,
  runOperatorOnAnswer,
];
