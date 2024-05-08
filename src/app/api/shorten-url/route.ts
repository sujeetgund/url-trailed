import { dbConnect } from "@/lib/dbConnect";
import Url from "@/models/Url";

import { nanoid } from "nanoid";

export async function POST(req: Request) {
  //   Connect to database
  await dbConnect();

  // Get original URL from request
  const { originalUrl } = await req.json();

  try {
    // Create short URL
    const shortUrl = nanoid(13);

    await Url.create({ originalUrl, shortUrl });

    return Response.json(
      {
        success: true,
        message: "url created successfully",
        data: { originalUrl, shortUrl },
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
