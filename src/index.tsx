import React from "react";
import { createRoot } from "react-dom/client";
//import { Provider } from "react-redux";

import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
