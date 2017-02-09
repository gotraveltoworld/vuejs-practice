<template>
    <div id="app">
      <router-view name="Login"></router-view>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="8" :lg="6">
          <router-view name="SidebarLeft"></router-view>
        </el-col>
        <el-col :xs="16" :sm="18" :md="16" :lg="18">
          <router-view class="grid-content bg-purple-light"></router-view>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name : 'App',
    created () {
        this.userStatus;
    },
    computed : {
        userStatus () {
            let status = false;
            if (status) {
                this.$router.push('login');
            } else {
                this.$router.push('/');
            }
        }
    }
};
</script>
<style scoped>
  #app {
    height: 100%;
  }
  .base-height {
    min-height: 500px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
