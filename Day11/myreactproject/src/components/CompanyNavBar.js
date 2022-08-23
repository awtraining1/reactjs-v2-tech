import { NavLink } from "react-router-dom"

const CompanyNavBar = () => {

    return (
        <>

            {/* <Link activeClassName="active" to={"/form-demo"} style={{ margin: "10px" }} > FORM DEMO </Link>
        <Link activeClassName="active" to={"/refs-demo"} style={{ margin: "10px" }}  > REFs   </Link>
        <Link activeClassName="active" to={"/event-handling-demo"} style={{ margin: "10px" }} > EVENT HANDLING  </Link>
        <Link activeClassName="active" to={"/admin_v2"} style={{ margin: "10px" }} > ADMIN V2  </Link>
        
        <Link to={"/logout"} style={{ margin: "10px" }} > LOGOUT  </Link> */}

            <NavLink activeClassName="active" to={"/form-demo"} style={{ margin: "10px" }} > FORM DEMO </NavLink>
            <NavLink activeClassName="active" to={"/refs-demo"} style={{ margin: "10px" }}  > REFs   </NavLink>
            <NavLink activeClassName="active" to={"/event-handling-demo"} style={{ margin: "10px" }} > EVENT HANDLING  </NavLink>
            <NavLink activeClassName="active" to={"/admin_v2"} style={{ margin: "10px" }} > ADMIN V2  </NavLink>

            <NavLink to={"/logout"} style={{ margin: "10px" }} > LOGOUT  </NavLink>
        </>
    )

}

export default CompanyNavBar;