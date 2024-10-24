import React from "react";
import Skelton from "../ui/skelton";

export default function SingleChapterLoad() {
  return (
    <>
      <div className="my-10 flex flex-col gap-8 items-center">
        <Skelton className="h-8 w-40" />
        <Skelton className="h-10 w-96" />
        <div className="w-full flex flex-col gap-1">
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-1/2" />
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-full" />
          <Skelton className="h-3 w-1/2" />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-5 p-10">
        {Array.from({ length: 20 })?.map((_, ind) => {
          return (
            <li key={ind}>
              <Skelton className="w-full h-36" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
