import { useState } from "react";

export const useUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return {
    sidebarOpen,
    toggleSidebar
  };
};
