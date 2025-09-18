import { myData } from "../../../components/data/allData";
import { BookText } from "lucide-react";

const Education = () => {
  return (
    <div>
      <h3 className="flex items-center space-x-2 text-2xl text-textSecondary font-bold mb-3">
        <BookText className="text-teal-500" /> <span>Education</span>
      </h3>
      <div className="grid gap-4">
        {myData.education.map((edu) => (
          <div
            key={edu.certificate}
            className="flex items-start gap-3 bg-cardBackground p-6 rounded-2xl border border-borderLight hover:border-teal-500 transition-all ease-in-out duration-500"
          >
            <div className="bg-teal-500/10 p-2 rounded-lg">
              <edu.icon className="text-teal-500" />
            </div>
            <div className="w-full">
              <span className="text-textPrimary">{edu.certificate}</span>
              <h4 className="flex-1 text-xl text-textSecondary font-bold">
                {edu.course}
              </h4>
              <div className="flex justify-between items-center text-textPrimary">
                <p>{edu.school}</p>
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
