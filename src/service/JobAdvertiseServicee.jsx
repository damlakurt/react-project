import axios from "axios"


export default class JobAdvertiseServicee {
    getJobAdvertises(){
        return axios.get("http://localhost:8080/api/jobadvertises/getall")
    }
  
       
    add(){
        return axios.post("http://localhost:8080/api/jobadvertises/add")
    }
    
}
