import React from "react";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-backgroundMain transition-colors ease-in-out duration-300">
      <Navigation />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Outlet />
      </main>
      <Footer className="bg-backgroundAlt" />
    </div>
  );
};

export default RootLayout;
