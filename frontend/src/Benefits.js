// src/Benefits.js
import React from "react";
import "./styles.css";
import { FaMoneyBillWave, FaCalendarAlt, FaHome, FaBolt, FaShieldAlt, FaUserTie } from "react-icons/fa";

function Benefits() {
  const benefits = [
    { icon: <FaMoneyBillWave />, text: "Competitive Interest Rates" },
    { icon: <FaCalendarAlt />, text: "Flexible Tenure up to 15 years" },
    { icon: <FaHome />, text: "Loan up to 70% of Property Value" },
    { icon: <FaBolt />, text: "Quick & Hassle-Free Disbursal" },
    { icon: <FaShieldAlt />, text: "Secure & Transparent Process" },
    { icon: <FaUserTie />, text: "Dedicated Customer Support" }
  ];

  return (
    <div className="benefits">
      <h3>Why Choose Paul Merchants LAP(Loan Against Property)</h3>
      <div className="benefit-list">
        {benefits.map((b, i) => (
          <div className="benefit-card" key={i}>
            <span className="benefit-icon">{b.icon}</span>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
