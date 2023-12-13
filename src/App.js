import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Sidebar from "./Components/ui/Sidebar";
import Topbar from "./Components/ui/Topbar";
import { useLocation } from 'react-router-dom';
import VehicleMake from "./Pages/Administration/VehicleMake";
import VehicleBodyType from "./Pages/Administration/VehicleBodyType";
import VehicleDrivetrainType from "./Pages/Administration/VehicleDrivetrainType";
import VehicleGearboxType from "./Pages/Administration/VehicleGearboxType";
import VehicleFuelType from "./Pages/Administration/VehicleFuelType";
import VehicleMarketVersion from "./Pages/Administration/VehicleMarketVersion";
import VehicleOption from "./Pages/Administration/VehicleOption";
import VehicleColor from "./Pages/Administration/VehicleColor";
import VehicleModel from "./Pages/Administration/VehicleModel";
import Moderator from "./Pages/Administration/Moderator";

function App() {

    const location = useLocation();


    const excludeSidebarTopbarPaths = [
        "/sign-in",
    ];

    const shouldDisplaySidebarTopbar = !excludeSidebarTopbarPaths.includes(location.pathname);

  return (
      <div className="app-container">
          {shouldDisplaySidebarTopbar && <Sidebar />}
          {shouldDisplaySidebarTopbar && <Topbar />}
              <Routes>
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path='/dashboard' element={<Home/>}/>
                  <Route path="/" element={<Home />} />

                  <Route path='/admin-vehicle-make' element={<VehicleMake/>}/>
                  <Route path='/admin-vehicle-model' element={<VehicleModel/>}/>
                  <Route path='/admin-vehicle-bodytype' element={<VehicleBodyType/>}/>
                  {/*<Route path='/add-city' element={<AddNewCity/>}/>*/}
                  {/*<Route path='/add-country' element={<AddNewCountry/>}/>*/}
                  <Route path='/admin-vehicle-color' element={<VehicleColor/>}/>
                  {/*<Route path='/add-vehicle-condition' element={<AddNewVehicleCondition/>}/>*/}
                  <Route path='/admin-vehicle-option' element={<VehicleOption/>}/>
                  <Route path='/admin-vehicle-drivetrain-type' element={<VehicleDrivetrainType/>}/>
                  <Route path='/admin-vehicle-fuel-type' element={<VehicleFuelType/>}/>
                  <Route path='/admin-vehicle-gearbox-type' element={<VehicleGearboxType/>}/>
                  <Route path='/admin-vehicle-market-version' element={<VehicleMarketVersion/>}/>
                  <Route path='/admin-moderator' element={<Moderator/>}/>



              </Routes>
      </div>
  );
}

export default App;
