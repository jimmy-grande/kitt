import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .add("default", () => <Button text="default button" />)
  .add("primary", () => <Button primary={true} text="primary button" />);
