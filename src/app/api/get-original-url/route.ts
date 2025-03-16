import Url from "@/models/Url";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req: Request) {
  await dbConnect();

  try {
    // Get shortId from request
    const { shortId } = await req.json();

    // Find document from data using shortId
    const url = await Url.findOneAndUpdate(
      { shortId },
      { $inc: { totalClicks: 1 } }
    );

    // If url not found return error response
    if (!url) {
      return Response.json(
        {
          success: false,
          message: "No url found",
        },
        { status: 400 }
      );
    }

    // Return success response
    console.log("url found successfully");

    return Response.json(
      {
        success: true,
        message: "url found successfully",
        url: url.originalUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while getting original url", error);
    return Response.json(
      {
        success: false,
        message: "Error while getting original url",
      },
      { status: 500 }
    );
  }
}
