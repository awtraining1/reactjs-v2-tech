// Our Counter PRESENTATION COMPONENT

import { useRef } from "react";

const PatientList = (props) => {
    let textRef = useRef();
    let textRef1 = useRef();

    const addNewPatient = () => {
        props.addPatient(textRef.current.value);
    }

    const deletePatient = () => {
        props.deletePatient(textRef1.current.value)
    }

    const listPatients = () => {       
        props.listPatients();
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            <br /><br />
            <button onClick={listPatients} > List Patients (External Site) </button>
            
            <br />Patient List:
            <ol>
                {props.patients && props.patients.map((item, key) => <li key={key}> {item} </li>)}
            </ol>

            <br /><br />
            <input type="text" ref={textRef} name="patientName" /> &nbsp;
            <button onClick={addNewPatient} > ADD NEW PATIENT </button>
            <br /><br />
            <input type="text" ref={textRef1} name="Delete" /> &nbsp;
            <button onClick={deletePatient} > Delete Patient </button>
            <br /><br />

        </div>
    )

}

export default PatientList;