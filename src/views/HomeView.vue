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
.big { height: 200vh; }
.medium { height: 110vh }
.small { height: 60vh; }
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
</style>