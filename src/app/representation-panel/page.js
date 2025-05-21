'use client';
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import RepresentationOverViewComponent from "./RepresentaionOverViewComponent"
import TransactionHistory from "./TransactionHistory"
import HelpAndSupport from "./HelpAndSupport"
import TrainingResources from "./TrainingResources"
import WithdrawFunds from "./WithdrawFunds"
import ReferralLinkPage from "./ReferralLinkPage"

const ClientMenu = ({ handleNavigation }) => {
    return (
      <div className="flex w-full md:w-1/5 p-3">      {/* اضافه کردن اسکرول افقی در موبایل */}
        <div className="flex md:flex-col md:w-full gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap no-scrollbar ">
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Overview')}>Overview</button>
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Referral Link')}>Referral Link</button>
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Withdraw Funds')}>Withdraw Funds</button> 
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Transaction History')}>Transaction History</button>
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Training & Resources')}>Training & Resources</button>
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Help & Support')}>Help & Support</button>
        </div>
      </div>
    );
  };


export default function RepresentationPanel() {
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <div className="min-h-screen flex flex-col overflow-auto" style={{
    }}>
          <div className="" style={{ flex: 1 ,
          marginTop : '70px'
           }}>
            <div style={{ width: '99%'}}>
              <div className="flex bg-background flex-col md:flex-row">
                <ClientMenu handleNavigation={setActiveSection} />
                <div className="w-100 p-4 bg-white rounded my-3">
                <h1 className="text-3xl font-bold dark:text-black text-center py-4">
                {activeSection}
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
