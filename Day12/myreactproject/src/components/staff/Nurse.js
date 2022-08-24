import {useParams} from 'react-router-dom'

const Nurse =(props)=>
{

    let {id} = useParams();

    return(

        <div style={{ border: '5px solid yellow' }}>

        Hi, I am Nurse No. {id}

        </div>
        
    )
}

export default Nurse;

// 12A Develop an Attendent component that can be dislayed 
//with two dynamic values (name and wardNo ) in the route path