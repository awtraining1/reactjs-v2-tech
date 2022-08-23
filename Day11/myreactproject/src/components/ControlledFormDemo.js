import { useState } from "react";

const ControlledFormDemo = (props) => {

    let [state, setState] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phone: null,
        gender: "",
        hobbies: [],
        p1: "some para ",
        formHasErrors: false,
        errors: []
    });

    //NOTE [event.target.name] is computed value of the key
    const handleChange = (event) => {
        // for multi valued feilds like checkbox
        if (event.target.name === "hobbies") {

            if (event.target.checked) {
                state.hobbies = [...state.hobbies, event.target.value];
            } else {
                state.hobbies = state.hobbies.filter(elem => elem !== event.target.value);
            };

            setState({ ...state, hobbies: state.hobbies });
        }
        else {
            // for single valued form feilds
            setState(
                {
                    ...state,
                    [event.target.name]: event.target.value
                }
            );
        }
    }



    const submitForm = (event) => {
        event.preventDefault(); // this will stop default behaviour of form submission
        //default behaviour is to submit the form to the backend without validation of 
        // form feilds

        // do some validation here...
        // initially assume the form has no errors
        setState({ ...state, formHasErrors: false, errors: [] });

        let local_FormHasErrors = false;
        let local_errors= [];
        // we create above local variables so that
        // all errors are updated in this variable
        // and we avoid setting state multiple times.
        // Finally we call the setState only once.

        if (state.firstName === "" || state.lastName === "") {
            local_FormHasErrors = true
            local_errors = [...local_errors, "First Name and/or Last Name cannot be empty"]
        }

        //11A Add a validation for age (should not less than 24)
        if (state.age === "" || state.age <= 24) {
            local_FormHasErrors = true
            local_errors = [...local_errors,, "Age cannot be less than 24"]
        };

        // Finally 
        setState
            (                                
                {
                    ...state,
                    formHasErrors: local_FormHasErrors,
                    errors: local_errors
                }
            );


           alert("state.formHasErrors=" + state.formHasErrors );
        // if the form is good(without any validation errors) then submit
        if ( !state.formHasErrors)
            document.forms["form1"].submit();
    }

    return (
        <div style={{ border: '5px solid blue' }}><h3>Controlled Form Demo</h3>

            <p id="p1"> {state.p1} </p>
            <div style={{ color: 'red' }}>
                {state.formHasErrors && state.errors.map((item, key) => <li key={key}>{item} </li>)}
            </div>

            <form name="form1" action="/processForm.php" method="POST">
                <br /> <br />First Name :
                 <input name="firstName" type="text"
                    value={state.firstName}
                    onChange={event => handleChange(event)} />

                <br /> <br /> Last Name :
                <input name="lastName" type="text"
                    value={state.lastName}
                    onChange={event => handleChange(event)} />

                <br /> <br /> Age :
                <input name="age" type="text"
                    value={state.age}
                    onChange={event => handleChange(event)} />

                <br /> <br /> Phone : <input type="tel" id="phone" name="phone"
                    pattern="[6-9]{1}[0-9]{9}" value={state.phone} onChange={event => handleChange(event)}
                    required></input>

                <br /> <br /> Gender :
                Male <input type="radio" name="gender"
                    value="male"
                    onChange={event => handleChange(event)} />

                Female <input type="radio" name="gender"
                    value="female"
                    onChange={event => handleChange(event)} />

                <br /> <br /> Hobbies :
                <br />Swimming <input type="checkbox" name="hobbies"
                    value="swimming"
                    onChange={event => handleChange(event)} />
                <br />Cooking <input type="checkbox" name="hobbies"
                    value="cooking"
                    onChange={event => handleChange(event)} />
                <br />Cricket <input type="checkbox" name="hobbies"
                    value="cricket"
                    onChange={event => handleChange(event)} />
                <br /> Tennis <input type="checkbox" name="hobbies"
                    value="tennis"
                    onChange={event => handleChange(event)} />

                <br /><input type="button" onClick={event => submitForm(event)} value="Submit Form" />
            </form>

            <br />
            <br />STATE: firstName: {state.firstName}
            <br />STATE: lastName: {state.lastName}
            <br />STATE: Gender: {state.gender}
            <br />STATE: Hobbies: {state.hobbies}

        </div>

    )

    // 10A Add one more text feild lastName 
    // 10B Add one radio block for gender  
    // 10C Add a drop down feild for selecting Qualification
    // 10D Add a drop down feild for multi selecting Awards

}

export default ControlledFormDemo;