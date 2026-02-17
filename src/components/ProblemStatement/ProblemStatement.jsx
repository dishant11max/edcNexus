import React from "react";
import { motion } from "framer-motion";
import styles from "./ProblemStatement.module.css";

const ProblemStatement = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          The Problem
        </motion.span>

        <div className={styles.statsGrid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.statItem}
          >
            <h2 className={styles.statNumber}>90%</h2>
            <p className={styles.statLabel}>
              of research time lost to manual data cleaning
            </p>
          </motion.div>

          <div className={styles.divider} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.statItem}
          >
            <h2 className={styles.statNumber}>60%</h2>
            <p className={styles.statLabel}>
              of clinical trials delayed by data errors
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.explanation}
        >
          Traditional EDC systems are reactive. They wait for you to find
          errors. EDC Nexus uses agentic AI to proactively flag anomalies,
          protocol deviations, and tampering attempts in real-time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className={styles.tagsGroup}
        >
          <span className={styles.tag}>Reactive Systems</span>
          <span className={styles.tag}>Paper-Heavy Workflows</span>
          <span className={styles.tag}>No Early Warning</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
