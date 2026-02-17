import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Eye, ShieldCheck, FileText, Globe } from "lucide-react";
import styles from "./Features.module.css";

const featuresList = [
  {
    icon: Brain,
    title: "Agentic AI Engine",
    desc: "Autonomous agents that learn your protocol and flag deviations instantly.",
  },
  {
    icon: Zap,
    title: "Real-Time Flagging",
    desc: "Catch errors as they happen, not weeks later during review cycles.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    desc: "Every flag comes with a clear, natural language explanation of why it occurred.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper Detection",
    desc: "Cryptographic audit trails ensure data integrity and traceability.",
  },
  {
    icon: FileText,
    title: "Auto Reports",
    desc: "Generate regulatory-ready validation reports with a single click.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Built-in compliance with CDISC, SDTM, and HL7 standards.",
  },
];

const Features = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.icon}>
                <feature.icon size={40} color="#2E7D32" strokeWidth={1.5} />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
