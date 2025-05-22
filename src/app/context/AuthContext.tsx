// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// تعریف نوع وضعیت Auth
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
  getAccessToken: () => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const token = await getAccessToken();

        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const response = await fetch('https://auth.m-id.ir/api/clients/isActive', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        setIsAuthenticated(response.status !== 401);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const getAccessToken = async (): Promise<string> => {
    let accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    if (!accessToken) {
      return "";
    }

    // بررسی انقضای توکن (اختیاری: می‌توان از JWT Decode استفاده کرد)
    const isTokenExpired = false; // اینجا می‌توان مقدار واقعی را قرار داد

    if (isTokenExpired) {
      try {
        console.log("Token expired, refreshing...");
        const newToken = await refreshToken();
        return newToken;
      } catch (error) {
        console.error("Failed to refresh token:", error);
        return "";
      }
    }

    return accessToken;
  };

  // درخواست رفرش توکن
  const refreshToken = async (): Promise<string> => {
    try {
      const response = await fetch('https://auth.m-id.ir/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      if (data.access_token) {
        document.cookie = `access_token=${data.access_token}; path=/; HttpOnly`;
        console.log("Token refreshed successfully.");
        return data.access_token;
      }

      throw new Error('No token received');
    } catch (error) {
      console.error('Error refreshing token:', error);
      return "";
    }
  };

  const login = () => {
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = () => {
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsAuthenticated(false);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout, getAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
