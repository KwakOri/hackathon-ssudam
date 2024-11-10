"use client";

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
    
  );
}
