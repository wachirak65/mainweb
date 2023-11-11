import {Routes,Route} from "react-router-dom"
import Login from "./pages/Loginpage";
import WelcomePage from "./pages/WelcomePage";
import Launchweb from "./pages/Launchwebpage";
import Register from "./pages/Registerpage";
import Homepage from "./Homepage";
// import Mainpage from "./pages/Mainpage";
import Uploading from "./pages/Uploading";
import ForgotPassword from "./pages/ForgotPassword";
import Selection from "./pages/Selection";
import JoinProjectPage from "./pages/JoinProjectPage";
import Uploadpage from "./Uploadpage";
import Areadata from "./pages/Areadata";
import Dragarea from "./pages/Dragarea";
import DragArea_2 from "./pages/DragArea_2";
import Locate from "./pages/LocatePage"
import ChoosePage from "./pages/ChoosePage";
import PublicProjectPage from "./pages/PublicProjectPage";
import WeatherAnalysisPage from "./pages/WeatherAnalysisPage";
import ShowArea from "./pages/ShowArea";
import ShowAlocate from "./pages/ShowAlocate"
import GraphsoilPage from "./pages/GraphsoilPage";
import Predictionland from "./pages/Predictionland";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Launchweb/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Welcome" element={<WelcomePage/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Uploading" element={<Uploading/>}/>
        <Route path="Selection" element={<Selection/>}/>
        <Route path="Areadata" element={<Areadata/>}/>
        <Route path="Dragarea" element={<Dragarea/>}/>
        <Route path="NewDragarea" element={<DragArea_2/>}/>
        <Route path="Locate" element={<Locate/>}/>
        <Route path="JoinProject" element={<JoinProjectPage/>}/>
        <Route path="ChoosePage" element={<ChoosePage/>}/>
        <Route path="PublicProject" element={<PublicProjectPage/>}/>
        <Route path="WeatherAnalysis" element={<WeatherAnalysisPage/>}/>
        <Route path="ShowArea" element={<ShowArea/>}/>
        <Route path="ShowAlocate" element={<ShowAlocate/>}/>
        <Route path="GraphsoilPage" element={<GraphsoilPage/>}/>
        <Route path="Predictionland" element={<Predictionland/>}/>
      </Routes> 
    </div>
  );
}

export default App;