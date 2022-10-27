<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import loginApi from "../api/loginApi";
// import { ElNotification } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";

//declare variable
const loginForm = reactive({
  user: null,
  password: null,
});
const baseForm = ref(null);
const rules = reactive({
  user: [
    { required: true, message: "Please input username", trigger: "change" },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "change",
    },
  ],
});
const router = useRouter();

//submit login form
const submit = () => {
  baseForm.value.validate((valid, fields) => {
    console.log(valid);
    if (valid) {
      console.log("submit!");
      login();
    } else {
      console.log("error submit!", fields);
    }
  });
};
//login api
const login = () => {
  loginApi
    .login(loginForm)
    .then((res) => {
      if (typeof localStorage !== "undefined") {
        openFullScreenLoading();
        localStorage.setItem(
          "dataLogin",
          JSON.stringify({ user: loginForm.user, token: res.data })
        );
      }
      loginApi.setAuthorizationHeaders(res.data);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    })
    .catch((err) => {
      openNotification();
    });
};

//login success
const openFullScreenLoading = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 2000);
};
//login error
const openNotification = (err) => {
  ElNotification({
    title: "Error",
    message: "Incorrect username or password",
    type: "error",
    offset: 100,
  });
};
</script>

<!-- -----------HTML----------- -->
<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="blueDeep">
      <img
        src="../../../../public/img/ATS_Logo_White_TransResizw.png"
        class="hidden lg:block"
        alt=""
      />
      <el-card :class="cardClass" shadow="always">
        <template #header>
          <div class="text-center">
            <span class="text-3xl font-semibold uppercase">welcome!</span>
          </div>
        </template>
        <el-form
          label-position="top"
          label-width="100px"
          :model="loginForm"
          size="large"
          :rules="rules"
          ref="baseForm"
          class="mt-5"
        >
          <el-form-item prop="user">
            <el-input v-model="loginForm.user" :prefix-icon="User"> </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              show-password
              @keyup.enter="submit"
            />
          </el-form-item>
        </el-form>
        <el-button type="primary" class="w-full mt-5" @click="submit"
          >Login</el-button
        >
      </el-card>
    </SectionFullScreen>
  </LayoutGuest>
</template>
