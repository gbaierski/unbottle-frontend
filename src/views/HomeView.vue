<script setup>
</script>

<template>
  <Header />
  <section class="container image medium" id="home-1">
    <div id="home-1-content">
      <div id="home-1-messages">
        <p id="home-1-first-message" class="text-home">Seja bem-vindo!</p>
        <p id="home-1-second-message" class="text-home">Estamos transbordando de alegria por ter você por aqui :D</p>
      </div>
      <div id="home-1-scroll">
        <p id="home-1-third-message" class="text-home">Vamos começar!</p>
        <img src="../assets/images/icons/downArrow.png" alt="DownArrow" id="home-1-first-image">
      </div>
  </div>
  </section>
  <section class="container image big" id="home-2">
    <div id="home-2-content">
      <div id="home-2-content-div-1">
        <p id="home-2-first-message" class="text-home">Temos várias cores!</p>
      </div>
      <div id="home-2-content-div-2">
        <p id="home-2-second-message" class="text-home">Inclusive a sua favorita :)</p>
      </div>
      <div id="home-2-content-div-3">
        <div id="catalog-div">
          <p>Confira o nosso catálogo:</p>
          <RouterLink to="/products"><div id="catalog-button"></div></RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="container image big" id="home-3">
      <div id="home-3-content-div-1">
        <p id="home-3-first-message" class="text-home">Personalize</p>
      </div>
  </section>
  <section class="container small" id="home-4">
    <div id="home-4-container">
      <h2 id="home-4-title">Curiosidade:</h2>
      <p id="home-4-description">
      As primeiras garrafas de que há conhecimento datam de há cerca de 3500 anos, altura em que eram utilizadas pelos egípcios. Nessa época,   eram ainda de barro, pois só por volta do século I a. C. começaram a ser mais populares as de vidro
      </p>
    </div>
  </section>
  <section class="container image medium" id="home-5">
    <p id="home-5-first-message" class="text-home">Vamos limpar o planeta! :) </p>
  </section>
  <section class="container small" id="home-6">
    <div id="footer">
      <div class="footer-column">
        <ul>
          <li>Sobre nós</li>
          <li>SAC</li>
          <li>Nossa história</li>
          <li>Termos de uso</li>
        </ul>
      </div>
      <div class="footer-column">
        <ul>
          <li>Atendimento ao cliente</li>
          <li>Portal de chamados</li>
          <li>CNPJ na receita federal</li>
          <li>Regulamentos sobre compras</li>
        </ul>
      </div>
      <div class="footer-column">
        <ul>
          <li>Home</li>
          <li>Catálogo</li>
          <li>Carrinho</li>
          <li>Ajuda</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>

#home-1 { background-image: url("../assets/images/wallpapers/main.jpg"); }
#home-2 { background-image: url("../assets/images/wallpapers/home.jpg"); }
#home-3 { background-image: url("../assets/images/wallpapers/custom.jpg"); }
#home-5 { background-image: url("../assets/images/wallpapers/save-planet.jpg"); }

li {
  color: gray;
  list-style-type: none;
  transition: all 0.5s;
}
li:hover {
  cursor: pointer;
  color: #add8e6;
  transform: scale(1.1);
}
li:active {
  transform: scale(0.8);
}
/* --- HOME 1 --- */

#home-1-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#home-1-messages {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 50%;
}
#home-1-scroll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
  padding-top: 35%;
}
#home-1-first-message {
  font-size: 120px;
  margin: 0px;
}
#home-1-second-message {
  font-size: 30px;
  margin: 25px;
}
#home-1-third-message {
  font-size: 25px;
}
#home-1-first-image {
  width: 70px;
  margin-top: -20px;
}

/* --- HOME 2 --- */

#home-2-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
#home-2-content-div-1 {
  width: 100%;
  height: 15%;
  padding-top: 15%;
  padding-right: 5%;
  display: flex;
  justify-content: end;
}
#home-2-first-message {
  transform: rotate(40deg);
  font-size: 80px;
  margin: 0px;
}
#home-2-content-div-2 {
  width: 97.5%;
  height: 10%;
  padding-top: 20%;
  display: flex;
}
#home-2-second-message {
  transform: rotate(-35deg);
  font-size: 70px;
  margin: 0px;
}
#home-2-content-div-3 {
  width: 100%;
  height: 15%;
  padding-top: 10%;
  padding-right: 5%;
  display: flex;
  justify-content: end;
}
#catalog-div {
  width: 350px;
  height: 350px;
  font-size: 24px;
  color: gray;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  transform: rotate3d(1, 1, 1, 20deg);
}
#catalog-div:hover {
  transform: rotate3d(1, 1, 1, 0deg);
}
#catalog-button {
  background-image: url("../assets/images/catalog_button.png");
  background-size: cover;
  width: 200px;
  height: 200px;
  filter: grayscale(100%);
  transition: all 0.5s;
}
#catalog-button:hover {
  cursor: pointer;
  filter: grayscale(0%);
  transform: scale(1.1);
}
#catalog-button:active {
  transform: scale(0.8);
}
#home-3-content-div-1 {
  width:40%;
  height: 50%;
  padding-top: 40%;
  display: flex;
}
#home-3-first-message {
  transform: rotate(-90deg);
  font-size: 120px;
  margin: 0px;
}
#home-4-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: gray;
}
#home-4-title {
  font-size: 40px;
}
#home-4-description {
  width: 90%;
  margin-left: 5%;
}
#home-5-first-message {
  font-size: 80px;
  margin-top: 450px;
}
#footer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.big { height: 200vh; }
.medium { height: 110vh }
.small { height: 30vh; }
.image {
  width: 100%;
  background-size: cover;
}
.text-home {
  color: white;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}
.container {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.footer-column {
  font-size: 18px;
}
</style>