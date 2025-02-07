"use client"
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';

const UserRequests = () => {
  const [requestType, setRequestType] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    setSubmitted(true);
    // Reset the form
    setRequestType('');
    setRequestDescription('');
  };

  useEffect(() => {
    // Get the type parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type) {
      setRequestType(type); // Set the requestType if type exists in URL
    }
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between'
    }}>
      {/* Content section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h2 className="mb-4">User Requests</h2>
        <p className="mb-5">If you have any requests or issues, please fill out the form below.</p>

        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6">
            {submitted ? (
              <div className="alert alert-success">
                <h4>Thank you for your request!</h4>
                <p>We have received your request and will process it as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="requestType" className="form-label">Select Request Type:</label>
                  <select
                    id="requestType"
                    className="form-select"
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    required
                  >
                    <option value="">Choose a request type</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Unblocking Request">Unblocking Request</option>
                    <option value="Account Deletion">Account Deletion</option>
                    <option value="Refund Request">Refund Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="requestDescription" className="form-label">Description:</label>
                  <textarea
                    id="requestDescription"
                    className="form-control"
                    rows="4"
                    value={requestDescription}
                    onChange={(e) => setRequestDescription(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit Request</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserRequests;
