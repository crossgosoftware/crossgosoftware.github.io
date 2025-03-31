import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
// Import i18n configuration
import './i18n';

// In development mode, import the location simulator for testing
if (import.meta.env.DEV) {
  import('./lib/location-simulator').then(({ addLocationSimulator }) => {
    // Add the location simulator UI after a short delay to ensure DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(addLocationSimulator, 1000);
    });
  });
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
