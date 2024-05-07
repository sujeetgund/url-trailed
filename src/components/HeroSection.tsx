import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShortLinkForm from "./ShortLinkForm";

function HeroSection() {
  return (
    <section className="flex justify-center items-center space-x-24 max-w-7xl mx-auto my-14">
      {/* Form */}
      <ShortLinkForm />

      {/* Hero Introduction */}
      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl font-bold my-2 mb-2">The Best URL Shortener</h1>
        <h3 className="text-xl mb-2">Create shorter URLs with URL Trailed.</h3>
        <p className="my-2 leading-relaxed text-gray-600">
          Want more out of your link shortener? Track link analytics, use
          branded domains for fully custom links, and manage your links with our
          paid plans.
        </p>
        <div className="flex justify-center items-center space-x-3 my-2">
          <Link href={"/pricing"}>
            <Button variant="outline" size={"lg"}>
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
    </section>
  );
}

export default HeroSection;
