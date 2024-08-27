import { env } from "@/app/config/env";

type Props = {
  searchParams: {
    chapter: string;
    verse: string;
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
      throw new Error("Failed to fetch verses");
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

  return (
    <main className="p-10">
      <div className="container">{verse.slug}</div>
    </main>
  );
}
