export let MENU_ITEM = [

    {
        path: 'user',
        title: 'User',
        icon: 'user',
    },
    {
        path: 'others',
        title: 'Others',
        icon: 'sitemap',
        children: [
            {
                path: 'other1',
                title: 'Other1',
            },
            {
                path: 'other2',
                title: 'Other2'
            }
        ]
    },
];
