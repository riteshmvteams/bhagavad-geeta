import Link from "next/link";

import { getSingleVerse } from "@/http/api";

type Props = {
  searchParams: {
    chapter: string;
    verse: string;
    max: string;
  };
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
