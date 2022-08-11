import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import User from './components/User';

let ageNitish = 3407;
let imgStr = "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg";
let imgStr1 = "https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
let hobbiesArr = ["Swimming", "Cooking", "Travelling"];

function App() {
  return (
   
        <div>
        {/* <HelloWorld />
        <HelloWorld name="Jojo" age={10}/>
        <HelloWorld name="Nitish" age={ageNitish} />
        <HelloWorld name="Sara" age={23} /> */}

        <User />
        <User name="Ramesh" photo={imgStr} />
        {/* props can accept arrays too */}
        <User name="Prashant" photo={imgStr1} hobbies={hobbiesArr} />

        </div>
  );
}

export default App;
