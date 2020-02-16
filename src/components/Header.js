import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">yeimer.molina@gmail.com</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
