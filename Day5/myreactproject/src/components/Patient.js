import React from 'react';

class Patient extends React.Component {

    constructor(props){
        super(props);
        
        //this.pName =  this.props.name;

        this.state = { 
            pName:this.props.name,
        };

        this.changeName = this.changeName.bind(this);
        
    }

    changeName(){
        console.log(`Inside changeName function this.pName before is ${this.state.pName} `);
        //this.state.pName = "Savitri"; // NO EFFECT. Do not change state directly. Instead use setState

        this.setState( { pName:"Savitri"}  );

        console.log(`Inside changeName function this.pName after change is ${this.state.pName} `);
    }

    render() {


        return (
            <>
              {this.state.pName && <h1> {this.state.pName} </h1>}
                <br/>

              XRay Details:<br/>  {this.props.children}
              <br/>
              <button onClick={this.changeName} > Change the Name </button>
            </>
        );
    }
}

export default Patient;