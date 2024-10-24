import React from "react";
import Skelton from "../ui/skelton";

export default function ChapterLoading() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {Array.from({ length: 8 })?.map((_, ind) => {
        return (
          <li key={ind}>
            <Skelton className="h-52 w-full" />
          </li>
        );
      })}
    </ul>
  );
}
