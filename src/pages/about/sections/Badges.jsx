import { myData } from "../../../components/data/allData";
import { Badge } from "lucide-react";

const Badges = () => {
  return (
    <div>
      <h3 className="flex items-center space-x-2 text-2xl text-textSecondary font-bold mb-3">
        <Badge className="text-teal-500" /> <span>Badges</span>
      </h3>
      <div>
        {myData.badges.map((badge) => (
          <div
            key={badge.id}
            className="p-6 bg-cardBackground border border-borderLight rounded-2xl hover:border-teal-500 transition-all ease-in-out duration-500"
          >
            <div className="flex items-center gap-3">
              <div className="bg-teal-500/10 p-2 rounded-lg">
                <badge.icon className="text-teal-500" />
              </div>

              <div>
                <span className="text-textPrimary">{badge.subtitle}</span>
                <div className="text-textSecondary">{badge.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
