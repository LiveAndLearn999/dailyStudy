<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
import Vue from "vue";
// import store from "@/store";

export default {
  name: 'App',
  mounted() {
      this.height = document.documentElement.clientHeight || document.body.clientHeight;
      this.width = document.documentElement.clientWidth || document.body.clientWidth;
      window.onresize = () => {
          this.height = document.documentElement.clientHeight || document.body.clientHeight;
          this.width = document.documentElement.clientWidth || document.body.clientWidth;
      }
  },
}
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
</style>
