import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// its a component from react-redux similar to what we created in context api with provider, it has a special prop named store it accepts redux store as a value/parameter, possible to wrap Provider in any component not only in root component, note: the wrapped parent child, child of child component only have the access to redux store, not unwrapped components...

import "./index.css";
import App from "./App";
import store from "./store/store";
// its the redux sstore what we create using reduxtoolkit configureStore(), then export those store, then point to the store special prop in Provider component...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
