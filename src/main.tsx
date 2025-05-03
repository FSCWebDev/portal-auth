import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter } from "react-router";
import PortalEntryRedirect from "./components/PortalEntryRedirect.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter basename='/portal'>
        <PortalEntryRedirect />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
