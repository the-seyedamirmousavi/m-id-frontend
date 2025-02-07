import React, { useState, useEffect } from 'react';

export default function ReferralLinkPage() {
  const referralLink = "https://example.com/register?ref=YOUR_REFERRAL_ID";  // Replace with actual referral link logic
  const [referrals, setReferrals] = useState([
    { name: "John Doe", email: "john@example.com", commission: 10 },
    { name: "Jane Smith", email: "jane@example.com", commission: 15 },
    { name: "Alice Johnson", email: "alice@example.com", commission: 12 },
    { name: "Bob Brown", email: "bob@example.com", commission: 18 },
    { name: "Charlie Davis", email: "charlie@example.com", commission: 20 },
    { name: "Daniel Evans", email: "daniel@example.com", commission: 25 },
    { name: "Eva Green", email: "eva@example.com", commission: 30 },
    { name: "Frank Harris", email: "frank@example.com", commission: 22 },
    { name: "Grace White", email: "grace@example.com", commission: 28 },
    { name: "Henry King", email: "henry@example.com", commission: 16 },
    { name: "Ivy Lewis", email: "ivy@example.com", commission: 14 },
    { name: "Jack Moore", email: "jack@example.com", commission: 19 },
    { name: "Karen Nelson", email: "karen@example.com", commission: 21 },
    { name: "Leo Parker", email: "leo@example.com", commission: 27 },
    { name: "Mia Quinn", email: "mia@example.com", commission: 23 },
    { name: "Nathan Reed", email: "nathan@example.com", commission: 17 },
    { name: "Olivia Scott", email: "olivia@example.com", commission: 26 },
    { name: "Paul Turner", email: "paul@example.com", commission: 15 },
    { name: "Quinn Walker", email: "quinn@example.com", commission: 24 },
    { name: "Rachel Young", email: "rachel@example.com", commission: 29 }
  ]);

  // useEffect(() => {
  //   // Fetch the list of referred users (replace with actual API call)
  //   fetch('/api/referrals')
  //     .then(response => response.json())
  //     .then(data => setReferrals(data))
  //     .catch(error => console.error('Error fetching referrals:', error));
  // }, []);

  return (
    <div className="container">
      <h1>Your Referral Link</h1>
      <p>You can share the following link to invite others:</p>
      <div className="input-group">
        <input 
          type="text" 
          value={referralLink} 
          className="form-control" 
          readOnly 
        />
        <button 
          className="btn btn-primary" 
          onClick={() => navigator.clipboard.writeText(referralLink)}
        >
          Copy Link
        </button>
      </div>
      
      <h2 className="mt-4">Referred Users</h2>
      {referrals.length > 0 ? (
        <ul className="list-group mt-2">
          {referrals.map((user, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {user.name} - {user.email} 
              <span className="badge bg-success">${user.commission} USD</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No referrals yet.</p>
      )}
    </div>
  );
}
