
  import { createRoot, hydrateRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  const rootElement = document.getElementById("root")!;

  if (rootElement.hasChildNodes()) {
    // Prerendered HTML exists — hydrate (attach event listeners without re-rendering)
    hydrateRoot(rootElement, <App />);
  } else {
    // Dev mode or non-prerendered — full client render
    createRoot(rootElement).render(<App />);
  }
