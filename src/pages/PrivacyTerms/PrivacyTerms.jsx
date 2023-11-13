import React from 'react';
import './PrivacyTerms.css'; // Assuming you have a CSS file for PrivacyTerms

const PrivacyTerms = () => {
    return (
        <div className="privacy-terms">
            <main className="legal-content">
                <section id="privacy-policy" className="privacy-policy">
                    <h2>Privacy Policy</h2>
                    <p>This privacy policy explains how we handle your personal information and data...</p>
                    {/* Additional content */}
                </section>
                
                <section id="terms-of-use" className="terms-of-use">
                    <h2>Terms of Use</h2>
                    <p>The following terms and conditions govern all use of the Webtoon Sketching Tool website...</p>
                    {/* Additional content */}
                </section>
            </main>
        </div>
    );
};

export default PrivacyTerms;
