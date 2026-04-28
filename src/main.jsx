import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./HolaMundo";

// 1. Creamos la raíz apuntando al elemento del DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Renderizamos el componente usando el método .render de esa raíz
root.render(
  <React.StrictMode>
    <HolaMundo />
  </React.StrictMode>,
);
