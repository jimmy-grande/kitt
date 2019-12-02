import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ThemeContext } from "../../Theme";

storiesOf("Button", module)
  .add("default", () => <Button text="default button" />)
  .add("primary", () => <Button primary={true} text="primary button" />)
  .add("with Theme", () => (
    <ThemeContext.Provider
      value={{ foreground: "pink", background: "#3D5A6C" }}
    >
      <Button text="text with theme" />
    </ThemeContext.Provider>
  ));
