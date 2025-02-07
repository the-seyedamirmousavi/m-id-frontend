'use client';
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Clientform from "./ClientForm"
import MonitoringComponent from "./MonitoringComponent";
import { useAuth } from "../context/AuthContext";


const ClientMenu = ({handleNavigation}) => {

  const ClientList = ({ clients }) => {
    return (
      <div className="w-25" style={{ height: 'auto'}}>
        <h1 className="txt px-4 py-4">Your clients</h1>
        <div>
          {clients.length === 0 ? (
            <p>No clients available</p>
          ) : (
            clients.map((client, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `hsl(${(index * 80) % 360}, 70%, 60%)`,
                  margin: '10px',
                  padding: '20px',
                  borderRadius: '5px',
                }}
              >
                <h3 className="txt">{client.clientName}</h3>
                <p className="txt">Client ID: {client.clientId}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  
  return (
    <div className="w-25 p-3">
      <h2 className="txt px-3 pb-3 border-bottom">Your Clients</h2>

      <div className="list-group">
          <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('monitoring')}>مانیتورینگ</button>
          <button className="list-group-item list-group-item-action" onClick={() => handleNavigation('register')}>ثبت کلاینت جدید</button>
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