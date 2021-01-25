export interface BaseProps {
  children?: React.ReactNode;
  restProps?: React.HTMLAttributes<any>;
}

export interface TextProps {
  value: React.ReactText;
  size?: string;
  restProps?: React.HTMLAttributes<any>;
}

export type TextBoxProps = Omit<TextProps, "value">;
