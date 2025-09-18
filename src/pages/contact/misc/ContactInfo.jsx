import { myData } from "../../../components/data/allData";

const contactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6">
      {myData.contact.map((item) => (
        <div
          key={item.name}
          className="flex items-center p-4 gap-4 bg-cardBackground border border-borderLight hover:border-teal-500 transition ease-in-out duration-300 rounded-2xl"
        >
          <div className="bg-teal-500/10 p-2 rounded-lg">
            <item.icon color="teal" size={20} />
          </div>
          <div>
            <h4 className="text-sm text-textPrimary tracking-widest">
              {item.name}
            </h4>
            <p className="text-md text-textSecondary font-semibold">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default contactInfo;
