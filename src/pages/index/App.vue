<template>
  <img alt="logo" src="@/assets/logo.png" class = "logo">
  <h1>欢迎光临您的私人影院</h1>
  <Login class = "login"/>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Login from '@/components/index/Login.vue';

  @Options({
    components: {
      Login
    },
  })
  export default class extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    font-family: arial;
    background-image: url(../../assets/cover.jpeg);
    background-size: 100% 100vh;/*100vh eq 100% height*/
    background-position-x:center;
    min-height: 610px;
}
.logo {
    width: 200px;
    height: 200px;
    margin-top: 100px;
}
.login {
  margin-top: 5vh;
  padding-left: 20%;
  padding-right: 20%;
}

h1 {
  color: aliceblue;
  font-size: 50px;
}
</style>
