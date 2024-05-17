import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShortLinkForm from "./ShortLinkForm";

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center space-y-24 my-24 w-full">
      {/* Hero Introduction */}
      <div className="bg-black w-full">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto m-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white mx-2 lg:mx-0">
            <span className="no-underline md:underline underline-offset-8 decoration-wavy decoration-[#06a8fc]">URL Trailed</span>: The Ultimate Link Shortener
          </h1>
          <h3 className="text-lg md:text-xl text-white mb-8 mt-2 italic mx-2 lg:mx-0">
            Create, Customize, and Track – Elevate Your Link Sharing Experience.
          </h3>
          <p className="mb-4 max-w-4xl leading-relaxed text-white/70 mx-2 lg:mx-0">
            Unlock the power of concise communication with URL Trailed. Say
            goodbye to long, cumbersome URLs and hello to streamlined links that
            pack a punch. With us, you can create shorter,
            more manageable URLs in seconds. Our robust suite of features allows you to customize your
            links and track their performance with advanced
            analytics. Elevate your online presence and make every link count
            with URL Trailed.
          </p>
          <div className="flex justify-center items-center space-x-3 my-2">
            <Link href={"/pricing"}>
              <Button variant="outline" size={"lg"} className="text-[#343A40]">
                View Plans
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button variant="default" size={"lg"}>
                Create Free Account
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
