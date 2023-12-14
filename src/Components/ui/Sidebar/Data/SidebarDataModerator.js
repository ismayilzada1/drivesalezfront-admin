const sidebarDataModerator = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: 'ri-home-4-line',
    },

    {
        title: 'Moderator',
        path: '#moderator',
        icon: 'ri-admin-line',
        startsWith: '/moderator',
        submenu: [
            {title: 'Announcement Authority', path: '/moderator-announcement-authority'},
        ],
    },


];

export default sidebarDataModerator;
