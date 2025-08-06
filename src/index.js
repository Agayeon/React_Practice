import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "review/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import App from "project3/components/AppDiary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
