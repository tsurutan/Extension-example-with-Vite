import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContentApp from "./contents/ContentApp.tsx";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ContentApp />
    </React.StrictMode>
);
