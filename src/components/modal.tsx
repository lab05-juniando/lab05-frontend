import ReactModal from "react-modal";

type ModalBaseProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: React.ReactNode;
};

export function ModalBase({ isOpen, onRequestClose, children }: ModalBaseProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                },
                content: {
                    position: "relative",
                    inset: "auto",
                    width: "800px",
                    maxWidth: "90vw",
                    minHeight: "600px",
                    background: "#0B1236",
                    border: "none",
                    borderRadius: "8px",
                    padding: "24px",
                    top: "auto",
                    left: "auto",
                    right: "auto",
                    bottom: "auto",
                },
            }}
        >
            {children}
        </ReactModal>
    );
}