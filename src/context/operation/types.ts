export type Action =
  | NumberPress
  | OperatorPress
  | AllClearPress
  | ClearPress
  | BackSpacePress
  | EqualsPress
  | DecimalPress
  | SignPress
  | UpdateCurrentNumber;

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

export interface UpdateCurrentNumber {
  type: "UPDATE_CURRENT_NUMBER";
  payload: string;
}

export type ActionHandler<T = Action> = (state: State, action: T) => State;

export interface State {
  operation: Array<number | string>;
  previousEvent: EventCodes;
  currentNumber: string;
  validations: OperationValidator[];
}

export type OperationValidator = (operationData: OperationData) => boolean;

export interface OperationData {
  state: State;
  dispatch: Dispatch;
  event: EventCodes;
  value: string | undefined;
}

export type EventCodes =
  | "OPERATOR"
  | "DIGIT"
  | "ALL_CLEAR"
  | "EQUALS"
  | "CLEAR"
  | "DECIMAL"
  | "BACKSPACE"
  | "SIGN"
  | "";

export type Dispatch = (action: Action) => void;

export type OperationProviderProps = { children: React.ReactNode };
