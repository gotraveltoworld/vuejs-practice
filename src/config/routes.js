/* eslint-disable */
export default [
    {
        mode : 'history',
        base : __dirname,
        path : '/',
        meta : {
            auth: true
        },
        components: {
            default: resolve => require(['../components/Interface'], resolve),
            SidebarLeft: resolve => require(['../components/SidebarLeft'], resolve)
        }
    }
]