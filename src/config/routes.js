/* eslint-disable */
export default [
    {
        mode : 'history',
        path : '/login',
        meta : {
            auth: true
        },
        name: 'Login',
        component: resolve => require(['../components/Login'], resolve)
    },
    {
        mode : 'history',
        base : __dirname,
        path : '/',
        meta : {
            auth: false
        },
        components: {
            default: resolve => require(['../components/Interface'], resolve),
            SidebarLeft: resolve => require(['../components/SidebarLeft'], resolve)
        },
        children: [
            {
                mode : 'history',
                path : '/hello',
                meta : {
                    auth: false
                },
                component: resolve => require(['../components/hello'], resolve)
            }
        ]
    },
    {
        mode : 'history',
        path : '*',
        redirect: '/login'
    }
]