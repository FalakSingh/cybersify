import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ToastContainer />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
