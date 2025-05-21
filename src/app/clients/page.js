'use client';
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Clientform from "./ClientForm"
import MonitoringComponent from "./MonitoringComponent";

const ClientMenu = ({ handleNavigation }) => {
  return (
    <div className="flex w-full md:w-1/5 p-3">      {/* اضافه کردن اسکرول افقی در موبایل */}
      <div className="flex md:flex-col md:w-full gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide no-scrollbar ">
                <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Monitoring')}>Monitoring</button>
        <button className="p-2 bg-white rounded" onClick={() => handleNavigation('Register new client')}>Register new client</button>
      </div>
    </div>
  );
};




export default function Index() {
  const [activeSection, setActiveSection] = useState("Monitoring");

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
                  {activeSection === "Register new client" && <Clientform />}
                  {activeSection === "Monitoring" && <MonitoringComponent />}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
  );
}
