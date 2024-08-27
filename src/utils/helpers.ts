export const extractChapterNumber = (slug: string) => {
  const chapNumber = slug.split("-")[1];

  return Number(chapNumber);
};

export const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
};
