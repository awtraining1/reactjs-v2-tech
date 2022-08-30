const PatientCount = (props) => {

    return (
        <div style={{ border: '5px solid green' }}>
            <br /><br />

            Patient Count: {props.patients &&  props.patients.length}
            
            <br /><br />

            </div>
    )

}

export default PatientCount;