import axios from "axios"

export default class SystemUserServicee{
    getSystemUsers(){
        return axios.get("http://localhost:8080/api/systemusers/getall")
    }
    
}
