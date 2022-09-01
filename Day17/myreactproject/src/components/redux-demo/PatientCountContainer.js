// Our CONTAINER COMPONENT for PatientCount
import { connect } from 'react-redux'
import PatientCount from './PatientCount'

// Map the global state to Pressentation components' props
const mapStateToProps = (store) => {

    return {
        patients: store.PR.patients
    }

}

export default connect(mapStateToProps, null)(PatientCount);