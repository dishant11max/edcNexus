import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutDashboard,
  Database,
  UserSquare2,
} from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Dynamic Wave Background */}
      <div className={styles.waveBackground}>
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className={styles.waveSvg}
        >
          <defs>
            <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(76,175,80,0.3)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(76,175,80,0.05)", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="gradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(134,197,126,0.4)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(134,197,126,0.05)", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="gradCenter" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(240,247,240,0.5)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* subtle center fill to avoid stark white */}
          <rect width="100%" height="100%" fill="url(#gradCenter)" />

          {/* Left Wave - Extended to Center */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,0 C400,200 600,600 800,900 L0,900 Z"
            fill="url(#gradLeft)"
            filter="blur(30px)"
          />

          {/* Right Wave - Extended to Center */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M1440,0 C1100,200 900,600 600,900 L1440,900 Z"
            fill="url(#gradRight)"
            filter="blur(30px)"
          />

          {/* Secondary Layer Left */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M-100,200 C300,400 500,700 700,1000 L-100,1000 Z"
            fill="rgba(46,125,50,0.08)"
            filter="blur(50px)"
          />

          {/* Secondary Layer Right */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M1540,100 C1100,300 900,600 700,1000 L1540,1000 Z"
            fill="rgba(46,125,50,0.08)"
            filter="blur(50px)"
          />
        </svg>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contentWrapper}
        >
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Introducing EDC Nexus</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Clean trial data. <br />
            Flag anomalies with <br />
            <span className={styles.highlight}>AI agents</span> instantly.
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline}>
            Reduce data verification time by 90% with intelligent agents that
            monitor your clinical trial data in real-time.
          </p>

          {/* CTA */}
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>
              Book a Demo <ArrowRight size={18} />
            </button>

            {/* Tab Switcher Mockup */}
            <div className={styles.tabSwitcher}>
              <button className={`${styles.tab} ${styles.activeTab}`}>
                Dashboard
              </button>
              <button className={styles.tab}>Analytics</button>
              <button className={styles.tab}>AI Agents</button>
            </div>
          </div>
        </motion.div>

        {/* Floating Dashboard Card Mockup - 3D/Perspective effect */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
          }}
          className={styles.dashboardMockup}
        >
          <div className={styles.mockupHeader}>
            <span className={styles.trafficLights}></span>
            <div className={styles.mockupTitle}>Validation Queue</div>
          </div>
          <div className={styles.mockupContent}>
            {/* Simulated Table Header */}
            <div className={styles.tableHeader}>
              <span>Patient ID</span>
              <span>Metric</span>
              <span>Value</span>
              <span>Status</span>
            </div>
            {/* Simulated Table Rows */}
            <div className={styles.tableRow}>
              <span className={styles.mono}>PT-8292</span>
              <span>Heart Rate</span>
              <span className={styles.mono}>72 BPM</span>
              <span className={styles.statusValid}>Valid</span>
            </div>
            <div className={styles.tableRow}>
              <span className={styles.mono}>PT-8293</span>
              <span>BP Systolic</span>
              <span className={styles.mono}>120 mmHg</span>
              <span className={styles.statusValid}>Valid</span>
            </div>
            <div className={`${styles.tableRow} ${styles.rowHighlighted}`}>
              <span className={styles.mono}>PT-8294</span>
              <span>Heart Rate</span>
              <span className={styles.mono}>2000 BPM</span>
              <span className={styles.statusError}>Flagged</span>
            </div>
            <div className={styles.tableRow}>
              <span className={styles.mono}>PT-8295</span>
              <span>Glucose</span>
              <span className={styles.mono}>95 mg/dL</span>
              <span className={styles.statusValid}>Valid</span>
            </div>
          </div>
          {/* Bottom Fade for depth */}
          <div className={styles.fadeOverlay}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
