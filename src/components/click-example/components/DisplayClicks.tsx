import * as React from "react";

import { ClickContext } from "../utils";

export const DisplayClicks: React.FC = props => {
  const context = React.useContext(ClickContext);

  return (
    <section>
      <h1>{context}</h1>
    </section>
  );
};
