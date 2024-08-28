import { Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

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
            <button className="p-2 rounded-md hover:bg-primaryBg duration-300 group active:scale-95">
              <Settings className="group-hover:rotate-90 duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
