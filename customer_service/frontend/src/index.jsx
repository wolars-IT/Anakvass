import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/stylereset.sass";
import "./styles/variables.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
