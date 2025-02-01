'use server';

import { cookies } from 'next/headers';

const cookieNameAuthorization_token = 'Authorization';
const cookieNameAccessToken = 'access_token';
const cookieNameRefreshToken = 'refresh_token';
const BACKEND_NAME = 'http://localhost:9000/';

// ذخیره توکن‌های نشست در کوکی‌ها
export async function saveSession(
  access_token: string,
  refresh_token: string
) {
  const cookieStore = await cookies();

  // ذخیره Access Token
  cookieStore.set(cookieNameAccessToken, access_token, {
    httpOnly: false, // فقط از سمت سرور قابل‌دسترس باشد
    secure: process.env.NODE_ENV === 'production', // در حالت Production باید true باشد
    path: '/', // در کل دامنه استفاده شود
    sameSite: 'strict', // برای جلوگیری از حملات CSRF
  });

  // ذخیره Refresh Token
  cookieStore.set(cookieNameRefreshToken, refresh_token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  });

   // ذخیره Access Token
   cookieStore.set(cookieNameAuthorization_token, access_token, {
    httpOnly: true, // فقط از سمت سرور قابل‌دسترس باشد
    secure: process.env.NODE_ENV === 'production', // در حالت Production باید true باشد
    path: '/', // در کل دامنه استفاده شود
    sameSite: 'strict', // برای جلوگیری از حملات CSRF
  });

}


// دریافت نشست از کوکی‌ها
export async function getSession(): Promise<SessionOutPut | null> {  
    const cookieStore = await cookies();
  
    const accessToken = cookieStore.get(cookieNameAccessToken)?.value;
    const refreshToken = cookieStore.get(cookieNameRefreshToken)?.value;

    if (!accessToken || !refreshToken) {
      return null;
    }
  
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
  
  }
  


// حذف توکن‌های نشست از کوکی‌ها
export async function removeSession() {
  const cookieStore = await cookies();

  cookieStore.delete(cookieNameAccessToken);
  cookieStore.delete(cookieNameRefreshToken);
}

// تعریف نوع خروجی نشست
interface SessionOutPut {
  access_token: string;
  refresh_token: string;
}
