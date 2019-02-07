import * as React from "react";

import { ClickContext } from "../utils";

export const DisplayClicks: React.FC = props => {
  const totalClicks = React.useContext(ClickContext);

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Total clicks - {totalClicks}</h2>
    </section>
  );
};
