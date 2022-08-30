import React from 'react';

class HelloWorld extends React.Component {


    render() {
        // Inside render we can write pure JS code like this
        let ageMessage = this.props.age != null ? `Your age is ${this.props.age} ` : '';

        // finally return the JSX
        return (
            <>
                <center>
                    {/* Conditional rendering using && */}
                    {this.props.name && <h1> Hello {this.props.name} </h1>}
                    {!this.props.name && <h1> Hello World </h1>}
                </center>

                <h3> {ageMessage} </h3>

                <h3> {this.props.age >= 18 && <p> You are eligible to vote </p>} </h3>

                <h3> {
                    this.props.age < 18 &&
                    <p> You are not eligible to vote.
                    Wait for {18 - this.props.age} years
                    </p>
                }
                </h3>
            </>

        );

    }

}

export default HelloWorld;