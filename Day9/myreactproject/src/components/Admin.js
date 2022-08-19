import { useState } from "react";

const Admin = (props) => {
    let counter = 0;

    //state variable declarations
    let [counterV2, changeCounterV2] = useState(0);

    let [adminTiming, changeAdminTiming] =
        useState( { startTime: "2pm", endTime: "5pm" } );

    const incrementCount = () => {
        counter++;
        console.log("counter = " + counter);
    }

    // increment the state variable "counterV2"
    // by using its associated function "changeCounterV2"
    const incrementCount_V2 = () => {
        console.log("Before increment counterV2 = " + counterV2);
       
        changeCounterV2(counterV2 + 1);

        console.log("After increment counterV2 = " + counterV2);
    }

    const updateAdminTimings =(sTime, eTime ) => {
        changeAdminTiming( {startTime: sTime, endTime: eTime} );
    }

    return (

        <div style={{ border: '5px solid Blue' }}>

            <b>{props.name} from Admin </b>
            <br /> counter: {counter}
            <br /> counterV2: {counterV2}

            <br /> <br /> <b>Admin Details </b>
            <br />Admin Timings: START TIME: {adminTiming.startTime}, END TIME : {adminTiming.endTime}

            <br />
            <hr /> Admin for wards:
            {props.wards && props.wards.map((item, key) => <li key={key}>{item}</li>)}

            <button onClick={incrementCount} > Increment Counter </button>

            <button onClick={incrementCount_V2} > Increment Counter v2 </button>
            <button onClick={ () => updateAdminTimings ("10am","8pm")} > ChANGE ADMIN TIMINGS </button>
        </div>
    );

    // code below return here will not execute

}

export default Admin;

//8D add another state  variable adminTiming of object type
// like {startTime:2pm , endTime: 5pm } to Admin
// 8E Implement and use a function that will change the Admin timings