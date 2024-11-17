"use client";

import { SidebarProvider } from "@/contexts/Sidebar/Sidebar.context";
import { ToastProvider } from "@/contexts/Toast/Toast.context";
import { MSWComponent } from "@/mocks/MSWComponent";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MSWComponent>
        <SidebarProvider>
          <ToastProvider>{children}</ToastProvider>
        </SidebarProvider>
      </MSWComponent>
    </>
  );
};

export default ProviderLayout;
