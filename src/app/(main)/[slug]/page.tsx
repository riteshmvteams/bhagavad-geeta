import Link from "next/link";
import React from "react";

import { getAllVerses, getChapterDetail } from "@/http/api";
import { Verse } from "@/types";
import { extractChapterNumber } from "@/utils/helpers";

type Props = {
  params: {
    slug: string;
  };
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
        <ul className="grid grid-cols-1 gap-5 p-10">
          {verses.map((verse: Verse) => {
            return (
              <li key={verse.id} className="card">
                <Link
                  href={`/verses?chapter=${chapNumber}&verse=${verse.verse_number}&max=${chapterDetails.verses_count}`}
                  className="p-4 block"
                >
                  {verse?.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
