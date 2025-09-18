import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const layoutStyle = "w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

const RootLayout = () => {
  return (
    <div className="relative grid grid-rows-[auto,1fr,auto] min-h-screen bg-backgroundMain transition-colors ease-in-out duration-300 z-10">
      <div className="flex flex-col items-center gap-2 fixed bottom-5 right-5 rounded-full z-50 p-1">
        <div className="text-[var(--color-iconColor)] lg:hidden"></div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-20"></div>
      <div className={twMerge("mt-4", layoutStyle)}>
        <Header />
      </div>
      <main className={twMerge("pt-24 pb-12", layoutStyle)}>
        <Outlet />
      </main>
      <Footer className="bg-backgroundAlt" />
    </div>
  );
};

export default RootLayout;
