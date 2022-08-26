const defaultState = { counter: 10};

const CounterReducer = (state = defaultState , action) => {
    console.log("Inside CounterReducer");
    
    switch (action.type) {
        case "INCREMENT":

            return {
               ...state,
               counter:state.counter+1
            }

        case "DECREMENT":
            return {
                ...state,
                counter:state.counter-1
             };


        default: return state
    }

}

export default CounterReducer;