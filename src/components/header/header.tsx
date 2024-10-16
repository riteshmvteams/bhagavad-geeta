import Link from "next/link";
import React from "react";

import ThemeSettings from "./theme-settings";
import Book from "../icons/Book";

export default function Header() {
  return (
    <header className="bg-secondaryBg text-primaryText py-3">
      <div className="container hover:text-text duration-300">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="font-lexend font-bold tracking-widest text-3xl text-accent"
          >
            <Book />
          </Link>
        </div>
      </div>
    </header>
  );
}
