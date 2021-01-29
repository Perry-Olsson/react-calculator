import {
  AllClearPress,
  NumberPress,
  OperatorPress,
  ClearPress,
  BackSpacePress,
  EqualsPress,
  DecimalPress,
  SignPress,
} from "../types";

export const numberPress = (payload: string): NumberPress => ({
  type: "NUMBER_PRESS",
  payload,
});

export const operatorPress = (payload: string): OperatorPress => ({
  type: "OPERATOR_PRESS",
  payload,
});

export const allClearPress = (): AllClearPress => ({
  type: "ALL_CLEAR_PRESS",
});

export const clearPress = (): ClearPress => ({
  type: "CLEAR_PRESS",
});

export const backSpacePress = (): BackSpacePress => ({
  type: "BACKSPACE_PRESS",
});

export const decimalPress = (): DecimalPress => ({
  type: "DECIMAL_PRESS",
});

export const equalsPress = (): EqualsPress => ({
  type: "EQUALS_PRESS",
});

export const signPress = (): SignPress => ({
  type: "SIGN_PRESS",
});
