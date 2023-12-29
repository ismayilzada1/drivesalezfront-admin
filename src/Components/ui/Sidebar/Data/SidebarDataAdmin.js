const sidebarDataAdmin = [
    {
        title: 'Home',
        path: '/dashboard-admin',
        icon: 'ri-home-4-line',
    },

    {
        title: 'Administration',
        path: '#administration',
        icon: 'ri-admin-line',
        startsWith: '/admin',
        submenu: [
            {title: 'Moderator', path: '/admin/moderator'},
            // {title: 'Vehicle Make', path: '/admin/vehicle-make'},
            // {title: 'Vehicle Model', path: '/admin/vehicle-model'},
            // {title: 'Vehicle Body Type', path: '/admin/vehicle-bodytype'},
            // {title: 'Vehicle Drivetrain Type', path: '/admin/vehicle-drivetrain-type'},
            // {title: 'Vehicle Gearbox Type', path: '/admin/vehicle-gearbox-type'},
            // {title: 'Vehicle Fuel Type', path: '/admin/vehicle-fuel-type'},
            // {title: 'Vehicle Market Version', path: '/admin/vehicle-market-version'},
            // {title: 'Vehicle Option', path: '/admin/vehicle-option'},
            // {title: 'Vehicle Condition', path: '/admin/vehicle-condition'},
            // {title: 'Vehicle Color', path: '/admin/vehicle-color'},
            {title: 'Subscription', path: '/admin/subscription'},
            {title: 'Country', path: '/admin/country'},
            {title: 'City', path: '/admin/city'},
        ],
    },
    {
        title: 'Vehicle',
        path: '#vehicle',
        icon: 'ri-car-line',
        startsWith: '/vehicle',
        submenu: [
            {title: 'Make', path: '/vehicle/make'},
            {title: 'Model', path: '/vehicle/model'},
            {title: 'Body Type', path: '/vehicle/bodytype'},
            {title: 'Drivetrain Type', path: '/vehicle/drivetrain-type'},
            {title: 'Gearbox Type', path: '/vehicle/gearbox-type'},
            {title: 'Fuel Type', path: '/vehicle/fuel-type'},
            {title: 'Market Version', path: '/vehicle/market-version'},
            {title: 'Option', path: '/vehicle/option'},
            {title: 'Condition', path: '/vehicle/condition'},
            {title: 'Color', path: '/vehicle/color'},
        ],
    },

];

export default sidebarDataAdmin;
