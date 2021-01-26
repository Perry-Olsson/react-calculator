export type Action =
  | NumberPress
  | OperatorPress
  | AllClearPress
  | ClearPress
  | BackSpacePress
  | EqualsPress;

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

export type ActionHandler<T = Action> = (state: State, action: T) => State;

export interface State {
  operation: Array<number | string>;
  previousOperation: string;
  currentNumber: string;
}

export type Dispatch = (action: Action) => void;

export type OperationProviderProps = { children: React.ReactNode };
