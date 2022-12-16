<template>
    <section id="product-container">
        <h1>Nome do Modelo</h1>
        <h2>R$ 15,99</h2>
        <img src="../assets/images/wallpapers/walk.jpg" id="product-image">
				<div id="available-colors">
					<div class="color" id="color-1"></div>
					<div class="color" id="color-2"></div>
					<div class="color" id="color-3"></div>
					<div class="color" id="color-4"></div>
					<div class="color" id="color-5"></div>
				</div>
        <div id="quantity-container">
            <button type="button" id="minus-quantity" class="quantity-button">-</button>
            <input type="number" min="1" id="quantity">
            <button type="button" id="plus-quantity" class="quantity-button">+</button>
        </div>
				<button id="add-cart">Adicionar ao carrinho</button>
    </section>
</template>
<style scoped>
#color-1 { background-color: blue; }
#color-2 { background-color: green; }
#color-3 { background-color: red;}
#color-4 { background-color: blueviolet;}
#color-5 { background-color: yellow;}

h1 {
    text-align: center;
    font-size: 35px;
    color: gray;
}
h2 {
    text-align: center;
    font-size: 25px;
    color: gray;
}
#product-container {
    width: 100%;
    padding-bottom: 100px;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#product-image {
    width: 600px;
    height: 600px;
	object-fit: cover;
	border-radius: 30px;
}
#quantity-container {
    width: 150px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
#quantity {
    width: 40px;
    color: gray;
    text-align: center;
}
#available-colors {
	width: 200px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}
#add-cart {
	height: 50px;
	font-size: 17px;
  padding: 0px 30px 0px 30px;
	margin-top: 20px;
	font-weight: bold;
	background-color: #add8e6;
	border: none;
	border-radius: 10px;
	color: white;
	outline: none;
	transition: all 0.5s;
}
#add-cart:hover {
  cursor: pointer;
	color: white;
  transform: scale(1.1);
	background-color: #78b3c7;
}
#add-cart:active {
  transform: scale(0.95);
}
.quantity-button {
	width: 30px;
	height: 30px;
	color: white;
	font-size: 25px;
	font-weight: bold;
	background-color:gray;
	border-radius: 5px;
	border: none;
	outline: none;
	transition: all 0.5s;
}
.quantity-button:hover {
  cursor: pointer;
	color: white;
  transform: scale(1.1);
	background-color: #78b3c7;
}
.quantity-button:active {
  transform: scale(0.8);
}
.color {
	width: 30px;
	height: 30px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	transition: all 0.5s;
}
.color:hover {
	filter: grayscale(40%);
  cursor: pointer;
  transform: scale(1.1);
}
.color:active {
  transform: scale(0.9);
}
</style>