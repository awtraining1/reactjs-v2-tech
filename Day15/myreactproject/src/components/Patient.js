import React from 'react';
import PropTypes from 'prop-types';


class Patient extends React.Component {

    constructor(props) {
        super(props);

        //this.pName =  this.props.name;

        this.state = {
            pName: this.props.name,
            pAge: this.props.age,
            identificationMarks: this.props.identificationMarks,
            dummyObject: {
                key1: { key11: "value11" },
                key2: "value2",
            }
        };

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        console.log(`Inside changeName function this.pName before is ${this.state.pName} `);
        //this.state.pName = "Savitri"; // NO EFFECT. Do not change state directly. Instead use setState

        this.setState({ pName: "Savitri" });

        console.log(`Inside changeName function this.pName after change is ${this.state.pName} `);
    }

    changeAge = (age) => {
        this.setState({ pAge: age });
    }

    changeAgeTo10000 = (age) => {
        this.setState({ pAge: age });
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

              XRay Details:<br />  {this.props.children}
                <br />
                <button
                    onMouseOver={() => this.changeAge(9999)}
                    onMouseOut={() => this.changeAge(5555)}
                    onClick={this.changeName} > Change the Name </button>

                <button onClick={() => this.changeAge(2220)} > Change the Age </button>
            </>
        );
    }
}

Patient.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    identificationMarks: PropTypes.array
};

Patient.defaultProps = {
    name: "Stranger",
    age: 50,
    identificationMarks: []
};

export default Patient;