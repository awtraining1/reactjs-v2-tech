import React from "react";

const RefsDemo = (props) => {
    let ref1 = React.createRef();
    let ref2 = React.createRef();

    // Using real DOM to access the p and input elements
    // const f1 = () => {
    //     let para1 = document.getElementById("p1");
    //     para1.innerHTML = "some other para";

    //     let text1Value = document.forms["form1"].t1.value;
    //     alert(text1Value);
    // }

    // Using virtual DOM of React FW to access the p and input elements
    // through refs
    const f1 = () => {
        let para1 = ref2.current;
        para1.innerHTML = "some other para";

        let text1Value = ref1.current.value;
        alert(text1Value);

        //ref1.current.value="hello";
    }

    return (
        <div style={{ border: '5px solid yellow' }}><h3>Refs Demo</h3>

            <p ref={ref2} id="p1"> some para </p>

            <form name="form1">
                <input ref={ref1} id="t1" name="t1" type="text" value="type something" />
                <input type="button" onClick={f1} value="call f1()" />
            </form>

        </div>

    )
}

export default RefsDemo;