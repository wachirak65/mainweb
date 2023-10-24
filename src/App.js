import {Routes,Route} from "react-router-dom"
import Login from "./component/Login";
import Profile from "./Profile";
import Launchweb from "./Launchweb";
import Register from "./component/Register";
import Upload from "./Upload";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="Login" element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Launchweb" element={<Launchweb/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Homepage" element={<Homepage/>}/>
        <Route path="Upload" element={<Upload/>}/>
      </Routes> 
    </div>
  );
}

export default App;
