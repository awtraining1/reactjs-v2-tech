import React from 'react';

class PatientCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pName: this.props.name,
            pAge: this.props.age,
            ailments: ["cold", "cough"],
            photoSrc: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3R1ZGlvNzctbWNraW5zZXktNzYyNC1wb20uanBn.jpg",
            identificationMarks: this.props.identificationMarks,
            address: {
                doorNo: 24,
                city: "BLR",
                pinCode: 456821
            }
        };
    }

    // add function to change photo
    changePhoto = (newPhoto) => {
        this.setState(
            {
                ...this.state,
                photoSrc: newPhoto
            }
        );
    }
    // add ailments and remove ailments
    addAilments = (ailmentMark) => {
        this.setState(
            {
                ...this.state,
                ailments: [...this.state.ailments, ailmentMark]
            }
        );
    }

    removeAilments = (ailmentMark) => {
        this.setState(
            {
                ...this.state,
                ailments: this.state.ailments.filter(item => item != ailmentMark)
            }
        );
    }

    render() {
        let patientcardName = this.state.pName;
        let patientcardAge = this.state.pAge;
        let patientcardPhotosrc = this.state.photoSrc;
        let patientcardAilments = this.state.ailments;
        let patientcardImarks = this.state.identificationMarks;
        return (
            <div style={{border: '5px solid green'}} >
                {patientcardName && <h3>{patientcardName}</h3>}    <br />
                {patientcardAge && <h3>{patientcardAge}</h3>}    <br />
                {patientcardPhotosrc && <img src={patientcardPhotosrc} width="150" height="100" />}    <br />
                {patientcardAilments && <h3> Ail Marks: {patientcardAilments.map((item, key) => <li key={key}>{item}</li>)} </h3>}    <br />
                {patientcardImarks && <h4> Idfn Marks: {patientcardImarks.map((item, key) => <li key={key}>{item}</li>)}</h4>}    <br /><br />
                <button onClick={() => this.addIdentificationMark("Leg mark")}> Add Leg mark  </button>
                <button onClick={() => this.addIdentificationMark("Chest mark")}> Add Chest mark  </button>

                <br /> <br />
                <button onClick={() => this.removeIdentificationMark("Leg mark")}> Remove Leg mark  </button>
                <button onClick={() => this.removeIdentificationMark("Chest mark")}> Remove Chest mark  </button>

                <br /><br />
                <button onClick={() => this.addAilments("Burn mark")}> Add Burn mark  </button>
                <button onClick={() => this.addAilments("Scratch mark")}> Add Scratch mark  </button>
                <br /><br />
                <button onClick={() => this.removeAilments("Burn mark")}> Remove Burn mark  </button>
                <button onClick={() => this.removeAilments("Scratch mark")}> Remove Scratch mark  </button>
                <br />
                <button onClick={() => this.changePhoto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN23cMX_2aB6f5vt2NaRCPGTnQ3-aNr9kOIYxbH8PAg&s")}> Change Picture  </button>
            </div>
        )
    }
}

export default PatientCard;