export const ADD_TO_CART = (state, { product, quantity }) => {

    let productInCart = state.cart.products.find(item => {
        return item.productId == product.id;
    });

    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.products.push({
        productId: product.id,
        quantity
    })
}

export const SET_CARTS = (state, cartItems) => {
    state.carts = cartItems;
}

export const SET_CART = (state, cart) => {
    state.cart = cart;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
}

export const CLEAR_CART_ITEMS = (state) => {
    state.cart = [];
}

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_CART_PRODUCTS = (state, products) => {
    state.products = products;
}