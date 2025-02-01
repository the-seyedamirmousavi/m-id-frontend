// app/layout.tsx
'use client'

import { url } from 'inspector';
import Header from '../components/Header';
import '../styles/globals.css';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const menuItems = [
    { 
      name: "About Us", 
      subMenu: [
        { name: "Our Story", url: "/about-us/our-story" },
      ]
    },
    { 
      name: "Our Services", 
      subMenu: [
        { name: "Authorization Services", url: "/authorization-service" },
        { name: "FitApp", url: "/the-second-phase" },
      ]
    },
    { 
      name: "Developers", 
      subMenu: [
        { name: "Register OID Application", url: "/register-mid-app", needAuth: true },
      ]
    },
    { 
      name: "Contact Us", 
      subMenu: [
        { name: "Request Representation", url: "/the-third-phase", needAuth: true },
      ]
    },
  ];

  return (
    <html lang="en">
        <body style={{
          backgroundColor: '#f0f2f5'
        }}>
          
         <AuthProvider>
         <Header menuItems={menuItems} />
         {children}
         </AuthProvider>
        </body>
    </html>
  );
}
