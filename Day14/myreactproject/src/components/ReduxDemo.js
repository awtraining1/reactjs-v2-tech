import Store from '../store/Store'
import { useEffect } from 'react';

const ReduxDemo = (props) => {

   
    const incrementCount = () => {
        console.log("Inside increment");
        Store.dispatch ( { type: "INCREMENT" } );
        console.log("Inside increment 2 " + Store.getState().counter);
        
    }

    const decrementCount = () => {
        console.log("Inside decrementCount");
        Store.dispatch ( { type: "DECREMENT" } );
        console.log("Inside decrementCount 2 " + Store.getState().counter );
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            <br /><br />

            Counter: {Store.getState().counter}

            <br /><br />
            <button onClick={incrementCount} > Increment Counter </button>
            <br /><br />
            <button onClick={decrementCount} > Decrement Counter </button>
            <br /><br />

        </div>
    )

}

export default ReduxDemo;