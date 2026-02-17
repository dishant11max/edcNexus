import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Inbox,
  FolderTree,
  FileCheck,
  ShieldAlert,
  FileText,
  Lock,
} from "lucide-react";
import styles from "./Pipeline.module.css";

const steps = [
  { icon: Inbox, title: "Ingest Data", desc: "Multi-source intake", id: 1 },
  { icon: FolderTree, title: "Standardize", desc: "Organize & format", id: 2 },
  { icon: FileCheck, title: "Validate", desc: "Check protocol", id: 3 },
  { icon: ShieldAlert, title: "Flag Anomalies", desc: "Real-time AI", id: 4 },
  { icon: FileText, title: "Reporting", desc: "Auto-generate", id: 5 },
  { icon: Lock, title: "Audit Trail", desc: "Tamper detection", id: 6 },
];

const Pipeline = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span className="section-label" style={{ textAlign: "center" }}>
            How EDC Nexus Works
          </span>
          <h2 className={styles.headline}>From ingestion to insight.</h2>

          <div className={styles.overflowWrapper}>
            <motion.div style={{ x }} className={styles.stepsTrack}>
              {steps.map((step, index) => (
                <div key={step.id} className={styles.stepCard}>
                  <div className={styles.stepNumber}>0{step.id}</div>
                  <div className={styles.iconWrapper}>
                    <step.icon size={24} color="#2E7D32" />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>

                  {/* Visual Connector - simplified for horizontal scroll */}
                  {index < steps.length - 1 && (
                    <div className={styles.connectorArrow}>→</div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
