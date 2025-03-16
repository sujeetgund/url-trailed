import { GITHUB } from "@/constants";
import React from "react";

function AuthorName() {
  return (
    <>
      <a
        href={GITHUB.PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 hover:italic transition-transform duration-300 ease-in-out"
      >
        Sujeet Gund
      </a>
    </>
  );
}

export default AuthorName;
