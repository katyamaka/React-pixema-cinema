import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { GlobalStyles } from "ui";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import "firebase.js";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Provider>,
);
