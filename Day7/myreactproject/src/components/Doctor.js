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
            patients: []
        };
    }

    componentDidMount() {
        console.log("Inside Doctor componentDidMount");
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     10000
        // );

        //fetching some external website data
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(
                response => this.setState({ ...this.state, patients: response })
            )
    }

    tick() {
        // this.setState({
        //     ...this.state,
        //     date: new Date()
        // });

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
                </div>
            </>
        )
    }

    ///Updation methods
    shouldComponentUpdate(){
        console.log("Inside Doctor shouldComponentUpdate");
        return true;        
    }

    componentWillUpdate(){
        console.log("Inside Doctor componentWillUpdate");
    }

}


export default Doctor;