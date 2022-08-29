const defaultState = { counter: 10};

const CounterReducer = (state = defaultState , action) => {
        
    switch (action.type) {
        case "INCREMENT":
           
            return {
               ...state,
               counter:state.counter+1
            }

        case "INCREMENT_BY":

            return {
                ...state,
                counter: state.counter + parseInt(action.payload.howMuch)
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