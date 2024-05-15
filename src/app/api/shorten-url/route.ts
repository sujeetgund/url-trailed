import { dbConnect } from "@/lib/dbConnect";
import Url from "@/models/Url";

import { nanoid } from "nanoid";

export async function POST(req: Request) {
  //   Connect to database
  await dbConnect();

  // Get original URL from request
  const { originalUrl } = await req.json();

  try {
    // Create shortId
    const shortId = nanoid(13);

    const url = await Url.create({ originalUrl, shortId });

    if (!url)
      return Response.json(
        { success: false, message: "url not created" },
        { status: 500 }
      );

    return Response.json(
      {
        success: true,
        message: "url created successfully",
        data: { originalUrl, shortId },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error while creating short url", error);
    return Response.json(
      {
        success: false,
        message: "error while creating short url",
      },
      { status: 500 }
    );
  }
}
