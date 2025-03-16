import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const shortId = request.nextUrl.pathname.split("/")[2];

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/get-original-url`,
      {
        shortId,
      }
    );

    if (response.status != 200) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_DOMAIN_NAME || "/");
    }
    const data = await response.data;
    return NextResponse.redirect(new URL(data.url, request.url));
  } catch (error) {
    console.log("error in middleware", error);
    return NextResponse.redirect(process.env.NEXT_PUBLIC_DOMAIN_NAME || "/");
  }
}

export const config = {
  matcher: "/r/:shortId*",
};
