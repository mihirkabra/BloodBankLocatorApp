import React, { useState, useContext } from 'react'
import bloodbankContext from '../context/BloodbankContext';

export const Search = () => {

    const context = useContext(bloodbankContext);
    const { bloodbanks, getByState, getByDistrict, getByPincode } = context;

    const [searchFilter, setSearchFilter] = useState<"Pincode" | "State" | "District">("Pincode");
    const [serchQuery, setSerchQuery] = useState<string>("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSerchQuery(e.currentTarget.value);
    };

    const onHandleSearchFilter = (filter: string) => {
        if (filter === "Pincode") {
            setSearchFilter("Pincode")
        } else if (filter === "State") {
            setSearchFilter("State")
        } else if (filter === "District") {
            setSearchFilter("District")
        }
    }
    const onSearch = () => {
        let query = searchFilter;
        if (query === "Pincode") {
            getByPincode(serchQuery)
        } else if (query === "State") {
            getByState(serchQuery)
        } else if (query === "District") {
            getByDistrict(serchQuery)
        }
    }
    return (
        <div className='px-5 pb-3 pt-4 fixed-top searchbox' style={{zIndex:10, background: "rgb(43, 43, 43)", color: "white"}}>
            <div className="input-group">
                <input placeholder={`Enter ${searchFilter} to Search`} onChange={onChange} type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                <button type="button" className="btn btn-outline-light" onClick={onSearch}>Search</button>
                <button type="button" className="btn btn-outline-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" id='pincode' onClick={() => { onHandleSearchFilter("Pincode") }}>Pincode</button></li>
                    <li><button className="dropdown-item" id='district' onClick={() => { onHandleSearchFilter("District") }}>District</button></li>
                    <li><button className="dropdown-item" id='state' onClick={() => { onHandleSearchFilter("State") }}>State</button></li>
                    {/* <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li> */}
                </ul>
            </div>
            <h6 className='m-2' style={{textAlign: "right"}}>Results Fetched: {bloodbanks.length}</h6>
        </div>
    )
}
