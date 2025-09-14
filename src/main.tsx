import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingBarContainer } from "react-top-loading-bar";

const rootElement = document.getElementById("root");
createRoot(rootElement!).render(
  <StrictMode>
    <LoadingBarContainer>
      <App />
    </LoadingBarContainer>
  </StrictMode>
);
