import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProblemStatement from "./components/ProblemStatement/ProblemStatement";
import Pipeline from "./components/Pipeline/Pipeline";
import LiveDemo from "./components/LiveDemo/LiveDemo";
import Features from "./components/Features/Features";
import ImpactMetrics from "./components/ImpactMetrics/ImpactMetrics";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Pipeline />
        <LiveDemo />
        <Features />
        <ImpactMetrics />
      </main>
      <Footer />
    </>
  );
}

export default App;
