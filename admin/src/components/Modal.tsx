import ReactModal from "react-modal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  height?: string;
}

const Modal = ({
  children,
  isOpen,
  onRequestClose,
  title,
  height,
}: ModalProps) => {
  return (
    <ReactModal
      appElement={document.getElementById("root")!}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          height: height || "70%",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-1/2 h-1/2 bg-white rounded-lg p-8"
    >
      <div className="w-full flex justify-end">
        <button onClick={onRequestClose}>Kapat</button>
      </div>
      <h1 className="text-center font-semibold text-lg">{title}</h1>
      {children}
    </ReactModal>
  );
};

export default Modal;
