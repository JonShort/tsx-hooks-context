import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

// Components
import { ClickExample, TextExample, WindowSize } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <ClickExample />
      <hr style={{ margin: "40px 0" }} />
      <TextExample />
      <hr style={{ margin: "40px 0" }} />
      <WindowSize />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
