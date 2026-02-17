# Product Requirements Document (PRD) - EDC Nexus

## 1. Product Overview

**Product Name:** EDC Nexus  
**Type:** Clinical Trial Data Management Platform (Frontend Prototype)  
**Goal:** To provide a high-fidelity, production-grade landing page that demonstrates the value of "AI Agents" in cleaning and verifying clinical trial data.

## 2. Target Audience

- **Primary:** Clinical Researchers and Data Managers (CROs, Pharma).
- **Secondary:** Doctors and Site Coordinators.
- **Needs:** Speed, accuracy, "medical-grade" trust, and ease of use.

## 3. Key Features

### 3.1. Hero Section

- **Objective:** Immediate visual impact and value proposition.
- **Design:**
  - Full-screen "Green Curtain" wave background using custom SVGs.
  - Floating 3D Dashboard Mockup with perspective tilt (`framer-motion`).
  - **Premium CTA:** "Book a Demo" button with hover glow effects.

### 3.2. Problem Statement

- **Objective:** Highlight the pain point (slow data verification).
- **Content:** "90% of clinical trial delays are data-related."

### 3.3. Application Pipeline ("How It Works")

- **Objective:** Explain the AI workflow simply.
- **Design:** **Responsive Grid Layout**.
  - **Step 1:** Ingest Data (Icon: Database)
  - **Step 2:** AI Validation (Icon: Brain/Bot)
  - **Step 3:** Human Review (Icon: User Check)
  - **Step 4:** Clean Export (Icon: File Check)

### 3.4. Live Interactive Demo

- **Objective:** Show, don't just tell.
- **Component:** `LiveDemo.jsx`
- **Design:**
  - **Glassmorphism:** Frosted glass sidebar and panels.
  - **Clinical Typography:** Monospace fonts for data points.
  - **AI Confidence Panel:** Visual bars showing AI certainty logic.
  - **Interactive Rows:** Hover states, "Flagged" status with explanations.

### 3.5. Impact Metrics

- **Objective:** Social proof and quantitative value.
- **Content:** Animated counters for "Hours Saved", "Accuracy Rate", etc.

## 4. UI/UX Design System

- **Theme:** Strict Light Mode (Medical/Clean aesthetic).
- **Color Palette:**
  - Primary: Deep Green (`#2E7D32`)
  - Background: White to Soft Green Gradients (`#F0F7F0`)
  - Accents: Red for "Flagged/Error" states.
- **Typography:**
  - Headlines: _Instrument Serif_ (Sophisticated, editorial)
  - Body: _Bricolage Grotesque_ (Modern, clean)
  - Data: _JetBrains Mono_ (Technical precision)
- **Premium Finishes:**
  - Noise texture overlay.
  - Custom green scrollbars.
  - Smooth hover transitions and glow effects.

## 5. Technical Requirements

- **Framework:** React + Vite
- **Styling:** Vanilla CSS Modules (`*.module.css`) + Global CSS variables.
- **Animations:** `framer-motion` (for complex entrance and hover effects).
- **Icons:** `lucide-react`.
- **Responsive:** Mobile-first approach, stacking grids on smaller screens.

## 6. Future Roadmap (Out of Scope for Prototype)

- Backend integration (Supabase/Firebase).
- Real-time websocket data feeds for the dashboard.
- Multi-page navigation (Login, Signup, Dashboard).
