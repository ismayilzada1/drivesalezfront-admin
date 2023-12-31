import AdminLayout from "./Pages/Admin/AdminLayout";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import City from "./Pages/Admin/Administration/City";
import AuthLayout from "./Pages/Auth/AuthLayout";
import SignIn from "./Pages/Auth/SignIn";
import PrivateRoute from "./Components/PrivateRoute";
import Moderator from "./Pages/Admin/Administration/Moderator";
import Country from "./Pages/Admin/Administration/Country";
import VehicleMake from "./Pages/Admin/Administration/VehicleMake";
import VehicleModel from "./Pages/Admin/Administration/VehicleModel";
import VehicleBodyType from "./Pages/Admin/Administration/VehicleBodyType";
import VehicleDrivetrainType from "./Pages/Admin/Administration/VehicleDrivetrainType";
import VehicleGearboxType from "./Pages/Admin/Administration/VehicleGearboxType";
import VehicleFuelType from "./Pages/Admin/Administration/VehicleFuelType";
import VehicleMarketVersion from "./Pages/Admin/Administration/VehicleMarketVersion";
import VehicleOption from "./Pages/Admin/Administration/VehicleOption";
import VehicleCondition from "./Pages/Admin/Administration/VehicleCondition";
import VehicleColor from "./Pages/Admin/Administration/VehicleColor";
import Subscription from "./Pages/Admin/Administration/Subscription";
import HomeModerator from "./Pages/Moderator/HomeModerator";
import AnnouncementAuthority from "./Pages/Moderator/Moderation/AnnouncementAuthority";
import EditProfile from "./Pages/Moderator/EditProfile";
import ReviewAnnouncement from "./Pages/Moderator/ReviewAnnouncement";

const routes = [
    {
        path: '/',
        element: <SignIn/>,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: 'city',
                element: <City />,
                auth: true,
            },
            {
                path: 'country',
                element: <Country />,
                auth: true,
            },
            {
                path: 'moderator',
                element: <Moderator />,
                auth: true,
            },
            {
                path: 'vehicle-make',
                element: <VehicleMake />,
                auth: true,
            },
            {
                path: 'vehicle-model',
                element: <VehicleModel />,
                auth: true,
            },
            {
                path: 'vehicle-bodytype',
                element: <VehicleBodyType />,
                auth: true,
            },
            {
                path: 'vehicle-drivetrain-type',
                element: <VehicleDrivetrainType />,
                auth: true,
            },
            {
                path: 'vehicle-gearbox-type',
                element: <VehicleGearboxType />,
                auth: true,
            },
            {
                path: 'vehicle-fuel-type',
                element: <VehicleFuelType />,
                auth: true,
            },
            {
                path: 'vehicle-market-version',
                element: <VehicleMarketVersion />,
                auth: true,
            },
            {
                path: 'vehicle-option',
                element: <VehicleOption />,
                auth: true,
            },
            {
                path: 'vehicle-condition',
                element: <VehicleCondition />,
                auth: true,
            },
            {
                path: 'vehicle-color',
                element: <VehicleColor />,
                auth: true,
            },
            {
                path: 'subscription',
                element: <Subscription />,
                auth: true,
            },
        ],
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard-admin',
                element: <HomeAdmin/>,
                auth:true
            },
            {
                path: 'dashboard-moderator',
                element: <HomeModerator/>,
                auth:true
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-in',
                element: <SignIn />,
            },
        ],
    },
    {
        path: "/vehicle",
        element: <AdminLayout />,
        children: [
            {
                path: 'make',
                element: <VehicleMake />,
                auth: true,
            },
            {
                path: 'model',
                element: <VehicleModel />,
                auth: true,
            },
            {
                path: 'bodytype',
                element: <VehicleBodyType />,
                auth: true,
            },
            {
                path: 'drivetrain-type',
                element: <VehicleDrivetrainType />,
                auth: true,
            },
            {
                path: 'gearbox-type',
                element: <VehicleGearboxType />,
                auth: true,
            },
            {
                path: 'fuel-type',
                element: <VehicleFuelType />,
                auth: true,
            },
            {
                path: 'market-version',
                element: <VehicleMarketVersion />,
                auth: true,
            },
            {
                path: 'option',
                element: <VehicleOption />,
                auth: true,
            },
            {
                path: 'condition',
                element: <VehicleCondition />,
                auth: true,
            },
            {
                path: 'color',
                element: <VehicleColor />,
                auth: true,
            },
        ],
    },
    {
        path: "/moderator",
        element: <AdminLayout />,
        children: [
            {
                path: 'announcement-authority',
                element: <AnnouncementAuthority />,
                auth: true,
            },
            {
                path: 'edit-profile',
                element: <EditProfile />,
                auth: true,
            },
            {
                path: 'review-announcement/:id',
                element: <ReviewAnnouncement />,
                auth: true,
            },
        ],
    },

];

const authMap = (routes) => routes.map((route) => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
        route.children = authMap(route.children);
    }
    return route;
});

export default authMap(routes);