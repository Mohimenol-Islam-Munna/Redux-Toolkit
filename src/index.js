import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "./store/index";
import playerSlice from "./store/storeWithRTKQuery";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={playerSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
