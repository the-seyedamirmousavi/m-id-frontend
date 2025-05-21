import { useState } from 'react';

export default function RepresentationOverViewComponent() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full">
      
      {/* Overview Statistics */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Referred Customers</h5>
              <p className="card-text">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Pending Commission</h5>
              <p className="card-text">100,000 Toman</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Payments</h5>
              <p className="card-text">50,000 Toman</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Successful Referrals</h5>
              <p className="card-text">20</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Financial Report */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Commissions</h5>
              <p className="card-text">50,000 Toman - Pending</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Previous Payments</h5>
              <p className="card-text">40,000 Toman - Paid</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Statistics */}
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Successful Registrations</h5>
              <p className="card-text">10</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Pending Commissions</h5>
              <p className="card-text">3</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Successful Referrals</h5>
              <p className="card-text">15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
