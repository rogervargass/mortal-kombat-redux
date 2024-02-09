import { ReactNode } from "react";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span
          className="close-button"
          onClick={onClose}
          aria-label="botão para fechar modal"
        >
          X
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
