import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./HolaMundo";
import "./styles.css";
// import { App } from "./App";

// 1. Creamos la raíz apuntando al elemento del DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Renderizamos el componente usando el método .render de esa raíz
root.render(
  <React.StrictMode>
    <HolaMundo titulo="Curso de React" duracion={12} />
    {/* <App /> */}
  </React.StrictMode>,
);
