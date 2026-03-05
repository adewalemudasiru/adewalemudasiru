import { ArrowUp } from "lucide-react";
import Socials from "../../components/ui/Socials";
import { myData } from "../../components/data/allData";

/**
 * A component that renders the footer section of the website.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The CSS class to apply to the footer.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`w-full h-auto border-t border-borderLight ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        <div>
          <h3 className="text-xl sm:text-2xl text-textSecondary font-bold mb-2 sm:mb-3">
            Adewale Mudasiru
          </h3>
          <p className="text-sm sm:text-base text-textPrimary">
            Crafting seamless web experiences & compelling content. Let’s build
            something amazing! 🚀
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm sm:text-base text-textSecondary font-semibold">
            Quick Links
          </h3>
          <ul className="flex flex-col text-sm sm:text-base text-textPrimary">
            {myData.footer.map((link) => (
              <li key={link.name} className="mb-2 sm:mb-3">
                <a
                  href={link.link}
                  className="hover:text-teal-500 transition ease-in-out duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm sm:text-base text-textSecondary font-semibold">
            Connect
          </h3>
          <Socials variant="footer" colorvariant="footer" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-xs sm:text-sm text-textPrimary gap-y-3 sm:gap-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <span>© 2025 Adewale Mudasiru. All rights reserved.</span>
        <div className="w-fit cursor-pointer bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <ArrowUp size={18} className="sm:w-5 sm:h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
