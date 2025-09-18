import Introduction from "./sections/Introduction";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Badges from "./sections/Badges";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-textSecondary text-5xl font-bold mb-6">
        About Me
      </h2>
      <div>
        <Introduction className="mb-12" />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div>
            <Experience />
          </div>
          <div className="space-y-12">
            <Skills />
            <Education />
            <Badges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
