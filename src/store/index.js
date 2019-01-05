import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
   state: { // = data to be manipulated
       products: [],
   },

    getters: { // = computed properties
        productsCount() { //returns length of products array

        }
    },

    actions: { // = methods
        fetchProducts() {
            //make the call to fetch the products
        }
    },

    mutations: { //responsible for setting and updating the state
        setProducts(state, products) {
            //update products
            state.products = products
        },
    }
});