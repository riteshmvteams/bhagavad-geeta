"use client";

import React, { createContext, useContext, useState } from "react";

interface DrawerContext {
  openDrawer: ({
    view,
    direction,
    wid,
  }: {
    view: React.ReactNode;
    direction: Direction;
    wid: number;
  }) => void;
  closeDrawer: () => void;
  isDrawerOpen: boolean;
  Comp: React.ReactNode;
  direction?: Direction;
  width: number;
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

const drawerContext = createContext<DrawerContext | null>(null);

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [Comp, setComp] = useState<React.ReactNode | null>(null);
  const [direction, setDirection] = useState<Direction>(Direction.LEFT);
  const [width, setWidth] = useState(500);

  const openDrawer = ({
    view,
    direction = Direction.LEFT,
    wid,
  }: {
    view: React.ReactNode;
    direction: Direction;
    wid: number;
  }) => {
    setIsDrawerOpen(true);
    setComp(view);
    setDirection(direction);
    setWidth(wid);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setComp(null);
  };

  return (
    <drawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        isDrawerOpen,
        Comp,
        direction,
        width,
      }}
    >
      {children}
    </drawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(drawerContext) as DrawerContext;
};

export default DrawerProvider;
