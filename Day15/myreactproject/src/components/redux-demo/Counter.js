// Our Counter PRESENTATION COMPONENT

import { useRef } from "react";

const Counter = (props) => {
    let textRef = useRef();
   
    const incrementCount = () => {
        //Store.dispatch ( { type: "INCREMENT" } );
        props.incrCount();
        
    }

    const decrementCount = () => {       
        //dispatch ( { type: "DECREMENT" } );
        props.decrCount();
    }

    const incrementCountBy = () => {
        props.incrCountBy(textRef.current.value);
        
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            <br /><br />

            Counter: {props.counter}

            <br /><br />
            <button onClick={incrementCount} > Increment Counter </button>
            <br /><br />
            <button onClick={decrementCount} > Decrement Counter </button>
            <br /><br />
            
            <button onClick={incrementCountBy} > Increment Counter By </button> 
            <input type="text" ref={textRef} name="countChangeBy" />
            <br /><br />
        </div>
    )

}

export default Counter;