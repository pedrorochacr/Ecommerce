<template>
    <div class="container text-center">
        <div class="row">
            <div class="col" v-for="(product, index) in this.products" :key="index">
                <p>
                    <img class="img" :src='product.image'>
                </p>
                <p class="description">{{product.title}}</p>
                <p class="price"> {{product.price.toFixed(2)}} </p>
                <button   v-if="!isInBag(product)"    type="button" @click="addToBag(product)" class="btn btn-primary">Adicionar ao Carrinho</button>
                <button  v-else  type="button" @click="this.$store.dispatch('removeFromBag', product.id)"  class="btn btn-link">Remover do Carrinho</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Home',
  data(){
    return {
        
    }
  },
  computed:  mapState([
            'products', 'productsInBag'
        ]),
  methods: {
    addToBag(product){
        product.quantity =1;
        this.$store.dispatch('addToBag', product);
    },
    isInBag(product){
        return this.productsInBag.find(item => item.id == product.id);
    }
  }
  
}
</script>

<style>
    .container{
        margin-top: 100px;
    }
    .row{
        justify-content: space-between;
    }
    .img{
        width: 100px;
        height: 130px;
    }
    .description{
        color:gray;
    }
    .price{
        font-size: 20px;
        font-weight: bold;
    }
    .col{
        padding: 30px;
        margin:90px;
        margin-top: 0px;
        margin-bottom: 30px;
    }
    

</style>