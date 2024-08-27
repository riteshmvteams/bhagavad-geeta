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
                className="bg-secondaryBg border-4 border-secondaryBg rounded-lg overflow-hidden relative after:content-[''] after:absolute after:w-20 after:h-20 after:bottom-[-80px] after:left-[-80px] after:bg-primaryBg hover:after:scale-[20] after:rounded-full after:transition-all after:duration-500 after:z-[-1] z-[1]"
              >
                <Link href={`/${chapter?.slug}`} className="p-4 block">
                  <h4 className="font-bold text-xl text-accent">
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
        </div>
      </section>
    </main>
  );
}
