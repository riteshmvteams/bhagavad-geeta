"use client";

import React from "react";
import { Settings } from "lucide-react";

import { Direction, useDrawer } from "../providers/drawer-provider";

export default function ThemeSettings() {
  const { openDrawer } = useDrawer();
  return (
    <button
      className="p-2 rounded-md hover:bg-primaryBg duration-300 group active:scale-95"
      onClick={() =>
        openDrawer({
          view: <TextCom />,
          wid: 400,
          direction: Direction.RIGHT,
        })
      }
    >
      <Settings className="group-hover:rotate-90 duration-300" />
    </button>
  );
}

const TextCom = () => {
  return (
    <div className="p-4">
      <h2>List all the color settings</h2>
    </div>
  );
};
