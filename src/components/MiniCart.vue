<template>
  <div>
      <div v-for="item in getCartProductDetails" :key="item.id">
        <li v-if="item.quantity>0">
          <a class="dropdown-item" href="#">
            <strong>{{ item.title }}</strong>
            <br />
            {{ item.quantity }} x ${{ item.price }}
            <a class="badge badge-secondary text-black" href="#" @click.prevent="removeProductFromCart(item.id)">remove</a>
          </a>
        </li>
      </div>
      <li>
        <a class="dropdown-item" href="#">
            <div class="d-flex justify-content-between">
              <span>Total: ${{ cartTotalPrice }}</span>
              <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
            </div>
        </a>
      </li>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {   
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["cartTotalPrice", "getCartProductDetails"])
  },

  methods: {
    // Example 1: mapActions
    ...mapActions("cart", [
      "removeProductFromCart",
      "clearCartItems"
    ])
  }
};
</script>

<style>
</style>