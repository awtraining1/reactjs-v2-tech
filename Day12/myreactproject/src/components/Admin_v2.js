import { useState } from "react";

const Admin_v2 = (props) => {
    let counter = 0;

    const incrementCount = () => {
        counter++;
    }
    //state variable declarations
    // let [counterV2, changeCounterV2] = useState(0);
    //let [adminTiming, changeAdminTiming] = useState( { startTime: "2pm", endTime: "5pm" } );

    let [state, setState] = useState(
        {
            counterV2: 0,
            adminTiming: { startTime: "2pm", endTime: "5pm" },
            address: {
                doorNo: 24,
                city: "BLR",
                pinCode: 456821
            },
        }
    );    

    const incrementCount_V2 = () => {
        setState(
            { 
                ...state,
                counterV2: state.counterV2 + 1 
            }
            );
    }

    const updateAdminTimings = (sTime, eTime) => {
        setState({ ...state, adminTiming: { startTime: sTime, endTime: eTime } });
    }

    return (

        <div style={{ border: '5px solid purple' }}>

            <b><h2> {props.name} from Admin</h2> </b>
            <br /> counter: {counter}
            <br /> counterV2: {state.counterV2}

            <br /> <br /> <b>Admin Details </b>
            <br />Admin Timings: START TIME: {state.adminTiming.startTime}, END TIME : {state.adminTiming.endTime}
            <br />Admin Address: {state.address.doorNo},{state.address.city}, {state.address.pinCode}
            <br />
            <hr /> Admin for wards:
            {props.wards && props.wards.map((item, key) => <li key={key}>{item}</li>)}

            <button onClick={incrementCount} > Increment Counter </button>

            <button onClick={incrementCount_V2} > Increment Counter v2 </button>
            <button onClick={() => updateAdminTimings("10am", "8pm")} > ChANGE ADMIN TIMINGS </button>
        </div>
    );

    // code below return here will not execute

}

export default Admin_v2;

// '9A add address to the Admin_v2 component's state

