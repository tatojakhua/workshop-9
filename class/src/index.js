import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";

console.log(2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppContextProvider>
        <Router>
            <App />
        </Router>
    </AppContextProvider>
);
