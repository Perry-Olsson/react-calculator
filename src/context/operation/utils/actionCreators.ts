import {
  AllClearPress,
  NumberPress,
  OperatorPress,
  ClearPress,
} from "../types";

export const numberPress = (payload: string): NumberPress => {
  return {
    type: "NUMBER_PRESS",
    payload,
  };
};

export const operatorPress = (payload: string): OperatorPress => {
  return {
    type: "OPERATOR_PRESS",
    payload,
  };
};

export const allClearPress = (): AllClearPress => {
  return {
    type: "ALL_CLEAR_PRESS",
  };
};

export const clearPress = (): ClearPress => {
  return {
    type: "CLEAR_PRESS",
  };
};
