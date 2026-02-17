import React from "react";
import { motion } from "framer-motion";
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
  {
    icon: Inbox,
    title: "Ingest Data",
    desc: "Multi-source intake from disparate clinical systems.",
    id: 1,
  },
  {
    icon: FolderTree,
    title: "Standardize",
    desc: "Organize & format data to CDISC standards instantly.",
    id: 2,
  },
  {
    icon: FileCheck,
    title: "Validate",
    desc: "Run thousands of protocol checks in milliseconds.",
    id: 3,
  },
  {
    icon: ShieldAlert,
    title: "Flag Anomalies",
    desc: "AI agents identify outliers & potential fraud patterns.",
    id: 4,
  },
  {
    icon: FileText,
    title: "Reporting",
    desc: "Auto-generate validation compliance reports.",
    id: 5,
  },
  {
    icon: Lock,
    title: "Audit Trail",
    desc: "Cryptographically seal the data for audit readiness.",
    id: 6,
  },
];

const Pipeline = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">How It Works</span>
          <h2 className={styles.headline}>From ingestion to insight.</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.card}
            >
              <div className={styles.headerRow}>
                <div className={styles.iconWrapper}>
                  <step.icon size={24} color="#2E7D32" />
                </div>
                <span className={styles.stepNumber}>0{step.id}</span>
              </div>

              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
