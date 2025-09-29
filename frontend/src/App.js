import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoanPrediction from "./LoanPrediction";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import ChatRedirectButton from "./ChatRedirectButton";
import EmiCalculator from "./EmiCalculator";
import Benefits from "./Benefits";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`main-app ${theme === "dark" ? "dark" : "light"}`}>
      {/* Header */}
<header className="pm-header">
  {/* Left: Logo */}
  <div className="header-left">
    <img
      src="/pml_logo.jpg"
      alt="Paul Merchants Logo"
      className="pm-logo"
    />
  </div>

  {/* Center: Title */}
  <div className="header-center">
    <span className="app-title">PaulLoan Prediction AI</span>
  </div>

  {/* Right: Links + Theme Switch */}
  <div className="header-right">
    <nav className="header-links">
      <button
        className={`header-link ${selected === "EMI" ? "active" : ""}`}
        onClick={() => setSelected("EMI")}
      >
        EMI Calculator
      </button>
      <button
        className={`header-link ${selected === "Benefits" ? "active" : ""}`}
        onClick={() => setSelected("Benefits")}
      >
        Benefits
      </button>
    </nav>
    <button
      className={`theme-switch-btn ${theme}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? "🌗" : "🌞"}
    </button>
  </div>
</header>


      {/* Sidebar + Main Content */}
      <div className="pm-layout">
        <Sidebar selected={selected} setSelected={setSelected} />
        <main className="pm-main">
          {selected === "Home" && (
            <Home onPredict={() => setSelected("Loan Prediction")} setSelected={setSelected} />
          )}
          {selected === "Loan Prediction" && <LoanPrediction />}
          {selected === "About" && <About />}
          {selected === "FAQ" && <FAQ />}
          {selected === "Contact" && <Contact />}

          {/* New sections */}
          {selected === "EMI" && <EmiCalculator />}
          {selected === "Benefits" && <Benefits />}
        </main>
      </div>

      <ChatRedirectButton chatbotUrl="https://chatbot-frontend-six-self.vercel.app/" />
    </div>
  );
}

export default App;
