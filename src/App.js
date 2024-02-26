import './App.css';
import routes from './routes'
import {useRoutes} from "react-router-dom";


function App() {

    // const location = useLocation();
    //
    // const isLoggedIn = useSelector((state) => state.auth);
    //
    // const excludeSidebarTopbarPaths = [
    //     "/sign-in","/"
    // ];
    //
    // const shouldDisplaySidebarTopbar = !excludeSidebarTopbarPaths.includes(location.pathname);

  return (
      <div className={`app-container`}>
          {useRoutes(routes)}
      </div>
      // {/*<div className="app-container">*/}
      // {/*    {shouldDisplaySidebarTopbar && <Sidebar />}*/}
      // {/*    {shouldDisplaySidebarTopbar && <Topbar />}*/}
      // {/*        <Routes>*/}
      // {/*            <Route path="/" element={<SignIn />} />*/}
      // {/*            <Route path="/sign-in" element={<SignIn />} />*/}
      // {/*            <Route path='/dashboard-admin' element={isLoggedIn ? <Navigate to="/dashboard-admin" /> : <SignIn />}/>*/}
      // {/*            <Route path="/admin" element={<HomeAdmin />} />*/}
      //
      // {/*            <Route path='/admin-vehicle-make' element={<VehicleMake/>}/>*/}
      // {/*            <Route path='/admin-vehicle-model' element={<VehicleModel/>}/>*/}
      // {/*            <Route path='/admin-vehicle-bodytype' element={<VehicleBodyType/>}/>*/}
      // {/*            <Route path='/admin-city' element={<User/>}/>*/}
      // {/*            <Route path='/admin-country' element={<Country/>}/>*/}
      // {/*            <Route path='/admin-vehicle-color' element={<VehicleColor/>}/>*/}
      // {/*            <Route path='/admin-vehicle-condition' element={<VehicleCondition/>}/>*/}
      // {/*            <Route path='/admin-vehicle-option' element={<VehicleOption/>}/>*/}
      // {/*            <Route path='/admin-vehicle-drivetrain-type' element={<VehicleDrivetrainType/>}/>*/}
      // {/*            <Route path='/admin-vehicle-fuel-type' element={<VehicleFuelType/>}/>*/}
      // {/*            <Route path='/admin-vehicle-gearbox-type' element={<VehicleGearboxType/>}/>*/}
      // {/*            <Route path='/admin-vehicle-market-version' element={<VehicleMarketVersion/>}/>*/}
      // {/*            <Route path='/admin-moderator' element={<Moderator/>}/>*/}
      // {/*            <Route path='/admin-subscription' element={<Subscription/>}/>*/}
      // {/*            <Route path="/dashboard-moderator" element={<HomeModerator />} />*/}
      // {/*            <Route path="/moderator" element={<HomeModerator />} />*/}
      // {/*            <Route path='/moderator-announcement-authority' element={<AnnouncementAuthority/>}/>*/}
      // {/*            <Route path='/moderator-edit-profile' element={<EditProfile/>}/>*/}
      // {/*            <Route path='/moderator-review-announcement/:id' element={<ReviewAnnouncement/>}/>*/}
      //
      // {/*        </Routes>*/}
      // {/*</div>*/}
  );
}

export default App;
