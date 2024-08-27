import { env } from "@/app/config/env";
import { NextResponse } from "next/server";

const getChapters = async () => {
  try {
    const res = await fetch(
      "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": env.RAPID_API_KEY as string,
          "x-rapidapi-host": env.RAPID_API_HOST as string,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch chapters");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while fethcing Chapters: ", error);
    throw error;
  }
};

export async function GET() {
  try {
    const chapters = await getChapters();
    return NextResponse.json(chapters, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
