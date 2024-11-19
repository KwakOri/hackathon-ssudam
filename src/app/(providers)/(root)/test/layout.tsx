import { AddressProvider } from "@/contexts/Address/address.context";
import { PropsWithChildren } from "react";

const TestLayout = ({ children }: PropsWithChildren) => {
  return <AddressProvider>{children}</AddressProvider>;
};

export default TestLayout;
