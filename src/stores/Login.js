import {defineStore} from 'pinia'
import axios from 'axios'



export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        userLogado: {},
        token: '',
        form: {
            username: '',
            password: '',
     
        }
    }),
    actions: {
        async logar(username, password){
            try{
                const {data} = await axios.post('login/', this.form)
                this.userLogado = data.user
                this.token = data.token
                return Promise.resolve()
            }catch(e){
                console.error(e)
                if (e.response.status === 404) 
                    return Promise.resolve(e.response.statusText)
                return Promise.reject("Erro desconhecido ao logar")    
            }
        }
    },
})