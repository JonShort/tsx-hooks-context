import * as React from "react";

import { BigLabel, BigInput, ScaleBox } from "./components";
import { Canvas, useTextWidth } from "./utils";

export const TextExample: React.FC = () => {
  const [userText, setUserText] = React.useState("");
  const textWidth = useTextWidth(userText);

  const handleChange = ev => {
    const text = ev.target.value;

    return setUserText(text);
  };

  return (
    <React.Fragment>
      <h1>Text example</h1>
      <BigLabel>
        Calculate width of text:
        <BigInput type="text" onChange={handleChange} />
      </BigLabel>
      <ScaleBox width={textWidth} />
      <h2>Width of your text - {Math.floor(textWidth)}px</h2>
    </React.Fragment>
  );
};
