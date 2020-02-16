import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
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
  );
}

export default App;
