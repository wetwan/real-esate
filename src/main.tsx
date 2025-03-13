import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PropertyContextProvider from "./context/PropertyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PropertyContextProvider>
      <App />
    </PropertyContextProvider>
  </StrictMode>
);
