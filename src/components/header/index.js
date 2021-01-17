import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header(props) {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </header>
  );
}
