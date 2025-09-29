
// // src/EmiCalculator.js
// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import "./styles.css";

// function EmiCalculator() {
//   // Typical Indian loan defaults
//   const [loanAmount, setLoanAmount] = useState(500000); // ₹5 lakh
//   const [interestRate, setInterestRate] = useState(7.5); // 7.5%
//   const [tenure, setTenure] = useState(5); // 5 years

//   // EMI calculation formula
//   const r = interestRate / 12 / 100;
//   const n = tenure * 12;
//   const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//   const totalPayment = emi * n;
//   const totalInterest = totalPayment - loanAmount;

//   const data = [
//     { name: "Principal", value: loanAmount },
//     { name: "Interest", value: totalInterest }
//   ];

//   const COLORS = ["#0088FE", "#fad105ff"]; // Blue and gold-like color

//   // Format number in Indian style (lakh, crore)
//   const formatINR = (num) => {
//     return num.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
//   };

//   return (
//     <div className="emi-calculator">
//       <h3>EMI Calculator (India)</h3>

//       <div className="sliders">
//         <label>
//           Loan Amount: {formatINR(loanAmount)}
//           <input
//             type="range"
//             min="50000"
//             max="20000000" // ₹2 crore max
//             step="50000"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(+e.target.value)}
//           />
//         </label>

//         <label>
//           Interest Rate: {interestRate}%
//           <input
//             type="range"
//             min="5"
//             max="15"
//             step="0.1"
//             value={interestRate}
//             onChange={(e) => setInterestRate(+e.target.value)}
//           />
//         </label>

//         <label>
//           Tenure: {tenure} years
//           <input
//             type="range"
//             min="1"
//             max="30"
//             step="1"
//             value={tenure}
//             onChange={(e) => setTenure(+e.target.value)}
//           />
//         </label>
//       </div>

//       <p><strong>Monthly EMI:</strong> {formatINR(emi)}</p>
//       <p><strong>Total Payment:</strong> {formatINR(totalPayment)}</p>
//       <p><strong>Total Interest:</strong> {formatINR(totalInterest)}</p>

//       <ResponsiveContainer width="100%" height={250}>
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip formatter={(value) => formatINR(value)} />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default EmiCalculator;








// src/EmiCalculator.js
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./styles.css";

function EmiCalculator() {
  // Typical Indian loan defaults
  const [loanAmount, setLoanAmount] = useState(500000); // Default ₹5 lakh
  const [interestRate, setInterestRate] = useState(7.5); // Default 7.5%
  const [tenure, setTenure] = useState(5); // Default 5 years

  // EMI calculation formula
  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  const data = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest }
  ];

  const COLORS = ["#0088FE", "#fad105ff"]; // Blue and gold-like color

  // Format number in Indian style (lakh, crore)
  const formatINR = (num) => {
    return num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });
  };

  return (
    <div className="emi-calculator">
      <h3>EMI Calculator</h3>

      <div className="inputs">
        <div className="input-row">
          <label>Loan Amount (₹):</label>
          <input
            type="number"
            min="50000"
            max="20000000" // ₹2 crore max
            step="50000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Enter Loan Amount"
          />
        </div>

        <div className="input-row">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            min="5"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
            placeholder="Enter Interest Rate"
          />
        </div>

        <div className="input-row">
          <label>Tenure (Years):</label>
          <input
            type="number"
            min="1"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
            placeholder="Enter Tenure in Years"
          />
        </div>
      </div>

      <p><strong>Monthly EMI:</strong> {formatINR(emi)}</p>
      <p><strong>Total Payment:</strong> {formatINR(totalPayment)}</p>
      <p><strong>Total Interest:</strong> {formatINR(totalInterest)}</p>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatINR(value)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EmiCalculator;
