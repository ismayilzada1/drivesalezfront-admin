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
            {title: 'Moderator', path: '/admin-moderator'},
            {title: 'Vehicle Make', path: '/admin-vehicle-make'},
            {title: 'Vehicle Model', path: '/admin-vehicle-model'},
            {title: 'Vehicle Body Type', path: '/admin-vehicle-bodytype'},
            {title: 'Vehicle Drivetrain Type', path: '/admin-vehicle-drivetrain-type'},
            {title: 'Vehicle Gearbox Type', path: '/admin-vehicle-gearbox-type'},
            {title: 'Vehicle Fuel Type', path: '/admin-vehicle-fuel-type'},
            {title: 'Vehicle Market Version', path: '/admin-vehicle-market-version'},
            {title: 'Vehicle Option', path: '/admin-vehicle-option'},
            {title: 'Vehicle Condition', path: '/admin-vehicle-condition'},
            {title: 'Vehicle Color', path: '/admin-vehicle-color'},
            {title: 'Subscription', path: '/admin-subscription'},
            {title: 'Country', path: '/admin-country'},
            {title: 'City', path: '/admin-city'},
        ],
    },

];

export default sidebarDataAdmin;
