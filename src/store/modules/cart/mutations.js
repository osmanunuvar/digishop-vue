export const ADD_TO_CART = (state, { product, quantity }) => {
    if(state.cart.products != undefined && state.cart.products!= null){
        let productInCart = state.cart.products.find(item => {
            return item.productId == product.id;
        });
        
        if (productInCart) {
            productInCart.quantity += quantity;
            return;
        } else {
            state.cart.products.push({
                productId: product.id,
                quantity
            });
        }
    } else {
        state.cart.products = [{
            productId: product.id,
            quantity
        }];
    }

}

export const SET_CARTS = (state, cartItems) => {
    state.carts = cartItems;
}

export const SET_CART = (state, cart) => {
    state.cart = cart;
}

export const REMOVE_PRODUCT_FROM_CART = (state, productId) => {
    if(state.cart){
        let product = state.cart.products.find(item => {
            return item.productId == productId;
        });
        if(product){
            product.quantity--;
        }
    }
}

export const CLEAR_CART_ITEMS = (state) => {
    state.cart.products = [];
}

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_CART_PRODUCTS = (state, products) => {
    state.products = products;
}