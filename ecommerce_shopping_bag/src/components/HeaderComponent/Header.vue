<template>
    <div class="navbar navbar-dark bg-dark justify-content-center">               
      <router-link to="/"  style="color:blue; text-decoration: none;">Home</router-link> -
      <a style="color:white" >-</a>
      <router-link to="/Cart"  style="color:white; text-decoration: none;">Carrinho ({{this.productsInBag.length}})</router-link>
    </div>
    <router-view/>
  
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'Header',
  computed: mapState([
    'productsInBag'
  ])

}
</script>

<style>
  .navbar.navbar-dark.bg-dark{
    padding: 0px;
    height: 50px;
  }
  .nav-link{
    padding: 10px;
  }
  
  

</style>