import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

export default function Header() {
  const user = {
    name: "Jhon",
  };
  const cart = {
    totalCount: 10,
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          CITOMAP
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/whoweare">Quienes Somos</Link>
            </li>

            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>

            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
