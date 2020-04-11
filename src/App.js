import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import { UIContext } from "./shared/contexts/ui-context";
import { useUI } from "./shared/hooks/ui-hook";

function App() {
  const { sidebarOpen, toggleSidebar } = useUI();

  useEffect(() => {
    fetch("/data/data.json")
      .then(r => {
        console.log(r);
        return r.json();
      })
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <div className="inner">
            <Sidebar />
            <main className="main">
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/profile" exact>
                  <Profile />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    </UIContext.Provider>
  );
}

export default App;
