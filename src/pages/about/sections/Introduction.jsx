import React from "react";
import Button from "../../../components/elements/form/Button";
import { ArrowRight, Download } from "lucide-react";
import { myData } from "../data/aboutData";
import photo from "../../../assets/images/wale.jpg";

const Introduction = (className = "") => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${className}`}>
      <div>
        <div className="text-lg space-y-3 mb-8">
          <p>
            I am a web developer with 6 months of experience. I have worked on 3
            projects for 2 clients using 2 frameworks. I am passionate about
            crafting seamless web experiences and compelling content. Let’s
            build something amazing! 🚀
          </p>
          <p>
            When I'm not coding, you'll find me playing video games, watching
            anime, or reading manga. I also enjoy cycling. I'm a huge fan of the
            Marvel Cinematic Universe, and I love to travel.
          </p>
        </div>
        <div className="flex gap-4 mb-8">
          <Button endIcon={<ArrowRight size={16} />}>Get In Touch</Button>
          <Button
            endIcon={<Download size={16} />}
            className="bg-transparent outline-none border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
          >
            Resume
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {myData.card.map((item) => (
              <div
                key={item.subtitle}
                className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl h-full border border-transparent hover:border-teal-500 overflow-hidden transition-all ease-in-out duration-500"
              >
                <div className="p-2 bg-teal-50 rounded-lg shrink-0">
                  <item.icon size={24} className="text-teal-500" />
                </div>
                <div>
                  <p className="font-bold text-2xl">{item.title}</p>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="image relative group aspect-[5/6] max-w-[500px] w-full">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            className="relative w-full h-full rounded-2xl object-cover z-10 hover:scale-105 transition-transform ease-in-out duration-300"
            src={photo}
            alt="Adewale Mudasiru"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-teal-500/10 rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default Introduction;
