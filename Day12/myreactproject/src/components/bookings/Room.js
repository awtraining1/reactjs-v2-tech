import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Room = (props) => {

    let [searchParams] = useSearchParams();

    let imgSrc = "https://cf.bstatic.com/xdata/images/hotel/270x200/269800030.jpg?k=8567acf226206bb28c9ff263d1c1934b462fecbb0d1bd360b85c2c59016585a4&o=";


    return (

        <div style={{ border: '5px solid green' }}>
            <center>
                <img src={imgSrc} width="200" height="150" />
            </center>

        Booking Room No
            { searchParams.get("roomNo") &&
                <b> {searchParams.get("roomNo")} </b>
            }

            {searchParams.get("days") &&
                <>for <b> {searchParams.get("days")} </b> days..</>
            }


        </div>

    )
}

export default Room;