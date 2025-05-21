'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../../../context/AuthContext';
import { saveSession } from '../../../../utils/storage';

export default function AuthCallback() {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
          const body = new URLSearchParams();
          body.append('grant_type', 'authorization_code');
          body.append('code', code);
          body.append('redirect_uri', 'http://localhost:3000/auth/callback/code');

          const response = await fetch('http://localhost:9000/oauth2/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Basic ' + btoa('oidc-web-m-id:$2y!B8u#QkLm@9Xz7wErT4Vp6HdF^Co3J*'),
            },
            body: body.toString(),
          });

          if (!response.ok) {
            throw new Error('Failed to exchange code for tokens.');
          }

          const data = await response.json();

          saveSession(data.access_token, data.refresh_token);
          login();
          router.push('/');
        } else {
          setError('Authorization code is missing.');
        }
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [router]);

  return (
    <>
      <Head>
        <title>Authentication Callback</title>
        <meta name="description" content="OAuth2 authentication callback page" />
      </Head>
        <div className="d-flex justify-content-center align-items-center w-full h-screen">
          <div className="card shadow-lg p-4 text-center bg-light ">
            {loading ? (
              <>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden txt">Loading...</span>
                  </div>
                  <h1 className="mt-3 text-primary ms-3 txt">Processing login...</h1>
                </div>
                <p className="text-muted txt">Please wait while we authenticate your account.</p>
              </>
            ) : error ? (
              <>
                <h1 className="text-danger txt">Authentication Failed</h1>
                <p className="text-muted txt">{error}</p>
              </>
            ) : (
              <>
                <h1 className="text-success txt">Login Successful!</h1>
                <p className="text-muted txt">Redirecting to the homepage...</p>
              </>
            )}
          </div>
        </div>
    </>
  );
  


}
