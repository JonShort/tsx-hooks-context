import * as React from "react";

import { Canvas } from "./Canvas";

export const useTextWidth = text => {
  const canvas = React.useRef(null);
  const [textWidth, setTextWidth] = React.useState(0);

  React.useEffect(() => {
    canvas.current = new Canvas("25px sans-serif");

    return () => {
      canvas.current._destroyCanvas;
    };
  }, []);

  React.useEffect(
    () => {
      setTextWidth(canvas.current.textWidth(text));
    },
    [text]
  );

  return textWidth;
};
