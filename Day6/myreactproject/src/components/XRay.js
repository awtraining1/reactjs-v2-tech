import React from 'react';
class XRay extends React.Component {
    render() {
        return (
            <>
                
                {this.props.title}
                {this.props.date}
                <img src={this.props.picture} width="100" height="150"/>
            </>
        );
    }
}
export default XRay;
