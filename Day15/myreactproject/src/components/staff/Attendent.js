import React from 'react';
import { useParams } from 'react-router-dom';

const Attendent = (props) =>
{

    let {name,wardNo} = useParams();

    return(

        <div style={{border: '5px solid yellow'}}>

        Hello, I am attendent {name} from Ward No {wardNo}
        
        </div>
        
    )
}

export default Attendent;