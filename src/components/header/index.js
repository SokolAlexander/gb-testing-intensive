import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

export default function Header() {
  return (
    <header className="header">
      header
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </header>
  )
}
