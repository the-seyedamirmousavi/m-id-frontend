import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const ClientForm = () => {
  const { getAccessToken } = useAuth();
  const [error, setError] = useState(null);
  const authenticationMethods = ["client_secret_basic", "client_secret_post", "client_secret_jwt", "private_key_jwt", "none", "tls_client_auth", "self_signed_tls_client_auth"];
  const grantTypes = ["authorization_code", "refresh_token", "client_credentials"];
  const scopes = ["read", "write", "openid"];

  const createClient = async (event) => {
    event.preventDefault();
    setError(null);
    
    const form = event.target;
    const accessToken = await getAccessToken();

    const clientData = {
      clientId: form.clientId.value.trim(),
      clientSecret: form.clientSecret.value.trim(),
      clientName: form.clientName.value.trim(),
      userAccountId: 12345, 
      clientAuthenticationMethods: Array.from(form.clientAuthenticationMethods)
        .filter(cb => cb.checked)
        .map(cb => cb.value),
      authorizationGrantTypes: Array.from(form.authorizationGrantTypes)
        .filter(cb => cb.checked)
        .map(cb => cb.value),
      redirectUris: form.redirectUris.value.split(",").map(uri => uri.trim()),
      postLogoutRedirectUris: form.postLogoutRedirectUris.value.split(",").map(uri => uri.trim()),
      scopes: Array.from(form.scopes)
        .filter(cb => cb.checked)
        .map(cb => cb.value),
    };

    // اعتبارسنجی ورودی‌ها
    if (!clientData.clientId || !clientData.clientSecret || !clientData.clientName) {
      setError("تمامی فیلدهای ضروری را پر کنید.");
      return;
    }

    try {
      const response = await fetch("https://m-id.ir/api/clients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        throw new Error(`خطا در ایجاد کلاینت: ${response.statusText}`);
      }

      alert("کلاینت با موفقیت ایجاد شد!");
      form.reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full">
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={createClient}>
        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">Client Name</label>
          <input type="text" id="clientName" name="clientName" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="clientSecret" className="form-label">Client Secret</label>
          <input type="text" id="clientSecret" name="clientSecret" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="clientId" className="form-label">Client ID</label>
          <input type="text" id="clientId" name="clientId" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Client Authentication Methods</label>
          {authenticationMethods.map((method, index) => (
            <div key={index} className="form-check">
              <input type="checkbox" id={`authMethod-${index}`} name="clientAuthenticationMethods" value={method} className="form-check-input" />
              <label htmlFor={`authMethod-${index}`} className="form-check-label">{method}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Authorization Grant Types</label>
          {grantTypes.map((grant, index) => (
            <div key={index} className="form-check">
              <input type="checkbox" id={`grantType-${index}`} name="authorizationGrantTypes" value={grant} className="form-check-input" />
              <label htmlFor={`grantType-${index}`} className="form-check-label">{grant}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label htmlFor="redirectUris" className="form-label">Redirect URIs</label>
          <input type="text" id="redirectUris" name="redirectUris" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="postLogoutRedirectUris" className="form-label">Post Logout Redirect URIs</label>
          <input type="text" id="postLogoutRedirectUris" name="postLogoutRedirectUris" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Scopes</label>
          {scopes.map((scope, index) => (
            <div key={index} className="form-check">
              <input type="checkbox" id={`scope-${index}`} name="scopes" value={scope} className="form-check-input" />
              <label htmlFor={`scope-${index}`} className="form-check-label">{scope}</label>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2 !border-btn-primary !bg-btn-primary">Create Client</button>
      </form>
    </div>
  );
};

export default ClientForm;
