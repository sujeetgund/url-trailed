import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import ShortLinkForm from "./ShortLinkForm";

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-orange-600/30 rounded-full blur-md" />
            <Image
              src="/logo.jpeg"
              height={80}
              width={80}
              alt="URL Trailed logo"
              className="relative rounded-xl shadow-lg"
            />
          </div>

          {/* Hero content */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The Ultimate{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Link Shortener
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              Create, Customize, and Track – Elevate Your Link Sharing
              Experience.
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              URL Trailed is the open-source link management tool. Create,
              customize, and track links effortlessly. Elevate your marketing
              game with URL Trailed!
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <Link href="/sign-up">
                <Button size="lg" className="w-full sm:w-auto font-medium">
                  Start for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-medium"
                >
                  Get a Demo
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Form section with card styling */}
        <div className="relative mt-16 bg-card rounded-lg shadow-lg" id="shorten-form">
          <ShortLinkForm />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
