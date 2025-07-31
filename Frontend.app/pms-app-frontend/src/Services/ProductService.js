import axios from "axios";
const REST_BASE_URI ='http://localhost:8081/pms';

export const listProducts=()=>{
    return axios.get(REST_BASE_URI);
}

export const createProduct=(product)=>{
    return axios.post(REST_BASE_URI,product);
}

export const getProductById=(proId)=>{
    return axios.get(REST_BASE_URI+'/'+proId);
}

export const updateProduct=(proId,product)=>{
    return axios.put(REST_BASE_URI+'/'+proId,product);
}

export const deleteProduct=(proId)=>{
    return axios.delete(REST_BASE_URI+'/'+proId);
}