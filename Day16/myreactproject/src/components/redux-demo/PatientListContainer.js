// Our CONTAINER COMPONENT for PatientList
import { connect } from 'react-redux'
import PatientList from './PatientList'

// Map the global state to Pressentation components' props
const mapStateToProps = (store) => {

    return {
        patients: store.PR.patients
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        addPatient: (patientName) => dispatch(
            {
                type: "ADD_NEW_PATIENT",
                payload: { name: patientName }
            }
        ),
        
        deletePatient: (patientname) => dispatch
        (
            {
                type:"DELETE_PATIENT",
                payload:{ name:patientname }
            }
        ),


    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
