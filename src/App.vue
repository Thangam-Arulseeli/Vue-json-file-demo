<template>
  <nav>
    <router-link to="/"> Job Details </router-link> |
    <router-link to="/jobdetailcomp"> Jobs Using Components  </router-link> |
    <router-link to="/customer"> Customer Details Using Axios </router-link>
  </nav>
  <router-view/>
  <!-- <Job></Job> -->
</template>

<script>
  //import Job from './components/Job.vue';

  //export default{
    //components: { Job }
  //}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
