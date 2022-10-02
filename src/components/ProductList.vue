<template>
 <div class="d-flex align-items-stretch flex-wrap">
     <div class="input-group mt-3 justify-content-between">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" v-model="searchQuery" v-on:keypress="resultQuery" />
          <label class="form-label" for="form1">Search</label>
        </div>
        <div>
        <select v-model="category" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option value="" selected>Select Category</option>
            <option v-for="category in getCategoryList" :key="category">{{category}}</option>
        </select>
        </div>
        <div>
          <select v-model="sortDirection" required v-on:change="resultQuery" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option value=null selected>Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div class="row">
      <product-card v-for="product in resultQuery" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import ProductCard from "./ProductCard";
  export default {
    data() {
        return {         
          searchQuery: null,
          sortDirection: null,
          category:''
        };
    },
    components: {
      ProductCard
    },
    computed: {
      getCategoryList(){
        return this.$store.state.product.categories;
      },
      resultQuery() {
        var list = this.$store.state.product.products;
        if(this.searchQuery && this.searchQuery.length > 1){
          list = list.filter(x=> x.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
        if (this.sortDirection){
          if(this.sortDirection=="asc"){
          list = list.sort((p1,p2)=> p1.price - p2.price); 
          }
          else if (this.sortDirection=="desc"){
          list = list.sort((p1,p2)=> p2.price - p1.price); 
          }
        }
        if(this.category){
          list = list.filter(product => product.category.toLowerCase() == this.category.toLowerCase())
        }
         
        return list;
      },     
      ...mapState("product", ["products"])
    },
    mounted() {
        this.getProducts();
        this.getCategories();
    },
    methods: {
     ...mapActions("product", ["getProducts", "getFilteredProducts", "getCategories"])
    }
  };
  </script>
  
  <style>
  </style>