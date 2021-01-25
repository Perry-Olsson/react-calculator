export interface State {
  operation: Array<number | string>;
  previousOperation: string;
  currentNumber: number | null;
}

export type Action = NumberPress | OperatorPress;
export type Dispatch = (action: Action) => void;
export type OperationProviderProps = { children: React.ReactNode };

export interface NumberPress {
  type: "NUMBER_PRESS";
  payload: number;
}

export interface OperatorPress {
  type: "OPERATOR_PRESS";
  payload: string;
}
