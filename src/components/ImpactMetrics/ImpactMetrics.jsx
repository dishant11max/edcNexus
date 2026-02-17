import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import styles from "./ImpactMetrics.module.css";

const Counter = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className={styles.number}>
      0{suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  return (
    <section className={styles.section}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className={styles.grid}>
          <div className={styles.card}>
            <Counter value={90} suffix="%" />
            <p className={styles.label}>Time Saved on Data Cleaning</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.card}>
            <Counter value={3} suffix="×" />
            <p className={styles.label}>Faster Trial Completion</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.card}>
            <Counter value={0} suffix="" />
            <p className={styles.label}>Unexplained AI Decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
