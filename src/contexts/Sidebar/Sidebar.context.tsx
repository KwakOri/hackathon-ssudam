"use client";

import SidebarBackDrop from "@/components/atoms/SidebarBackDrop";
import Sidebar from "@/components/templates/Sidebar";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SidebarContextTypes {
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const initialValue: SidebarContextTypes = {
  toggle: () => {},
  open: () => {},
  close: () => {},
};

const SidebarContext = createContext(initialValue);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    console.log("toggle");
  };
  const open = () => {
    setIsOpen(true);
    console.log("open");
  };
  const close = () => {
    setIsOpen(false);
    console.log("close");
  };

  const value = { toggle, open, close };

  return (
    <SidebarContext.Provider value={value}>
      {children}
      {isOpen && (
        <SidebarBackDrop onCancel={close}>
          <Sidebar />
        </SidebarBackDrop>
      )}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;
