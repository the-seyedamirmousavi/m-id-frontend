'use client';
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import RepresentationOverViewComponent from "./RepresentaionOverViewComponent"
import TransactionHistory from "./TransactionHistory"
import HelpAndSupport from "./HelpAndSupport"
import TrainingResources from "./TrainingResources"
import WithdrawFunds from "./WithdrawFunds"
import ReferralLinkPage from "./ReferralLinkPage"

const ClientMenu = ({handleNavigation}) => {
    return (
      <div className="w-25 p-3">
  
        <div className="list-group">
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Overview')}>Overview</button>
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Referral Link')}>Referral Link</button>
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Withdraw Funds')}>Withdraw Funds</button> 
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Transaction History')}>Transaction History</button>
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Training & Resources')}>Training & Resources</button>
        <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('Help & Support')}>Help & Support</button>
        </div>

      </div>
    );
  }
  

export default function RepresentationPanel(){
    const [activeSection, setActiveSection] = useState("Overview");

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: '99%', marginTop: '75px' }}>
              <div className="d-flex">
                <ClientMenu handleNavigation={setActiveSection} />
                <div className="w-100 p-4 bg-white rounded my-3">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center py-4 relative">
                {activeSection}
                <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
                </h1>
                  {activeSection === "Overview" && <RepresentationOverViewComponent />}
                  {activeSection === "Referral Link" && <ReferralLinkPage />}
                  {activeSection === "Withdraw Funds" && <WithdrawFunds />}
                  {activeSection === "Transaction History" && <TransactionHistory />}
                  {activeSection === "Training & Resources" && <TrainingResources />}
                  {activeSection === "Help & Support" && <HelpAndSupport />}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}