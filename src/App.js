import {Routes,Route} from "react-router-dom"
import Login from "./component/Login";
import Profile from "./Profile";
import Launchweb from "./Launchweb";
import Register from "./component/Register";
import Upload from "./Upload";
import Homepage from "./Homepage";
import Mainpage from "./Mainpage";
import Uploading from "./Uploading";
import DoneUpload from "./DoneUpload";
import ForgotPassword from "./ForgotPassword";
import Selection from "./Selection";
import Selections from "./Selections";

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
        <Route path="Mainpage" element={<Mainpage/>}/>
        <Route path="Uploading" element={<Uploading/>}/>
        <Route path="DoneUpload" element={<DoneUpload/>}/>
        <Route path="Reset" element={<ForgotPassword/>}/>
        <Route path="Selections" element={<Selections/>}/>
        <Route path="Selection" element={<Selection/>}/>
      </Routes> 
    </div>
  );
}

export default App;
