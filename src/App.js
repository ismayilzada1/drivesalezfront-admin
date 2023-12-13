import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Sidebar from "./Components/ui/Sidebar";
import Topbar from "./Components/ui/Topbar";
import { useLocation } from 'react-router-dom';
import AddNewVehicleMake from "./Pages/AddNew/AddNewVehicleMake";
import AddNewVehicleModel from "./Pages/AddNew/AddNewVehicleModel";
import AddNewVehicleBodyType from "./Pages/AddNew/AddNewVehicleBodyType";
import AddNewCity from "./Pages/AddNew/AddNewCity";
import AddNewCountry from "./Pages/AddNew/AddNewCountry";
import AddNewVehicleColor from "./Pages/AddNew/AddNewVehicleColor";
import AddNewVehicleCondition from "./Pages/AddNew/AddNewVehicleCondition";
import AddNewVehicleOption from "./Pages/AddNew/AddNewVehicleOption";
import AddNewVehicleDrivetrainType from "./Pages/AddNew/AddNewVehicleDrivetrainType";
import AddNewVehicleFuelType from "./Pages/AddNew/AddNewVehicleFuelType";
import AddNewVehicleGearboxType from "./Pages/AddNew/AddNewVehicleGearboxType";
import AddNewVehicleMarketVersion from "./Pages/AddNew/AddNewVehicleMarketVersion";
import RemoveVehicleMake from "./Pages/Remove/RemoveVehicleMake";
import RemoveVehicleModel from "./Pages/Remove/RemoveVehicleModel";
import RemoveVehicleBodyType from "./Pages/Remove/RemoveVehicleBodyType";
import RemoveCity from "./Pages/Remove/RemoveCity";
import RemoveCountry from "./Pages/Remove/RemoveCountry";
import RemoveVehicleColor from "./Pages/Remove/RemoveVehicleColor";
import RemoveVehicleCondition from "./Pages/Remove/RemoveVehicleCondition";
import RemoveVehicleOption from "./Pages/Remove/RemoveVehicleOption";
import RemoveVehicleFuelType from "./Pages/Remove/RemoveVehicleFuelType";
import RemoveVehicleDrivetrainType from "./Pages/Remove/RemoveVehicleDrivetrainType";
import RemoveVehicleGearboxType from "./Pages/Remove/RemoveVehicleGearboxType";
import RemoveVehicleMarketVersion from "./Pages/Remove/RemoveVehicleMarketVersion";
import UpdateVehicleMake from "./Pages/Update/UpdateVehicleMake";
import UpdateVehicleModel from "./Pages/Update/UpdateVehicleModel";
import UpdateVehicleBodyType from "./Pages/Update/UpdateVehicleBodyType";
import UpdateCity from "./Pages/Update/UpdateCity";
import UpdateCountry from "./Pages/Update/UpdateCountry";
import UpdateVehicleColor from "./Pages/Update/UpdateVehicleColor";
import UpdateVehicleCondition from "./Pages/Update/UpdateVehicleCondition";
import UpdateVehicleOption from "./Pages/Update/UpdateVehicleOption";
import UpdateVehicleDrivetrainType from "./Pages/Update/UpdateVehicleDrivetrainType";
import UpdateVehicleFuelType from "./Pages/Update/UpdateVehicleFuelType";
import UpdateVehicleGearboxType from "./Pages/Update/UpdateVehicleGearboxType";
import UpdateVehicleMarketVersion from "./Pages/Update/UpdateVehicleMarketVersion";
import Temp from "./Pages/Administration/Temp";
import VehicleMake from "./Pages/Administration/VehicleMake";
import VehicleBodyType from "./Pages/Administration/VehicleBodyType";
import VehicleDrivetrainType from "./Pages/Administration/VehicleDrivetrainType";
import VehicleGearboxType from "./Pages/Administration/VehicleGearboxType";

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

                  <Route path='/admin-vehicle-make' element={<VehicleMake/>}/>
                  <Route path='/add-vehicle-model' element={<AddNewVehicleModel/>}/>
                  <Route path='/admin-vehicle-bodytype' element={<VehicleBodyType/>}/>
                  <Route path='/add-city' element={<AddNewCity/>}/>
                  <Route path='/add-country' element={<AddNewCountry/>}/>
                  <Route path='/add-vehicle-color' element={<AddNewVehicleColor/>}/>
                  <Route path='/add-vehicle-condition' element={<AddNewVehicleCondition/>}/>
                  <Route path='/add-vehicle-option' element={<AddNewVehicleOption/>}/>
                  <Route path='/admin-vehicle-drivetrain-type' element={<VehicleDrivetrainType/>}/>
                  <Route path='/add-vehicle-fuel-type' element={<AddNewVehicleFuelType/>}/>
                  <Route path='/admin-vehicle-gearbox-type' element={<VehicleGearboxType/>}/>
                  <Route path='/add-vehicle-market-version' element={<AddNewVehicleMarketVersion/>}/>

                  <Route path='/remove-vehicle-make' element={<RemoveVehicleMake />} />
                  <Route path='/remove-vehicle-model' element={<RemoveVehicleModel />} />
                  <Route path='/remove-vehicle-bodytype' element={<RemoveVehicleBodyType />} />
                  <Route path='/remove-city' element={<RemoveCity />} />
                  <Route path='/remove-country' element={<RemoveCountry />} />
                  <Route path='/remove-vehicle-color' element={<RemoveVehicleColor />} />
                  <Route path='/remove-vehicle-condition' element={<RemoveVehicleCondition />} />
                  <Route path='/remove-vehicle-option' element={<RemoveVehicleOption />} />
                  <Route path='/remove-vehicle-drivetrain-type' element={<RemoveVehicleDrivetrainType />} />
                  <Route path='/remove-vehicle-fuel-type' element={<RemoveVehicleFuelType />} />
                  <Route path='/remove-vehicle-gearbox-type' element={<RemoveVehicleGearboxType />} />
                  <Route path='/remove-vehicle-market-version' element={<RemoveVehicleMarketVersion />} />

                  <Route path='/update-vehicle-make' element={<UpdateVehicleMake />} />
                  <Route path='/update-vehicle-model' element={<UpdateVehicleModel />} />
                  <Route path='/update-vehicle-bodytype' element={<UpdateVehicleBodyType />} />
                  <Route path='/update-city' element={<UpdateCity />} />
                  <Route path='/update-country' element={<UpdateCountry />} />
                  <Route path='/update-vehicle-color' element={<UpdateVehicleColor />} />
                  <Route path='/update-vehicle-condition' element={<UpdateVehicleCondition />} />
                  <Route path='/update-vehicle-option' element={<UpdateVehicleOption />} />
                  <Route path='/update-vehicle-drivetrain-type' element={<UpdateVehicleDrivetrainType />} />
                  <Route path='/update-vehicle-fuel-type' element={<UpdateVehicleFuelType />} />
                  <Route path='/update-vehicle-gearbox-type' element={<UpdateVehicleGearboxType />} />
                  <Route path='/update-vehicle-market-version' element={<UpdateVehicleMarketVersion />} />

              </Routes>
      </div>
  );
}

export default App;
