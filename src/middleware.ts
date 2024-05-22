import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const shortId = request.nextUrl.pathname.split("/")[2];

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/get-original-url?shortId=${shortId}`
    );
    const data = await response.json();
    return NextResponse.redirect(new URL(data.data.originalUrl, request.url));
  } catch (error) {
    console.log("error in middleware", error);
  }
}

export const config = {
  matcher: "/r/:shortId*",
};
