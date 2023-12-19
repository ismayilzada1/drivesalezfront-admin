import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import Sidebar from "./Components/ui/Sidebar";
import Topbar from "./Components/ui/Topbar";
import { useLocation } from 'react-router-dom';
import VehicleMake from "./Pages/Admin/Administration/VehicleMake";
import VehicleBodyType from "./Pages/Admin/Administration/VehicleBodyType";
import VehicleDrivetrainType from "./Pages/Admin/Administration/VehicleDrivetrainType";
import VehicleGearboxType from "./Pages/Admin/Administration/VehicleGearboxType";
import VehicleFuelType from "./Pages/Admin/Administration/VehicleFuelType";
import VehicleMarketVersion from "./Pages/Admin/Administration/VehicleMarketVersion";
import VehicleOption from "./Pages/Admin/Administration/VehicleOption";
import VehicleColor from "./Pages/Admin/Administration/VehicleColor";
import VehicleModel from "./Pages/Admin/Administration/VehicleModel";
import Moderator from "./Pages/Admin/Administration/Moderator";
import AnnouncementAuthority from "./Pages/Moderator/Moderation/AnnouncementAuthority"
import VehicleCondition from "./Pages/Admin/Administration/VehicleCondition";
import City from "./Pages/Admin/Administration/City";
import Country from "./Pages/Admin/Administration/Country";
import HomeModerator from "./Pages/Moderator/HomeModerator";
import EditProfile from "./Pages/Moderator/EditProfile";
import ReviewAnnouncement from "./Pages/Moderator/ReviewAnnouncement";
import Subscription from "./Pages/Admin/Administration/Subscription";
import {useSelector} from "react-redux";

function App() {

    const location = useLocation();

    const isLoggedIn = useSelector((state) => state.auth);

    const excludeSidebarTopbarPaths = [
        "/sign-in","/"
    ];

    const shouldDisplaySidebarTopbar = !excludeSidebarTopbarPaths.includes(location.pathname);

  return (
      <div className="app-container">
          {shouldDisplaySidebarTopbar && <Sidebar />}
          {shouldDisplaySidebarTopbar && <Topbar />}
              <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path='/dashboard-admin' element={isLoggedIn ? <Navigate to="/dashboard-admin" /> : <SignIn />}/>
                  <Route path="/admin" element={<HomeAdmin />} />

                  <Route path='/admin-vehicle-make' element={<VehicleMake/>}/>
                  <Route path='/admin-vehicle-model' element={<VehicleModel/>}/>
                  <Route path='/admin-vehicle-bodytype' element={<VehicleBodyType/>}/>
                  <Route path='/admin-city' element={<City/>}/>
                  <Route path='/admin-country' element={<Country/>}/>
                  <Route path='/admin-vehicle-color' element={<VehicleColor/>}/>
                  <Route path='/admin-vehicle-condition' element={<VehicleCondition/>}/>
                  <Route path='/admin-vehicle-option' element={<VehicleOption/>}/>
                  <Route path='/admin-vehicle-drivetrain-type' element={<VehicleDrivetrainType/>}/>
                  <Route path='/admin-vehicle-fuel-type' element={<VehicleFuelType/>}/>
                  <Route path='/admin-vehicle-gearbox-type' element={<VehicleGearboxType/>}/>
                  <Route path='/admin-vehicle-market-version' element={<VehicleMarketVersion/>}/>
                  <Route path='/admin-moderator' element={<Moderator/>}/>
                  <Route path='/admin-subscription' element={<Subscription/>}/>


                  <Route path="/dashboard-moderator" element={<HomeModerator />} />
                  <Route path="/moderator" element={<HomeModerator />} />
                  <Route path='/moderator-announcement-authority' element={<AnnouncementAuthority/>}/>
                  <Route path='/moderator-edit-profile' element={<EditProfile/>}/>
                  <Route path='/moderator-review-announcement/:id' element={<ReviewAnnouncement/>}/>

              </Routes>
      </div>
  );
}

export default App;
