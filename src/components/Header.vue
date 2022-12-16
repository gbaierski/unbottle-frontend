<script>
import {mapState , mapStores , mapActions} from 'pinia'
import {useLoginStore} from '@/stores/Login'
import Swal from 'sweetalert2'


export default {
    computed:{
      ...mapStores(useLoginStore),
      ...mapState(useLoginStore, ['form', 'userLogado' , 'token'])
    },
    methods:{
      ...mapActions(useLoginStore, ['logar']),
      async logarAgora(){
        try{
          await this.logar(this.form.username , this.form.password)
          localStorage.setItem('token' , this.token)
          localStorage.setItem('userLogado' , this.userLogado)
        }catch(e){
          console.log(e)
        }
      },
      displayLogin(){
        Swal.fire({
          title: '<div style="color:gray">Login de usuário</div>',
          html:
            '<form>'+
            '<div style="display:flex; flex-direction: column; justify-content: center; align-itens: center;">' +
              '<input id="username" type="text" placeholder="UserName" style="height: 35px; margin: 20px 0px 20px 0px;">' +
              '<input id="password" type="password" placeholder="Senha" style="height: 35px;">' +
            '</div></form>',
          showCloseButton: false,
          focusConfirm: false,
          confirmButtonText: 'Login',
          preConfirm:() => {
            this.form.username = Swal.getPopup().querySelector('#username').value
            this.form.password = Swal.getPopup().querySelector('#password').value
            this.logarAgora()
          }
        })
      }
    }
    
  }
</script>
<template>
    <header>
        <div id="header-left">
            <RouterLink to="/"><img src="../assets/images/logo_blue.png" alt="Unbottle" id="logo-header"></RouterLink>
            <p id="title-header">Unbottle</p>
        </div>
        <div id="header-mid">
            <input type="text" name="search" id="searchbar-header" placeholder="Digite o que está pensando...">
            <button type="button" id="searchbutton-header"><img src="../assets/images/icons/search.png" alt="Search" class="icon"></button>
        </div>
        <div id="header-right">
            <RouterLink to="/products"><p class="option-menu">Catálogo</p></RouterLink>
            <p id="login-button" class="option-menu" v-on:click="displayLogin">Login</p>
        </div>
        <div id="cart"><img src="../assets/images/cart.png" id="cart-icon"></div>
  </header>
</template>
<style scoped>
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
#logo-header:active {
  transform: scale(0.8);
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
#cart {
  width: 60px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 50%;
  position: absolute;
  margin-top: 240px;
  margin-left: 95%;
  background-color: white;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cart:hover {
  cursor: pointer;
  transform: scale(1.1);
}
#cart:active {
  transform: scale(0.8);
}
#cart-icon {
  width: 30px;
  filter: grayscale(100%);
  transition: all 0.5s;
}
#cart-icon:hover {
  cursor: pointer;
  filter: grayscale(0%);
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
</style>