export const extractChapterNumber = (slug: string) => {
  const chapNumber = slug.split("-")[1];

  return Number(chapNumber);
};
