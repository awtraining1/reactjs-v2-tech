import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import User from './components/User';
import Award from './components/Award';

import Patient from './components/Patient'
import XRay from './components/XRay'

import OutPatient from './components/OutPatient'
import Doctor from './components/Doctor';
import FunctionalComponentDemo from './components/FunctionalComponentDemo'

import { useState } from 'react';
import Admin from './components/Admin';
import Admin_v2 from './components/Admin_v2';
import EventHandlingDemo from './components/EventHandlingDemo';
import RefsDemo from './components/RefsDemo';
import ControlledFormDemo from './components/ControlledFormDemo'

let ageNitish
    = 3407;
let imgStr = "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg";
let imgStr1 = "https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
let hobbiesArr = ["Swimming", "Cooking", "Travelling"];
let friend1 = {
    name: "Bala",
    age: 54
};

let imgStr5 = "https://knect365.imgix.net/article/images/cacheable/bd64cf28-498e-44df-be77-3e74cd079783-featured-49f3a3c3ecd5bdb5a10037c1b80de2ff.jpg?auto=compress&fit=max.jpg"
let imgStr6 = "https://media.istockphoto.com/photos/xray-image-of-human-normal-spine-rips-pelvis-both-hip-joint-and-blank-picture-id945204366?k=20&m=945204366&s=612x612&w=0&h=BjcWhKA64KJ42FUD065uh5z1I3PlglvrfXPS0Kb1LLc="

function f1() {
    alert(" Inside f1");
}

function f2() {
    alert(" Inside f2");
}

// this.state={
//     showDoctor:true
// }



function App() {
    const [showDoctor, toggleShowDoctor] = useState(true);

    const deleteDoctor = () => {
        toggleShowDoctor(false);
    };

    return (

        <div>
            <ControlledFormDemo />
            <RefsDemo />

            {/* <HelloWorld />
        <HelloWorld name="Jojo" age={10}/>
        <HelloWorld name="Nitish" age={ageNitish} />
        <HelloWorld name="Sara" age={23} /> */}

            {/*
             <User />
            <User name="Ramesh" photo={imgStr} />
            {// props can accept arrays too and also objects }
            <User name="Prashant" photo={imgStr1} hobbies={hobbiesArr} friend={friend1} /> 
            */}

            {/* <User name="Sibi" photo={imgStr}
                hobbies={["Travelling", "Dancing"]}
                friend={{ name: "Baba", age: 45 }}
                myfunc={f1}
                myfunc2={f2}
            >

                <Award title="Bharat Bhusan" />
                <Award title="Bharat Ratna" />
                <Award title="Arjuna" />

            </User> */}

            {/* <Patient name="Bahubali" age="{45}" >
                <XRay title="Chest" dated="2-2-2223" picture={imgStr5} />
                <XRay title="Spinal" dated="2-2-2022" picture={imgStr6} />
            </Patient>

            <Patient name="Ramaiah" age={42} >
                <XRay title="Chest" dated="2-2-2223" picture={imgStr5} />
                <XRay title="Spinal" dated="2-2-2022" picture={imgStr6} />
            </Patient>

            <Patient  identificationMarks={["leg-mark", "chest-mark"]}>
                <XRay title="Heart" dated="22-2-2203" picture={imgStr5} />
            </Patient> */}

            {/* <OutPatient name="Rudra" >                
            </OutPatient> */}
            <EventHandlingDemo title="Event Handling Demo" />

            {/* <Admin name="Tushar" wards={["chest", "surgery", "diabetic"]} /> */}

            <Admin_v2 name="Tushar V2" wards={["chest", "surgery", "diabetic"]} />

            {showDoctor ? <Doctor /> : "Doctor Not available"}

            <button onClick={deleteDoctor} >Delete Doctor</button>

            {/* <FunctionalComponentDemo name="Jamie" /> */}



        </div>
    );
}

export default App;
