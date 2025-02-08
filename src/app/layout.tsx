// app/layout.tsx
'use client'

import { url } from 'inspector';
import Header from '../components/Header';
import '../styles/globals.css';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

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
        { name: "M-ID Health", url: "/the-second-phase" },
      ]
    },
    { 
      name: "Developers", 
      subMenu: [
        { name: "Register OID Application", url: "/clients", needAuth: true },
      ]
    },
    { 
      name: "Contact Us", 
      subMenu: [
        { name: "Report a Bug", url: "/user-requests?type=Bug Report", needAuth: false },
        { name: "Request Unblocking", url: "/user-requests?type=Unblocking Request", needAuth: true },
        { name: "Request Representation", url: "/register-representation", needAuth: false },
      ]
    },
  ];

  return (
    <html lang="en">
        <body style={{
          backgroundColor: '#f0f2f5',
        }}>
          
         <AuthProvider>
         <Header menuItems={menuItems} />
          {children}
         </AuthProvider>
        </body>
    </html>
  );
}
