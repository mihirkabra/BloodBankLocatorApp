import React, { useContext, useEffect, useState } from "react";
import bloodbankContext, { BloodbankType } from "../context/BloodbankContext";
import BloodbankItem from "./BloodbankItem";
import Modal from "./Modal";
import { ProgressBar } from "./ProgressBar";
import Pagination from "./Pagination"

export const Bloodbanks = () => {

    let context = useContext(bloodbankContext);

    const { bloodbanks, getAllBloodbanks, showProgress } = context;

    const [contacts, setContacts] = useState<string[]>([]);
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [copied, setCopied] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;

    const [modalBody, setModalBody] = useState<{ title: string, element: JSX.Element[] | JSX.Element }>({ title: "", element: <></> });

    const getType = (str: "call" | "email" | "website", bloodbank: BloodbankType) => {
        if (str === "call") {
            getCallDetails(bloodbank)
            setModalBody({ title: "Contact", element: setCallDetails() })
        }
        else if (str === "email") {
            getEmailDetails(bloodbank)
            setModalBody({ title: "Email", element: setEmailDetails() })
        }
        else if (str === "website") {
            getWebsiteDetails(bloodbank)
            setModalBody({ title: "Website", element: setWebsiteDetails() })
        }
    }

    const getCallDetails = (bloodbank: BloodbankType) => {
        let str = "";
        let contact = bloodbank.attributes.contact_no;
        let mobile = bloodbank.attributes.mobile;
        if (contact !== "") {
            str = str + contact;
            if (mobile !== "") {
                str = str + ", " + mobile;
            }
        }
        else {
            if (mobile !== "") {
                str = str + mobile;
            }
        }
        console.log(str.split(", "))
        setContacts(str.split(", "))
    }

    const setCallDetails = () => {
        return (contacts.length !== 0 ?
            contacts.map((i) => {
                return (<div className="ms-3">
                    <div className="icons mx-1">
                        <i className="fa-solid fa-phone-volume" onClick={() => {
                            window.open(
                                "tel:" + i, "_blank");
                        }}></i>
                    </div>
                    <div className="icons ms-1 me-2">
                        <i className="fa-solid fa-copy" onClick={() => { onCopiedClick(i) }
                        }></i>
                    </div>
                    {i}
                </div>
                )
            }) : <div>No contact details found!</div>)
    }

    const getEmailDetails = (bloodbank: BloodbankType) => {
        let email = bloodbank.attributes.email;
        setEmail(email);
    }
    const setEmailDetails = () => {
        return (
            email !== "" ?
                (<div className="ms-3">
                    <div className="icons ms-1 me-2">
                        <i className="fa-solid fa-copy" onClick={() => { onCopiedClick(email) }
                        }></i>
                    </div>
                    <a href={"mailto:" + email}>{email}</a>
                </div>
                )
                : <div>No email address found!</div>
        )
    }
    const getWebsiteDetails = (bloodbank: BloodbankType) => {
        let website = bloodbank.attributes.website;
        setWebsite(website);
    }
    const setWebsiteDetails = () => {
        return (
            website !== "" ?
                (<div className="ms-3">
                    <div className="icons ms-1 me-2">
                        <i className="fa-solid fa-copy"></i>
                    </div>
                    <a href={website} target="_blank">{website}</a>
                </div>
                )
                : <div>No website URL found!</div>
        )
    }
    const onCopiedClick = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => { setCopied(false) }, 1000);
    }

    useEffect(() => {
        getAllBloodbanks();
        // eslint-disable-next-line
    }, []);

    const renderBloodbanks = () => {
        const indexOfLast = currentPage * itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        const currentBloodbanks = bloodbanks.slice(indexOfFirst, indexOfLast);

        return currentBloodbanks.map((item: BloodbankType) => {
            return (
                <BloodbankItem key={item._id}
                    bloodbank={item}
                    getType={getType}
                />
            )
        })
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bloodbanks.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleClick = (event: any) => {
        setCurrentPage(Number(event.target.id));
    }
    return (
        <div className="text-wrap">
            <ProgressBar show={showProgress} />
            <Modal copied={copied} modalBody={modalBody} />
            {bloodbanks.length === 0 ? (
                !showProgress ?
                    <div style={{ marginTop: 150, textAlign: "center" }}>
                        No Records Found!
                    </div> : ""
            ) : <div className="row equal-cols" style={{ marginTop: 150, textAlign: "center" }}>
                {
                    // bloodbanks.map((item: BloodbankType) => {
                    //     return (
                    //         <BloodbankItem key={item._id}
                    //             bloodbank={item}
                    //             getType={getType}
                    //         />
                    //     )
                    // })
                    renderBloodbanks()
                }
            </div>
            }
            <div>
                {/* {
                pageNumbers.map(number => {
                    return (
                        <li className="gradient-custom" style={{ display: "inline-block", margin: 3, padding: 5, borderRadius: 3, color: "white" }} key={number} id={"" + number} onClick={handleClick}>{number}</li>
                    );
                })
            } */}
                <Pagination
                    className="pagination-bar text-center"
                    currentPage={currentPage}
                    totalCount={bloodbanks.length}
                    pageSize={itemsPerPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}
