// TransactionHistory.js
import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-15</td>
            <td>Commission Payment</td>
            <td>50,000 Toman</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>2025-01-10</td>
            <td>Commission Payment</td>
            <td>30,000 Toman</td>
            <td>Pending Approval</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
