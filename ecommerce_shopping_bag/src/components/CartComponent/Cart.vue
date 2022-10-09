<template>
  <template v-if="productsInBag.length">
    <div class="container text-center">
        <div v-for="(product, index) in productsInBag" :key="index" class="row ">
          <div class="col-4">
            <img class="img-thumbnail" :src="product.image">
          </div>
          <div class="col-4">
            <p class="text">{{product.description}}</p>
          </div>
          <div class="col-4"> 
            <div>
              <button type="button" @click="RemoveItem(product)" class="btn btn-link">Remove Item</button>
            </div>
              
              <div class="d-flex flex-row sm-3 justify-content-center">
                <div class="value-area">
                  <button  :disabled="verifyProduct(product)" @click="product.quantity--" class="btn-price " >-</button>
                </div>
                <div class="value-area" >
                  <p class="text"> {{product.quantity}} </p>
                </div>
                <div class="value-area" >
                  <button type="button" @click="product.quantity++" class="btn-price" >+</button>
                </div>
                <div class="value-area" >
                  <p class="text"> {{product.price.toFixed(2)*product.quantity}} </p>
                </div>
            

              </div>
          </div>
        </div>
        <div class="total">
            <h4> Total :  U${{total()}}</h4> 
        </div>
    </div>
  </template>
  <template v-else>
    <div class="noCart" >
      <h4 >Nenhum Produto adicionado. </h4>
    </div>
      
  </template>
    
  
 

     
</template>

<script>
import { mapState } from 'vuex';
import App from '@/App.vue';


export default {
    name: "Cart",
    computed: mapState([
        "productsInBag"
    ]),
    methods: {
      total(){
          var soma=0.0;
          for(var i=0 ; i< this.productsInBag.length; i++){
            soma+=(this.productsInBag[i].price*this.productsInBag[i].quantity);
          }
          return soma.toFixed(2);
      },
      RemoveItem(product){
          this.$store.dispatch('removeFromBag',product.id);
      },
      verifyProduct(product){
          if(product.quantity==1){
            
            return true;
          }
          return false;
      }
    },
    components: {App}
}
</script>

<style>
    .img-thumbnail{
      width: 100px;
      height: 130px;
      margin-left: 100px;
    }
    .text{
      color: rgb(114, 112, 112);
      margin: 0px;
      padding: 0px;
    }
    
    .btn-price{
        height: 15px;
        width: 15px;
        padding: 0px;
        align-items: center;
        justify-content: center;
        display: inline-flex;
        border-color: rgb(224, 221, 221);
    }
    .value-area{
        padding: 3px;
    }
    .row{
        margin-bottom: 60px;
    }
    .total{
      text-align: end;
      width: 1100px;
      margin-bottom: 50px;

    }
    .noCart{
      display:flex; 
      vertical-align:center;
       margin-top:200px;
       justify-content: center;
    }

</style>