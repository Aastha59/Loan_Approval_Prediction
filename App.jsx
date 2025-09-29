// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [theme, setTheme] = useState("light");
//   const [result, setResult] = useState(null);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.body.setAttribute("data-theme", newTheme);
//   };

//   // Example function: call backend for loan prediction
//   const checkLoanStatus = async () => {
//     try {
//       const response = await fetch("/loan_prediction", { method: "POST" });
//       const data = await response.json();
//       setResult(data.status); // Expecting {status: "approved"} or {status: "rejected"}
//     } catch (error) {
//       console.error("Error fetching prediction:", error);
//     }
//   };

//   return (
//     <div className="app">
//       {/* Title */}
//       <h1 className="title">Loan Prediction System</h1>

//       {/* Theme Toggle */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <button onClick={toggleTheme} className="stButton">
//           Toggle {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </div>

//       {/* Action Button */}
//       <div style={{ textAlign: "center" }}>
//         <button onClick={checkLoanStatus} className="stButton">
//           Check Loan Eligibility
//         </button>
//       </div>

//       {/* Result Section */}
//       {result && (
//         <div
//           className={`result ${
//             result === "approved" ? "approved" : "rejected"
//           }`}
//         >
//           {result === "approved" ? "✅ Loan Approved" : "❌ Loan Rejected"}
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="footer">
//         Built with ❤️ | <a href="#">Learn More</a>
//       </footer>
//     </div>
//   );
// }
