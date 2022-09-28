<template>
 <div class="d-flex align-items-stretch flex-wrap">
     <div class="input-group mt-3">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" v-model="searchQuery" v-on:keypress="resultQuery" />
          <label class="form-label" for="form1">Search</label>
        </div>
      </div>
      <product-card v-for="product in resultQuery" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import ProductCard from "./ProductCard";
  export default {
    data() {
        return {
          searchQuery: null
        };
    },
    components: {
      ProductCard
    },
    computed: {
      resultQuery() {
        if(this.searchQuery && this.searchQuery.length > 1){
          return this.$store.state.product.products.filter(x=> x.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        } else {
          return this.$store.state.product.products;
        }
      },
      ...mapState("product", ["products"])
    },
    mounted() {
        this.getProducts();
    },
    methods: {
      ...mapActions("product", ["getProducts", "getFilteredProducts"])
    }
  };
  </script>
  
  <style>
  </style>