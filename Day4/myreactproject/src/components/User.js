import React from 'react';

class User extends React.Component {

    render() {
        let nameMessage = this.props.name != null ? ` you are    ${this.props.name} ` : ``;

        return (

            <center>

                {this.props.name && <h1>{this.props.name} </h1>}
                {!this.props.name && <h1>hello guest </h1>}

                <img src={this.props.photo} width="100" height="100" />

                <h3> {nameMessage}</h3>

                <br />
                {
                    this.props.hobbies &&
                    <div>
                        My hobbies are:
                        {this.props.hobbies.map(item => <li> {item} </li>)}
                    </div>
                }

            </center>

        );
    }
}
export default User;