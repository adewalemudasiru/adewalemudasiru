// import React from "react";
import SearchBar from "../../components/ui/SearchBar";
import Card from "../../components/ui/Card";

const index = () => {
  return (
    <div>
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl text-center font-bold text-textSecondary">
          Welcome to My Blog
        </h2>
        <p className="max-w-3xl mx-auto text-center text-textPrimary font-medium">
          Welcome to my blog! Here, I share opinions about technology, tutorials
          on Windows and Android devices, and thoughts on web development and
          design.
        </p>
      </div>
      <SearchBar className="mb-16" />

      {/* You can add more components or content as needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default index;
