const defaultState = { patients: ["Chitra", "Allen"]};


const PatientReducer = (state = defaultState , action) => {
        
    switch (action.type) {

        case "ADD_NEW_PATIENT":
            return {
                ...state,
                patients: [...state.patients, action.payload.name]
            }
        
         default: return state;


    }
}

export default PatientReducer;