<script setup>
</script>
<template>
    <Header />
    <section id="products-container">
        <h1>Confira nossos produtos:</h1>
        <div id="products-list">
            <div class="product">
							<img src="../assets/images/wallpapers/walk.jpg" class="product-image">
							<h2 class="product-name">Nome do modelo</h2>
							<h3 class="product-price">R$ 15,99</h3>
							<RouterLink to="/product"><button class="product-buy">Verificar produto</button></RouterLink>
						</div>
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
.product {
    width: 800px;
    height: 800px;
    margin: 50px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.product-image {
	width: 100%;
	height: 70%;
	object-fit: cover;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
}
.product-name {
	font-size: 30px;
	margin: 10px;
	text-align: center;
	color: gray;
}
.product-buy {
	width: 200px;
	height: 50px;
	font-size: 17px;
	margin: 0px;
	font-weight: bold;
	background-color: #add8e6;
	border: none;
	border-radius: 10px;
	color: white;
	outline: none;
	transition: all 0.5s;
}
.product-buy:hover {
  cursor: pointer;
	color: white;
  transform: scale(1.1);
	background-color: #78b3c7;
}
.product-buy:active {
  transform: scale(0.95);
}
.product-price {
	font-size: 20px;
	color: gray;
}
</style>