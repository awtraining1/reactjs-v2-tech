import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from "react";

const Room = (props) => {

    let [state, setState] = useState({
        noOfdays:0
    });

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [event.target.name]: event.target.value
            }
        );
    }

    let [searchParams] = useSearchParams();

    let imgSrc = "https://cf.bstatic.com/xdata/images/hotel/270x200/269800030.jpg?k=8567acf226206bb28c9ff263d1c1934b462fecbb0d1bd360b85c2c59016585a4&o=";


    return (

        <div style={{ border: '5px solid green' }}>
            <center>
                <img src={imgSrc} width="200" height="120" />
            </center>

        Booking Room NUMBER
            { searchParams.get("roomNo") &&
                <b> {searchParams.get("roomNo")} </b>
            }

            {searchParams.get("days") &&
                <>for <b> {searchParams.get("days")} </b> days..</>
            }

            <input type="text" name="noOfdays" 
            value={state.noOfdays}
            onChange={event => handleChange(event)} />

        </div>

    )
}

export default Room;