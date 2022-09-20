export const cartItemCount = (state) => {
    return state.cart.lenght;
}

export const cartTotalPrice = (state) => {
    let total = 0;

    if (state.cart && state.products) {
        let cart = JSON.parse(JSON.stringify(state.cart));
        let products = JSON.parse(JSON.stringify(state.products));
        if (cart && cart.products){
            cart.products.forEach(product => {
                let productDetail = products.find(p => p.id == product.productId);
                total += productDetail.price * product.quantity;
            });
        }
    }
    
    return total;
}

export const getCartProductDetails = (state) => {
    var productDetails = [];
    if (state.cart && state.products) {
        let cart = JSON.parse(JSON.stringify(state.cart));
        let products = JSON.parse(JSON.stringify(state.products));
        if (cart && cart.products){
            cart.products.forEach(product => {
                let productDetail = products.find(p => p.id == product.productId);
                productDetails.push({
                    id: productDetail.id,
                    title: productDetail.title,
                    quantity: product.quantity,
                    price: productDetail.price
                });
            });
        }
    }

    return productDetails;
}