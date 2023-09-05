import { defineStore } from 'pinia';
export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            const { data } = await useFetch('https://fakestoreapi.com/products');
            if (data.value) {
                this.products = data.value;
            }
        },
    },
});