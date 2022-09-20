import Home from './pages/HomePage.vue'
import Product from './pages/ProductPage.vue'
export default[
    {
    path : '/',
    component : Home,
    name: 'home'
    },
    {
        path:'/product/:id',
        component: Product,
        name: 'product',
        props:true
    }
]