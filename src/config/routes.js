export default [
    {
        mode : 'history',
        path : '/login',
        meta : {
            auth : false
        },
        name : 'Login',
        component : resolve => require(['../components/Login'], resolve)
    },
    {
        mode : 'history',
        base : __dirname,
        path : '/',
        meta : {
            auth : true
        },
        components : {
            default : resolve => require(['../components/Interface'], resolve),
            SidebarLeft : resolve => require(['../components/SidebarLeft'], resolve)
        },
        children : [
            {
                mode : 'history',
                path : '/hello',
                meta : {
                    auth : true
                },
                component : resolve => require(['../components/hello'], resolve)
            }
        ]
    },
    {
        mode : 'history',
        path : '*',
        redirect : '/login'
    }
];
