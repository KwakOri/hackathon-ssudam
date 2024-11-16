import { PropsWithChildren } from "react";

const Page = ({ children }: PropsWithChildren) => {
  return <main className={"w-full h-full"}>{children}</main>;
};

export default Page;
