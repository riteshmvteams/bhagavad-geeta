import { env } from "@/app/config/env";
import { Chapter } from "@/types";
import { truncateText } from "@/utils/helpers";
import { List } from "lucide-react";
import Link from "next/link";

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

export default async function Home() {
  const allChapters = await getChapters();

  if (!allChapters) {
    return <div>Error...</div>;
  }

  return (
    <main className="">
      <section className="py-10">
        <div className="container">
          <h2 className="text-text text-3xl">Chapters:</h2>
          <ul className="grid grid-cols-2 gap-6 mt-4">
            {allChapters?.map((chapter: Chapter) => (
              <li
                key={chapter.id}
                className="border-2 border-secondaryText/20 hover:border-accent rounded-md shadow-2xl"
              >
                <Link href={`/${chapter?.slug}`} className="p-4 block">
                  <h4 className="text-accent font-bold text-xl">
                    {chapter?.id}. {chapter?.name_translated}
                  </h4>

                  <p className="mt-2 text-base text-secondaryText tracking-wide">
                    {truncateText(chapter?.chapter_summary, 220)}
                  </p>

                  <div className="mt-4 text-text flex items-center gap-2">
                    <span className="px-1 py-0.5 rounded-md border border-primaryText">
                      <List />
                    </span>
                    <span>{chapter?.verses_count}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
