// app/layout.tsx
'use client';

import Header from '../components/Header';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';

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
      ],
    },
    {
      name: "Our Services",
      subMenu: [
        { name: "Authorization Services", url: "/authorization-service" },
        { name: "M-ID Health", url: "/the-second-phase" },
      ],
    },
    {
      name: "Developers",
      subMenu: [
        { name: "Register OID Application", url: "/clients", needAuth: true },
      ],
    },
    {
      name: "Contact Us",
      subMenu: [
        { name: "Report a Bug", url: "/user-requests?type=Bug Report", needAuth: false },
        { name: "Request Unblocking", url: "/user-requests?type=Unblocking Request", needAuth: true },
        { name: "Request Representation", url: "/register-representation", needAuth: false },
      ],
    },
  ];

  return (
  <html lang="en">
    <head>
      {/* اضافه کردن متا تگ‌ها، عنوان صفحه و ... در اینجا */}
    </head>
    <body className="bg-light flex flex-col min-h-screen">
      <AuthProvider>
        {/* هدر ثابت در بالای صفحه */}
        <Header menuItems={menuItems} />
        {/* محتوای صفحه */}
        <main className="flex-grow">{children}</main>
      </AuthProvider>
    </body>
  </html>
);

}
