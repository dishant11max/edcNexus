import React from "react";
import { LayoutGrid } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <LayoutGrid size={24} color="#2E7D32" />
            <span className={styles.logoText}>EDC Nexus</span>
          </div>

          <div className={styles.links}>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © 2026 EDC Nexus. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Built for researchers. Powered by AI. Trusted by trials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
