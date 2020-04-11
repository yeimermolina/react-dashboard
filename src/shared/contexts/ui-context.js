import { createContext } from "react";

export const UIContext = createContext({
  sidebarOpen: null,
  toggleSidebar: null,
  currentTheme: null,
  themes: null
});
