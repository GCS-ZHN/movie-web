<template>
    <Resource />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Resource from '@/components/home/Resource.vue';

@Options({
  components: {
    Resource,
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
  a:visited {
      color: #2c3e50;
  }
  a:hover {
      color: #2c3e50;
  }
  a:active {
      color: #2c3e50;
  }
  a:link{
      color: #2c3e50;
  }
  body {
      font-family: arial;
      /* background-image: url(../../assets/cover.jpeg); */
      background-size: 100% 100vh;/*100vh eq 100% height*/
      background-position-x:center;
      min-height: 610px;
  }
  .el-table th.gutter {
      display: table-cell !important;
  }
</style>