import { useState } from "react";

const ControlledFormDemo = (props) => {

    let [state, setState] = useState({
        firstName: "enter first name",
        lastName: "enter last name",
        age: "enter age",
        phone:0,
        gender: "",
        hobbies: [],
        p1: "some para "
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
        event.preventDefault();
        // do some validation here...
        
        // if the form is good we can submit now
        document.forms["form1"].submit();
    }

    return (
        <div style={{ border: '5px solid blue' }}><h3>Controlled Form Demo</h3>

            <p id="p1"> {state.p1} </p>

            <form name="form1" action="">
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

                <br /><input type="button" onClick={ event => submitForm(event) } value="Submit Form" />
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