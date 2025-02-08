'use client';
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Clientform from "./ClientForm"
import MonitoringComponent from "./MonitoringComponent";

const ClientMenu = ({handleNavigation}) => {
  
  return (
    <div className="w-25 p-3">
      <div className="list-group">
          <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('monitoring')}>monitoring</button>
          <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('register')}>register new client</button>
        </div>
    </div>
  );
}




export default function Index() {
  const [activeSection, setActiveSection] = useState("register");

  return (
    <>
      <Head>
        <title>M-ID</title>
        <meta name="description" content="Welcome to M-ID - Technology for well-being" />
      </Head>

      <div>

        <div style={{
          width: '99%',
          marginTop: '75px',
        }}>
          <div className="d-flex">
            <ClientMenu handleNavigation={setActiveSection} />
            <div className="w-100 p-4 bg-white rounded my-3">
              {activeSection === "register" && <Clientform />}
              {activeSection === "monitoring" && <MonitoringComponent />}
            </div>
          </div>
          <Footer />

        </div>
      </div>
    </>
  );
}