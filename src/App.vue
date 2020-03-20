<template>
  <div id="app">
    <!-- <navbar></navbar> -->
    <!-- <router-view></router-view> -->
    <runtime/>
  </div>
</template>

<script>
// import Navbar from './components/NavBar'
import Runtime from "./components/Runtime"
export default {
  name: 'App',
  components:{
    "runtime":Runtime
    // "navbar":Navbar
    }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
}
</style>
