import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/app/store";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </ReduxProvider>
  </StrictMode>
);
