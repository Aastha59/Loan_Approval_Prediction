// src/Home.jsx
import React from "react";
import "./Home.css";
import loanImg from "./l1.jpeg";

export default function Home({ onPredict }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-text">
          <h1>
            Unlock Your Loan Potential
            <br />
            <span className="highlight">Personalized guidance, faster approvals, better outcomes</span>
          </h1>
          <p className="hero-description">
            Take control of your finances with <strong>PaulPay AI</strong>. Our
            platform uses advanced machine learning models to analyze your
            credit profile, predict loan approval odds with high accuracy, and
            provide personalized recommendations to improve your chances.
          </p>
          <ul className="hero-features">
            <li>Instantly check your eligibility before applying.</li>
            <li>
              Get tailored suggestions to strengthen weak areas in your profile.
            </li>
            <li>Compare multiple loan options to find the best fit.</li>
            <li>Save time and avoid unnecessary rejections.</li>
          </ul>
          <p className="hero-note">
            Whether you’re applying for a home loan, personal loan, or business
            funding, PaulPay AI empowers you with clarity, confidence, and
            smarter financial planning. Your path to loan approval starts here.
          </p>
          <button className="btn-predict" onClick={onPredict}>
            Try It Now
          </button>
        </div>
        <div className="hero-image">
          <img src={loanImg} alt="Loan prediction illustration" />
        </div>
      </section>
      {/* ... rest of the sections (Features, How It Works, Testimonials, Footer) ... */}

      <section className="features">
        <h2>Key Benefits</h2>
        <div className="feature-cards">
          <div className="card">
            <span className="icon">⚡</span>
            <h3>Lightning Fast</h3>
            <p>Get a detailed approval probability in under 10 seconds.</p>
          </div>
          <div className="card">
            <span className="icon">🔒</span>
            <h3>Secure & Private</h3>
            <p>
              Bank-grade encryption ensures your data is safe and confidential.
            </p>
          </div>
          <div className="card">
            <span className="icon">💡</span>
            <h3>Actionable Tips</h3>
            <p>
              Receive customized recommendations to improve your
              creditworthiness.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How PaulPay AI Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">1</span>
            <div className="step-content">
              <h3>Complete Form</h3>
              <p>Enter details like income, CIBIL score, employment status.</p>
            </div>
          </div>

          <div className="step-card">
            <span className="step-number">2</span>
            <div className="step-content">
              <h3>AI Evaluation</h3>
              <p>Our model analyzes 20+ factors from your profile.</p>
            </div>
          </div>

          <div className="step-card">
            <span className="step-number">3</span>
            <div className="step-content">
              <h3>Instant Report</h3>
              <p>View your approval percentage and expert tips in seconds.</p>
            </div>
          </div>
        </div>
      </section>

<section className="testimonials">
  <h2>Customer Success</h2>
  <div className="testimonials-list">
    <div className="speech-bubble left">
      <p>
        “I increased my approval odds by 30% using PaulPay AI’s tips!”
      </p>
      <span>— Ananya K.</span>
    </div>

    <div className="speech-bubble right">
      <p>
        “This tool saved me days of back-and-forth with lenders. Highly recommend.”
      </p>
      <span>— Rahul M.</span>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>PaulPay AI</h4>
            <p>Powered by Paul Merchants Pvt. Ltd. Since 2025.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => onPredict()}>Prediction</li>
              <li>About</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@paulpay.ai</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Paul Merchants Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
