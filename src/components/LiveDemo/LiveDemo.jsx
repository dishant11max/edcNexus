import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  ShieldAlert,
  MoreHorizontal,
  Search,
  Bell,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import styles from "./LiveDemo.module.css";

const LiveDemo = () => {
  const [selectedRow, setSelectedRow] = useState(2); // The flagged row is 2 (0-indexed)

  return (
    <section className={styles.section}>
      <div className="container">
        <span className="section-label" style={{ textAlign: "center" }}>
          Live Demo
        </span>

        <div className={styles.appWindow}>
          {/* App Window Header */}
          <div className={styles.appHeader}>
            <div className={styles.logoArea}>
              <div className={styles.logoIcon}></div>
              <span className={styles.logoText}>EDC Nexus</span>
            </div>
            <div className={styles.headerTabs}>
              <button
                className={`${styles.headerTab} ${styles.activeHeaderTab}`}
              >
                Dashboard
              </button>
              <button className={styles.headerTab}>Analytics</button>
              <button className={styles.headerTab}>AI Agents</button>
            </div>
            <div className={styles.userArea}>
              <Search size={18} className={styles.icon} />
              <Bell size={18} className={styles.icon} />
              <div className={styles.avatar}>JD</div>
            </div>
          </div>

          <div className={styles.appBody}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={`${styles.navItem} ${styles.activeNavItem}`}>
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>
              <div className={styles.navItem}>
                <Users size={18} />
                <span>Patients</span>
              </div>
              <div className={styles.navItem}>
                <FileText size={18} />
                <span>Reports</span>
              </div>
              <div className={styles.navItem}>
                <ShieldAlert size={18} />
                <span>Audit Log</span>
              </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              <div className={styles.dashboardHeader}>
                <div>
                  <h3 className={styles.dashTitle}>Trial Data Validation</h3>
                  <p className={styles.dashSubtitle}>
                    Study NCT-2024-0187 · Real-time monitoring
                  </p>
                </div>
                <span className={styles.timestamp}>Last sync: Just now</span>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Total Records</span>
                  <span className={styles.statValue}>248</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Valid</span>
                  <span
                    className={styles.statValue}
                    style={{ color: "var(--color-valid)" }}
                  >
                    231
                  </span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Flagged</span>
                  <span
                    className={styles.statValue}
                    style={{ color: "var(--color-flagged)" }}
                  >
                    17
                  </span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Pending</span>
                  <span className={styles.statValue}>4</span>
                </div>
              </div>

              {/* Data Table */}
              <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                  <span>Patient ID</span>
                  <span>Heart Rate</span>
                  <span>BP (mmHg)</span>
                  <span>Glucose</span>
                  <span>Status</span>
                </div>

                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`${styles.tableRow} ${index === 2 ? styles.rowFlagged : ""} ${selectedRow === index ? styles.rowSelected : ""}`}
                    onClick={() => setSelectedRow(index === 2 ? 2 : null)} // Only clicking the flagged one does something interesting for demo
                  >
                    <span className={styles.mono}>{row.id}</span>
                    <span className={styles.mono}>{row.hr}</span>
                    <span className={styles.mono}>{row.bp}</span>
                    <span className={styles.mono}>{row.glucose}</span>

                    {row.status === "valid" ? (
                      <span className={styles.badgeValid}>
                        <CheckCircle size={12} /> Valid
                      </span>
                    ) : (
                      <span className={styles.badgeError}>
                        <AlertTriangle size={12} /> Flagged
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - AI Explanation */}
            {selectedRow === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.aiPanel}
              >
                <div className={styles.aiHeader}>
                  <div className={styles.aiIconWrapper}>
                    <ShieldAlert size={18} color="white" />
                  </div>
                  <h4>AI Flag Explanation</h4>
                </div>

                <div className={styles.aiContent}>
                  <div className={styles.fieldGroup}>
                    <label>Patient ID</label>
                    <div className={styles.fieldValue}>PT-0921</div>
                  </div>

                  <div className={styles.explanationBox}>
                    <p>
                      <strong>Heart Rate value of 2000 BPM</strong> exceeds
                      maximum physiological limit.
                    </p>
                    <p className={styles.subExplanation}>
                      Expected range: 40–200 BPM. <br />
                      Recommend immediate review.
                    </p>
                  </div>

                  <div className={styles.confidenceSection}>
                    <label>AI Confidence Score</label>
                    <div className={styles.confidenceBarBg}>
                      <div
                        className={styles.confidenceBarFill}
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                    <span className={styles.confidenceValue}>
                      98% High Confidence
                    </span>
                  </div>

                  <div className={styles.actionButtons}>
                    <button className={styles.btnReview}>Mark Reviewed</button>
                    <button className={styles.btnEscalate}>
                      Escalate Issue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const tableData = [
  {
    id: "PT-0919",
    hr: "72 BPM",
    bp: "120/80",
    glucose: "95 mg/dL",
    status: "valid",
  },
  {
    id: "PT-0920",
    hr: "68 BPM",
    bp: "118/79",
    glucose: "92 mg/dL",
    status: "valid",
  },
  {
    id: "PT-0921",
    hr: "2000 BPM",
    bp: "122/81",
    glucose: "98 mg/dL",
    status: "flagged",
  },
  {
    id: "PT-0922",
    hr: "75 BPM",
    bp: "121/80",
    glucose: "101 mg/dL",
    status: "valid",
  },
  {
    id: "PT-0923",
    hr: "80 BPM",
    bp: "130/85",
    glucose: "110 mg/dL",
    status: "valid",
  },
  {
    id: "PT-0924",
    hr: "65 BPM",
    bp: "115/75",
    glucose: "88 mg/dL",
    status: "valid",
  },
];

export default LiveDemo;
