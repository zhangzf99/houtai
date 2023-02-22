<template>
  <div class="user-list">
    <div class="options">
      <el-input v-model="searchName" placeholder="请输入姓名" size="small" />
      <el-select
        v-model="value"
        class="m-2"
        placeholder="请选择性别"
        size="small"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="tables">
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="80%"
        size="small"
      >
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="sex" label="性别" width="60" />
        <el-table-column prop="city" label="居住地" width="120" />
        <el-table-column prop="salaryRange" label="薪资" width="100" />
        <el-table-column prop="workTime" label="工作年限" width="80" />
        <el-table-column prop="age" label="年纪" width="60" />
        <el-table-column prop="degree" label="学历" width="60" />
        <el-table-column prop="status" label="用户状态" width="100" />
        <el-table-column
          prop="companyDescription"
          label="公司描述"
          width="300"
        />
        <el-table-column prop="jobDescription" label="职位描述" width="300" />
        <!-- <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { reactive, ref, onMounted } from "vue";

const value = ref("");
const searchName = ref("");

const options = [
  {
    value: 0,
    label: "男",
  },
  {
    value: 1,
    label: "女",
  },
];

const handleClick = () => {
  console.log("click");
};

let tableData = reactive([]);

const getUserList = () => {
  axios
    .get("/api/userList")
    .then((response) => {
      const { data } = response;
      tableData = data.data;
      console.log("tableData", tableData);
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  getUserList();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
