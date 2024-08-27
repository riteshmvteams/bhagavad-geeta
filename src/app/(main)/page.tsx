import { env } from "@/app/config/env";
import { Chapter } from "@/types";
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
          <ul className="grid grid-cols-2 gap-4">
            {allChapters?.map((chapter: Chapter) => (
              <li
                key={chapter.id}
                className="border-2 border-transparent hover:border-accent rounded-md"
              >
                <Link href={"/"} className="p-4 block">
                  {chapter.name_translated}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
