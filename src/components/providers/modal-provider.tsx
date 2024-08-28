"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContext {
  openModal: ({ view, wid }: { view: React.ReactNode; wid: number }) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  component: React.ReactNode;
  width: number;
}

const modalContext = createContext<ModalContext | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [component, setComponent] = useState<React.ReactNode | null>(null);
  const [width, setWidth] = useState(500);

  const openModal = ({ view, wid }: { view: React.ReactNode; wid: number }) => {
    setIsModalOpen(true);
    setComponent(view);
    setWidth(wid);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setComponent(null);
  };

  return (
    <modalContext.Provider
      value={{
        closeModal,
        component,
        isModalOpen,
        openModal,
        width,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(modalContext) as ModalContext;
};

export default ModalProvider;
