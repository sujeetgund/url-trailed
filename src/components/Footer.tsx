import React from "react";

import { Button } from "./ui/button";
import AuthorName from "./AuthorName";

const Footer = () => {
  return (
    <section className="max-w-5xl mx-auto backdrop-filter backdrop-blur-lg py-7 z-10 hidden md:block">
      <div className="flex justify-between items-end">
        {/* Author Name and MIT License */}
        <p className="inline-flex">
          Made with 💖 by <AuthorName />
        </p>

        {/* System Operational Check Button */}
        <Button
          variant={"outline"}
          size={"sm"}
          asChild
          className="hover:bg-gray-100 cursor-pointer max-w-max font-medium text-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          <div className="flex justify-start items-start">
            <div className="relative h-3 w-3 mr-2">
              <div className="absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none bg-green-500"></div>
              <div className="absolute inset-0 z-10 m-auto h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            All Systems Operational
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Footer;
