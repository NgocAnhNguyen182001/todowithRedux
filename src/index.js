import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"; //ep tk react khoi dong cung redux de 2 tk cung chay song song
import { BrowserRouter as Router } from "react-router-dom";
import store, { persistor } from "./store/store";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
