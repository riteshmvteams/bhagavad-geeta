import { env } from "@/app/config/env";
import { Verse } from "@/types";
import { extractChapterNumber } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const getChapterDetail = async (chapterNumber: number) => {
  try {
    const res = await fetch(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`,
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
    console.log("Error while fethcing single Chapter: ", error);
    throw error;
  }
};

const getAllVerses = async (chapterNumber: number) => {
  try {
    const res = await fetch(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": env.RAPID_API_KEY as string,
          "x-rapidapi-host": env.RAPID_API_HOST as string,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch verses");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while fethcing verses ...", error);
    throw error;
  }
};

export default async function ChapterDetail({ params }: Props) {
  const chapNumber = extractChapterNumber(params.slug);
  const [chapterDetails, verses] = await Promise.all([
    getChapterDetail(chapNumber),
    getAllVerses(chapNumber),
  ]);

  return (
    <main>
      <section className="container ">
        <ul className="grid grid-cols-2 gap-5">
          {verses.map((verse: Verse) => {
            return (
              <li key={verse.id}>
                <Link
                  href={`/verses?chapter=${chapNumber}&verse=${verse.verse_number}&max=${chapterDetails.verses_count}`}
                >
                  {verse.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
