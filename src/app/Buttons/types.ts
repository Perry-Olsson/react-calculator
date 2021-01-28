import { State } from "../../context/operation/types";

export interface ButtonProps {
  value: string;
  restProps?: React.HTMLAttributes<any>;
}

export type PressValidator<T = null> = (state: State, value?: T) => boolean;
