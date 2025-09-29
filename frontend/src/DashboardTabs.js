// DashboardTabs.js
import React, { useState } from "react";
import "./styles.css";

export default function DashboardTabs({
  form,
  setForm,
  prediction,
  handlePredict,
}) {
  const [tab, setTab] = useState(0);

  return (
    <div className="pm-tabs">
      <div className="pm-tab-headers">
        {["Prediction Form", "Model Performance", "Insights"].map(
          (label, idx) => (
            <button
              key={idx}
              className={`pm-tab-btn ${tab === idx ? "active" : ""}`}
              onClick={() => setTab(idx)}
            >
              {label}
            </button>
          )
        )}
      </div>
      <div className="pm-tab-body">
        {/* Tab 1: Prediction Form */}
        {tab === 0 && (
          <form
            className="pm-form"
            onSubmit={(e) => {
              e.preventDefault();
              handlePredict();
            }}
          >
            {/* Group 1: Basic Info */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Age</label>
                <select
                  value={form.age}
                  onChange={(e) =>
                    setForm({ ...form, age: Number(e.target.value) })
                  }
                >
                  {[...Array(53).keys()].map((i) => (
                    <option key={i} value={i + 18}>
                      {i + 18}
                    </option>
                  ))}
                </select>

                <label>Years of work experience</label>
                <select
                  value={form.experience}
                  onChange={(e) =>
                    setForm({ ...form, experience: Number(e.target.value) })
                  }
                >
                  {[...Array(51).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pm-form-row">
                <label>Marital Status</label>
                <select
                  value={form.married}
                  onChange={(e) =>
                    setForm({ ...form, married: e.target.value })
                  }
                >
                  <option>Single</option>
                  <option>Married</option>
                </select>

                <label>House Ownership</label>
                <select
                  value={form.house_own}
                  onChange={(e) =>
                    setForm({ ...form, house_own: e.target.value })
                  }
                >
                  <option>Rent</option>
                  <option>Own</option>
                  <option>Norent_noown</option>
                </select>

                <label>Car Ownership</label>
                <select
                  value={form.car_own}
                  onChange={(e) =>
                    setForm({ ...form, car_own: e.target.value })
                  }
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            {/* Group 2: Location & Profession */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Profession</label>
                <input
                  type="text"
                  value={form.profession}
                  onChange={(e) =>
                    setForm({ ...form, profession: e.target.value })
                  }
                  placeholder="e.g. Engineer"
                />

                <label>City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="City"
                />

                <label>State</label>
                <input
                  type="text"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  placeholder="State"
                />
              </div>
            </div>

            {/* Group 3: Experience & Risk */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Current Job Years</label>
                <select
                  value={form.current_job_yrs}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      current_job_yrs: Number(e.target.value),
                    })
                  }
                >
                  {[...Array(41).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <label>Current House Years</label>
                <select
                  value={form.current_house_years}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      current_house_years: Number(e.target.value),
                    })
                  }
                >
                  {[...Array(101).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <label>Risk Flag (Pending Loans)</label>
                <select
                  value={form.risk_flag}
                  onChange={(e) =>
                    setForm({ ...form, risk_flag: e.target.value })
                  }
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            {/* Group 4: Education & Family */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Number of Dependents</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={form.no_of_dep}
                  onChange={(e) =>
                    setForm({ ...form, no_of_dep: Number(e.target.value) })
                  }
                />

                <label>Education</label>
                <select
                  value={form.grad}
                  onChange={(e) => setForm({ ...form, grad: e.target.value })}
                >
                  <option>Graduated</option>
                  <option>Not Graduated</option>
                </select>

                <label>Self Employed?</label>
                <select
                  value={form.self_emp}
                  onChange={(e) =>
                    setForm({ ...form, self_emp: e.target.value })
                  }
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            {/* Group 5: Financial Inputs */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Annual Income</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.annual_income}
                  onChange={(e) =>
                    setForm({ ...form, annual_income: Number(e.target.value) })
                  }
                />

                <label>Loan Amount</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.loan_amount}
                  onChange={(e) =>
                    setForm({ ...form, loan_amount: Number(e.target.value) })
                  }
                />

                <label>Loan Duration (Years)</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={form.loan_dur}
                  onChange={(e) =>
                    setForm({ ...form, loan_dur: Number(e.target.value) })
                  }
                />

                <label>Cibil Score</label>
                <input
                  type="number"
                  min={0}
                  max={1000}
                  value={form.cibil}
                  onChange={(e) =>
                    setForm({ ...form, cibil: Number(e.target.value) })
                  }
                />
              </div>
            </div>

            {/* Group 6: Assets */}
            <div className="pm-form-group">
              <div className="pm-form-row">
                <label>Residential Assets Value</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.residential_assets_value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      residential_assets_value: Number(e.target.value),
                    })
                  }
                />

                <label>Commercial Assets Value</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.commercial_assets_value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      commercial_assets_value: Number(e.target.value),
                    })
                  }
                />

                <label>Luxury Assets Value</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.luxury_assets_value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      luxury_assets_value: Number(e.target.value),
                    })
                  }
                />

                <label>Bank Asset Value</label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={form.bank_asset_value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      bank_asset_value: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <button type="submit" className="pm-predict-btn">
              Predict
            </button>

            {/* Result display */}
            {prediction && (
              <div
                className={`pm-result ${
                  prediction.result === "Approved" ? "approved" : "rejected"
                }`}
              >
                {prediction.result === "Approved"
                  ? "✅ Loan is Approved"
                  : "❌ Loan is Rejected"}
                <div>
                  Approval Probability:{" "}
                  <strong>{prediction.probability.toFixed(1)}%</strong>
                </div>
              </div>
            )}
          </form>
        )}

        {/* Tab 2: Performance */}
        {tab === 1 && (
          <section>
            <div className="pm-metric">
              <strong>Model Accuracy:</strong> {(0.91 * 100).toFixed(2)}%
            </div>
            <div className="pm-progress-bar">
              <div
                className="pm-progress"
                style={{ width: `${0.91 * 100}%` }}
              />
            </div>
            <div className="pm-pie-chart">
              {/* Use static chart or plug in chart library */}
              <svg width={120} height={120} viewBox="0 0 120 120">
                <circle
                  cx={60}
                  cy={60}
                  r={50}
                  fill="#dae6f7"
                  stroke="#ccc"
                  strokeWidth={1}
                />
                <path
                  d="M60,10 A50,50 0 1,1 110,60"
                  fill="none"
                  stroke="#4caf50"
                  strokeWidth={16}
                />
                <text
                  x={60}
                  y={70}
                  textAnchor="middle"
                  fontSize="18"
                  fill="#4caf50"
                >
                  60% ✓
                </text>
                <text
                  x={60}
                  y={100}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#d32f2f"
                >
                  40% ✗
                </text>
              </svg>
            </div>
            <div className="pm-caption">
              ✅ Approval distribution
            </div>
          </section>
        )}

        {/* Tab 3: Insights */}
        {tab === 2 && (
          <section>
            <ul className="pm-insights">
              <li>
                <b>Higher income & lower loan amounts</b> boost approval odds.
              </li>
              <li>
                <b>Bad CIBIL score (&lt;700)</b> sharply increases rejection
                rate.
              </li>
              <li>
                <b>Long job tenure (5+ yrs)</b> signals stability.
              </li>
              <li>
                <b>Owning home/assets</b> increases credibility.
              </li>
              <li>
                <b>Fewer dependents & no risk flags</b> are favored.
              </li>
              <li>
                <b>Graduate education</b> improves odds.
              </li>
              <li>
                <b>Metro/Tier-1 city applicants</b> have easier access.
              </li>
              <li>
                <b>Tech, healthcare, govt professions</b> have higher trust.
              </li>
              <li>
                <b>High bank asset value/liquidity</b> increases success.
              </li>
              <li>
                <b>Stable income for self-employed</b> = more approvals.
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
