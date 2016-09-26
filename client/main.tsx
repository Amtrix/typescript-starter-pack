// Your script for index.html here -- you have to include it with a script tag, obviously.
import * as React from "react";
import * as ReactDOM from "react-dom";

import { PageLayout } from "./components/PageLayout";

ReactDOM.render(
  <PageLayout />,
  document.getElementById('container')
);
