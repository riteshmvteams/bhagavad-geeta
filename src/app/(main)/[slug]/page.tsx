import Link from "next/link";
import React, { Suspense } from "react";

import { getAllVerses, getChapterDetail } from "@/http/api";
import { Chapter, Verse } from "@/types";
import { extractChapterNumber } from "@/utils/helpers";
import SingleChapterLoad from "@/components/loaders/SingleChapterLoad";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ChapterDetail({ params }: Props) {
  const chapNumber = extractChapterNumber(params.slug);

  return (
    <main>
      <section className="container">
        <Suspense fallback={<SingleChapterLoad />}>
          <ListVerses chapNumber={chapNumber} />
        </Suspense>
      </section>
    </main>
  );
}

const ListVerses = async ({ chapNumber }: { chapNumber: number }) => {
  const [chapterDetails, verses]: [Chapter, Verse[]] = await Promise.all([
    getChapterDetail(chapNumber),
    getAllVerses(chapNumber),
  ]);

  if (!chapterDetails || !verses) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="my-10 flex flex-col gap-5">
        <h2 className="text-center text-accent text-xl font-semibold">
          Chapter {chapNumber}
        </h2>
        <h1 className="text-center font-bold text-3xl font-lexend">
          {chapterDetails?.name_translated}
        </h1>

        <p className="text-left text-lg text-primaryText/80">
          {chapterDetails?.chapter_summary}
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-5 md:px-10 py-10">
        {verses.map((verse: Verse) => {
          const translations = verse?.translations?.filter(
            (t: any) => t.language.toLowerCase() === "english"
          );
          return (
            <li key={verse.id} className="card">
              <Link
                href={`/verses?chapter=${chapNumber}&verse=${verse.verse_number}&max=${chapterDetails.verses_count}`}
                className="p-4 block"
              >
                <h4 className="text-accent font-lexend tracking-wider">
                  Verse {verse?.verse_number}:
                </h4>

                <p className="mt-2 text-base tracking-wide text-primaryText/80">
                  {translations[0]?.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
