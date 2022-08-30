import {all, put, takeEvery, takeLatest} from 'redux-saga/effects'



function* fetchPatientList(){
    const patientsListJSON = yield fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json(),);
    
            yield put( { type:"FETCH_PATIENT_LIST_COMPLETED", payload: patientsListJSON } )
    
}

function* actionWatcher(){
    yield takeEvery ( "FETCH_PATIENT_LIST", fetchPatientList );
}