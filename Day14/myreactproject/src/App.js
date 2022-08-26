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
import Admin from './components/staff/Admin';
import Admin_v2 from './components/staff/Admin_v2';
import EventHandlingDemo from './components/EventHandlingDemo';
import RefsDemo from './components/RefsDemo';
import ControlledFormDemo from './components/ControlledFormDemo'

//Routing imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CompanyNavBar from './components/CompanyNavBar';
import CompanyFooter from './components/CompanyFooter';

import NoSuchPage from './components/NoSuchPage';
import Nurse from './components/staff/Nurse';
import Attendent from './components/staff/Attendent';
import Room from './components/bookings/Room';
import UseEffectDemo from './components/UseEffectDemo';
import ReduxDemo from './components/ReduxDemo';

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
        <>
            <BrowserRouter>
                <CompanyNavBar />

                <Routes>
                <Route path="/redux-demo1" element={<ReduxDemo />} />
                <Route path="/redux-demo2" element={<ReduxDemo />} />

                <Route path="/" element={<HelloWorld />} />
                <Route path="/use-effect-demo" element={<UseEffectDemo />} />
                    <Route path="/form-demo" element={<ControlledFormDemo />} />
                    <Route path="/refs-demo" element={<RefsDemo />} />

                    <Route path="/nurse/:id" element={<Nurse />} />
                    {/*  Path with two path parameters */}
                    <Route path="/attendent/name/:name/ward/:wardNo" element={<Attendent />} />

                    {/*  Path that may send search paramters 
                    Example: /room?roomNo=7
                    Example: /room?roomNo=7&days=5 */}
                    <Route path="/room" element={<Room />} />


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

                    <Route path="/patient/bahubali" element={<Patient name="Bahubali" age="{45}" >
                        <XRay title="Chest" dated="2-2-2223" picture={imgStr5} />
                        <XRay title="Spinal" dated="2-2-2022" picture={imgStr6} />
                    </Patient>} />

                    <Route path="/patient/ramaiah" element={<Patient name="Ramaiah" age={42} >
                        <XRay title="Chest" dated="2-2-2223" picture={imgStr5} />
                        <XRay title="Spinal" dated="2-2-2022" picture={imgStr6} />
                    </Patient>} />

                    <Route path="/patient/noname" element={<Patient identificationMarks={["leg-mark", "chest-mark"]}>
                        <XRay title="Heart" dated="22-2-2203" picture={imgStr5} />
                    </Patient>} />

                    <Route path="/out-patient-demo" element={<OutPatient name="Rudra" > </OutPatient>} />

                    <Route path="/event-handling-demo" element={<EventHandlingDemo title="Event Handling Demo" />} />

                    <Route path="/admin-demo" element={<Admin name="Tushar" wards={["chest", "surgery", "diabetic"]} />} />

                    <Route path="/admin_v2" element={<Admin_v2 name="Tushar V2" wards={["chest", "surgery", "diabetic"]} />} />

                    <Route path="/doctor" element={<Doctor />} />
                    {/* {showDoctor ? <Doctor /> : "Doctor Not available"} 

                    <button onClick={deleteDoctor} >Delete Doctor</button> */}

                    {/* <FunctionalComponentDemo name="Jamie" /> */}

                    {/* <Route path={"*"} element={<p>No Such Page</p>} /> */}
                    <Route path={"*"} element={<NoSuchPage />} />
                    
                    </Routes>
                <CompanyFooter />
            </BrowserRouter>

        </>
    );
}

export default App;
