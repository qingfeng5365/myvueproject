import axios from "../utils/request"
import path from "./path"

const api = {
    // getChengpin(){
    //     return axios.get(path.chengpin)
    // },
    // postChengpin(data){
    //     return axios.post(path.chengpin,data)
    // },
    login(data) {
        return axios.post(path.login, data)
    },
    getAdmin(page) {
        return axios.get(path.admin + '?page=' + page)
    },
    postAdmin(data) {
        return axios.post(path.admin, data)
    },
    deleteAdmin(id) {
        return axios.delete(path.admin + id + '/')
    },
    putAdmin(id, data) {
        return axios.put(path.admin + id + '/', data)
    },
    searchAdmin(id) {
        return axios.get(path.admin + id + '/')
    }
}

export default api;