<script setup>
</script>

<template>
  <header>
    <div id="header-left">
      <img src="../assets/images/logo_blue.png" alt="Unbottle" id="logo-header">
      <p id="title-header">Unbottle</p>
    </div>
    <div id="header-mid">
      <input type="text" name="search" id="searchbar-header" placeholder="Digite o que está pensando...">
      <button type="button" id="searchbutton-header"><img src="../assets/images/icons/search.png" alt="Search" class="icon"></button>
    </div>
    <div id="header-right">
      <a href="/" class="option-menu">Catálogo</a>
      <p id="login-button" class="option-menu">Login</p>
    </div>
  </header>
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
        <div id="products-list">
          <p>Confira o nosso catálogo:</p>
          <button>A</button>
        </div>
      </div>
    </div>
  </section>
  <section class="container image big" id="home-3">
  </section>
  <section class="container small" id="home-4">
  </section>
  <section class="container image medium" id="home-5">
  </section>
  <section class="container small" id="home-6">
  </section>
</template>
<style scoped>

#home-1 { background-image: url("../assets/images/wallpapers/main.jpg"); }
#home-2 { background-image: url("../assets/images/wallpapers/home.jpg"); }
#home-3 { background-image: url("../assets/images/wallpapers/custom.jpg"); }
#home-5 { background-image: url("../assets/images/wallpapers/save-planet.jpg"); }

header {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
}

a {
  text-decoration: none;
  color: gray
}

/* --- HEADER --- */

#logo-header {
  width: 100px;
  height: 100px;
  filter: grayscale(100%);
  transition: all 0.5s;
}
#logo-header:hover {
  cursor: pointer;
  filter: grayscale(0%);
  transform: scale(1.1);
}
#title-header {
  font-size: 40px;
  color: rgb(185, 185, 185);
  font-weight: bold;
  text-align: center;
}
#header-left {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
#header-mid {
  width: 60%;
  display: flex;
  align-items: center;
}
#header-right {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: gray;
  text-decoration: none;
}
#searchbar-header {
  width: 80%;
  height: 30px;
  font-size: 18px;
  color: gray;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-bottom: solid 2px rgb(185, 185, 185);
  border-left: none;
  outline: none;
  transition: all 0.5s;
}
#searchbar-header:focus {
  border-bottom: solid 4px #add8e6;
}
#searchbutton-header {
  width: 50px;
  height: 50px;
  background-color: rgb(185, 185, 185);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  margin-left: 25px;
  transition: all 0.5s;
}
#searchbutton-header:hover {
  cursor: pointer;
  background-color: #add8e6;
  transform: scale(1.1);
}
#searchbutton-header:active {
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
.big { height: 200vh; }
.medium { height: 110vh }
.small { height: 60vh; }
.image {
  width: 100%;
  background-size: cover;
}
.icon {
  width: 100%;
}
.option-menu {
  transition: all 0.5s;
}
.option-menu:hover {
  cursor: pointer;
  color: #add8e6;
  transform: scale(1.05);
}
.text-home {
  color: white;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.8);
}
.container {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>