<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
        </div>
        <div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ cartItemCount }} Cart
            </button>
            <ul class="dropdown-menu dropdown-menu-center">
              <div @click="$event.stopPropagation()">
                <mini-cart />
              </div>
            </ul>
          </div>       
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MiniCart from "./MiniCart";
export default {
  components: { MiniCart },
  computed: {
    ...mapGetters("cart", ["cartItemCount"])
  },
  mounted() {
    this.getCart();
    this.getProducts();
  },
  methods: {
    ...mapActions("cart", [
      "getCart",
      "getProducts"
    ])
  }
};
</script>

<style>
  .dropdown-menu-center {
  left: 50% !important;
  right: auto !important;
  text-align: center !important;
  transform: translate(-50%, 0) !important;
}
</style>