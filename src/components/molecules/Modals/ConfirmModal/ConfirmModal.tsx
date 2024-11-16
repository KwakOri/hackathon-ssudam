"use client";
import AnimatedModalFrame from "@/components/molecules/Modals/AnimatedModalFrame";

import { useState } from "react";

interface ConfirmModalProps {
  onSuccess: () => void;
  onCancel: () => void;
  contents: string[];
  id: string;
}

const ConfirmModal = ({
  id,
  onSuccess,
  onCancel,
  contents,
}: ConfirmModalProps) => {
  const modal = useModal();
  const [isVisible, setIsVisible] = useState(true);
  const handleCloseModal = () => {
    onCancel();
    setIsVisible(false);
    setTimeout(() => {
      modal.close(id);
    }, 300);
  };
  const handleClickConfirm = () => {
    onSuccess();
    setIsVisible(false);
    setTimeout(() => {
      modal.close(id);
    }, 300);
  };

  return <AnimatedModalFrame isVisible={isVisible}></AnimatedModalFrame>;
};

export default ConfirmModal;
