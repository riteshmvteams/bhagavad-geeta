import Link from "next/link";
import { Suspense } from "react";
import { List } from "lucide-react";

import { getChapters } from "@/http/api";
import { Chapter } from "@/types";
import { truncateText } from "@/utils/helpers";
import ChapterLoading from "@/components/loaders/ChapterLoading";

export default async function Home() {
  return (
    <main>
      <section className="py-10">
        <div className="container">
          <h2 className="text-text text-3xl font-bold">Chapters:</h2>
          <Suspense fallback={<ChapterLoading />}>
            <ListChapters />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

async function ListChapters() {
  const allChapters = await getChapters();

  if (!allChapters) {
    return <div>Error...</div>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {allChapters?.map((chapter: Chapter) => (
        <li key={chapter.id} className="card">
          <Link href={`/${chapter?.slug}`} className="p-4 block">
            <h4 className="font-bold text-xl text-accent font-lexend tracking-wider">
              {chapter?.id}. {chapter?.name_translated}
            </h4>

            <p className="mt-2 text-base tracking-wide text-primaryText/80">
              {truncateText(chapter?.chapter_summary, 220)}
            </p>

            <div className="mt-4 flex items-center gap-1">
              <span className="px-1 py-0.5 rounded-md">
                <List />
              </span>
              <span>{chapter?.verses_count}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
