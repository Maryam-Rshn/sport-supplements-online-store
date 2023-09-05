<template>
<main>
    <div class="test">
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    
    </div>
</main> 
</template>

<script setup>
    const { id } =  useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id
    
    //fetch the product
    const { data: product } = await useFetch(uri)
</script>

<style lang="scss">
@import "~/assets/scss/global.scss";



</style>