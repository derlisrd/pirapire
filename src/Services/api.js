
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

        return {response: true, data: res.data};

    } catch (error) {
        return {response:false,message:error.message};
    }
}