import React from "react";
import styles from "./Navbar.module.css";
import { LayoutGrid } from "lucide-react";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <LayoutGrid size={18} color="white" />
          </div>
          <span className={styles.wordmark}>EDC Nexus</span>
        </div>

        <div className={styles.navLinks}>
          <a href="#about" className={styles.link}>
            About Us
          </a>
          <a href="#features" className={styles.link}>
            Features
          </a>
          <a href="#tech" className={styles.link}>
            Tech Stack
          </a>
          <a href="#blog" className={styles.link}>
            Blog
          </a>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.getStartedBtn}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
