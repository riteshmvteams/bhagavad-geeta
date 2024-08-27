import { env } from "@/app/config/env";
import Link from "next/link";

type Props = {
  searchParams: {
    chapter: string;
    verse: string;
    max: string;
  };
};

const getSingleVerse = async (chapterNumber: number, verseNumber: number) => {
  try {
    const res = await fetch(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": env.RAPID_API_KEY as string,
          "x-rapidapi-host": env.RAPID_API_HOST as string,
        },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while fethcing verses ...", error);
    throw error;
  }
};

export default async function VersePage({ searchParams }: Props) {
  const verse = await getSingleVerse(
    Number(searchParams.chapter),
    Number(searchParams.verse)
  );

  if (!verse) {
    return <div>Verse not found</div>;
  }

  return (
    <main className="p-10">
      <div className="container">{verse.slug}</div>

      <div className="flex items-center gap-2">
        <Link
          className={`px-5 py-2 border ${
            verse.verse_number === 1 ? "hidden" : ""
          }`}
          href={`/verses?chapter=${searchParams.chapter}&verse=${
            verse.verse_number - 1
          }&max=${searchParams.max}`}
        >
          Prev
        </Link>
        <Link
          className={`px-5 py-2 border ${
            verse.verse_number > Number(searchParams.max) - 1 ? "hidden" : ""
          }`}
          href={`/verses?chapter=${searchParams.chapter}&verse=${
            verse.verse_number + 1
          }&max=${searchParams.max}`}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
