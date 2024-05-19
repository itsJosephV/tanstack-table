/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({ open, onOpenChange, children }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
};

export default Modal;
