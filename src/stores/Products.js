import { defineStore } from "pinia"
import axios from "axios"


export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [],
    }),
    actions: {
        async getAllProducts() {
        try{    
            const {data} = await (await axios.get('api/loja/produtos/'))
            this.products = data
            return Promise.resolve()
        }catch (e){
            console.error(e)
            if (e.response.status === 404) 
                return Promise.resolve(e.response.statusText)
            return Promise.reject("Erro desconhecido ao carregar produtos")    
        }
        },
    }
}) 