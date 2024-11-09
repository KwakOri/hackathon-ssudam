"use client";

import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <main className=" w-screen h-screen bg-line-normal">
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        size="md"
        disabled={false}
      />
    </main>
  );
}
