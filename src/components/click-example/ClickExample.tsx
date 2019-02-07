import * as React from "react";

import { ClickContext } from "./utils";
import { StatefulButtons, DisplayClicks } from "./components";

export const ClickExample = () => {
  const [clicks, setClicks] = React.useState(0);

  return (
    <ClickContext.Provider value={clicks}>
      <h1>Click example</h1>
      <DisplayClicks />
      <StatefulButtons onClicks={number => setClicks(number)} increment={5} />
    </ClickContext.Provider>
  );
};
