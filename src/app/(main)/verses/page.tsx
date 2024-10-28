import Link from "next/link";

import { getSingleVerse } from "@/http/api";
import { Verse } from "@/types";

type Props = {
  searchParams: {
    chapter: string;
    verse: string;
    max: string;
  };
};

export default async function VersePage({ searchParams }: Props) {
  const verse: Verse = await getSingleVerse(
    Number(searchParams.chapter),
    Number(searchParams.verse)
  );

  if (!verse) {
    return <div>Verse not found</div>;
  }

  return (
    <main className="py-10">
      <section className="container">
        <h2 className="font-lexend text-lg sm:text-xl font-medium text-accent text-center mb-8">
          Chapter No: {verse.chapter_number} - Verse No: {verse.verse_number}
        </h2>
        <div className="flex flex-col gap-3 items-center mb-10">
          <div className="text-base sm:text-lg font-lexend">{verse?.text}</div>
          <div className="text-base sm:text-lg font-lexend">
            {verse?.transliteration}
          </div>
        </div>

        <ul className="flex flex-col gap-4 pb-4">
          <h2 className="font-bold text-2xl sm:text-3xl font-lexend -mb-3">
            Translation:
          </h2>
          {verse?.translations?.map((trans: any, ind: number) => {
            return (
              <li
                key={trans.id}
                className="card !p-2.5 hover:ring-1 hover:ring-accent flex flex-col gap-5 cursor-pointer"
              >
                <div className="text-sm sm:text-base">
                  <span className="font-lexend text-sm sm:text-base text-accent font-bold">
                    {ind + 1}.
                  </span>{" "}
                  {trans?.description}
                </div>
                <div className="flex justify-end text-accent font-lexend text-[13px] sm:text-sm">
                  {trans?.author_name}
                  {"  "}|
                  <span className="ml-1.5 capitalize">{trans?.language}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col gap-4 border-t border-t-accent pt-4">
          <h2 className="font-bold text-2xl sm:text-3xl font-lexend -mb-3">
            Commentories:
          </h2>
          {verse?.commentaries?.map((comments: any, ind: number) => {
            return (
              <li
                key={comments.id}
                className="card !p-2.5 hover:ring-1 hover:ring-accent flex flex-col gap-5 cursor-pointer"
              >
                <div className="text-sm sm:text-base">
                  <span className="font-lexend text-accent font-bold">
                    {ind + 1}.
                  </span>{" "}
                  {comments?.description}
                </div>
                <div className="flex justify-end text-accent font-lexend text-[13px] sm:text-sm">
                  {comments?.author_name}
                  {"  "}|
                  <span className="ml-1.5 capitalize">
                    {comments?.language}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 justify-center mt-6">
          <Link
            className={`px-6 py-2 border-2 duration-200 rounded-md border-accent hover:bg-accent hover:text-white font-lexend font-semibold active:scale-95 ${
              verse.verse_number === 1 ? "hidden" : ""
            }`}
            href={`/verses?chapter=${searchParams.chapter}&verse=${
              verse.verse_number - 1
            }&max=${searchParams.max}`}
          >
            Prev
          </Link>
          <Link
            className={`px-6 py-2 border-2 duration-200 rounded-md border-accent hover:bg-accent hover:text-white font-lexend font-semibold active:scale-95 ${
              verse.verse_number > Number(searchParams.max) - 1 ? "hidden" : ""
            }`}
            href={`/verses?chapter=${searchParams.chapter}&verse=${
              verse.verse_number + 1
            }&max=${searchParams.max}`}
          >
            Next
          </Link>
        </div>
      </section>
    </main>
  );
}
