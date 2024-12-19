'use client'; // لازم است که این کامپوننت به عنوان Client Component شناخته شود

import { useRouter } from 'next/navigation';  // استفاده از useRouter از next/navigation
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AuthCallback() {
  const router = useRouter();
  const [code, setCode] = useState(null);
  const [state, setState] = useState(null);

  // استفاده از useEffect برای دریافت پارامترها بعد از بارگذاری صفحه
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); // دریافت پارامترها از URL
    const codeFromUrl = urlParams.get('code');
    const stateFromUrl = urlParams.get('state');

    if (codeFromUrl && stateFromUrl) {
      setCode(codeFromUrl);
      setState(stateFromUrl);

      // بعد از دریافت کد و state، هدایت به صفحه اصلی
      router.push('/');  // هدایت به صفحه اصلی (index)
    }
  }, [router]);  // بررسی تغییرات در router

  return (
    <>
      <Head>
        <title>Authentication Callback</title>
        <meta name="description" content="OAuth2 callback page" />
      </Head>
      <div>
        <h1>Authentication Callback</h1>
        <p>Code: {code ? code : 'Loading...'}</p>
        <p>State: {state ? state : 'Loading...'}</p>
        <p>در حال انجام عملیات ورود، لطفاً صبر کنید...</p>
      </div>
    </>
  );
}
