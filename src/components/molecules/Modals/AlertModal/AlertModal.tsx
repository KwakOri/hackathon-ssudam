"use client";

import AnimatedModalFrame from "@/components/molecules/Modals/AnimatedModalFrame";
import { useModal } from "@/contexts/contexts/Modal/Modal.context";
import { useState } from "react";

interface ModalProps {
  onSuccess: () => void;
  title?: string;
  contents: string[];
  id: string;
}

const AlertModal = ({ id, onSuccess, title, contents }: ModalProps) => {
  const modal = useModal();
  const [isVisible, setIsVisible] = useState(true);

  const handleClickConfirm = () => {
    onSuccess();
    setIsVisible(false);
    setTimeout(() => {
      modal.close(id);
    }, 300);
  };

  return <AnimatedModalFrame isVisible={isVisible}></AnimatedModalFrame>;
};

export default AlertModal;
