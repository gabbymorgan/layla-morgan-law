import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <Link to="/" className={styles.navigationItem}>
        <li>Home</li>
      </Link>
      <Link to="/blog/" className={styles.navigationItem}>
        <li>Blog</li>
      </Link>
    </ul>
  </nav>
);
