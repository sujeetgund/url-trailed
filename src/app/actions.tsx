"use server";

import axios, { AxiosError } from "axios";

export async function handleSubmit(data: { originalUrl: string }) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/shorten-url`,
      data
    );
    return {
      success: true,
      message: response.data.message,
      originalUrl: response.data.originalUrl,
      shortId: response.data.shortId,
    };
  } catch (error) {
    const axiosErrors = error as AxiosError;
    console.log(axiosErrors.message || "An error occurred.");
    return {
      message: axiosErrors.message || "An error occurred.",
      success: false,
      originalUrl: undefined,
      shortId: undefined,
    };
  }
}
