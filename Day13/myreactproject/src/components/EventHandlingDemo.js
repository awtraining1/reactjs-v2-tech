import { useState } from "react";

let eventCounter = 0;

const EventHandlingDemo = (props) => {

    let [state, setState] = useState(
        {
            eventMessage: "Event messages will be printed here"
        }
    );

    // START Event Handler functions
    const f1 = (str, event) => {
        //event.target
        setState(
            {
                eventMessage: "Inside f1 "
                    + " EVT-TYPE=" + event.type
                    + " EVT-TARGET=" + event.target
                    + " EVT-TARGET-ID=" + event.target.id
                    + (event.target instanceof HTMLInputElement ? " EVT-TARGET-VALUE=" + event.target.value : " NO TARGET VALUE for this type of HTML element")
                    + " " + str + " " + eventCounter++
            }
        );
    }

    const f2 = (str, event) => {
        setState(
            {
                eventMessage: "Inside f2 "
                    + " EVT-TYPE=" + event.type
                    + (event.type ==='mouseover' ? ` EVT-TARGET-x,y co-ordinates= ${event.screenX},${event.screenY} ` : " NO x,y co-rdinates for this type of HTML element")
                    + " EVT-TARGET=" + event.target
                    + " EVT-TARGET-ID=" + event.target.id
                    + (event.target instanceof HTMLInputElement ? " EVT-TARGET-VALUE=" + event.target.value : " NO TARGET VALUE for this type of HTML element")
                    + " " + str + " " + eventCounter++
            }
        );
    }

    const f3 = () => {
        //setState({eventMessage:"Inside f3 " + eventCounter++ });
    }

    const f4 = () => {
        //setState({eventMessage:"Inside f4 " + eventCounter++ });
    }
    // END Event Handler functions

    return (
        <div style={{ border: '5px solid green' }}>

            <p id="p1" style={{ border: '1px solid red' }} onClick={event => f1('first p', event)} onMouseOver={event => f2('1 p', event)} onMouseOut={f3} > {props.title} 1 </p>
            <p id="p2" style={{ border: '1px solid red' }} onClick={event => f1('second p', event)} onMouseOver={event => f2('1 p', event)} onMouseOut={f3} > {props.title} 2 </p>

            //Passing the synthetic event to the handlers
            <p id="p3" style={{ border: '1px solid red' }}
                onClick={event => f1('third p', event)} 
                onMouseOver={event => f2('third p', event)} 
                onMouseOut={f3} > {props.title} 3 </p>

            <p id="p4" style={{ border: '1px solid red' }}
                onClick={event => f1('fourth p', event)} 
                onMouseOver={event => f2('fourth p', event)}
                onMouseOut={f3} > {props.title} 4 </p>

            <h4 id="h1" style={{ border: '1px solid red' }}
                onClick={event => f1('first h', event)} 
                onMouseOver={event => f2('first h4', event)}
                onMouseOut={f3} > {props.title} 5 </h4>

            <a href="javascript:return false;" onClick={event => f1('first anchor ', event)} onMouseOver={event => f2('first anchor', event)} onMouseOut={f3} >Go to Microsoft</a>
            <br />
            <input id="text1" type="text"
                onChange={event => f1('first input', event)}
                onFocus={event => f1('first input', event)}
                onMouseOver={event => f2('first input', event)}
                 />
            
            <hr />
           Messages : <p>{state.eventMessage}  </p>
            <hr />

        </div>
    )

}

export default EventHandlingDemo;

//9B add someother event for the text input. let it get handled by same f1
// what do observe for the event type in the demo