import React from 'react';
import PropTypes from 'prop-types';

import XRay from "./XRay"

// let imgStr5 = "https://knect365.imgix.net/article/images/cacheable/bd64cf28-498e-44df-be77-3e74cd079783-featured-49f3a3c3ecd5bdb5a10037c1b80de2ff.jpg?auto=compress&fit=max.jpg"
// let imgStr6 = "https://media.istockphoto.com/photos/xray-image-of-human-normal-spine-rips-pelvis-both-hip-joint-and-blank-picture-id945204366?k=20&m=945204366&s=612x612&w=0&h=BjcWhKA64KJ42FUD065uh5z1I3PlglvrfXPS0Kb1LLc="


class OutPatient extends React.Component {

    constructor(props) {
        super(props);
        this.imgStr5 = "https://knect365.imgix.net/article/images/cacheable/bd64cf28-498e-44df-be77-3e74cd079783-featured-49f3a3c3ecd5bdb5a10037c1b80de2ff.jpg?auto=compress&fit=max.jpg"
        this.imgStr6 = "https://media.istockphoto.com/photos/xray-image-of-human-normal-spine-rips-pelvis-both-hip-joint-and-blank-picture-id945204366?k=20&m=945204366&s=612x612&w=0&h=BjcWhKA64KJ42FUD065uh5z1I3PlglvrfXPS0Kb1LLc="

        this.state = {
            pName: this.props.name,
            pAge: this.props.age,
            identificationMarks: this.props.identificationMarks
        };
    }

    addIdentificationMark = (idMark) => {
        //this.state.identificationMarks.push(idMark);
        // console.log(this.state.identificationMarks);
        // this.setState ( { identificationMarks : this.state.identificationMarks } );
        //this.setState ( { ...this.state, identificationMarks : this.state.identificationMarks });
        
        this.setState(
            {
                ...this.state,
                identificationMarks: [...this.state.identificationMarks,idMark] 
            }
        );
    }

    removeIdentificationMark = (idMark) => {

        this.setState(
            {
                ...this.state,
                identificationMarks: this.state.identificationMarks.filter(item => item!=idMark)
            }
        );
    }

    render() {
        let patientName = this.state.pName;
        let patientAge = this.state.pAge;
        let patientImarks = this.state.identificationMarks;

        return (
            <>

                {patientName && <h3> {patientName} </h3>},
                { patientAge && <h3> {patientAge} </h3>}
                {patientImarks && <h4> Idfn Marks: {patientImarks.map(item => <li> {item} </li>)} </h4>}
                <br />

                {/* <XRay title="Chest" dated="2-2-2223" picture={this.imgStr5} />
                <XRay title="Spinal" dated="2-2-2022" picture={this.imgStr6} /> */}

                {/* <PatientCard name={this.props.name} /> */}

                <button onClick={() => this.addIdentificationMark("Leg mark")} > Add Leg mark  </button>
                <button onClick={() => this.addIdentificationMark("Chest mark")} > Add Chest mark  </button>
                <button onClick={() => this.addIdentificationMark("Ear mark")} > Add Ear mark  </button>
                <button onClick={() => this.addIdentificationMark("Hand mark")} > Add Hand mark  </button>
                <br /><br />
                <button onClick={() => this.removeIdentificationMark("Leg mark")} > Remove Leg mark  </button>
                <button onClick={() => this.removeIdentificationMark("Chest mark")} > Remove Chest mark  </button>
                <button onClick={() => this.removeIdentificationMark("Ear mark")} > Remove Ear mark  </button>
                <button onClick={() => this.removeIdentificationMark("Hand mark")} > Remove Hand mark  </button>
            
            
            </>
        )

    }
}

OutPatient.defaultProps = {
    name: "Stranger",
    age: 50,
    identificationMarks: []
};

export default OutPatient;