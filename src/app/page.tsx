"use client";

import IconButton from "@/components/atoms/IconButton";

export default function Home() {
  return (
    <main className="bg-white">
      <IconButton intent={"fill"} />
      <IconButton intent={"light"} />
      <IconButton intent={"white"} />
    </main>
  );
}
