// Our CONTAINER COMPONENT for Counter
import {connect} from 'react-redux'
import PatientList from './PatientList'

// Map the global state to Pressentation components' props
const mapStateToProps = (store) =>{

    return {
        patients:store.PatientReducer.patients
    }

}

const mapDispatchToProps = (dispatch) =>{

    return {

       
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (PatientList);
