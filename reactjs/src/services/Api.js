import Http from "./Http";

export const getProducts = (config)=>{
    return Http.get("/products", config);
}
export const getProduct = (id, config)=>{
    return Http.get(`/products/${id}`, config)
}
export const getCategories = (config)=>{
    return Http.get("/categories", config);
}