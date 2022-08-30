import React from 'react';

class User extends React.Component {

    render() {
        let nameMessage = this.props.name != null ? ` you are    ${this.props.name} ` : ``;

        return (

            <center>

                {this.props.name && <h1>{this.props.name} </h1>}
                {!this.props.name && <h1>hello guest </h1>}

                <img src={this.props.photo} width="100" height="100" />

                {/* <h3> {nameMessage}</h3> */}

                <br />
                {
                    this.props.hobbies &&
                    <div>
                        My hobbies are:
                        {this.props.hobbies.map(item => <li> {item} </li>)}
                    </div>
                }

                <br />
                {
                    this.props.friend &&

                    <div>
                        Here are your friends details
                    Name {this.props.friend.name} ,
                    Age  {this.props.friend.age}
                    </div>
                }

                <br />
                {
                    this.props.myfunc &&
                    <button onClick={this.props.myfunc} >Click Me!</button>
                }

                <br />
                {
                    this.props.myfunc2 &&
                    <button onClick={this.props.myfunc2} > Click Me to invoke f2 ! </button>
                }

                <br />Awards:<br />
                {/* {this.props.children.map(item=> <li> {item} </li>)} */}
                {this.props.children}

            </center>

        );
    }
}
export default User;