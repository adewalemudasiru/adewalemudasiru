// import React from "react";
import { Input } from "../ui/Input";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

const SearchBar = ({ className }) => {
  return (
    <div className={twMerge("flex justify-center items-center", className)}>
      <Input
        placeholder="Search..."
        rightIcon={<Search size={20} />}
        className="max-w-xl px-6 rounded-full"
      />
    </div>
  );
};

export default SearchBar;
