// // App.js
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import LoanPrediction from "./LoanPrediction";
// import About from "./About";
// import FAQ from "./FAQ";
// import Contact from "./Contact";
// import "./styles.css";
// import ChatRedirectButton from "./ChatRedirectButton";

// function App() {
//   const [theme, setTheme] = useState("light");
//   const [selected, setSelected] = useState("Loan Prediction");

//   React.useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div className={`main-app ${theme === "dark" ? "dark" : "light"}`}>
//       {/* Header */}
//       <header className="pm-header">
//         {/* <img src="/pml_logo.png" alt="Paul Merchants Logo" className="pm-logo" /> */}
//         <img src="/pml_logo.jpg" alt="Paul Merchants Logo" className="pm-logo" />

//         <span className="app-title" style={{ textAlign: "center" }}> PaulPay Loan Prediction AI</span>
//         <button
//           className={`theme-switch-btn ${theme === "dark" ? "dark" : "light"}`}
//           onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         >
//           {theme === "dark" ? "🌗" : "🌞"}
//         </button>
//       </header>
//       {/* Sidebar + Main Content */}
//       <div className="pm-layout">
//         <Sidebar selected={selected} setSelected={setSelected} />
//         <main className="pm-main">
//           {selected === "Loan Prediction" && <LoanPrediction />}
//           {selected === "About" && <About />}
//           {selected === "FAQ" && <FAQ />}
//           {selected === "Contact" && <Contact />}
//         </main>
//       </div>
//       <ChatRedirectButton chatbotUrl="https://chatbot-frontend-six-self.vercel.app/" />
//     </div>
//   );
// }

// export default App;

// // App.js
// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Home from "./Home";
// import LoanPrediction from "./LoanPrediction";
// import About from "./About";
// import FAQ from "./FAQ";
// import Contact from "./Contact";
// import ChatRedirectButton from "./ChatRedirectButton";
// import "./styles.css";
// import EmiCalculator from "./EmiCalculator";
// import Benefits from "./Benefits";

// function App() {
//   const [theme, setTheme] = useState("light");
//   const [selected, setSelected] = useState("Home");

//   useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div className={`main-app ${theme === "dark" ? "dark" : "light"}`}>
//       {/* Header */}
//       <header className="pm-header">
//         <img
//           src="/pml_logo.jpg"
//           alt="Paul Merchants Logo"
//           className="pm-logo"
//         />
//         <span className="app-title">PaulPay Loan Prediction AI</span>
//         <button
//           className={`theme-switch-btn ${theme}`}
//           onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         >
//           {theme === "dark" ? "🌗" : "🌞"}
//         </button>
//       </header>

//       {/* Add EMI + Benefits Section */}
//       <div className="header-extras">
//         <EmiCalculator />
//         <Benefits />
//       </div>

//       {/* Sidebar + Main Content */}
//       <div className="pm-layout">
//         <Sidebar selected={selected} setSelected={setSelected} />
//         <main className="pm-main">
//           {selected === "Home" && (
//             <Home onPredict={() => setSelected("Loan Prediction")} />
//           )}
//           {selected === "Loan Prediction" && <LoanPrediction />}
//           {selected === "About" && <About />}
//           {selected === "FAQ" && <FAQ />}
//           {selected === "Contact" && <Contact />}
//         </main>
//       </div>

//       <ChatRedirectButton chatbotUrl="https://chatbot-frontend-six-self.vercel.app/" />
//     </div>
//   );
// }

// export default App;








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
