import {Routes,Route} from "react-router-dom"
import Login from "./pages/Loginpage";
import WelcomePage from "./pages/WelcomePage";
import Launchweb from "./pages/Launchwebpage";
import Register from "./pages/Registerpage";
import Homepage from "./Homepage";
import Mainpage from "./Mainpage";
import Uploading from "./pages/Uploading";
import ForgotPassword from "./pages/ForgotPassword";
import Selection from "./pages/Selection";
import JoinProjectPage from "./pages/JoinProjectPage";
import Uploadpage from "./Uploadpage";
import Areadata from "./pages/Areadata";
import Dragarea from "./pages/Dragarea";
import Locate from "./pages/LocatePage"
import ChoosePage from "./pages/ChoosePage";
import Predictionland from "./pages/Predictionland";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Launchweb/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Welcome" element={<WelcomePage/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Homepage" element={<Homepage/>}/>
        <Route path="Mainpage" element={<Mainpage/>}/>
        <Route path="Uploading" element={<Uploading/>}/>
        <Route path="Uploadpage" element={<Uploadpage/>}/>
        <Route path="Reset" element={<ForgotPassword/>}/>
        <Route path="JoinProject" element={<JoinProjectPage/>}/>
        <Route path="Selection" element={<Selection/>}/>
        <Route path="Areadata" element={<Areadata/>}/>
        <Route path="Dragarea" element={<Dragarea/>}/>
        <Route path="Dragarea" element={<Dragarea/>}/>
        <Route path="Locate" element={<Locate/>}/>
        <Route path="ChoosePage" element={<ChoosePage/>}/>
        <Route path="Predictionland" element={<Predictionland/>}/>
      </Routes> 
    </div>
  );
}

export default App;
