<script setup>
</script>
<template>
    <Header />
    <section id="products-container">
        <h1>Confira nossos produtos:</h1>
        <div id="products-list">
            <div id="product"></div>
            <div id="product"></div>
            <div id="product"></div>
            <div id="product"></div>
            <div id="product"></div>
            <div id="product"></div>
            <div id="product"></div>
        </div>
    </section>
</template>
<style scoped>
h1 {
    text-align: center;
    font-size: 35px;
    color: gray;
}
#products-container {
    width: 100%;
    padding-top: 150px;
}
#products-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#product {
    width: 800px;
    height: 800px;
    margin: 50px;
    background-color: green;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>