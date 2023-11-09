import React from 'react';
import './PrivaceTerms.css';

function PrivacyTerms() {
  return (
    <div className="privacy-terms">
      <h1>Privacy & Terms</h1>
      <section>
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. This is our privacy policy.</p>
        {/* Add more privacy policy content here */}
      </section>
      <section>
        <h2>Terms of Service</h2>
        <p>These are our terms of service. Please read them carefully.</p>
        {/* Add more terms of service content here */}
      </section>
    </div>
  );
}

export default PrivacyTerms;
