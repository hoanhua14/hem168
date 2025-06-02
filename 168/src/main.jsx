import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Summary from "./components/Summary.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
