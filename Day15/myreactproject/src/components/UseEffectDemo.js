import { useEffect, useState } from "react";

const UseEffectDemo = (props) => {
    
    const [state, setState] = useState(
        {
            counter: 0,
            counterMessage: " default counter ",
            abc : { val: 1 }
        }
    );

    const changeCounterMessage = () => {
        setState(
            {
                ...state,
                counterMessage: " counter is now " + state.counter,
            }
        );
    }


    // useEffect( changeCounterMessage); run always
    // useEffect( changeCounterMessage, [] ); run only once

    // run only when state.counter or abc changes
    useEffect(changeCounterMessage, [state.counter]);

    const incrementCount = () => {
        //console.log("Inside incrementCount");        
        setState(
            {
                ...state,
                counter: state.counter + 1,
            }
        );
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            <br /><br />

            Counter: {state.counter}

            <br /><br />
            <button onClick={incrementCount} > Increment Counter </button>
            <br /><br />

            {state.counterMessage}

        </div>
    );

}

export default UseEffectDemo;


