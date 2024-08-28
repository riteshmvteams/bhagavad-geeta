import { env } from "@/app/config/env";

const fetchData = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": env.RAPID_API_KEY as string,
        "x-rapidapi-host": env.RAPID_API_HOST as string,
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while fethcing data ...", error);
    return null;
  }
};

export const getChapters = async () => {
  return await fetchData("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/");
};

export const getChapterDetail = async (chapterNumber: number) => {
  return await fetchData(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`
  );
};

export const getAllVerses = async (chapterNumber: number) => {
  return await fetchData(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`
  );
};

export const getSingleVerse = async (
  chapterNumber: number,
  verseNumber: number
) => {
  return fetchData(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`
  );
};
