"use client";

import SVGIcon from "@/components/atoms/SVGIcon";
import { IconMap, IconMapTypes } from "@/icons/icons";

export default function Home() {
  return (
    <main>
      {Object.keys(IconMap).map((iconName) => (
        <SVGIcon icon={iconName as IconMapTypes} key={iconName} />
      ))}
    </main>
  );
}
