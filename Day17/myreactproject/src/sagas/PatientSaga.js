import {all, put, takeEvery, takeLatest} from 'redux-saga/effects'

// START  Saga to Fetch Patient List

function* actionWatcherForFetchPatients(){
    yield takeLatest ( "FETCH_PATIENT_LIST", fetchPatientList );
}

function* fetchPatientList(){
    const patientsListJSON = yield fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json(),);
    
    yield put( { type:"FETCH_PATIENT_LIST_COMPLETED", payload: { patients : patientsListJSON } } )
  }

// END Saga to Fetch Patient List

// we need to a root saga for all the above.
export default function* rootSaga(){
    yield all( [ actionWatcherForFetchPatients() ]  );
};