export type Action =
  | NumberPress
  | OperatorPress
  | AllClearPress
  | ClearPress
  | BackSpacePress
  | EqualsPress
  | DecimalPress
  | SignPress
  | PercentPress
  | UpdateState;

export interface NumberPress {
  type: "NUMBER_PRESS";
  payload: string;
}

export interface OperatorPress {
  type: "OPERATOR_PRESS";
  payload: string;
}

export interface AllClearPress {
  type: "ALL_CLEAR_PRESS";
}

export interface ClearPress {
  type: "CLEAR_PRESS";
}

export interface BackSpacePress {
  type: "BACKSPACE_PRESS";
}

export interface EqualsPress {
  type: "EQUALS_PRESS";
}

export interface DecimalPress {
  type: "DECIMAL_PRESS";
}

export interface SignPress {
  type: "SIGN_PRESS";
}

export interface PercentPress {
  type: "PERCENT_PRESS";
}

export interface UpdateState {
  type: "UPDATE_STATE";
  payload: State;
}

export type ActionHandler<T = Action> = (state: State, action: T) => State;

export interface State {
  operation: Array<string>;
  currentNumber: string;
  validations: OperationValidator[];
  operationUpdates: OperationUpdater[];
}

export type OperationValidator = (operationData: OperationData) => boolean;

export type OperationUpdater = (
  operationData: OperationData,
  dispatch: Dispatch
) => boolean;

export interface OperationData {
  state: State;
  button: ButtonCodes;
  value: string | undefined;
}

export type ButtonCodes =
  | "OPERATOR"
  | "DIGIT"
  | "ALL_CLEAR"
  | "EQUALS"
  | "CLEAR"
  | "DECIMAL"
  | "BACKSPACE"
  | "SIGN"
  | "PERCENT"
  | "";

export type Dispatch = (action: Action) => void;

export type OperationProviderProps = { children: React.ReactNode };
