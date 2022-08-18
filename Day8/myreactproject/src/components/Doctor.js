import React from 'react';


class Doctor extends React.Component {

    constructor(props) {
        super(props);

        this.pName = this.props.name;
        console.log("Inside Doctor constructor");
    }

    componentWillMount(state, props) {

        console.log("Inside Doctor componentWillMount");

        this.state = {
            pName: this.props.name,
            pAge: this.props.age,
            date: null,
            specilization: ["surgery", "heart"],
            photoSrc: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3R1ZGlvNzctbWNraW5zZXktNzYyNC1wb20uanBn.jpg",
            doctorId: this.props.doctorId,
            address: {
                doorNo: 24,
                city: "BLR",
                pinCode: 456821
            },
            patients: [],
            patientAttendingMessage: "Attending Patient no 0",
            patientCounter: 0
        };
    }

    componentDidMount() {
        console.log("Inside Doctor componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            30000
        );

        //fetching some external website data
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(
                response => this.setState({ ...this.state, patients: response })
            )
    }

    tick() {
        this.setState({
            ...this.state,
            patientCounter: this.state.patientCounter + 1,
            patientAttendingMessage: 
            "Attending Patient " + this.state.patients[this.state.patientCounter].name
        });

        //OR

        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(
        //     response => this.setState({ ...this.state, patients: response })
        // )
    }

    render() {
        console.log("Inside Doctor render");
        // BEST PRACTICE :DO NOT call setState inside render
        //let pAge = this.state.pName;

        return (
            <>
                <div style={{ border: '5px solid orange' }} >
                    I am Doctor at this date {this.state.date && <span> {this.state.date} </span>}

                    <br /> Patients list:
                {this.state.patients && this.state.patients.map((item, key) => <li key={key} >{item.name}, {item.phone} </li>)}
                    <br />

                    <br />
                    {this.state.patientAttendingMessage}

                </div>
            </>
        )
    }

    ///Updation methods
    shouldComponentUpdate() {
        console.log("Inside Doctor shouldComponentUpdate");
        //.....

        return true;
    }

    componentWillUpdate() {
        console.log("Inside Doctor componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("Inside Doctor componentDidUpdate");
    }

    componentWillReceiveProps(props) {
        console.log("Inside Doctor componentWillReceiveProps");
    }

    // use this method to clean up resource
    componentWillUnmount() {
        //clearInterval(this.timerID);

        //let ok = confirm("Are you sure you want to delete this doctor!");

        // if (!ok) {
        //     alert("Ok buddy, this doctor will be deleted");
        // }

        console.log("Inside Doctor componentWillUnmount");
    }

    // 8A initiate a timer in componentDidMount that will show/update
    // a message "Attending patient no <somenumber>"
    // In componentWillUnmount, clear this timer.

    // 8B initiate a timer in componentDidMount that will show/update
    // a message "Attending patient  <some patient name from patients array>"
    // In componentWillUnmount, clear this timer.



}


export default Doctor;