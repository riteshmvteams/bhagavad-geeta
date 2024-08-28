"use client";

import { X } from "lucide-react";
import { useDrawer, Direction } from "../providers/drawer-provider";
import { cn } from "@/utils/helpers";

export default function Drawer() {
  const { direction, isDrawerOpen, Comp, closeDrawer, width } = useDrawer();

  const baseClasses =
    "fixed transition-transform duration-300 ease-in-out z-50 bg-secondaryBg";

  const drawerClasses = cn(baseClasses, {
    "top-0 left-0 h-full": direction === "left",
    "top-0 right-0 h-full": direction === "right",
    "left-0 top-0 w-full": direction === "top",
    "bottom-0 left-0 w-full": direction === "bottom",
    "transform -translate-x-full":
      !isDrawerOpen && direction === Direction.LEFT,
    "transform translate-x-full":
      !isDrawerOpen && direction === Direction.RIGHT,
    "transform -translate-y-full": !isDrawerOpen && direction === Direction.TOP,
    "transform translate-y-full":
      !isDrawerOpen && direction === Direction.BOTTOM,
    "transform translate-x-0":
      isDrawerOpen && (direction === "left" || direction === "right"),
    "transform translate-y-0":
      isDrawerOpen && (direction === "top" || direction === "bottom"),
  });

  const drawerStyles = {
    width: direction === "left" || direction === "right" ? width : "100%",
    height: direction === "top" || direction === "bottom" ? width : "100%",
  };

  return (
    <>
      {/* Blur Background */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div className={drawerClasses} style={drawerStyles}>
        <button onClick={closeDrawer} className="absolute top-4 right-4">
          <X />
        </button>
        {Comp}
      </div>
    </>
  );
}
