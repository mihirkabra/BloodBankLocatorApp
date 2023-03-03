import { createContext } from "react";

export type BloodbankType = {
    _id: string
    attributes: {
        blood_bank_name: string
        state: string
        district: string
        city: string
        address: string
        pincode: string
        contact_no: string
        mobile: string
        email: string
        website: string
        category: string
        service_time: string
    }
    geometry: {
        x: Number
        y: Number
    }
}

export type BloodbankContextType = {
    bloodbanks: BloodbankType[]
    getAllBloodbanks: () => Promise<void>
    getByState: (state: string) => Promise<void>
    getByPincode: (state: string) => Promise<void>
    getByDistrict: (state: string) => Promise<void>
    showProgress: boolean
}

const bloodbankContext = createContext({} as BloodbankContextType);
export default bloodbankContext;