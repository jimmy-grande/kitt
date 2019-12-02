/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import * as styled from "styled-components";
import { ThemeContext } from "../../Theme";

type ButtonProps = {
  text: string;
  primary?: boolean;
};

const StyledButton = styled.default.button<ButtonProps>`
  margin: 0;
  padding: 1em;
  display: inline-block;
  border-style: none;
  border-radius: .25em;
  color: ${props => props.theme.foreground};
  font-size: 14px;
  background-color: ${props =>
    props.primary ? "#3D5A6C" : props.theme.background};
  
  cursor pointer;
  
`;

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const theme = React.useContext(ThemeContext);
  return (
    <StyledButton {...props} theme={theme}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
