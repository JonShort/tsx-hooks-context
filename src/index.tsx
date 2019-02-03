import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

// Components
import { ClickExample, TextExample } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <ClickExample />
      <TextExample />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
