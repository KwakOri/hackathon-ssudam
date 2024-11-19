"use client";
import PostcodeBox from "@/components/atoms/PostcodeBox/PostcodeBox";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

interface TInitialValue {
  open: () => Promise<any>;
  close: () => void;
}

const initialValue: TInitialValue = {
  open: async () => Promise<any>,
  close: () => {},
};
const AddressContext = createContext<TInitialValue>(initialValue);

export const useAddress = () => useContext<TInitialValue>(AddressContext);

export type AddressModalTypes = React.ReactElement;

export function AddressProvider({ children }: PropsWithChildren) {
  const [addressModal, setAddressModal] = useState<AddressModalTypes | null>(
    null
  );
  const addModal = (modal: AddressModalTypes) => setAddressModal(modal);

  const resolveRef = useRef<(value: boolean) => void>(() => {});

  const value = {
    open: async () => {
      return new Promise<boolean>((resolve) => {
        resolveRef.current = resolve;
        addModal(
          <PostcodeBox
            onComplete={(data) => {
              resolve(data);
              setAddressModal(null);
            }}
          />
        );
      });
    },
    close: () => {
      setAddressModal(null);
    },
  };
  // confirm: async (contents: string[]) => {
  //   return new Promise<boolean>((resolve) => {
  //     resolveRef.current = resolve;
  //     const modalId = uuidv4();
  //     const modal = (
  //       <ConfirmModal
  //         id={modalId}
  //         contents={contents}
  //         onSuccess={() => resolve(true)}
  //         onCancel={() => resolve(false)}
  //       />
  //     );
  //     addModal({ id: modalId, modal });
  //   });

  return (
    <AddressContext.Provider value={value}>
      {children}
      {addressModal}
    </AddressContext.Provider>
  );
}
