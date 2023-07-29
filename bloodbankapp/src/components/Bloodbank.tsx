import React from 'react'
import { BloodbankType } from '../context/BloodbankContext'

type BloodbankProps = {
    bloodbank: BloodbankType
}

const Bloodbank = (props: BloodbankProps) => {
    const { bloodbank } = props;

    return (
        <div className="modal fade" id="bloodbankModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="bloodbankModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="bloodbankModalLabel">Modal Title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-dark" style={{ color: "white" }}>
                        Insert the Modal Body Here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloodbank