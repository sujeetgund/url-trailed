import React from "react";
import { GITHUB } from "@/constants";

const Footer = () => {
  return (
    <section className="max-w-5xl mx-auto py-3 text-center">
      {/* Author Name */}
      <p className="inline-flex gap-1 text-sm font-light">
        Made with 💖 by{" "}
        <span className="italic font-mono hover:font-bold cursor-pointer">
          <a
            href={GITHUB.PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sujeet Gund
          </a>
        </span>
      </p>
    </section>
  );
};

export default Footer;
