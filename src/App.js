import {Routes,Route} from "react-router-dom"
import Login from "./pages/Loginpage";
import Profile from "./pages/WelcomePage";
import Launchweb from "./pages/Launchwebpage";
import Register from "./pages/Registerpage";
import Homepage from "./Homepage";
import Mainpage from "./Mainpage";
import Uploading from "./Uploading";
import ForgotPassword from "./ForgotPassword";
import Selection from "./Selection";
import Selections from "./Selections";
import Uploadpage from "./Uploadpage";
import Areadata from "./Areadata";
import Dragarea from "./Dragarea";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Launchweb" element={<Launchweb/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Homepage" element={<Homepage/>}/>
        <Route path="Mainpage" element={<Mainpage/>}/>
        <Route path="Uploading" element={<Uploading/>}/>
        <Route path="Uploadpage" element={<Uploadpage/>}/>
        <Route path="Reset" element={<ForgotPassword/>}/>
        <Route path="Selections" element={<Selections/>}/>
        <Route path="Selection" element={<Selection/>}/>
        <Route path="Areadata" element={<Areadata/>}/>
        <Route path="Dragarea" element={<Dragarea/>}/>
      </Routes> 
    </div>
  );
}

export default App;
