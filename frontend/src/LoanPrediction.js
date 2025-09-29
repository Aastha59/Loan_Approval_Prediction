// LoanPrediction.js
import React, { useState } from "react";
import DashboardTabs from "./DashboardTabs";
import "./styles.css";

// Dummy hardcoded model accuracy for demo
const accuracy = 0.91;

export default function LoanPrediction() {
  const [form, setForm] = useState({
    age: 25,
    experience: 3,
    married: "Single",
    house_own: "Rent",
    car_own: "No",
    profession: "Engineer",
    city: "Delhi",
    state: "Delhi",
    current_job_yrs: 2,
    current_house_years: 3,
    risk_flag: "No",
    no_of_dep: 1,
    grad: "Graduated",
    self_emp: "No",
    annual_income: 300000,
    loan_amount: 100000,
    loan_dur: 2,
    cibil: 750,
    residential_assets_value: 50000,
    commercial_assets_value: 0,
    luxury_assets_value: 0,
    bank_asset_value: 100000,
  });

  const [prediction, setPrediction] = useState(null);

  // Simulated predict handler
  function handlePredict() {
    // In production, call backend API here and handle response!
    const approval =
      form.cibil > 700 && form.annual_income > form.loan_amount * 1.5;
    setPrediction({
      result: approval ? "Approved" : "Rejected",
      probability: approval
        ? Math.min(98, 42 + (form.cibil - 700))
        : Math.max(12, 80 - (form.cibil - 650)),
    });
  }

  return (
    <div>
      {/* Dashboard Metric */}
      <div className="pm-metric">
        <strong>📊 Model Accuracy:</strong>{" "}
        <span>{(accuracy * 100).toFixed(2)}%</span>
      </div>
      <DashboardTabs
        form={form}
        setForm={setForm}
        prediction={prediction}
        handlePredict={handlePredict}
      />
    </div>
  );
}
