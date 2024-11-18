"use client";

import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { useToast } from "@/contexts/Toast/Toast.context";

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";

const toastVariants = cva(
  "transition-all duration-300 rounded-2xl w-full p-4 flex gap-3",
  {
    variants: {
      intent: {
        normal: "bg-dimmer-normal",
        strong: "bg-dimmer-strong",
        accept: "bg-dimmer-strong border border-accent-green-normal",
        warning: "bg-dimmer-strong border border-accent-red-normal",
      },
      status: {
        await: "-translate-y-[120%] opacity-0",
        exit: "translate-y-[120%] opacity-0",
        enter: " translate-y-0 opacity-100",
      },
    },
    defaultVariants: {
      intent: "normal",
    },
  }
);

const toastIconVariants = cva("", {
  variants: {
    intent: {
      normal: "fill-static-white",
      strong: "fill-static-white",
      accept: "fill-accent-green-normal",
      warning: "fill-accent-red-normal",
    },
  },
  defaultVariants: {
    intent: "normal",
  },
});

const toastTextVariants = cva("", {
  variants: {
    intent: {
      normal: "text-static-white",
      strong: "text-static-white",
      accept: "text-accent-green-normal",
      warning: "text-accent-red-normal",
    },
  },
  defaultVariants: {
    intent: "normal",
  },
});

export interface ToastTypes extends VariantProps<typeof toastVariants> {
  id: string;
  content: string;
  className?: string;
}

const Toast = ({ content, id, intent, className }: ToastTypes) => {
  const TOAST_TRANSITION = 500;
  const TOAST_DURATION = 5000;
  const toast = useToast();
  const [status, setStatus] = useState<"await" | "enter" | "exit">("await");
  let timer: ReturnType<typeof setTimeout>;

  const deleteToast = (time: number): Promise<void> =>
    new Promise<void>((resolve) => {
      timer = setTimeout(() => {
        setStatus("exit");
        resolve();
      }, +time);
    }).then(() => {
      setTimeout(() => {
        toast.delete(id);
      }, TOAST_TRANSITION);
    });

  const onClickToast = () => {
    clearInterval(timer);
    deleteToast(0);
  };

  useEffect(() => {
    setStatus("enter");
    deleteToast(+TOAST_DURATION);
  }, []);

  return (
    <>
      <div
        className={cn(toastVariants({ intent, status, className }))}
        onClick={onClickToast}
      >
        <SVGIcon
          icon={"Success"}
          className={cn(toastIconVariants({ intent }))}
        />
        <Paragraph
          fontSize={"heading2"}
          fontWeight={"medium"}
          className={cn(toastTextVariants({ intent }))}
        >
          {content}
        </Paragraph>
      </div>
    </>
  );
};

export default Toast;
