"use client";

import ReactQueryProvider from "@/app/(providers)/_providers/ReactQueryProvider";
import { AddressProvider } from "@/contexts/Address/address.context";
import { SidebarProvider } from "@/contexts/Sidebar/Sidebar.context";
import { ToastProvider } from "@/contexts/Toast/Toast.context";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactQueryProvider>
        <SidebarProvider>
          <ToastProvider>
            <AddressProvider>{children}</AddressProvider>
          </ToastProvider>
        </SidebarProvider>
      </ReactQueryProvider>
    </>
  );
};

export default ProviderLayout;
