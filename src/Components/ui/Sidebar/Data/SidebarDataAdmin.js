const sidebarDataAdmin = [
    {
        title: 'Home',
        path: '/',
        icon: 'ri-home-4-line',
    },


    {
        title: 'Administration',
        path: '#administration',
        icon: 'ri-admin-line',
        startsWith: '/admin',
        submenu: [
            {title: 'Moderator', path: '/admin/moderator'},
            {title: 'Subscription', path: '/admin/subscription'},
            {title: 'Country', path: '/admin/country'},
            {title: 'City', path: '/admin/city'},
            {title: 'User', path: '/admin/user'},
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
