import React, { useState } from 'react'
import { BloodbankType } from '../context/BloodbankContext'

type BloodbankItemProps = {
    bloodbank: BloodbankType
    getType: (str: "call" | "email" | "website", bloodbank: BloodbankType) => void
}

const BloodbankItem = (props: BloodbankItemProps) => {
    const { bloodbank, getType } = props;
    const attributes = bloodbank.attributes;
    const geometry = bloodbank.geometry;

    return (
        <div className='col-md-4 mb-4'>
            <div className='card gradient-custom cardItem px-4 py-3'>
                <div className='cardContent card-body'>
                    <h5 className='cardHeading'>{props.bloodbank.attributes.blood_bank_name}
                    </h5>
                    <div className='cardText'>
                        <span className="badge mt-1 mb-2 text-wrap" style={{ fontSize: 12, background: "rgb(43, 43, 43)", letterSpacing: 1 }}>
                            {attributes.state + " > " + attributes.district}
                        </span>
                        <div className='cardItem-text p-2'>{attributes.address !== "" ? attributes.pincode !== "" ? attributes.address + " -" : attributes.address : ""} {attributes.pincode !== "" ? " Pincode " + attributes.pincode : ""}</div>
                        <div className='row justify-content-md-center'>
                            <div className='iconrow col-5 my-2'>
                                <i className="fa-solid fa-lg fa-location-dot" ></i>
                                <div className='mx-1'>{attributes.city !== "" ? attributes.city : " NA "}</div>
                            </div>
                            <div className='iconrow col-5'>
                                <i className="fa-solid fa-lg fa-building"></i>
                                <div className='mx-1'>{attributes.category !== "" ? attributes.category : " NA "}</div>
                            </div>
                        </div>
                    </div>

                    <div className='contact-icons my-2 py-2' style={{ borderRadius: 15, background: "#00000099", borderColor: "#00000000", textAlign: "center" }}>
                        <div className="icons mx-3"><i className="fa-solid fa-sm fa-phone" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { getType("call", bloodbank) }}></i></div>
                        <div className="icons mx-3"><i className="fa-solid fa-sm fa-envelope" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { getType("email", bloodbank) }}></i></div>
                        <div className="icons mx-3"><i className="fa-solid fa-sm fa-globe" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { getType("website", bloodbank) }}></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloodbankItem