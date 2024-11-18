"use client";

import { PropsWithChildren } from "react";

const LootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full bg-static-white relative">{children}</div>
  );
};

export default LootLayout;
