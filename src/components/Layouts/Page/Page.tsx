import { PropsWithChildren } from "react";
interface PageProps {
  className?: string;
}
const Page = ({ children, className }: PropsWithChildren<PageProps>) => {
  return <main className={`w-full h-full ${className}`}>{children}</main>;
};

export default Page;
