// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode , useEffect } from 'react';

// تعریف نوع وضعیت Auth
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
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
      const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

        const checkAuth = async () => {
          try {
            const response = await fetch('http://192.168.1.5:9000/api/clients/isActive', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${cookieValue}`, 
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

  console.log("AuthProvider is running");

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
