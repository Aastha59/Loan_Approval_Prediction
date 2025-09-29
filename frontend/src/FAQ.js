import React from "react";

export default function FAQ() {
  return (
    <div className="pm-faq">
      <h2>❓ Frequently Asked Questions</h2>
      <section>
        <h3>What data is needed for loan prediction?</h3>
        <p>
          We consider various factors including income, number of dependents, requested loan amount, CIBIL credit score, and asset values to provide accurate predictions.
        </p>
      </section>
      <section>
        <h3>Is my data safe?</h3>
        <p>
          Absolutely. All your data is processed locally within your session and never stored or shared with third parties.
        </p>
      </section>
      <section>
        <h3>How accurate is the model?</h3>
        <p>
          Our model achieves around 85-90% accuracy on test data and is continuously refined to adapt to market trends and user patterns.
        </p>
      </section>
      <section>
        <h3>Can I trust this prediction for real loan decisions?</h3>
        <p>
          PaulLoan is a decision-support tool designed to assist lending officers and applicants — it should be used as one of multiple factors in loan approval processes.
        </p>
      </section>
      <section>
        <h3>How often should I update my data?</h3>
        <p>
          We recommend updating your profile details and financials regularly to ensure the predictions reflect your current situation.
        </p>
      </section>
    </div>
  );
}
