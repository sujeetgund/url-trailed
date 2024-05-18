import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <section className="max-w-6xl mx-auto py-6 bg-white-400 rounded-t-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 border border-gray-200 p-14 z-10">
      {/* Footer Links and Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full md:ml-4">
        {/* Brand and Tagline */}
        <div className="col-span-2 flex flex-col space-y-2">
          <Image
            src="/logo.jpeg"
            alt="URL Trailed"
            width={60}
            height={60}
            className="rounded-lg mb-4"
            priority
          />
          <p className="max-w-sm">
            Giving modern marketing teams superpowers with short links that
            stand out.
          </p>
          <p className="text-gray-500">&copy; 2024 URL Trailed</p>
          <Button
            variant={"outline"}
            size={"sm"}
            asChild
            className="hover:bg-gray-100 cursor-pointer max-w-max font-medium text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
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

        {/* Feature Links */}
        <div className="col-span-1 my-6 lg:my-0">
          <h3>Features</h3>
          <ul className="text-sm space-y-2 mt-3">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Advanced Analytics
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Customizable Links
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Link Tracking
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Link Management
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              QR Codes
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              API
            </li>
          </ul>
        </div>

        {/* Product Links */}
        <div className="col-span-1 my-6 lg:my-0">
          <h3>Product</h3>
          <ul className="text-sm space-y-2 mt-3">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Brand
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Blog
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Documentation
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1 my-6 lg:my-0">
          <h3>Social</h3>
          <ul className="text-sm flex items-center space-x-2 mt-3">
            <li className="text-gray-600 cursor-pointer bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 border border-gray-200 p-3 z-10">
              <GitHubLogoIcon className="w-6 h-6" />
            </li>
            <li className="text-gray-600 cursor-pointer bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 border border-gray-200 p-3 z-10">
              <TwitterLogoIcon className="w-6 h-6" />
            </li>
            <li className="text-gray-600 cursor-pointer bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 border border-gray-200 p-3 z-10">
              <LinkedInLogoIcon className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
