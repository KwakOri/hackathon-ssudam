"use client";

import ReactQueryProvider from "@/app/(providers)/_providers/ReactQueryProvider";
import { SidebarProvider } from "@/contexts/Sidebar/Sidebar.context";
import { ToastProvider } from "@/contexts/Toast/Toast.context";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactQueryProvider>
        <SidebarProvider>
          <ToastProvider>{children}</ToastProvider>
        </SidebarProvider>
      </ReactQueryProvider>
    </>
  );
};

export default ProviderLayout;
