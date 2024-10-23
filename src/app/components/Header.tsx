import React from "react";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css";

const Navbar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.logo}>Art & Craft</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={styles.link}>
            Projects
          </Link>
        </li>

        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>

        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
