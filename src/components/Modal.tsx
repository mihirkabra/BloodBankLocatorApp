import React from 'react'

type ModalProps = {
    modalBody: {
        title: string;
        element: JSX.Element[] | JSX.Element;
    }
    copied: boolean
}

const Modal = ({ modalBody, copied }: ModalProps) => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{modalBody.title}</h1>
                        <div id="copied-box" className="px-2" style={{ marginLeft: 10, backgroundColor: "green", color: "white", borderRadius: 5, display: copied ? "inline" : "none" }}>
                            Copied!
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-dark" style={{ color: "white" }}>
                        {modalBody.element}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal