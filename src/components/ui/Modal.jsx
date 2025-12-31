import { useEffect, useRef } from "react";
import ModalTitle from "./ModalTitle";

export default function Modal({ children, isOpen, onClose, title }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        isOpen ? dialog.showModal() : dialog.close();
    }, [isOpen]);
    
    return (
        <>
            <dialog
                ref={dialogRef}
                onClose={onClose}
                className="w-full max-w-lg border-0 rounded-lg bg-white shadow-lg p-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <div className="p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <ModalTitle>
                        {title}    
                    </ModalTitle>

                    {children}
                </div>

            </dialog>
        </>
    )
}  