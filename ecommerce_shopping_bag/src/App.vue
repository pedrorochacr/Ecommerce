<template>
    <Header>
    </Header>
</template>

<script>
import Header from './components/HeaderComponent/Header.vue'
import Home from './components/HomeComponent/Home.vue';


export default {
    name: "App",
    created(){
        this.$store.dispatch('loadProducts');
    },
    components:{
    Header,
    Home
    
}
}
        
</script>

<style>
  


</style>
