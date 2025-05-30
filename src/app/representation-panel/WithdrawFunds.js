import React, { useState } from 'react';

export default function WithdrawFunds() {
  const [amount, setAmount] = useState("");

  // تعریف متغیرهای موجودی
  const availableBalance = "200,000";
  const pendingBalance = "1,000,000";

  // تابع ارسال درخواست برداشت
  const handleWithdraw = () => {
    // منطق ارسال درخواست برداشت می‌تواند اینجا قرار بگیرد
    alert(`Withdrawal request for ${amount} submitted.`);
  };

  return (
    <div className="w-full">
      <div className="card shadow-sm">
        <div className="card-header text-[#0A192F]">
          <h4 className="mb-0">Withdrawal Request</h4>
        </div>
        <div className="card-body">
          <div className="mb-4">
            <p className="mb-1">
              <strong>Available Balance:</strong> {availableBalance} Toman
            </p>
            <p>
              <strong>Pending Balance:</strong> {pendingBalance} Toman
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount to Withdraw:
            </label>
            <input
              type="number"
              id="amount"
              className="form-control"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="bg-[#0A192F] text-white px-4 py-2 rounded-lg hover:bg-[#172A45] transition w-full" 
          onClick={handleWithdraw}>
            Submit Withdrawal Request
          </button>
        </div>
      </div>
    </div>
  );
}
