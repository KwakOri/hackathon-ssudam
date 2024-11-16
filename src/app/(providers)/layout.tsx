"use client";

import { SidebarProvider } from "@/contexts/Sidebar/Sidebar.context";
import { MSWComponent } from "@/mocks/MSWComponent";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MSWComponent>
        <SidebarProvider>{children}</SidebarProvider>
      </MSWComponent>
    </>
  );
};

export default ProviderLayout;
