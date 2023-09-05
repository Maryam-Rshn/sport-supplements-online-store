<template>
<main>
    <div>
    <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`"> {{ product.title }} </NuxtLink>
    </div>
    </div>
</main>  
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/store/products';
    //fetch the products
    // const uri = 'https://fakestoreapi.com/products'
    // const { data: products } = await useFetch(uri)
    const store = useProductsStore();
    const products = computed(() => {
        return store.products;
    });
    const { fetchProducts } = store;
    // const { products } = storeToRefs(store);

    await fetchProducts();
</script>

<style>
main {
    padding-top: 124px;
}
</style>