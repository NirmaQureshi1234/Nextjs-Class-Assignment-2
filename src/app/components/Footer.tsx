// components/Footer.tsx
import styles from "@/app/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} Art & Craft. All rights reserved.
        </p>
        <ul className={styles.links}>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
