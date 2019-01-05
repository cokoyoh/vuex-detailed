import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'

Vue.use(Vuex);

export default new Vuex.Store({
   state: { // = data to be manipulated
       products: [],
   },

    getters: { // = computed properties
         availableProducts(state, getters){
            return state.products.filter(product => product.inventory > 0)
         }
    },

    actions: { // = methods
        fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit('setProducts', products);
                    resolve()
                })
            });
        }
    },

    mutations: { //responsible for setting and updating the state
        setProducts(state, products) {
            //update products
            state.products = products
        },
    }
});