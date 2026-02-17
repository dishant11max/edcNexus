import React from "react";
import styles from "./TechStack.module.css";

const techs = [
  { icon: "⚛️", name: "React", layer: "Frontend" },
  { icon: "⚡", name: "Vite", layer: "Build Tool" },
  { icon: "🎨", name: "CSS Modules", layer: "Styling" },
  { icon: "🤖", name: "TensorFlow.js", layer: "AI Inference" },
  { icon: "💾", name: "Supabase", layer: "Database" },
  { icon: "🔒", name: "Auth.js", layer: "Security" },
  { icon: "📊", name: "D3.js", layer: "Visualization" },
  { icon: "🌐", name: "Node.js", layer: "Backend" },
  { icon: "🚀", name: "Docker", layer: "DevOps" },
];

const TechStack = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="section-label" style={{ textAlign: "center" }}>
          Built With
        </span>

        <div className={styles.grid}>
          {techs.map((tech, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{tech.icon}</div>
              <div className={styles.info}>
                <div className={styles.name}>{tech.name}</div>
                <div className={styles.layer}>{tech.layer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
