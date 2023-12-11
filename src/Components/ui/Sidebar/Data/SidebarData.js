const sidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: 'ri-home-4-line',
    },
    {
        title: 'Add',
        path: '#add',
        icon: 'ri-add-line',
        startsWith:'/add',
        submenu: [
            { title: 'Vehicle Make', path: '/add-vehicle-make' },
            { title: 'Vehicle Model', path: '/add-vehicle-model' },
            { title: 'Vehicle Body Type', path: '/add-vehicle-bodytype' },
            { title: 'Vehicle Drivetrain Type', path: '/add-vehicle-drivetrain-type' },
            { title: 'Vehicle Gearbox Type', path: '/add-vehicle-gearbox-type' },
            { title: 'Vehicle Fuel Type', path: '/add-vehicle-fuel-type' },
            { title: 'Vehicle Market Version', path: '/add-vehicle-market-version' },
            { title: 'Vehicle Option', path: '/add-vehicle-option' },
            { title: 'Vehicle Condition', path: '/add-vehicle-condition' },
            { title: 'Vehicle Manufacture Year', path: '/add-vehicle-manufacture-year' },
            { title: 'Vehicle Color', path: '/add-vehicle-color' },
            { title: 'Country', path: '/add-country' },
            { title: 'City', path: '/add-city' },
            { title: 'Subscription', path: '/add-subscription' },
            { title: 'Currency', path: '/add-currency' },

        ],
    },
    {
        title: 'Remove',
        path: '#remove',
        icon: 'ri-subtract-line',
        startsWith:'/remove',
        submenu: [
            { title: 'Vehicle Make', path: '/remove-vehicle-make' },
            { title: 'Vehicle Model', path: '/remove-vehicle-model' },
            { title: 'Vehicle Body Type', path: '/remove-vehicle-bodytype' },
            { title: 'Vehicle Drivetrain Type', path: '/remove-vehicle-drivetrain-type' },
            { title: 'Vehicle Gearbox Type', path: '/remove-vehicle-gearbox-type' },
            { title: 'Vehicle Fuel Type', path: '/remove-vehicle-fuel-type' },
            { title: 'Vehicle Market Version', path: '/remove-vehicle-market-version' },
            { title: 'Vehicle Option', path: '/remove-vehicle-option' },
            { title: 'Vehicle Condition', path: '/remove-vehicle-condition' },
            { title: 'Vehicle Manufacture Year', path: '/remove-vehicle-manufacture-year' },
            { title: 'Vehicle Color', path: '/remove-vehicle-color' },
            { title: 'Country', path: '/remove-country' },
            { title: 'City', path: '/remove-city' },
            { title: 'Subscription', path: '/remove-subscription' },
            { title: 'Currency', path: '/remove-currency' },
        ],

    },
    {
        title: 'Update',
        path: '#update',
        icon: 'ri-edit-line',
        startsWith:'/update',
        submenu: [
            { title: 'Vehicle Make', path: '/update-vehicle-make' },
            { title: 'Vehicle Model', path: '/update-vehicle-model' },
            { title: 'Vehicle Body Type', path: '/update-vehicle-bodytype' },
            { title: 'Vehicle Drivetrain Type', path: '/update-vehicle-drivetrain-type' },
            { title: 'Vehicle Gearbox Type', path: '/update-vehicle-gearbox-type' },
            { title: 'Vehicle Fuel Type', path: '/update-vehicle-fuel-type' },
            { title: 'Vehicle Market Version', path: '/update-vehicle-market-version' },
            { title: 'Vehicle Option', path: '/update-vehicle-option' },
            { title: 'Vehicle Condition', path: '/update-vehicle-condition' },
            { title: 'Vehicle Manufacture Year', path: '/update-vehicle-manufacture-year' },
            { title: 'Vehicle Color', path: '/update-vehicle-color' },
            { title: 'Country', path: '/update-country' },
            { title: 'City', path: '/update-city' },
            { title: 'Subscription', path: '/update-subscription' },
            { title: 'Currency', path: '/update-currency' },
        ],
    },
];

export default sidebarData;