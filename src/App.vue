<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
export default {
  name: 'App',
  components:{
    "navbar":Navbar
    }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
}
</style>
