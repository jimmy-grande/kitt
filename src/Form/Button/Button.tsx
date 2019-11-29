import React, { FunctionComponent } from "react";

type ButtonProps = {
  text: string;
  primary: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({
  primary = false,
  text
}) => (
  <button style={{ backgroundColor: primary ? "blue" : "grey" }}>{text}</button>
);

export default Button;
