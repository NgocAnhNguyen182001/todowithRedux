import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux"; //ep tk react khoi dong cung redux de 2 tk cung chay song song
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </Router>
  </React.StrictMode>
);
