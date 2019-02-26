import * as React from "react";

import { useWindowWidth } from "./utils";

export const WindowSize: React.FC = () => {
  const [windowWidth] = useWindowWidth(window.innerWidth);

  return (
    <React.Fragment>
      <h1>Window example</h1>
      <h2>Current window width - {windowWidth}px</h2>
    </React.Fragment>
  );
};
