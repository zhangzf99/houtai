<template>
  <div class="index">
    <div class="left" v-if="showMenu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/"
        :router="true"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <el-menu-item index="/">
          <span>首页 </span>
        </el-menu-item>
        <el-menu-item index="/userList">
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/productList">
          <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="/priceList">
          <span>售价管理</span>
        </el-menu-item>
        <el-menu-item index="/purchaseList">
          <span>进货渠道管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

let showMenu = ref(true);
let noMenu = ["/login"];

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    // 如果路径是 /login 则正常执行
    next();
  } else {
    next();
  }
  showMenu.value = !noMenu.includes(to.path);
});

// const;
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleSelect = (index: number, indexPath: string) => {
  console.log(" index, indexPath", index, indexPath);
  switch (index) {
    case 1:
      break;

    default:
      break;
  }
};
</script>
<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
}

.index {
  display: flex;
  height: 100%;
  .el-menu {
    width: 130px;
  }
  .right {
    flex: 1;
  }
}
.el-menu {
  width: 100px;
  height: 100%;
}
</style>
