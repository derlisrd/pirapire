
import axios from "axios";
import { env } from "../config/env";

export const ApiLogin = async(body)=>{
    try {
        let res = await axios({
            method: 'post',
            url: `${env.PUBLIC_API_URL}api/auth/local`,
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            data : JSON.stringify(body)
        })

        return {response: true, results: res.data.data};

    } catch (error) {
        return {response:false,message:error.message};
    }
}

export const ApiMovimientos = async()=>{
    try {
        let res = await axios({
            method: 'get',
            url: `${env.PUBLIC_API_URL}api/movimientos`,
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }
        })
        let results = [];
        res.data.data.map((elem)=> results.push({...elem.attributes,id:elem.id}))
        return {response: true, results };
    } catch (error) {
        
    }
}