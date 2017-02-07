<template>
    <div id="app">
      <router-view></router-view>
      <router-view name="SidebarLeft"></router-view>
      <ul>
        <li>
          <router-link to="/">/</router-link>
        </li>
        <li>
          <router-link to="/other">/other</router-link>
        </li>
      </ul>
    </div>
</template>
<script>
    /* eslint-disable */
    import Interface from './components/Interface'
    import SidebarLeft from './components/SidebarLeft'

    export default {
        name: 'app',
        components: {
            Interface,
            SidebarLeft
        }
    }
</script>
<style>
</style>
