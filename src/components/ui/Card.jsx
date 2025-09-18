// import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
    <article className="group bg-cardBackground border border-borderLight rounded-2xl p-4 shadow-md hover:shadow-sm transition-shadow duration-300">
      <div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-textPrimary capitalize mb-2">
          <span>Adewale Mudasiru</span>•<span>5 min read</span>
        </div>
        <h3 className="text-md text-textSecondary font-bold">
          A Beginner’s Guide to Keeping Your Windows PC Running Smoothly
        </h3>
        <p className="text-sm text-textPrimary mt-2">
          Discover essential tips and tricks to maintain your Windows PC's
          performance.
        </p>
        <div className="flex items-center justify-between mt-4  transition-all ease-in-out duration-300">
          <div className="flex items-center gap-2">
            <ul className="w-fit text-xs font-medium border border-borderLight capitalize text-textPrimary rounded-full px-2">
              <li>technology</li>
            </ul>
            <span className="text-xs text-textPrimary font-medium uppercase">
              Aug 05, 2025
            </span>
          </div>
          <ArrowUpRight
            size={16}
            className="text-textSecondary hidden group-hover:block transition-all ease-in-out duration-300"
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
