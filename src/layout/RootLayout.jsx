import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useIsMobile } from "../hooks/useIsMobile";
import MobileSinglePageLayout from "./MobileSinglePageLayout";

const layoutStyle = "w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

const RootLayout = () => {
  const isMobile = useIsMobile();

  // Desktop multi-page layout
  return (
    <div className="relative grid grid-rows-[auto,1fr,auto] min-h-screen bg-backgroundMain transition-colors ease-in-out duration-300 z-10">
      <div className="flex flex-col items-center gap-2 fixed bottom-5 right-5 rounded-full z-50 p-1">
        <div className="text-[var(--color-iconColor)] lg:hidden"></div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-20"></div>
      <div className={twMerge("sticky top-0 z-40")}>
        <Header isMobile={isMobile} />
      </div>
      <main
        className={
          isMobile
            ? twMerge("", layoutStyle)
            : twMerge("pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12", layoutStyle)
        }
      >
        {isMobile ? <MobileSinglePageLayout /> : <Outlet />}
      </main>
      <Footer className="bg-backgroundAlt" />
    </div>
  );
};

export default RootLayout;
