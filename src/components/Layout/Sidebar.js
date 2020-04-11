import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccessAlarm, Dashboard, ShowChart } from "@material-ui/icons";
import { UIContext } from "../../shared/contexts/ui-context";
import "./Sidebar.css";

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <div
      className={`sidebar ${sidebarOpen ? "sidebar--extended" : ""}`}
      onClick={toggleSidebar}
    >
      <ul className="sidebar__options">
        <li>
          <Dashboard style={{ fontSize: 40 }} />
          <Link to="/">Board</Link>
        </li>
        <li>
          <AccessAlarm style={{ fontSize: 40 }} />
          <Link to="/profile">Config</Link>
        </li>
        <li>
          <ShowChart style={{ fontSize: 40 }} />
          <Link to="/profile">Charts</Link>
        </li>
      </ul>
    </div>
  );
}
