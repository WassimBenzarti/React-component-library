import * as React from "react";
import { render } from "react-dom";
import TypedComponent from "../lib/typedComponent";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <TypedComponent>heyy</TypedComponent>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
