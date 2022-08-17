export const Data = {
    menus: [{
        header: true,
        name: 'Dashboard'
    },
    {
        name: 'Dashboard',
        icon: 'fas fa-fire',
        url: "/"
    },
    {
        header: true,
        name: 'Client Side Pages'
    },
    {
        dropdown: true,
        name: 'Pages',
        icon: 'fas fa-columns',
        children: [{
            name: 'About us',
            url: '/clientPages/aboutus/show'
        }, {
            name: 'Banner',
            url: '/clientPages/banner/show'
        }, {
            name: 'Blog',
            url: '/clientPages/blog/show'
        }, {
            name: 'Category',
            url: '/clientPages/category/show'
        }, {
            name: 'Client',
            url: '/clientPages/client/show'
        }, {
            name: 'Contact us',
            url: '/clientPages/contactus/show'
        }, {
            name: 'Gallery',
            url: '/clientPages/gallery/show'
        }, {
            name: 'Privacy & Policy',
            url: '/clientPages/privacy/show'
        }, {
            name: 'Review',
            url: '/clientPages/review/show'
        }, {
            name: 'Sub Category',
            url: '/clientPages/subcategory/show'
        }, {
            name: 'Team',
            url: '/clientPages/team/show'
        }, {
            name: 'Terms & Condition',
            url: '/clientPages/terms/show'
        }, {
            name: 'Video',
            url: '/clientPages/video/show'
        }]
    },
    {
        header: true,
        name: 'Admin Setting'
    },
    {
        dropdown: true,
        name: 'Admin Account',
        icon: 'far fa-user',
        children: [{
            name: 'Profile',
            url: '/feature/profile'
        }, {
            name: 'Settings',
            url: '/feature/settings'
        }]
    }]
};