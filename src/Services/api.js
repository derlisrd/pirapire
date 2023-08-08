
import axios from "axios";
import { env } from "../config/env";

export const ApiLogin = async(body)=>{
    try {
        let res = await axios({
            method: 'post',
            url: 'https://api.ruizdiaz.dev/api/auth/local',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            data : JSON.stringify(body)
        })

        return res.data;

    } catch (error) {
        return error;
    }
}