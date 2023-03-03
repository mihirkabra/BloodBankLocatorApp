import { useState } from 'react';
import BloodbankContext, { BloodbankType } from './BloodbankContext';

type BloodbankStateProps = {
    children: React.ReactNode
}

const BloodbankState = (props: BloodbankStateProps) => {

    const host = "http://localhost:5000";
    const [bloodbanks, setBloodbanks] = useState<BloodbankType[]>([]);
    const [showProgress, setShowProgress] = useState(true);
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    const getAllBloodbanks = async () => {
        setShowProgress(true); 
        setBloodbanks([]);
        const response = await fetch(`${host}/api/bloodbanks/fetchall`, { method: "GET" });
        const json = await response.json();
        setBloodbanks(json);
        console.log(json);
        setShowProgress(false);
    }
    const getByState = async (state: string) => {
        setShowProgress(true); 
        setBloodbanks([]);
        const response = await fetch(`${host}/api/bloodbanks/fetchbystate`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify({ state })
        });
        const json = await response.json();
        setBloodbanks(json);
        console.log(json);
        setShowProgress(false);
    }
    const getByPincode = async (pincode: string) => {
        setShowProgress(true); 
        setBloodbanks([]);
        const response = await fetch(`${host}/api/bloodbanks/fetchbypincode`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify({ pincode })
        });
        const json = await response.json();
        setBloodbanks(json);
        console.log(json);
        setShowProgress(false);
    }
    const getByDistrict = async (district: string) => {
        setShowProgress(true); 
        setBloodbanks([]);
        const response = await fetch(`${host}/api/bloodbanks/fetchbydistrict`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify({ district })
        });
        const json = await response.json();
        setBloodbanks(json);
        console.log(json);
        setShowProgress(false);
    }
    return (
        <BloodbankContext.Provider value={{ bloodbanks, getAllBloodbanks, getByState, getByPincode, getByDistrict, showProgress }}>
            {props.children}
        </BloodbankContext.Provider>
    )
}

export default BloodbankState