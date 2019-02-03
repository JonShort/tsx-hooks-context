import * as React from "react";

import { BigLabel, BigInput, ScaleBox } from "./components";
import { Canvas } from "./utils";

const cvs = new Canvas("25px sans-serif");

export const TextExample: React.FC = () => {
  const [userText, setUserText] = React.useState("");
  const [width, setWidth] = React.useState(0);

  const measureText = text => cvs.textWidth(userText);

  React.useEffect(
    () => {
      const textWidth = measureText(userText);

      return setWidth(textWidth);
    },
    [userText]
  );

  const handleChange = ev => {
    const text = ev.target.value;

    return setUserText(text);
  };

  return (
    <React.Fragment>
      <BigLabel>
        Calculate width of text:
        <BigInput type="text" onChange={handleChange} />
      </BigLabel>
      <h2>Width of your text</h2>
      <ScaleBox width={width} />
    </React.Fragment>
  );
};
