import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import ShortLinkForm from "./ShortLinkForm";

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center my-24 w-full">
      {/* Hero Introduction */}
      <div className="w-full">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto m-14 bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 border border-gray-200 py-14 px-2 z-10">
          <Image
            src={"/logo.jpeg"}
            height={70}
            width={70}
            alt="logo"
            className="mb-4 rounded-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mx-2 lg:mx-0 flex flex-col items-center">
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Link Shortener
            </span>
          </h1>
          <h3 className="text-base md:text-xl mb-8 italic mx-2 lg:mx-0">
            Create, Customize, and Track – Elevate Your Link Sharing Experience.
          </h3>
          <p className="mb-4 max-w-2xl leading-relaxed mx-2 lg:mx-0 text-gray-600">
            URL Trailed is the open-source link management tool. Create,
            customize, and track links effortlessly. Elevate your marketing game
            with URL Trailed!
          </p>
          <div className="flex justify-center items-center space-x-3 my-2">
            <Link href={"/pricing"}>
              <Button variant="outline" size={"lg"} className="">
                Get a Demo
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button variant="default" size={"lg"}>
                Start for Free
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Form */}
      <ShortLinkForm />
    </section>
  );
}

export default HeroSection;
