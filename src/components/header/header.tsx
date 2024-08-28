import Link from "next/link";
import React from "react";

import ThemeSettings from "./theme-settings";

export default function Header() {
  return (
    <header className="bg-secondaryBg text-primaryText py-6">
      <div className="container hover:text-text duration-300">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-lexend font-bold tracking-widest text-3xl"
          >
            .
          </Link>
          <div>
            <ThemeSettings />
          </div>
        </div>
      </div>
    </header>
  );
}
