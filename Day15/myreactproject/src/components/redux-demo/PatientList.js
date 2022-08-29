// Our Counter PRESENTATION COMPONENT

import { useRef } from "react";

const PatientList = (props) => {
    let textRef = useRef();

    return (
        <div style={{ border: '5px solid purple' }}>
            <br /><br />

            Patient List:
            {props.patients &&  props.patients.map( item => <li>{item}</li>)}
          
        </div>
    )

}

export default PatientList;