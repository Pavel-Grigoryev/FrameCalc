import axios from 'axios'
import {ConfigType, MaterialType} from "./api-types";

const instance = axios.create ( {
    baseURL: 'https://my-json-server.typicode.com/Pavel-Grigoryev/calcServ/',

})

export const calcAPI = {
   fetchMaterial () {
       return instance.get<MaterialType[]>('material')
   },

    fetchConfig () {
        return instance.get<ConfigType[]>('config')
    }
}

