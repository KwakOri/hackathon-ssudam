"use client";

import CheckInput from "@/components/molecules/CheckInput";
import { useState } from "react";

export default function Home() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const onCheckboxChange = (checked: boolean) => {
    setIsCheckboxChecked(checked);
  };
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const onRadioChange = (checked: boolean) => {
    setIsRadioChecked(checked);
  };

  return (
    <main className=" w-screen h-screen bg-line-normal">
      <div>
        <CheckInput
          type="checkbox"
          checked={isCheckboxChecked}
          onChange={onCheckboxChange}
          size="md"
          disabled={false}
        />
      </div>
      <div>
        <CheckInput
          type="radio"
          checked={isRadioChecked}
          onChange={onRadioChange}
          size="md"
          disabled={false}
        />
      </div>
    </main>
  );
}
