"use client";

import Toast, { ToastTypes } from "@/components/molecules/Toast/Toast";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ToastContextTypes {
  add: ({
    content,
    intent,
  }: {
    content: ToastTypes["content"];
    intent: "normal" | "strong" | "accept" | "warning";
  }) => void;
  delete: (id: ToastTypes["id"]) => void;
}

const initialValue: ToastContextTypes = {
  add: () => {},
  delete: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastTypes[]>([]);
  const value = {
    add: ({
      content,
      intent,
    }: {
      content: ToastTypes["content"];
      intent: "normal" | "strong" | "accept" | "warning";
    }) => {
      setToasts(() => [{ id: uuidv4(), content, intent }]);
    },
    delete: (id: ToastTypes["id"]) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      <div className="absolute top-20 flex flex-col gap-2 w-full px-4 z-50">
        {toasts.length > 0 &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              content={toast.content}
              intent={toast.intent}
            />
          ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};
