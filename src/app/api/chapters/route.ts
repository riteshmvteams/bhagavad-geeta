import { getChapters } from "@/http/api";
import { NextResponse } from "next/server";

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
