import React from 'react';

function DonationInfo() {
  return (
    <section className="container">
      {/* Donation information content */}
      <div className="donation-box-container">
          {/* Donation content */}
          <div className="donation-box">
              <div className="donation-box-header">
                  <h2>Centenary Bank</h2>
              </div>
              <div className="donation-box-content">
                  <dl>
                      <dt>Bank Name</dt>
                      <dd>Centenary Bank</dd>
                      <dt>Bank Address</dt>
                      <dd>P.B. NO 35 CALVATHY ROAD FORT COCHIN</dd>
                      <dd>DIST: XXXX</dd>
                      <dt>Account Number</dt>
                      <dd>67XXXXXXX</dd>
                      <dt>IFS Code</dt>
                      <dd>SBIN0000826</dd>
                  </dl>
              </div>
          </div>
          {/* Donation Image */}
          <div className="donation-box-image">
              <img src="./assets/img/ind/bharatanatayam2.jpg" alt="" />
          </div>
      </div>
    </section>
  );
}

export default DonationInfo;
