import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

/**
 * Mobile single-page layout that displays all sections on one scrollable page
 * for better mobile user experience
 */
const MobileSinglePageLayout = () => {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="scroll-mt-32 mb-16 sm:mb-24">
        <Home isMobile={true} />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-32 mb-16 sm:mb-24">
        <About isMobile={true} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 mb-16 sm:mb-24">
        <Projects isMobile={true} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32 mb-16 sm:mb-24">
        <Contact isMobile={true} />
      </section>
    </>
  );
};

export default MobileSinglePageLayout;
