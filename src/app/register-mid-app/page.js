'use client';
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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

const ClientForm = ({ createClient }) => {
  // گزینه‌های از پیش تعیین شده
  const authenticationMethods = ["client_secret_basic", "client_secret_post","client_secret_jwt","private_key_jwt","none","tls_client_auth","self_signed_tls_client_auth"];
  const grantTypes = ["authorization_code", "refresh_token","client_credentials",];
  const scopes = ["read", "write", "openid"];

  return (
    <div className="w-75 p-4 bg-white shadow rounded">
      <h1 className="h2 mb-4 text-center">Create Your Own Client</h1>
      <form onSubmit={createClient}>
        {/* Client Name */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label htmlFor="clientName" className="form-label fw-bold">Client Name</label>
          <input
            type="text"
            id="clientName"
            className="form-control"
            placeholder="Enter client name"
            required
          />
        </div>

        {/* Client Secret */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label htmlFor="clientSecret" className="form-label fw-bold">Client Secret</label>
          <input
            type="text"
            id="clientSecret"
            className="form-control"
            placeholder="Enter client secret"
            required
          />
        </div>

        {/* Client ID */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label htmlFor="clientId" className="form-label fw-bold">Client ID</label>
          <input
            type="text"
            id="clientId"
            className="form-control"
            placeholder="Enter client ID"
            required
          />
        </div>

        {/* Client Authentication Methods */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label className="form-label fw-bold">Client Authentication Methods</label>
          {authenticationMethods.map((method, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                id={`authMethod-${index}`}
                name="clientAuthenticationMethods"
                value={method}
                className="form-check-input"
              />
              <label htmlFor={`authMethod-${index}`} className="form-check-label">
                {method}
              </label>
            </div>
          ))}
        </div>

        {/* Authorization Grant Types */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label className="form-label fw-bold">Authorization Grant Types</label>
          {grantTypes.map((grant, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                id={`grantType-${index}`}
                name="authorizationGrantTypes"
                value={grant}
                className="form-check-input"
              />
              <label htmlFor={`grantType-${index}`} className="form-check-label">
                {grant}
              </label>
            </div>
          ))}
        </div>

        {/* Redirect URIs */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label htmlFor="redirectUris" className="form-label fw-bold">
            Redirect URIs
          </label>
          <input
            type="text"
            id="redirectUris"
            className="form-control"
            placeholder="Enter URIs separated by commas (e.g., https://myapp.com/callback)"
            required
          />
        </div>

        {/* Post Logout Redirect URIs */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label htmlFor="postLogoutRedirectUris" className="form-label fw-bold">
            Post Logout Redirect URIs
          </label>
          <input
            type="text"
            id="postLogoutRedirectUris"
            className="form-control"
            placeholder="Enter URIs separated by commas (e.g., https://myapp.com/logout)"
            required
          />
        </div>

        {/* Scopes */}
        <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
          <label className="form-label fw-bold">Scopes</label>
          {scopes.map((scope, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                id={`scope-${index}`}
                name="scopes"
                value={scope}
                className="form-check-input"
              />
              <label htmlFor={`scope-${index}`} className="form-check-label">
                {scope}
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 py-2"
        >
          Create Client
        </button>
      </form>
    </div>
  );
};

export default function Index() {
  const [cookieValue, setCookieValue] = useState("");
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
    setCookieValue(accessToken || "");
  }, []);

  const userClient = async () => {
    const response2 = await fetch("http://localhost:9000/api/clients/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieValue}`,
      },
    });

    if (response2.ok) {
      const data = await response2.json();
      console.log("Clients received:", data);
      setClients(data);
    } else {
      console.error("Failed to get clients:", response2.status, response2.statusText);
    }
  };

  const createClient = async (event) => {
    event.preventDefault();
    const form = event.target.elements;
  
    // دریافت مقادیر تکست اینپوت‌ها
    const clientId = form.clientId.value;
    const clientSecret = form.clientSecret.value;
    const clientName = form.clientName.value;
    const redirectUris = form.redirectUris.value.split(',').map(uri => uri.trim());
    const postLogoutRedirectUris = form.postLogoutRedirectUris.value.split(',').map(uri => uri.trim());
  
    // دریافت مقادیر چک باکس‌ها
    const authMethods = Array.from(form.clientAuthenticationMethods)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  
    const grantTypes = Array.from(form.authorizationGrantTypes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  
    const scopes = Array.from(form.scopes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  
    if (!cookieValue) {
      console.error("Access token is missing!");
      alert("Access token is missing!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:9000/api/clients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookieValue}`,
        },
        body: JSON.stringify({
          clientId,
          clientSecret,
          clientName,
          userAccountId: 12345, // این باید از سیستم احراز هویت شما گرفته بشه
          clientAuthenticationMethods: authMethods,
          authorizationGrantTypes: grantTypes,
          redirectUris,
          postLogoutRedirectUris,
          scopes,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Client created:", data);
        // ریفرش لیست کلاینت‌ها بعد از ایجاد موفق
        userClient();
      } else {
        console.error("Failed to create client:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (cookieValue) {
      userClient();
    }
  }, [cookieValue]); 

  return (
    <>
      <Head>
        <title>M-ID</title>
        <meta name="description" content="Welcome to M-ID - Technology for well-being" />
      </Head>

      <div style={{
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <div style={{
          width: '95%',
          height: '1000px',
          marginTop: '75px',
        }}>
          <div className="d-flex">
            <ClientList clients={clients} />
            <ClientForm createClient={createClient} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}