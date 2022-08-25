import React from 'react';

class Award extends React.Component {

    render() {

        return (
            <>
                <br/><br/>
                <span style={ { color: "yellow", background: "blue" } }>
                    {this.props.title} 
                </span>

            </>
        );
    }

};

export default Award;