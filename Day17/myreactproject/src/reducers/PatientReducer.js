const defaultState = { patients: ["Chitra", "Allen"] };

//const defaultState = { patients: [ {name:"Chitra", email:"Chitra@v.com"}, { name:"Allen", email:"allen@v.com"}] };


const PatientReducer = (state = defaultState, action) => {
    let newState = null;

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

        case "FETCH_PATIENT_LIST_COMPLETED":
            console.log ("3 Inside patient reducer FETCH_PATIENT_LIST_COMPLETED case");

            newState = { ...state };
            // action.payload.patients is the data we got from https://jsonplaceholder.typicode.com/users
            // through the PatientSaga
            newState.patients = action.payload.patients.map( item => item.name);
            return newState;

        default: return state;


    }
}

export default PatientReducer;