// Our CONTAINER COMPONENT for Counter
import {connect} from 'react-redux'
import Counter from './Counter'

// Map the global state to Pressentation components' props
const mapStateToProps = (store) =>{

    return {
        counter: store.CounterReducer.counter
    }

}

// Map the dispatch functions to Pressentation components' props
// FORMAT:
// nameOfFunction: (args) =>  dispatch ( action_object )
// USAGE in Pres Comp: 
// props.nameOfFunction(args)
const mapDispatchToProps = (dispatch) =>{

    return {

        incrCount: () => dispatch ( { type: "INCREMENT" } ),

        decrCount: () => dispatch ( { type: "DECREMENT" } ),

        incrCountBy: (val) => dispatch ( 
            { 
                type: "INCREMENT_BY",
                payload: { howMuch : val } 
            } 
            ),
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (Counter);
