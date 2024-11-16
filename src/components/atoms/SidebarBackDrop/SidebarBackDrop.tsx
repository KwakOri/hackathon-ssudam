"use client";

import { PropsWithChildren } from "react";

interface BackDropProps {
  onCancel: () => void;
}

function SidebarBackDrop({
  children,
  onCancel,
}: PropsWithChildren<BackDropProps>) {
  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="z-50 fixed inset-0  flex justify-start">
      {children}

      <div
        onClick={handleCancel}
        className="z-30 fixed inset-0 bg-accent-red-normal"
      ></div>
    </div>
  );
}

export default SidebarBackDrop;
