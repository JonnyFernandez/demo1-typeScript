import axios from "axios";

const httpClient = {
    get: async(url: string)=>{
        const {data} = await axios.get(url)
        return data
    },
        
    
    post: async(url: string)=>{},
    put: async(url: string)=>{},
    delete: async(url: string)=>{},
}


export {httpClient}