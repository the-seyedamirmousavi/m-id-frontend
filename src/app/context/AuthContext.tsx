// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode , useEffect } from 'react';

// تعریف نوع وضعیت Auth
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
  getAccessToken : () => string;
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
          try {
            const response = await fetch('http://localhost:9000/api/clients/isActive', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${getAccessToken()}`, 
                'Content-Type': 'application/json',
              }
            });

            if (response.status === 401) {
              setIsAuthenticated(false);
            } else {
              setIsAuthenticated(true);
            }
          } catch (error) {
            console.error('Authentication check failed:', error);
            setIsAuthenticated(false);
          }
          setLoading(false);
        };
    
        checkAuth();
      }, []);
  

  // توابع احراز هویت
  const login = () => {
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setLoading(false);
  };

  const getAccessToken = () => {
      const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];
      console.log(`cookieValue  ${cookieValue}`);

      if (cookieValue) {
        console.log(cookieValue);
        return cookieValue;
      } else {
        return "";
      } 
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout , getAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
