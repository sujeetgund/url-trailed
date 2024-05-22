"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  params: {
    shortId: string;
  };
};
const RedirectPage = (props: Props) => {
  const shortId = props.params.shortId;
  const router = useRouter();

  useEffect(() => {
    const getOriginalUrl = async () => {
      try {
        const response = await axios.post("/api/get-original-url", { shortId });
        console.log(response.data);

        if (response.status === 200) {
          router.push(response.data.data.originalUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getOriginalUrl();
  }, []);
  return (
    <div className="min-h-screen justify-center items-center flex">
      <span className="hover:animate-pulse">Redirecting...</span>
    </div>
  );
};

export default RedirectPage;
