const defaultState = { patients: ["Chitra", "Allen"] };


const PatientReducer = (state = defaultState, action) => {
    let newState=null;

    switch (action.type) {

        case "ADD_NEW_PATIENT":
            // return {
            //     ...state,
            //     patients: [...state.patients, action.payload.name]
            // }

            newState = { ...state };
            newState.patients = [...state.patients, action.payload.name];

            return newState;

        case "DELETE_PATIENT":
            newState = { ...state };
            newState.patients = state.patients.filter(item => item !== action.payload.name)
            return newState;

       default: return state;


    }
}

export default PatientReducer;