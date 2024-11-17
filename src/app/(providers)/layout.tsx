"use client";

import { SidebarProvider } from "@/contexts/Sidebar/Sidebar.context";
import { ToastProvider } from "@/contexts/Toast/Toast.context";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SidebarProvider>
        <ToastProvider>{children}</ToastProvider>
      </SidebarProvider>
    </>
  );
};

export default ProviderLayout;
