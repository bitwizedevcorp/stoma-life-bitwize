"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/app/components/common/ScrollTop";
import { ToastContainer } from "react-toastify";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <div className="main-page-wrapper">
          {children}
          <ToastContainer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
