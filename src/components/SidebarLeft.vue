<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        @select="handleSelect"
        theme="dark">
        <el-submenu index="1">
          <template slot="title">系統訊息區</template>
          <el-menu-item-group title="訊息">
            <el-menu-item index="/">最新公告</el-menu-item>
            <el-menu-item index="/">版本紀錄</el-menu-item>
            <el-menu-item index="/hello">Hello</el-menu-item>
          </el-menu-item-group>
          <!--<el-menu-item-group title="分组一">
            <el-menu-item index="1-1">最新訊息</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>-->
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
    name : 'SidebarLeft',
    methods : {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
            // console.log(this.$router);
            this.$router.push(key);
        }
    }
};
</script>