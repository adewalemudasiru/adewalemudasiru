import React from "react";
import { ArrowUp } from "lucide-react";
import Socials from "../../components/ui/Socials";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`w-full h-auto ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-3">Adewale Mudasiru</h3>
          <p>
            Crafting seamless web experiences & compelling content. Let’s build
            something amazing! 🚀
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <div className="flex flex-col">
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Connect</h3>
          <Socials variant="footer" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 md:gap-0  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <span>© 2025 Adewale Mudasiru. All rights reserved.</span>
        </div>
        <div>
          <div className="w-fit cursor-pointer bg-white p-2 rounded-full shadow-lg">
            <ArrowUp size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
